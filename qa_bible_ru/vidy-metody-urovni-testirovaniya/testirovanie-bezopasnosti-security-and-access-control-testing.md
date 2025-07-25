---
title: "Тестирование безопасности (Security and Access Control testing)"
---

# Тестирование безопасности (Security and Access Control testing)

Это тип тестирования ПО, который выявляет уязвимости, угрозы и риски. Целью тестов безопасности является выявление всех возможных лазеек и слабых мест в ПО, которые могут привести к потере информации, доходов, репутации компании, сотрудников или клиентов. Общая стратегия безопасности основывается на трех основных принципах:

* Конфиденциальность - сокрытие определенных ресурсов или информации;
* Целостность - ресурс может быть изменен только в соответствии с полномочиями пользователя;
* Доступность - ресурсы должны быть доступны только авторизованному пользователю, внутреннему объекту или устройству;

Тестирование безопасности обычно выполняет отдельный специалист по безопасности. В ходе тестирования безопасности испытатель играет роль взломщика. Ему разрешено все:

* попытки узнать пароль с помощью внешних средств;
* атака системы с помощью специальных утилит, анализирующих защиты;
* перегрузка системы (в надежде, что она откажется обслуживать других клиентов);
* целенаправленное введение ошибок в надежде проникнуть в систему в ходе восстановления;
* просмотр несекретных данных в надежде найти ключ для входа в систему;

При неограниченном времени и ресурсах хорошее тестирование безопасности взломает любую систему. Задача проектировщика системы - сделать цену проникновения более высокой, чем цена получаемой в результате информации.

**Типы тестирования безопасности**:

* Сканирование уязвимостей/оценка защищенности (Vulnerability Scanning) выполняется с помощью автоматизированного ПО для сканирования системы на наличие известных сигнатур уязвимостей;
* Сканирование безопасности (Security Scanning) включает в себя выявление слабых сторон сети и системы, а затем предоставляет решения для снижения этих рисков. Это сканирование может быть выполнено как вручную, так и автоматизированно;
* Тестирование на проникновение (Penetration testing) имитирует атаку злоумышленника. Это тестирование включает анализ конкретной системы для проверки потенциальных уязвимостей при попытке внешнего взлома;
* Оценка рисков (Risk Assessment) включает анализ рисков безопасности, наблюдаемых в организации. Риски классифицируются как Низкие, Средние и Высокие. Это тестирование рекомендует меры по снижению риска;
* Аудит безопасности (Security Auditing) - внутренняя проверка приложений и операционных систем на наличие уязвимостей. Аудит также может быть выполнен путем построчной проверки кода;
* Этический взлом (Ethical hacking) - совершается с целью выявления проблем безопасности в системе. Это делается White Hat хакерами - это специалисты по безопасности, которые использует свои навыки законным способом для помощи в выявлении уязвимостей системы, в отличии от Black Hat (преступников);
* Оценка состояния (Posture Assessment) объединяет сканирование безопасности, этический взлом и оценки рисков, чтобы показать общее состояние безопасности организации;

| SDLC фаза               | Security Processes                                                                                              |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| Requirements            | Анализ безопасности для требований и проверка случаев злоупотребления / неправильного использования             |
| Design                  | Анализ рисков безопасности для проектирования. Разработка плана тестирования с учетом тестирования безопасности |
| Coding and Unit testing | Статическое и динамическое тестирование безопасности и тестирование белого ящика                                |
| Integration testing     | Тестирование черного ящика                                                                                      |
| System testing          | Тестирование черного ящика и сканирование уязвимостей                                                           |
| Implementation          | Тестирование на проникновение, сканирование уязвимостей                                                         |
| Support                 | Анализ воздействия патчей                                                                                       |

Тестирование безопасности может выполняться методом любого ящика, а также Tiger Box: этот взлом обычно выполняется на ноутбуке с набором операционных систем и инструментов для взлома. Это тестирование помогает тестерам на проникновение и тестерам безопасности проводить оценку уязвимостей и атаки.

**Методы тестирования безопасности**:

