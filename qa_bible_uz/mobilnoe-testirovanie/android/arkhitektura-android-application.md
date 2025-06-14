---
title: "Архитектура Android Application"
---

# Архитектура Android Application

Приложения для Android можно писать на языках Kotlin, Java и C ++. Инструменты Android SDK компилируют ваш код вместе с любыми файлами данных и ресурсов в **APK** или **Android App Bundle**.

**Android package**, который представляет собой архивный файл с расширением **.apk**, содержит содержимое приложения Android, которое требуется во время выполнения, и это файл, который устройства под управлением Android используют для установки приложения.

Пакет [**Android App Bundle**](https://telegra.ph/Android-App-Bundle-12-11), который представляет собой архивный файл с расширением **.aab**, содержит содержимое проекта приложения Android, включая некоторые дополнительные метаданные, которые не требуются во время выполнения. AAB - это формат для публикации в маркете, который нельзя установить на устройствах Android, он откладывает создание APK и подписание на более поздний этап. Например, при распространении вашего приложения через Google Play серверы Google Play генерируют оптимизированные APK-файлы, которые содержат только ресурсы и код, которые требуются конкретному устройству, запрашивающему установку приложения.

Каждое приложение Android находится в собственной изолированной программной среде безопасности или песочнице (security **sandbox**), защищенной следующими функциями безопасности Android:

* Операционная система Android - это многопользовательская система Linux, в которой каждое приложение является отдельным пользователем. По умолчанию система назначает каждому приложению уникальный идентификатор пользователя Linux (идентификатор используется только системой и неизвестен приложению);
* Система устанавливает разрешения для всех файлов в приложении, так что только идентификатор пользователя, назначенный этому приложению, может получить к ним доступ;
* У каждого процесса есть собственная виртуальная машина (VM), поэтому код приложения работает изолированно от других приложений;
* По умолчанию каждое приложение работает в собственном процессе Linux. Система Android запускает процесс, когда необходимо выполнить любой из компонентов приложения, а затем завершает процесс, когда он больше не нужен или когда системе необходимо восстановить память для других приложений.

В системе Android реализован принцип наименьших привилегий. То есть каждое приложение по умолчанию имеет доступ только к тем компонентам, которые необходимы ему для работы, и не более того. Это создает очень безопасную среду, в которой приложение не может получить доступ к частям системы, для которых у него нет разрешения. Однако есть способы для приложения обмениваться данными с другими приложениями и для приложения для доступа к системным службам:

* Можно организовать два приложения для использования одного и того же идентификатора пользователя Linux, и в этом случае они смогут получить доступ к файлам друг друга. Для экономии системных ресурсов приложения с одним и тем же идентификатором пользователя также могут работать в одном процессе Linux и совместно использовать одну и ту же виртуальную машину;
* Приложения также должны быть подписаны тем же сертификатом. Приложение может запрашивать разрешение на доступ к данным устройства, таким как местоположение устройства, камера и соединение Bluetooth. Пользователь должен явно предоставить эти разрешения. Дополнительные сведения см. В разделе «[Работа с разрешениями системы](https://developer.android.google.cn/guide/topics/permissions/overview)».

**Компоненты приложения**

Компоненты приложения являются основными строительными блоками Android приложения. Каждый компонент - это точка входа, через которую система или пользователь могут войти в ваше приложение. Некоторые компоненты зависят от других. Есть четыре разных типа компонентов приложения:

* Activities;
* Services;
* Broadcast receivers;
* Content providers.

Каждый тип служит определенной цели и имеет отдельный жизненный цикл, который определяет, как компонент создается и уничтожается.

Начнем разбираться с таких компонентов, как активити и фрагменты, и рассмотрим кейсы, когда система может прекратить их работу.

**Активити и фрагменты (activities and fragments)**

С точки зрения тестировщика, активити можно воспринимать как экран, на котором отображаются элементы. Приложение состоит, как минимум, из одной активити. По сути, активити - это контейнер для UI-компонентов. Если активити - это контейнер, то фрагменты - это UI-компоненты активити. Фрагмент тоже, в свою очередь, является контейнером для UI-компонентов. Есть классная аналогия с браузером (спасибо разработчикам!) для более наглядного представления о том, как между собой связаны активити и фрагменты. Представим, что у нас открыто несколько окон одного браузера. Это несколько **активити** внутри одного приложения.

![https://hsto.org/r/w1560/files/ff8/2e0/026/ff82e00263a949f4bfcbc4d3393b797b.png](https://hsto.org/r/w1560/files/ff8/2e0/026/ff82e00263a949f4bfcbc4d3393b797b.png)

Внутри окна может быть открыто несколько вкладок. Это **фрагменты** внутри активити.

![https://hsto.org/r/w1560/files/354/25a/041/35425a041bdc4969b48c23f2f4371d5a.png](https://hsto.org/r/w1560/files/354/25a/041/35425a041bdc4969b48c23f2f4371d5a.png)

Фрагменты работают чуть быстрее, чем активити. Но на современных устройствах разница практически неощутима. В зависимости от того, каким образом решается задача, разработчик может написать приложение только на активити или на активити с использованием фрагментов.

Операционная система при управлении жизненным циклом приложения работает именно с активити приложения. Поэтому пока нас больше всего интересует жизненный цикл активити.

Пользователи запускают большое количество приложений, а значит, создается много процессов с активити. Каждый запущенный процесс съедает оперативную память устройства, и ее становится все меньше. Но Андроид тщательно следит за процессами и в случае нехватки ресурсов для выполнения более приоритетной работы закрывает те, которые менее приоритетны. Давайте разберемся, в какой момент приложение «уязвимо» к таким решениям системы и как это может повлиять на его работоспособность.

**Жизненный цикл активити**

После запуска и до завершения активити всегда пребывает в одном из статусов. В тестировании нам это полезно для понимания потенциально проблемных кейсов и в контексте тестирования прерываний (Interrupt testing):

* Перед завершением Activity, будут вызваны соответствующие методы жизненного цикла;
* Метод onPause() должен остановить все "слушания" и обновления интерфейса. Метод onStop() должен сохранять данные приложения. И наконец, метод onDestroy() высвободит любые ресурсы, выделенные для Activity;
* Когда пользователь переключается обратно на приложение, которое было прервано системным событием, вызывается метод onResume(). На основе сохраненных данных, могут перерегистрироваться «слушатели» и переключиться обновления интерфейса.

![https://hsto.org/r/w1560/files/ab4/57a/d45/ab457ad457e543fd9aee442107f5475b.png](https://hsto.org/r/w1560/files/ab4/57a/d45/ab457ad457e543fd9aee442107f5475b.png)

Жизненный цикл активити представлен следующими состояниями:

![https://hsto.org/r/w1560/files/487/788/406/487788406b3c4161a10fbe3a59def09c.png](https://hsto.org/r/w1560/files/487/788/406/487788406b3c4161a10fbe3a59def09c.png)

Теперь приведу примеры. Они покрывают основные кейсы, с которыми мы чаще всего сталкиваемся при тестировании.

**Первый запуск приложения**

![https://hsto.org/r/w1560/files/fe3/dee/9c8/fe3dee9c816b451e82a81537b3d15369.png](https://hsto.org/r/w1560/files/fe3/dee/9c8/fe3dee9c816b451e82a81537b3d15369.png)

При первом запуске приложения создается и загружается главная активити в приложении.

При переходе в состояние «Resumed» активити доступна для взаимодействия с пользователем. Все замечательно, проблем нет.

**Переход с первого экрана на второй**

![https://hsto.org/r/w1560/files/5bb/677/6d5/5bb6776d5a73448faf6386b97e78b47e.png](https://hsto.org/r/w1560/files/5bb/677/6d5/5bb6776d5a73448faf6386b97e78b47e.png)

* Шаг 1: При переходе с первого экрана на второй активити первого экрана сначала встает на паузу. В этот момент могут выполняться такие действия, как сохранение введенных данных и остановка ресурсоемких операций (например, проигрывание анимаций). Это происходит довольно быстро и неощутимо для пользователя.
* Шаг 2, 3, 4: Запускается активити второго экрана.
* Шаг 5: Останавливается активити первого экрана. Также в случае, если Андроид в этот момент пытается освободить память, активити первого экрана дополнительно может перейти в состояние «Destroyed» (то есть уничтожиться).

Чтобы лучше понять, что из себя представляет состояние «Paused» давайте представим такую ситуацию: экран, поверх которого появился алерт. Мы не можем с ним взаимодействовать, но в то же время мы его видим.

**Возврат со второго экрана на первый**

![https://hsto.org/r/w1560/files/cd0/c2f/73b/cd0c2f73b476475898a7f98438780ff0.png](https://hsto.org/r/w1560/files/cd0/c2f/73b/cd0c2f73b476475898a7f98438780ff0.png)

При возврате со второго экрана на первый происходит почти то же самое, только первая активити не создается заново. Она подгружается из памяти (если, конечно, не была уничтожена системой). Вторая активити уничтожается после того, как была остановлена, так как она убирается из стека переходов.

**Сворачивание и выход из приложения**

![https://hsto.org/r/w1560/files/5dd/874/71b/5dd87471b5894987bee507f11e70dbeb.png](https://hsto.org/r/w1560/files/5dd/874/71b/5dd87471b5894987bee507f11e70dbeb.png)

При сворачивании приложения (например, по кнопке Home) активити останавливается.

Важно, чтобы при разворачивании приложения активити корректно восстановилась и данные сохранились.

На всех экранах стараемся проверять сворачивание-разворачивание приложения. Этот кейс особенно актуален на формах ввода. Согласитесь, будет обидно, если текст письма, который вы так старательно набирали, сотрется при банальном сворачивании приложения. Или форма, состоящая из множества полей, снова станет пустой.

При выходе из приложения (по аппаратной кнопке назад) помимо шага 1 и шага 2, выполняется шаг 3. Активити уничтожается и при следующем запуске приложения создается заново.

**Поворот экрана**

![https://hsto.org/r/w1560/files/3f4/fc4/91c/3f4fc491c78848d3964f72d703392f89.png](https://hsto.org/r/w1560/files/3f4/fc4/91c/3f4fc491c78848d3964f72d703392f89.png)

Один из значимых случаев, который плодит баги - это поворот экрана. Оказывается, при повороте экрана активити проходит полный жизненный цикл. А именно уничтожается и снова создается. И так при каждом повороте. Поэтому, опять же, проверяем поворот на каждом экране.

Поддержка горизонтальной ориентации экрана, с одной стороны, позволяет проверить корректность работы всех этапов активити, с другой стороны, значительно увеличивает количество тест-кейсов.

**Многооконный режим**

Начиная с Андроида 7 (с Андроида 6 как экспериментальная фича) стал доступен многооконный режим. Пользователи получили возможность видеть сразу несколько приложений на экране одновременно. При этом только то приложение, с которым пользователь сейчас взаимодействует, находится в состоянии «Resumed». Остальные устанавливаются в состояние «Paused».

**Don’t keep activities (Не сохранять действия)**

Надо ли проверять полный жизненный цикл активити, если приложение не поддерживает поворот экрана? Конечно, надо.

Если оперативная память давно не чистилась, ее не очень много, и в параллели с вашим приложением было запущено какое-нибудь ресурсоемкое приложение (например, Pokemon Go), то шанс, что Андроид решит «прибить» процесс с вашей активити при переключении на другое приложение, возрастает.

Как проверить корректность работы приложения вручную, если оно не поддерживает поворот экрана? Довольно просто: установить галку «don’t keep activities» в настройках разработчика и перезапустить приложение.

В этом случае эмулируется ситуация, когда памяти не хватает и Андроид уничтожает все активити, с которыми пользователь сейчас не взаимодействует, оставляя только ту, что сейчас активна.

Это не значит, что галка должна всегда быть включенной при тестировании, но периодически смотреть приложение с опцией «don’t keep activities» полезно, чтобы пользователи со слабыми устройствами не сильно страдали и не ругали нас.

**Broadcast receiver (широковещательный приемник)**

Для обработки внешних событий используется компонент Broadcast receiver. Приложение может подписываться на события системы и других приложений. Андроид доставляет событие приложению-подписчику, даже если оно не запущено, и таким образом, может «мотивировать» его запуск.

При тестировании нам важно понимать, какие ожидаются события и как они обрабатываются.

Например, в коде заранее было прописано, что приложение ждет сообщение от конкретного номера и имеет доступ к смс. Когда пользователю придет секретный код, то Broadcast receiver получит уведомление и в поле подтверждения операции будет введен смс-код.

**Сервисы (Services)**

Еще одна очень важная вещь в Андроиде - это сервисы. Они нужны для выполнения фоновых задач. При этом приложение не обязательно должно быть открыто пользователем в этот момент.

У сервисов есть несколько режимов работы. Пользователь может видеть, что сервис запущен, а может и совершенно не замечать его.

Если вы услышали волшебное слово «сервис» от разработчика, не поленитесь, выясните, какую логику работы заложили в него:

* Что делает сервис и в каком виде проявляет себя?
* Как ведет себя сервис, когда приложение не активно?
* Восстанавливается ли сервис после прерывания (входящего звонка, перезапуска телефона)?

Тут основной совет при проектировании тестовых сценариев - это обдумать пользовательские кейсы, когда работа сервиса может прерваться или начать конфликтовать с работой другого сервиса. Самые коварные ситуации: когда работа сервиса начинается, а пользователь этого не ждал. В этом случае полезно выяснить, что может спровоцировать запуск сервиса.

Самые простые и безобидные - это **сервисы без дополнительных параметров**. При ручном тестировании мы чаще всего не замечаем их работу. Например, если нужно отправить данные в систему аналитики, то для этой задачи нередко используют именно такие сервисы.

Еще один тип сервисов это **sticky-сервисы**. Если работа такого сервиса внезапно завершится, то спустя какое-то время sticky-сервис «возродится». Примечательно, что с каждым разом период до «возрождения» увеличивается, чтобы он меньше мешал работе системы. В некоторых приложениях примером sticky-сервиса может быть скачивание файлов на устройство. Возможно, вы замечали, если в «шторке» сбросить закачку, то спустя какое-то время она может восстановиться и продолжить скачивать файлы.

Самые важные сервисы - те, работу которых пользователь «ощущает» на себе и она для него важна. Они называются **foreground-сервисы**, и у них обязательно есть нотификация в «шторке», которую пользователь не может закрыть. Система их будет уничтожать в последнюю очередь, так как приоритет у таких сервисов самый высокий.

Например, музыкальный плеер. Если свернуть приложение и даже закрыть его, то плеер продолжает играть, пока пользователь не поставит его на паузу или не закроет. Или пока другое приложение или система не приостановит его работу. В частности, для музыкального плеера вариантов может быть много: входящий звонок, другое музыкальное приложение, звуковая нотификация.

Раз речь зашла о музыкальных плеерах, то стоит отметить такое понятие, как аудиофокус.

**Аудиофокус**

Представим, что при запуске нескольких аудиоплееров, они все будут играть одновременно. Вряд ли это кому-то понравится. Тут на помощь приходит аудиофокус, который запрашивается приложением у системы. В случае **обычного запроса аудиофокуса** система как бы оповещает все запущенные приложения: «Сейчас другое приложение будет говорить, помолчите, пожалуйста». Забавно, но это происходит именно в формате просьбы.

Если ваше приложение не очень вежливое, то оно спокойно может проигнорировать запрос. Наша задача - проверять эти ситуации.

Компромиссный режим запроса аудиофокуса называется «**временным перехватом аудиофокуса**». Это значит, что вашему приложению вернется аудиофокус, когда прервавшее его подаст системе сигнал, что аудиофокус освобожден.

Еще один вид запроса аудиофокуса - это «**duck**». Он просит остальные приложения не молчать, а уменьшить громкость наполовину пока воспроизводится звук запросившего фокус приложения. Например, такой запрос используется при проигрывании звука нотификации о новом сообщении в мессенджере.

Тестирование аудиофокуса очень важно, т.к. здесь все завязано на совести разработчиков и система не принимает особого участия в разрешении конфликтов. Ну а если баг все-таки вылезет к пользователям, то не сомневайтесь, они быстро вам об этом сообщат.

На этом, пожалуй, пока можно закончить. Конечно, есть еще много деталей и нет необходимости учитывать абсолютно все при тестировании. По моему опыту, тестировщику необходимо понимать из чего состоит приложение и как оно работает. Это дает возможность анализировать непростые баги, которые возникают на пересечении бизнес-логики приложения и особенностей работы операционной системы. Особенно если дело касается Андроида.

**Content providers**

Поставщик контента управляет общим набором данных приложения, которые вы можете хранить в файловой системе, в базе данных SQLite, в Интернете или в любом другом постоянном хранилище, к которому ваше приложение может получить доступ. Через поставщика содержимого другие приложения могут запрашивать или изменять данные, если поставщик содержимого позволяет это. Например, система Android предоставляет поставщика контента, который управляет контактной информацией пользователя. Таким образом, любое приложение с соответствующими разрешениями может запрашивать поставщика содержимого, например ContactsContract.Data, для чтения и записи информации о конкретном человеке. Заманчиво думать о провайдере контента как о абстракции базы данных, потому что для этого распространенного случая в них встроено множество API и встроенная поддержка. Однако с точки зрения системного дизайна у них другое основное назначение. Для системы поставщик контента - это точка входа в приложение для публикации именованных элементов данных, идентифицированных схемой URI. Таким образом, приложение может решить, как оно хочет сопоставить данные, которые оно содержит, с пространством имен URI, передавая эти URI другим объектам, которые, в свою очередь, могут использовать их для доступа к данным.

Уникальный аспект системы Android заключается в том, что любое приложение может запускать компонент другого приложения. Например, если вы хотите, чтобы пользователь сделал снимок с помощью камеры устройства, вероятно, есть другое приложение, которое делает это, и ваше приложение может использовать его вместо разработки действия для самостоятельной съемки фотографии. Вам не нужно включать или даже ссылаться на код из приложения камеры. Вместо этого вы можете просто запустить действие в приложении камеры, которое делает снимок. По завершении фотография даже возвращается в ваше приложение, чтобы вы могли ее использовать. Пользователю кажется, что камера на самом деле является частью вашего приложения.

Когда система запускает компонент, она запускает процесс для этого приложения, если оно еще не запущено, и создает экземпляры классов, необходимых для компонента. Например, если ваше приложение запускает действие в приложении камеры, которое делает снимок, это действие выполняется в процессе, принадлежащем приложению камеры, а не в процессе вашего приложения. Следовательно, в отличие от приложений в большинстве других систем, приложения Android не имеют единой точки входа (нет функции main ()). Поскольку система запускает каждое приложение в отдельном процессе с правами доступа к файлам, которые ограничивают доступ к другим приложениям, ваше приложение не может напрямую активировать компонент из другого приложения. Однако система Android может. Чтобы активировать компонент в другом приложении, доставьте системе сообщение, в котором указывается ваше намерение (**intent**) запустить конкретный компонент. Затем система активирует компонент за вас.

**Активация компонентов (Activating components)**

Три из четырех типов компонентов - activities, services, and broadcast receivers - активируются асинхронным сообщением, называемым **intent**. Намерения связывают отдельные компоненты друг с другом во время выполнения. Вы можете думать о них как о мессенджерах, которые запрашивают действие у других компонентов, независимо от того, принадлежит ли компонент вашему приложению или другому. Намерение создается с помощью объекта Intent, который определяет сообщение для активации либо определенного компонента (explicit intent), либо определенного типа компонента (implicit intent).

**Файл манифеста (The manifest file)**

Прежде чем система Android сможет запустить компонент приложения, система должна знать, что компонент существует, прочитав файл манифеста приложения AndroidManifest.xml. Ваше приложение должно объявить все свои компоненты в этом файле, который должен находиться в корне каталога проекта приложения. Манифест выполняет ряд функций в дополнение к объявлению компонентов приложения, например:

* Определяет любые разрешения (user permissions), которые требуются приложению, такие как доступ в Интернет или доступ для чтения к контактам пользователя;
* Объявляет минимальный уровень API, необходимый для приложения, в зависимости от того, какие API использует приложение;
* Объявляет аппаратные и программные функции, используемые или требуемые приложением, такие как камера, службы Bluetooth или сенсорный экран;
* Объявляет библиотеки API, с которыми необходимо связать приложение (кроме API-интерфейсов Android framework), например библиотеку Google Maps.

**Ресурсы приложения (App resources)**

Приложение Android состоит из большего, чем просто кода - для него требуются ресурсы, отдельные от исходного кода, такие как изображения, аудиофайлы и все, что связано с визуальным представлением приложения. Например, вы можете определять анимацию, меню, стили, цвета и макет пользовательских интерфейсов действий с помощью файлов XML. Использование ресурсов приложения позволяет легко обновлять различные характеристики вашего приложения без изменения кода. Предоставление наборов альтернативных ресурсов позволяет оптимизировать приложение для различных конфигураций устройств, например для разных языков и размеров экрана.

Для каждого ресурса, который вы включаете в свой проект Android, инструменты сборки SDK определяют уникальный целочисленный идентификатор, который вы можете использовать для ссылки на ресурс из кода вашего приложения или из других ресурсов, определенных в XML. Например, если ваше приложение содержит файл изображения с именем logo.png (сохраненный в каталоге res / drawable /), инструменты SDK генерируют идентификатор ресурса с именем R.drawable.logo. Этот идентификатор сопоставляется с целым числом для конкретного приложения, которое вы можете использовать для ссылки на изображение и вставки его в свой пользовательский интерфейс.

Одним из наиболее важных аспектов предоставления ресурсов отдельно от исходного кода является возможность предоставления альтернативных ресурсов для различных конфигураций устройств. Например, определяя строки пользовательского интерфейса в XML, вы можете перевести строки на другие языки и сохранить эти строки в отдельных файлах. Затем Android применяет соответствующие языковые строки к вашему пользовательскому интерфейсу на основе квалификатора языка, который вы добавляете к имени каталога ресурсов (например, res / values-fr / для французских строковых значений) и языковых настроек пользователя.

Android поддерживает множество различных квалификаторов для ваших альтернативных ресурсов. Квалификатор - это короткая строка, которую вы включаете в имя своих каталогов ресурсов, чтобы определить конфигурацию устройства, для которой следует использовать эти ресурсы. Например, вы должны создать разные макеты для своих занятий в зависимости от ориентации и размера экрана устройства. Когда экран устройства находится в портретной ориентации (высокий), вы можете захотеть, чтобы макет с кнопками был вертикальным, но когда экран находится в альбомной ориентации (широкий), кнопки можно выровнять по горизонтали. Чтобы изменить макет в зависимости от ориентации, вы можете определить два разных макета и применить соответствующий квалификатор к имени каталога каждого макета. Затем система автоматически применяет соответствующий макет в зависимости от текущей ориентации устройства.

Дополнительные сведения о различных типах ресурсов, которые вы можете включить в свое приложение, и о том, как создавать альтернативные ресурсы для различных конфигураций устройств, см. В разделе «[Предоставление ресурсов](https://developer.android.google.cn/guide/topics/resources/providing-resources)». Чтобы узнать больше о передовых методах разработки и разработке надежных приложений производственного качества, см. [Руководство по архитектуре приложений](https://developer.android.google.cn/jetpack/guide).

Источники:

* [Android Developers - Docs - Guides - Application Fundamentals](https://developer.android.google.cn/guide/components/fundamentals?hl=en)
* [Системный подход к тестированию Android-приложений, или О чем молчали разработчики](https://habr.com/ru/company/mobileup/blog/327416/)

Доп. материал:

* [Android Developers - Docs - Activity](https://developer.android.com/reference/android/app/Activity)
* YaTalks 2021. Mobile: [Современная архитектура android приложений](https://www.youtube.com/watch?v=0AQlKbskhkM\&t=18671s) + [презентация](https://disk.yandex.ru/i/ecrzwwYKTlbkgA)
* [Видео: Урок 23. Жизненный цикл активити (Activity Lifecycle)](https://www.youtube.com/watch?v=vv9w9\_l17z4)
