---
title: "Приемочное тестирование (AT - Acceptance testing)"
---

# Приемочное тестирование (AT - Acceptance testing)

_Приемочное тестирование (acceptance testing): Формальное тестирование по отношению к потребностям, требованиям и бизнес процессам пользователя, проводимое с целью определения соответствия системы критериям приемки и дать возможность пользователям, заказчикам или иным авторизированым лицам определить, принимать систему или нет. (IEEE 610)_

_Эксплуатационное приемочное тестирование (operational acceptance testing): Эксплуатационное тестирование в фазе приемочного тестирования, обычно выполняемое пользователем и/или сотрудниками с администраторским доступом, в рабочей среде (возможно, стимулированной), фокусируясь на функциональных аспектах. Например, восстанавливаемость, поведение ресурсов, устанавливаемость и техническое соответствие. (ISTQB)_

После того, как процесс тестирования системы завершен командой тестирования, весь продукт передается клиенту и/или нескольким его пользователям для проверки приемлемости (acceptability). Е2Е бизнес-потоки проверяются аналогично в сценариях в реальном времени. Подобная производственной среда будет тестовой средой для приемочного тестирования (Staging, Pre-Prod, Fail-Over, UAT environment). Это метод тестирования черного ящика, при котором проверяется только функциональность, чтобы убедиться, что продукт соответствует указанным критериям приемки.

**Виды приемочного тестирования**:

* **Пользовательское** приемочное тестирование (UAT - User Acceptance Testing, validation, end-user testing) выполняется пользователем или клиентом чтобы определить, может ли ПО быть принято (accepted) или нет и проверить ПО на соответствие бизнес-требованиям. Могут существовать такие бизнес-требования и процессы, которые известны только конечным пользователям, и они либо пропускаются, либо неправильно интерпретируются, поэтому приемочное тестирование выполняется конечными пользователями, знакомыми с бизнес-требованиями;
* **Бизнес -** приемочное тестирование (BAT - Business Acceptance Testing) необходимо для оценки того, соответствует ли Продукт бизнес-целям и задачам. BAT в основном фокусируется на бизнес-преимуществах (финансах), которые являются довольно сложными из-за меняющихся рыночных условий / прогрессирующих технологий, так что текущая реализация может претерпеть изменения, которые приведут к дополнительным затратам. Даже Продукт, отвечающий техническим требованиям, может не пройти BAT по этим причинам;
* **Контрактное** приемочное тестирование (CAT - Contract Acceptance Testing) - это контракт, который определяет, что после того, как Продукт будет запущен в течение заранее определенного периода, должен быть проведен приемочный тест, и он должен пройти все приемочные тест-кейсы. Подписанный здесь контракт называется Соглашением об уровне обслуживания (SLA), которое включает условия, по которым платеж будет производиться только в том случае, если услуги Продукта соответствуют всем требованиям, что означает, что контракт выполнен. Иногда этот контракт может заключаться до того, как Продукт будет запущен. В любом случае, контракт должен быть четко определен с точки зрения периода тестирования, областей тестирования, условий по проблемам, возникающим на более поздних этапах, платежей и т. д.;
* **Правовое** приемочное тестирование (RAT - Regulations/Compliance Acceptance Testing) необходимо для оценки того, нарушает ли Продукт правила и нормы, установленные правительством страны, в которой он выпускается. Это может быть непреднамеренным, но отрицательно скажется на бизнесе. Обычно разрабатываемый Продукт / приложение, предназначенный для выпуска во всем мире, должен пройти RAT, поскольку в разных странах / регионах действуют разные правила и положения, определенные его руководящими органами. Если какие-либо правила и нормы нарушаются для какой-либо страны, то этой стране или конкретному региону в этой стране не будет разрешено использовать Продукт и это будет считаться отказом (Failure). Вендоры Продукта несут прямую ответственность, если Продукт будет выпущен даже при наличии нарушения;
* **Эксплуатационное** приемочное тестирование ([OAT - Operational Acceptance testing](https://en.wikipedia.org/wiki/Operational\_acceptance\_testing)) - это тип тестирования программного обеспечения, который оценивает эксплуатационную готовность программного приложения до его выпуска в производство. Целью эксплуатационного тестирования является обеспечение бесперебойной работы системы в ее стандартной эксплуатационной среде (SOE - standard operating environment). В основном это тестирование восстановления, совместимости, ремонтопригодности, доступности технической поддержки, надежности, восстановления после сбоя, локализации и т. д (recovery, compatibility, maintainability, technical support availability, reliability, fail-over, localization);
* **Альфа-тестирование** ([Alpha Testing](https://www.softwaretestinghelp.com/alpha-testing/)) проводят для оценки продукта в среде разработки / тестирования специализированной командой тестировщиков, обычно называемой альфа-тестерами. Здесь отзывы и предложения тестировщиков помогают улучшить использование Продукта, а также исправить определенные ошибки;
* **Бета-тестирование, полевые испытания** ([Beta Testing](https://www.softwaretestinghelp.com/beta-testing/), Field Testing) проводят для оценки Продукта, предоставляя его реальным конечным пользователям, обычно называемым бета-тестерами / бета-пользователями, в их среде. Собирается постоянная обратная связь от пользователей, и проблемы устраняются. Кроме того, это помогает в улучшении Продукта, чтобы обеспечить удобство работы пользователей. Тестирование происходит неконтролируемым образом, что означает, что у пользователя нет ограничений на использование Продукта;

Источники:

* [What Is Acceptance Testing (A Complete Guide)](https://www.softwaretestinghelp.com/what-is-acceptance-testing/)
* [What Is User Acceptance Testing (UAT): A Complete Guide](https://www.softwaretestinghelp.com/what-is-user-acceptance-testing-uat/)

Доп. материал:

* [ГОСТ Р 56920-2016/ISO/IEC/IEEE 29119-1:2013](https://docs.cntd.ru/document/1200134996) “D.2 Подпроцесс приемочного испытания”
* [Business-facing tests](https://martinfowler.com/bliki/BusinessFacingTest.html)
* [Как проводить приемочное тестирование](https://www.youtube.com/watch?v=BKWgBk3gktw\&ab\_channel=Podlodka)
