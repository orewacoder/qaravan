---
title: "Тестирование сервис-ориентированной архитектуры (SOA - Service Oriented Architecture)"
---

# Тестирование сервис-ориентированной архитектуры (SOA - Service Oriented Architecture)

SOA - это метод интеграции бизнес-приложений и процессов вместе для удовлетворения потребностей бизнеса. В программной инженерии SOA обеспечивает маневренность и гибкость бизнес-процессов. Изменения в процессе или приложении могут быть направлены на конкретный компонент, не затрагивая всю систему. Разработчики программного обеспечения в SOA либо разрабатывают, либо покупают куски программ под названием сервисы.

* Сервисы могут быть функциональными единицами приложения или бизнес-процесса, которые могут повторно использоваться или повторяться любым другим приложением или процессом. Например, платежный шлюз - это сервис, который может повторно использоваться любым сайтом электронной коммерции. Всякий раз, когда необходимо произвести платеж, сайт электронной коммерции вызывает/запрашивает сервис платежного шлюза. После оплаты на шлюзе ответ отправляется на сайт электронной коммерции.
* Сервисы легко собрать и легко переконфигурировать их компоненты.
* Сервисы можно сравнить со строительными блоками. Они могут создать любое необходимое приложение. Добавлять и удалять их из приложения или бизнес-процесса очень просто.
* Сервисы определяются в большей степени бизнес-функцией, которую они выполняют, а не фрагментами кода.

**Веб-сервисы**

Веб-сервисы - это независимые компоненты приложений, доступные через Интернет. Их можно опубликовать, найти и использовать в Интернете. Они могут общаться через Интернет.