**Доступ к приложению**. Будь то настольное приложение или веб-сайт, безопасность доступа обеспечивается функцией «Управление ролями и правами». Часто это делается неявно при описании функциональности, Например, в системе управления больницей администратор меньше всего беспокоится о лабораторных исследованиях, поскольку его работа состоит в том, чтобы просто зарегистрировать пациентов и назначить их встречи с врачами. Таким образом, все меню, формы и экраны, относящиеся к лабораторным тестам, не будут доступны для роли «регистратора». Следовательно, правильная реализация ролей и прав гарантирует безопасность доступа.

Как протестировать доступ к приложению: Чтобы это проверить, необходимо выполнить тщательное тестирование всех ролей и прав. Тестировщик должен создать несколько учетных записей пользователей с разными, а также с несколькими ролями. Затем он должен использовать приложение с помощью этих учетных записей и убедиться, что каждая роль имеет доступ только к своим собственным модулям, экранам, формам и меню. Если тестировщик обнаруживает конфликт, он должен с полной уверенностью зарегистрировать проблему безопасности. Некоторые из тестов аутентификации включают в себя проверку правил качества пароля, проверку входа в систему по умолчанию, проверку восстановления пароля, проверку проверки подлинности, проверку функциональности выхода, проверку смены пароля, проверку контрольного вопроса / ответа и т. д. Аналогичным образом, некоторые из тестов авторизации включают в себя тест на обход пути, тест на отсутствие авторизации, тест на проблемы горизонтального контроля доступа и т. д.

