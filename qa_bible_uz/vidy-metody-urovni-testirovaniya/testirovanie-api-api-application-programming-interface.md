---
title: "Тестирование API (API - Application Programming Interface)"
---

# Тестирование API (API - Application Programming Interface)

Каждый день используя любимые мобильные приложения и веб-ресурсы вы незаметно взаимодействуете с API, скрытым под интерфейсом пользователя.

API действует как интерфейс между двумя программными приложениями и позволяет им связываться друг с другом на оговоренных правилах и не залезая в реализацию предоставляемых функций, при том правила - не договоренность, а контракт. Простой пример: вы можете встроить на свою главную страницу сайта маленький виджет прогноза погоды, который будет отправлять определенный правилами запрос к API некоего сервиса погоды и получать определенный правилами ответ, содержащий посылку с данными.

Еще более простой пример: примите официанта в качестве API ресторана. В ресторане вы даете заказ на основе блюд, определенных в меню. Официант принимает ваш заказ и на этом ваше участие заканчивается и вам не интересно, что там произойдет дальше. От официанта вы ожидаете только итог - вам приносят заказанное блюдо.

Можете попробовать взаимодействие с API сами: отправляете GET запрос на [https://reqres.in/api/users](https://reqres.in/api/users), и получаете в ответ список пользователей. Это очень удобно, когда вы хотите предоставить интерфейс взаимодействия со своим сервисом сторонним лицам. Например, у google, instagram, vk и, в общем-то, всех популярных продуктов есть открытая часть API. То есть у вас есть документ с перечнем того, что и как можно спросить и что вам на это придет в ответ. Взаимодействовать с API можно и с веб-страницы, и с помощью специальных инструментов и напрямую из кода. Помимо прочего, API бывает не только в контексте сетей, например, в той же системе Android есть внутреннее системное API.

**Тестирование API** - это тип тестирования (хотя правильнее наверное сказать не тип или вид, а еще один вариант взаимодействия с системой) который включает в себя тестирование API напрямую, а также в рамках интеграционного тестирования, чтобы проверить, соответствует ли API ожиданиям с точки зрения функциональности, надежности, производительности и безопасности приложения. В тестировании API наш основной упор будет сделан на уровне бизнес-логики архитектуры программного обеспечения.

![https://cdn-images-1.medium.com/fit/t/1600/480/0\*xP5HjXhJk383Jkyz.png](https://cdn-images-1.medium.com/fit/t/1600/480/0\*xP5HjXhJk383Jkyz.png)

Типы тестирования API:

* Unit testing: Для проверки функциональности отдельной операции;
* Functional testing: Чтобы проверить функциональность более широких сценариев с помощью блока результатов unit-тестирования, протестированных вместе;
* Load testing: Чтобы проверить функциональность и производительность под нагрузкой;
* Runtime/Error Detection: Мониторинг приложения для выявления проблем, таких как исключения и утечки ресурсов;
* Security testing: Чтобы гарантировать, что реализация API защищена от внешних угроз;
* UI testing: Это выполняется как часть end-to-end integration тестов, чтобы убедиться, что каждый аспект пользовательского интерфейса функционирует должным образом;
* Interoperability and WS Compliance testing: Совместимость и WS Compliance testing - это тип тестирования, который применяется к SOAP API. Функциональная совместимость между API-интерфейсами SOAP проверяется путем обеспечения соответствия профилям функциональной совместимости веб-служб. Соответствие WS- \* проверено, чтобы гарантировать, что стандарты, такие как WS-Addressing, WS-Discovery, WS-Federation, WS-Policy, WS-Security и WS-Trust, должным образом реализованы и используются;
* Penetration testing: Чтобы найти уязвимости при атаках злоумышленников;
* Fuzz testing: Для проверки API путем принудительного ввода в систему некорректных данных для попытки принудительного сбоя;
* Usability testing: проверяет, является ли API функциональным и удобным для пользователя и хорошо ли интегрируется с другой платформой;
* Documentation testing: команда тестирования должна убедиться, что документация соответствует требованиям и предоставляет достаточно информации для взаимодействия с API. Документация должна быть частью окончательного результата;

**Примеры проблем, которые обнаруживает тестирование API:**

* Некорректная обработка условий ошибки;
* Неиспользуемые флаги;
* Отсутствующие или повторяющиеся функции;
* Вопросы надежности;
* Сложность подключения и получения ответа от API;
* Проблемы с безопасностью;
* Проблемы с многопоточностью;
* Проблемы с производительностью. Время отклика API очень велико;
* Неправильные ошибки / предупреждение вызывающему абоненту;
* Неправильная обработка допустимых значений аргументов;
* Данные ответа неправильно структурированы (JSON или XML);

**Контрактное тестирование API**

В общем случае контрактное тестирование или Consumer Driven Contract (CDC) является связующим звеном между модульным и интеграционным тестированием.

Каждый интерфейс имеет поставщика (supplier) и потребителя (consumer). Само собой, сервисы поставщика и потребителя распределены между разными командами, мы оказываемся в ситуации, когда четко прописанный интерфейс между ними (или контракт) просто необходим. Обычно многие подходят к этой проблеме следующим образом:

* Пишут подробное описание спецификации интерфейса - контракт;
* Реализуют сервис поставщика согласно спецификации;
* Передают спецификацию интерфейса потребителю;
* Ждут реализации от другой стороны;
* Запускают ручные системные тесты, чтобы всё проверить;
* Держат кулачки, что обе стороны будут вечно соблюдать описанный интерфейс;

Сегодня многие компании заменили последние два шага на автоматизированные контрактные тесты, которые регулярно проверяют соответствие описания и реализации у поставщика и потребителя определенного контракта. Что является набором регрессионных тестов, которые обеспечивают раннее обнаружение отклонения от контракта.

Разберемся во взаимодействии на примере REST архитектуры: поставщик создает API c некоторым endpoint, а потребитель отправляет запрос к API, например, с целью получения данных или выполнения изменений в другом приложении. Это контракт, который описывается с помощью DSL (domain-specific language). Он включает API описание в форме сценариев взаимодействия между потребителем и поставщиком. С помощью CDC выполняется тестирование клиента и API с использованием заглушек, которые собираются на основе контракта. Основной задачей CDC является сближение восприятия между командами разработчиков API и разработчиков клиента. Таким образом, участники команды потребителей пишут CDC тесты (для всех данных проекта разработки), чтобы команда поставщика смогла запустить тесты и проверить API. В итоге команда поставщика с легкостью разработает свой API, используя тесты CDC. Результатом прогона контрактных тестов является понимание, что поставщик уверен в исправной работе API у потребителя. Следует обратить внимание, что команда потребителя должна регулярно осуществлять поддержку CDC-тестов при каждом изменении, и вовремя передавать всю информацию команде поставщика. Если регулярно фиксируем неудачно выполненные CDC-тесты, то следует пойти (в буквальном смысле слова, к пострадавшей стороне теста и узнать, в рамках какой задачи были изменения (что привело к падению теста).

Из того, что было описано выше, можно выделить следующие тезисы для выполнения контрактного тестирования:

* Команда разработчиков (тестировщиков) со стороны потребителей пишет автоматизированные тесты с ожидаемыми параметрами со стороны потребителей.
* Тесты передаются команде поставщика.
* Команда поставщика запускает контрактные тесты и проверяет результат их выполнения. Если происходит падение тестов, то команды должны зафиксировать сбой и перепроверить документацию (согласованность разработки).

Минусы CDC:

* CDC тесты не заменяют E2E тесты. По факту я склонен отнести CDC к заглушкам, которые являются моделями реальных компонентов, но не являются ими, т.е. это еще одна абстракция, которую нужно поддерживать и применять в нужных местах (сложно реализовать сложные сценарии);
* CDC тесты не заменяют функциональные тесты API. Лично придерживаюсь золотого правила - если убрать контракт и это не вызывает ошибки или неправильную работу клиента, то значит он не нужен. Пример: Нет необходимости проверять все коды ошибок через контракт, если клиент обрабатывает их (ошибки) одинаково. Таким образом контракт то, что важно для клиента сервиса, а не наоборот;
* CDC тесты дороже в поддержке, чем функциональные тесты;
* Для реализации CDC-тестов нужно использовать (изучать) отдельные инструменты тестирования - Spring Cloud Contract, PACT;

**Отличие API от SDK**:

SDK (software development kit) - это набор функционала (библиотек) и утилит для разработки. Собственно SDK и предоставляет реализацию некоторого API, это оболочка API's, которая упрощает работу для разработчиков.

* API: набор готовых классов, процедур, функций, структур и констант, предоставляемых приложением для использования во внешних программных продуктах. Это интерфейс, похоже на спецификацию телефонной системы или электропроводки в вашем доме. Это список того, что можно вызывать и какого ждать результата;
* SDK: набор реальных инструментов внедрения. Это как чемодан деталей и инструментов, который позволяет вам подключиться к телефонной системе или электрической проводке. Это библиотеки, в которых реализованы вызываемые функции + файлы необходимые для подключения этих библиотек;

**Тестирование API без документации/черным ящиком**:

Если Вам по какой-то причине предстоит проделать эту неблагодарную работу, определитесь, насколько все плохо и какая у Вас есть информация об объекте тестирования. Известно ли какие порты для Вас открыты? Знаете ли Вы нужные endpoints? Если дело совсем плохо - просканируйте порты, например, с помощью netcat. Открытые порты сохраните в файл. Эта операция займет довольно много времени. Можете почитать советы по работе с Nmap и Netcat. Если Вам известен нужный порт и соответствующий endpoint - переберите все возможные HTTP методы. Начните с наиболее очевидных POST, PUT, GET. Для ускорения процесса напишите скрипт, например, на Python.В худшем случае, когда ни порт ни endpoints неизвестны Вам, скорее всего придется перебирать все открытые порты и генерировать endpoints, которые подходят по смыслу.\
Разработчики обычно не особо заморачиваются и закладывают минимально-необходимую информацию. Так что включите воображение и попробуйте придумать endpoints опираясь на бизнес логику и принятые в Вашей компании стандарты. Если ни endpoints ни бизнес логика Вам неизвестны, то у меня есть подозрение, что Вы тестируете API с не самыми хорошими намерениями.

Источники:

* [API Testing Tutorial: What is API Test Automation? How to Test](https://www.guru99.com/api-testing.html)
* [A Comprehensive API Testing Guide](https://www.softwaretestingmaterial.com/api-testing/)
* [API Testing Tutorial: A Complete Guide For Beginners](https://www.softwaretestinghelp.com/api-testing-tutorial/#i\_Functional\_Testing)
* [Spring Cloud Contract. Что такое контрактное тестирование и с чем его едят](https://habr.com/ru/company/testit-tms/blog/570544/)
* [Чем отличается api от sdk?](https://ru.stackoverflow.com/questions/796323/%D0%A7%D0%B5%D0%BC-%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F-api-%D0%BE%D1%82-sdk/796340#796340)
* [Тестирование API без документации](https://www.andreyolegovich.ru/testing/api\_testing.php#nospec)

Доп. материал:

* [Список полезных статей и видео для изучения тестирования API](https://habr.com/ru/post/667634/)
* [Тестирование GraphQL](https://telegra.ph/GraphQL-05-18)
* [Удачный шаблон документации на API, который будут читать](https://habr.com/ru/post/667884/)
* [Игорь Гольшмидт. АPI тестирование без документации](https://www.youtube.com/watch?v=9VnBVmo1Muc)
* [Курс Тестирование ПО. Занятие 29. Тестирование API - QA START UP](https://www.youtube.com/watch?v=7D7AMmgxt\_I\&t=1540s\&ab\_channel=QASTARTUP-ITTrainingCenter)
* [Курс Тестировщика с нуля / 27 урок/ Тестирование API с помощью Postman](https://www.youtube.com/watch?v=vBkEptmug7c)
* [Rest Assured и Postman - два подхода к тестированию API](https://testit.software/blog/post/rest-assured-i-postman-dva-podhoda-k-testirovaniyu-api)
* [Эвристики и мнемоники в тестировании: шаблоны для тестирования API](https://dou.ua/lenta/columns/testing-heuristics-mnemonics-2/)
* [От шока до принятия: пять стадий тестирования API](https://dou.ua/lenta/columns/api-testing-stages/)
* [Тестирование API](https://software-testing.ru/library/testing/testing-automation/3382-api-testing)
* [Swagger/OpenAPI Specification как основа для ваших приемочных тестов](https://habr.com/ru/company/jugru/blog/525298/)
* [История одного сервера и тестировщика Васи](https://habr.com/ru/company/nix/blog/534156/)
* [What Is an API?](https://www.howtogeek.com/343877/what-is-an-api/)
* [Тестирование API простыми словами за 8 минут / Тестировщик API](https://www.youtube.com/watch?v=kUPWQMalWNk\&feature=youtu.be\&ab\_channel=ArtsiomRusauQALife)
* [Тестирование Web API - From Zero To Hero](https://beqa.pro/blog/all-you-need-for-api-testing/#learn-api-testing-roadmap)
* [Стратегия тестирования REST API: что именно вам нужно тестировать?](https://habr.com/ru/post/568360/)
* [Test Design and Automation for Rest API. Part 1. Иван Катунов. Comaqa Spring 2018](https://www.youtube.com/watch?v=VTVx5Rx6rsY) + [Test Design and Automation for Rest API. Part 2. Иван Катунов. Comaqa Spring 2018](https://www.youtube.com/watch?v=Tq2thhEiQJE) + [pdf](https://testconf.ru/wp-content/uploads/2018/04/6-H1-19-%D0%98%D0%B2%D0%B0%D0%BD-%D0%9A%D0%B0%D1%82%D1%83%D0%BD%D0%BE%D0%B2-Test-Design-and-Automation-for-REST-API\_TestConf-min.pdf)
* [What is the Difference Between an API and an SDK?](https://nordicapis.com/what-is-the-difference-between-an-api-and-an-sdk/)
* [Introduction to API Testing](https://docs.katalon.com/katalon-studio/docs/introduction\_api\_testing.html)
* [19:05 «Контрактное тестирование Rest API»](https://www.youtube.com/watch?v=1cdMYN\_u4lA\&t=1145s) + [презентация](https://drive.google.com/drive/folders/1WERT2pCAJ73qdFaXredTSEmClPuSNs6N)
* [Организация контрактного тестирования микросервисов и графического портала](https://automated-testing.info/t/organizacziya-kontraktnogo-testirovaniya-mikroservisov-i-graficheskogo-portala/22763)
* [Introduction To Contract Testing With Examples](https://www.softwaretestinghelp.com/contract-testing/)
* [Микросервисы для разработчиков Java: Контрактное тестирование](https://coderlessons.com/articles/programmirovanie/mikroservisy-dlia-razrabotchikov-java-testirovanie)
* [Как тестировать GraphQL API? Гайд для начинающих](https://testengineer.ru/kak-testirovat-graphql-api/)
* [Что такое API](https://telegra.ph/CHto-takoe-API-11-01)
* [Что такое API](http://okiseleva.blogspot.com/2019/08/api.html?m=1)
* [Как передать в API фото формата base64](https://www.youtube.com/watch?v=Nstuin6XfxE)
* [API: под каким углом на них смотреть](https://www.youtube.com/watch?v=rin-PKE7-9Q)