![https://www.guru99.com/images/jsp/030116\_0725\_LearnSOATes3.png](https://www.guru99.com/images/jsp/030116\_0725\_LearnSOATes3.png)

* Поставщик услуг публикует услугу в Интернете;
* Клиент ищет конкретную веб-службу в реестре веб-служб;
* Возвращается URL-адрес и WSDL для требуемой веб-службы (при использовании WSDL и URL-адреса связь между поставщиком услуг и запрашивающей стороной осуществляется посредством сообщений SOAP);
* Когда потребитель вызывает веб-службу, с провайдером устанавливается HTTP-соединение. Сообщение SOAP создается, чтобы указать поставщику для вызова требуемой логики веб-службы;
* Ответ, полученный от поставщика, представляет собой сообщение SOAP, которое будет встроено в ответ HTTP. Этот HTTP-ответ представляет собой формат данных, понятный потребительскому приложению.

**Тестирование SOA**

![https://www.guru99.com/images/jsp/030116\_0725\_LearnSOATes5.png](https://www.guru99.com/images/jsp/030116\_0725\_LearnSOATes5.png)

Тестирование SOA должно быть сосредоточено на трех уровнях:

![https://www.guru99.com/images/jsp/030116\_0725\_LearnSOATes6.png](https://www.guru99.com/images/jsp/030116\_0725\_LearnSOATes6.png)

**Методы тестирования SOA**

**1. Тестирование на основе бизнес-сценариев на основе данных** (Business scenario driven data based testing)

* Следует проанализировать различные бизнес-аспекты, связанные с системой;
* Сценарии следует разрабатывать на основе интеграции:
  * Различные веб-сервисы приложения;
  * Веб-сервисы и приложения;
* Настройка данных должна выполняться на основе описанных выше сценариев;
* Настройка данных должна быть выполнена так, чтобы охватить сквозные сценарии.

**2. Заглушки** (Stubs)

* Будут созданы фиктивные интерфейсы для тестирования сервисов;
* Через эти интерфейсы могут быть предоставлены различные входные данные, а выходные данные могут быть проверены;
* Когда приложение использует интерфейс к внешней службе, которая не тестируется (сторонняя служба), во время интеграционного тестирования может быть создана заглушка.

**3. Regression testing**

* Регрессионное тестирование приложения следует проводить при наличии нескольких выпусков, чтобы обеспечить стабильность и доступность систем;
* Будет создан комплексный набор регрессионных тестов, охватывающий службы, которые составляют важную часть приложения;
* Этот набор тестов можно повторно использовать в нескольких версиях проекта.

**4. Service Level Testing**

Тестирование уровня обслуживания включает тестирование компонента на функциональность, безопасность, производительность и совместимость. Каждая служба должна быть сначала протестирована независимо.

**5. Functional Testing**

* Служба предоставляет правильный ответ на каждый запрос;
* Правильные ошибки принимаются для запросов с неверными данными, неверными данными и т. д.;
* Проверяйте каждый запрос и ответ для каждой операции, которую служба должна выполнять во время выполнения;
* Проверяйте сообщения об ошибках при возникновении ошибки на уровне сервера, клиента или сети;
* Убедитесь, что полученные ответы имеют правильный формат;
* Убедитесь, что данные, полученные в ответ, соответствуют запрошенным данным.

**6. Security Testing**

* Веб-служба должна соблюдать отраслевой стандарт, определенный WS-Security;
* Меры безопасности должны работать безупречно;
* Шифрование данных и цифровые подписи на документах;
* Аутентификация и авторизация;
* Инъекции SQL, вредоносное ПО, XSS, CSRF и другие уязвимости должны быть протестированы на XML;
* Атаки отказа в обслуживании.

**7. Performance Testing**

* Производительность и функциональность сервиса необходимо тестировать под большой нагрузкой;
* Производительность сервиса необходимо сравнивать при работе отдельно и в приложении, с которым он связан;
* Необходимо провести нагрузочное тестирование сервиса:
  * проверить время отклика;
  * проверить наличие узких мест;
  * для проверки использования процессора и памяти;
  * прогнозировать масштабируемость.

**8. Integration level testing**

* Service level testing обеспечивает правильную работу только сервисов по отдельности, но не гарантирует работу связанных компонентов;
* Интеграционное тестирование проводится с упором на интерфейсы;
* Этот этап охватывает все возможные бизнес-сценарии;
* Нефункциональное тестирование приложения должно быть выполнено еще раз на этом этапе. Безопасность, соответствие требованиям и тестирование производительности обеспечивают доступность и стабильность системы во всех аспектах;
* Коммуникационные и сетевые протоколы должны быть протестированы для проверки согласованности передачи данных между службами.

**9. End to End testing**

Эта фаза гарантирует, что приложение соответствует бизнес-требованиям как функционально, так и нефункционально.

* Все сервисы работают как положено после интеграции;
* Обработка исключений;
* Пользовательский интерфейс приложения;
* Надлежащий поток данных через все компоненты;
* Бизнес-процесс.

**Проблемы тестирования SOA**

* Отсутствие интерфейсов для Сервисов;
* Процесс тестирования охватывает несколько систем, что создает сложные потребности в данных;
* Приложение представляет собой набор различных компонентов, которые имеют свойство меняться. Потребность в регрессионном тестировании возникает чаще;
* Из-за многослойной архитектуры трудно изолировать дефекты;
* Так как служба будет использоваться в разных интерфейсах, трудно предсказать нагрузку, что усложняет планирование тестирования производительности;
* SOA представляет собой набор разнородных технологий. Для тестирования приложения SOA требуются люди с разным набором навыков, что, в свою очередь, увеличивает затраты на планирование и выполнение;
* Поскольку приложение представляет собой интеграцию нескольких сервисов, тестирование безопасности имеет свою долю проблем. Проверка аутентификации и авторизации довольно сложна.

Источники:

* [What is SOA Testing? Tutorial with Example](https://www.guru99.com/learn-soa-testing.html)

Доп. материал:

* [Сервис-ориентированная архитектура (SOA)](https://habr.com/ru/company/vk/blog/342526/)