**Защита данных**. Есть три аспекта безопасности данных. Во-первых, пользователь может просматривать или использовать только те данные, которые он должен использовать. Это также обеспечивается ролями и правами. Например, TSR (представитель по телефону) компании может просматривать данные об имеющихся запасах, но не может видеть, сколько сырья было закуплено для производства. Итак, этот аспект тестирования безопасности уже объяснен выше. Второй аспект защиты данных связан с тем, [как эти данные хранятся в БД](https://www.softwaretestinghelp.com/database-security-testing/). Все конфиденциальные данные должны быть зашифрованы, чтобы сделать их безопасными. Шифрование должно быть надежным, особенно для конфиденциальных данных, таких как пароли учетных записей пользователей, номера кредитных карт или другой критически важной для бизнеса информации. Третий и последний аспект является продолжением этого второго аспекта. При передаче конфиденциальных или важных для бизнеса данных необходимо принять надлежащие меры безопасности. Независимо от того, перемещаются ли эти данные между разными модулями одного и того же приложения или передаются в разные приложения, они должны быть зашифрованы для обеспечения безопасности.

Как протестировать защиту данных: Тестировщик должен запросить в базе данных «пароли» учетной записи пользователя, информацию о выставлении счетов клиентов, другие важные для бизнеса и конфиденциальные данные и убедиться, что все такие данные хранятся в зашифрованной форме. Точно так же он должен убедиться, что данные передаются между различными формами или экранами только после надлежащего шифрования. Более того, тестировщик должен убедиться, что зашифрованные данные должным образом расшифрованы в месте назначения. Особое внимание следует уделить различным действиям «отправить». Тестировщик должен убедиться, что информация, передаваемая между клиентом и сервером, не отображается в адресной строке веб-браузера в понятном формате. Если какая-либо из этих проверок завершится неудачно, значит, в приложении определенно есть баги безопасности. Тестировщик также должен проверить правильность использования соления (salting - добавление дополнительного секретного значения к конечному вводу, например пароля, что делает его более надежным и трудным для взлома). Небезопасная случайность также должна быть проверена, поскольку это своего рода уязвимость. Другой способ проверить защиту данных - проверить использование слабого алгоритма. Например, поскольку HTTP - это протокол открытого текста, если конфиденциальные данные, такие как учетные данные пользователя, передаются через HTTP, то это угроза безопасности приложения. Вместо HTTP конфиденциальные данные следует передавать через HTTPS (защищенный через SSL, туннель TLS). Однако HTTPS увеличивает поверхность атаки, поэтому необходимо проверить правильность конфигурации сервера и гарантировать действительность сертификата;

**Атака грубой силы** (Brute-Force Attack, атака полным перебором) в основном выполняется некоторыми программными инструментами. Идея состоит в том, что, используя действительный идентификатор пользователя, программное обеспечение пытается подобрать связанный пароль, пытаясь войти в систему снова и снова. Простым примером защиты от такой атаки является приостановка учетной записи на короткий период времени, как это делают все почтовые приложения, такие как Yahoo, Gmail и Hotmail. Если определенное количество последовательных попыток (в основном 3) не позволяют войти в систему, эта учетная запись блокируется на некоторое время (от 30 минут до 24 часов).

Как протестировать атаку грубой силы: Тестировщик должен убедиться, что какой-то механизм блокировки учетной записи доступен и работает правильно. Он должен попытаться войти в систему с недопустимыми идентификаторами пользователя и паролями, в качестве альтернативы, чтобы убедиться, что программное обеспечение блокирует учетные записи, если предпринимаются постоянные попытки входа с недопустимыми учетными данными. Если приложение делает это, оно защищено от атаки методом перебора. В противном случае тестировщик должен сообщить об этой уязвимости системы безопасности. Тестирование перебором также можно разделить на две части - тестирование черного ящика и тестирование серого ящика. При тестировании «черного ящика» метод аутентификации, используемый приложением, обнаруживается и тестируется. Тестирование серого ящика основано на частичном знании пароля и данных учетной записи, а также на атаках компромисса памяти ([подробнее](https://wiki.owasp.org/index.php/Testing\_for\_Brute\_Force\_\(OWASP-AT-004\)#Gray\_Box\_testing\_and\_example)).

Вышеупомянутые три аспекта безопасности следует учитывать как для веб-приложений, так и для настольных приложений, в то время как **следующие моменты относятся только к веб-приложениям**.

[**SQL-инъекции**](https://owasp.org/www-community/attacks/SQL\_Injection#Alternative\_Expression\_of\_.27or\_1\_.3D\_1.27) **и** [**XSS**](https://cheatsheetseries.owasp.org/cheatsheets/Cross\_Site\_Scripting\_Prevention\_Cheat\_Sheet.html) (межсайтовый скриптинг). С концептуальной точки зрения, темы обеих попыток взлома схожи, поэтому они обсуждаются вместе. В этом подходе вредоносный сценарий используется хакерами для манипулирования веб-сайтом. Есть несколько способов застраховаться от таких попыток. Для всех полей ввода веб-сайта длины полей должны быть достаточно малыми, чтобы ограничить ввод любого скрипта. Например, поле «Фамилия» должно иметь длину поля 30 вместо 255. Могут быть некоторые поля ввода, в которых требуется ввод больших данных, для таких полей необходимо выполнить правильную проверку ввода до сохранения этих данных в приложении. Более того, в таких полях должны быть запрещены любые HTML-теги или ввод тегов скрипта. Чтобы спровоцировать XSS-атаки, приложение должно отклонять перенаправления скриптов от неизвестных или ненадежных приложений.

Как тестировать SQL-инъекцию и XSS: Тестер должен убедиться, что максимальная длина всех полей ввода определена и реализована. Он также должен гарантировать, что заданная длина полей ввода не соответствует вводу сценария, а также вводу тега. Оба они могут быть легко протестированы. Например, если 20 - максимальная длина, указанная для поля «Имя», а входная строка «\<p> thequickbrownfoxjumpsoverthelazydog» можно проверить оба этих ограничения. Тестировщик также должен убедиться, что приложение не поддерживает методы анонимного доступа. Если какая-либо из этих уязвимостей существует, приложение находится в опасности. В основном, тестирование SQL-инъекции может быть выполнено следующими пятью способами:

* Методы обнаружения;
* Стандартные техники SQL-инъекций;
* [Отпечаток базы данных](https://www.sqlinjection.net/database-fingerprinting/);
* Эксплойты;
* [Методы внедрения в сигнатуру SQL-инъекции](https://www.imperva.com/docs/IMPERVA\_HII\_SQL-Injection-Signatures-Evasion.pdf) (SQL Injection Signature Invasion Techniques);

**Точки доступа к сервису** (закрытые и безопасные открытые).

![https://www.softwaretestinghelp.com/wp-content/qa/uploads/2011/09/Service-Access-Points-Sealed-and-Secure-Open.jpg](https://www.softwaretestinghelp.com/wp-content/qa/uploads/2011/09/Service-Access-Points-Sealed-and-Secure-Open.jpg)

Сегодня компании зависят друг от друга и сотрудничают друг с другом, то же самое относится и к приложениям, особенно к веб-сайтам. В таком случае оба участника должны определить и опубликовать несколько точек доступа друг для друга. Пока сценарий кажется довольно простым и понятным, но для некоторых веб-продуктов, таких как торговля акциями, все не так просто и легко. Когда существует большое количество целевой аудитории, точки доступа должны быть достаточно открытыми, чтобы облегчить работу всех пользователей, достаточно приспособленными для выполнения всех запросов пользователей и достаточно безопасными, чтобы справиться с любой опасностью.

Как протестировать точки доступа к сервису (Service Access Points): позвольте мне объяснить это на примере веб-приложения для торговли акциями; инвестор (желающий приобрести акции) должен иметь доступ к текущим и историческим данным о ценах на акции. Это требует, чтобы приложение было достаточно открытым. Под удобством и безопасностью я подразумеваю, что приложение должно облегчить инвесторам возможность свободно торговать (в соответствии с законом). Они могут покупать или продавать 24/7, и данные транзакций должны быть защищены от любых хакерских атак. Более того, большое количество пользователей будет взаимодействовать с приложением одновременно, поэтому приложение должно предоставлять достаточно точек доступа, чтобы удовлетворить всех пользователей. В некоторых случаях эти точки доступа могут быть закрыты для нежелательных приложений или людей. Это зависит от бизнес-домена приложения и его пользователей, например, настраиваемая веб-система управления офисом может распознавать своих пользователей на основе IP-адресов и отказывать в установлении соединения со всеми другими системами (приложениями), которые не попадают в диапазон допустимых IP-адресов для этого приложения. Тестировщик должен гарантировать, что весь межсетевой и внутрисетевой доступ к приложению осуществляется доверенными приложениями, машинами (IP) и пользователями. Чтобы убедиться, что открытая точка доступа достаточно безопасна, тестировщик должен попытаться получить к ней доступ с разных машин, имеющих как доверенные, так и ненадежные IP-адреса. Следует опробовать различные типы транзакций в реальном времени сразу, чтобы быть уверенным в производительности приложения. Таким образом, пропускная способность точек доступа приложения также будет четко отслеживаться. Тестировщик должен убедиться, что приложение обрабатывает все запросы связи от доверенных IP-адресов и приложений только тогда, когда все остальные запросы отклоняются. Точно так же, если в приложении есть открытая точка доступа, тестировщик должен убедиться, что она разрешает (при необходимости) загрузку данных пользователями безопасным способом. Под этим безопасным способом я имею в виду ограничение размера файла, ограничение типа файла и сканирование загруженного файла на вирусы или другие угрозы безопасности.

**Управление сессией**. Веб-сеанс - это последовательность транзакций HTTP-запроса и ответа, связанных с одним и тем же пользователем. Тесты управления сеансом проверяют, как управление сеансом обрабатывается в веб-приложении. Вы можете проверить истечение срока действия сеанса после определенного времени простоя, завершение сеанса после максимального времени жизни, завершение сеанса после выхода из системы, проверить объем и продолжительность сеанса cookie, проверить, может ли один пользователь иметь несколько одновременных сеансов и т. д.

**Обработка ошибок.** Тестирование на обработку ошибок включает:

* проверку кодов ошибок, которые возвращаются с подробным сообщением. Эти сообщения не должны содержать критической информации, которая может быть использована для взлома;
* проверку трассировки стека: в основном это включает в себя передачу в приложение некоторых исключительных данных, так что возвращаемое сообщение об ошибке содержит трассировки стека, которые содержат интересную информацию для хакеров;

**Конкретные опасные функции.** В основном, две рискованные функции - это платежи и загрузка файлов. Эти функции следует очень хорошо протестировать. Для загрузки файлов вам необходимо в первую очередь проверить, ограничена ли загрузка нежелательных или вредоносных файлов. Для платежей вам необходимо в первую очередь протестировать на наличие уязвимостей инъекций, небезопасного криптографического хранилища, переполнения буфера, подбора пароля и т. д.

Источники:

* [What is Security Testing? Types with Example](https://www.guru99.com/what-is-security-testing.html)
* [Security Testing (A Complete Guide)](https://www.softwaretestinghelp.com/how-to-test-application-security-web-and-desktop-application-security-testing-techniques/)

Доп. материал:

* [Тестирование безопасности / Пентест / Тестирование на проникновение](https://www.youtube.com/watch?v=C0euAbFaT4s)
* [Список книг по наступательной информационной безопасности](https://habr.com/ru/company/vk/blog/282700/)
* [Топ-10 уязвимостей мобильных приложений и способы их устранения](https://habr.com/ru/company/ruvds/blog/537456/)
* [Безопасность веб-приложений: от уязвимостей до мониторинга](https://habr.com/ru/post/526878/)
* [Социотехническое тестирование: какое лучше выбрать в 2021 году?](https://habr.com/ru/company/group-ib/blog/535092/)
* [Анализ безопасности веб-проектов](https://www.youtube.com/playlist?list=PLrCZzMib1e9owORdnWTvZIkSCqRFFbHGA)
* [Безопасность интернет-приложений](https://www.youtube.com/playlist?list=PLrCZzMib1e9qiiSWgZ6pI5HiQzFc4hhdo)
* [Red Teaming - комплексная имитация атак. Методология и инструменты](https://habr.com/ru/company/varonis/blog/524308/)
* [cHack](https://www.youtube.com/channel/UCGfxztXUoBeGNVv6UTpUQHw/videos)
* [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
* [SQL-инъекции' union select null,null,null --](https://habr.com/ru/post/542190/)
* [Чек-лист устранения SQL-инъекций](https://habr.com/ru/company/pentestit/blog/546232/)
* [Что такое XSS-уязвимость и как тестировщику не пропустить ее](https://www.software-testing.ru/library/testing/security/3398-ross-site-scripting)
* [What Is Database Security Testing - Complete Guide](https://www.softwaretestinghelp.com/database-security-testing/)
* [QA-митап Redmadrobot 19/11, QA vs Hackers: безопасность в web, Вика Бегенчева](https://www.youtube.com/watch?v=AXD0eyTGbBM)
* [Как я получил награду Facebook по баунти-программе дважды](https://habr.com/ru/company/timeweb/blog/549864/)
* [Безопасность REST API от А до ПИ](https://habr.com/ru/post/503284/)
* [Тестирование безопасности API - Катерина Овеченко. QA Fest 2019](https://www.youtube.com/watch?v=46N\_zodwzKA)
* [Как провести тестирование на безопасность: руководство для Manual QA](https://dou.ua/lenta/articles/security-testing-vulnerabilities/)
* [Типы атак и уязвимостей](https://docs.wallarm.ru/attacks-vulns-list/)
* [Open Web Application Security Project (OWASP) TOP 10 2017](https://owasp.org/www-project-top-ten/2017/)
* [Что такое OWASP Top-10 и как использовать указанные риски и уязвимости](https://blog.themarfa.name/chto-takoie-owasp-top-10-i-kak-ispolzovat-ukazannyie-riski-i-uiazvimosti/)
* [SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL\_Injection\_Prevention\_Cheat\_Sheet.html)
* [Web Authentication, Session Management, and Access Control Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session\_Management\_Cheat\_Sheet.html)
* [Forgot Password Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Forgot\_Password\_Cheat\_Sheet.html)
* [Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication\_Cheat\_Sheet.html)
* [Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password\_Storage\_Cheat\_Sheet.html)
* [Cross Site Scripting (XSS) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross\_Site\_Scripting\_Prevention\_Cheat\_Sheet.html)
* [Unvalidated Redirects and Forwards Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated\_Redirects\_and\_Forwards\_Cheat\_Sheet.html)
* [Безопасность iOS-приложений: гайд для новичков](https://habr.com/ru/company/wrike/blog/544754/)
* [Уязвимости Android 2020](https://habr.com/ru/company/otus/blog/547160/)
* [Обман обманщиков: форк-бомба нового уровня](https://habr.com/ru/company/ruvds/blog/554158/)
* [Software security](https://www.synopsys.com/blogs/software-security/software-security/)
* [When might you need security testing?](https://www.softwaretestingnews.co.uk/when-might-you-need-security-testing/)
* [Иван Румак - Эффективный поиск XSS-уязвимостей](https://www.youtube.com/watch?v=EmJnUqFgaK8)
* [Тестирование безопасности / OWASP TOP 10 уязвимостей](https://www.youtube.com/watch?v=fgtuLbT4joI)
* [TOP 10 уязвимостей 2020 by HackerOne](https://habr.com/ru/company/otus/blog/526768/)
* [Тестирование безопасности / защищенности](http://okiseleva.blogspot.com/2021/11/blog-post\_7.html)
