---
title: "Подходы к разработке/тестированию (... - driven development/testing)"
---

# Подходы к разработке/тестированию (... - driven development/testing)

Тут и там можно встретить упоминания различных подходов к разработке и тестированию на основе чего-то, здесь краткое описание самых часто встречающихся вариантов:

* **TDD - Test Driven Development**: разработка на основе тестов основывается на повторении коротких циклов разработки: изначально пишется тест, покрывающий желаемое изменение, затем пишется программный код, который реализует желаемое поведение системы и позволит пройти написанный тест. Затем проводится рефакторинг написанного кода с постоянной проверкой прохождения тестов. Есть два уровня TDD:
  * Acceptance TDD (ATDD): вы пишете один приемочный тест. Этот тест удовлетворяет требованиям спецификации или удовлетворяет поведению системы. После этого пишете достаточно производственного / функционального кода, чтобы выполнить этот приемочный тест. Приемочный тест фокусируется на общем поведении системы. ATDD также известен как BDD - Behavior Driven Development;
  * Developer TDD: вы пишете один тест разработчика, то есть модульный тест, а затем просто достаточно производственного кода для выполнения этого теста. Модульное тестирование фокусируется на каждой небольшой функциональности системы. Это называется просто TDD. Основная цель ATDD и TDD - определить подробные, выполнимые требования для вашего решения точно в срок (JIT). JIT означает принятие во внимание только тех требований, которые необходимы в системе, что повышает эффективность.
* **BDD - Behaviour Driven Development:** это разработка, основанная на описании поведения. Определенный человек(или люди) пишет описания вида "я как пользователь хочу когда нажали кнопку пуск тогда показывалось меню как на картинке" (там есть специально выделенные ключевые слова). Программисты давно написали специальные тулы, которые подобные описания переводят в тесты (иногда совсем прозрачно для программиста). А дальше классическая разработка с тестами (TDD);
* **TDD - Type Driven Development:** при разработке на основе типов ваши типы данных и сигнатуры типов являются спецификацией программы. Типы также служат формой документации, которая гарантированно обновляется. Типы представляют из себя небольшие контрольные точки, благодаря которым, мы получаем множество мини-тестов по всему нашему приложению;
* **DDD** - Domain Driven Design: Предметно-ориентированное проектирование не является какой-либо конкретной технологией или методологией. DDD - это набор правил, которые позволяют принимать правильные проектные решения. Это набор принципов и схем, направленных на создание оптимальных систем объектов. Процесс разработки сводится к созданию программных абстракций, которые называются моделями предметных областей. В эти модели входит бизнес-логика, устанавливающая связь между реальными условиями области применения продукта и кодом;
* **FDD** - Features Driven Development: представляет собой попытку объединить наиболее признанные в индустрии разработки программного обеспечения методики, принимающие за основу важную для заказчика функциональность (свойства) разрабатываемого программного обеспечения. Основной целью данной методологии является разработка реального, работающего программного обеспечения систематически, в установленные сроки;
* **MDD** - Model Driven Development: разработка, управляемая моделями - это стиль разработки программного обеспечения, когда модели становятся основными артефактами разработки, из которых генерируется код и другие артефакты;
* **PDD** - Panic Driven Development: это своеобразный антипаттерн разработки, который, к сожалению, мы все время от времени практикуем. По сути это то, что получается, когда процессы плохо налажены и команда импровизирует в условиях горящих сроков (новые задачи приоритетнее старых, код решает конкретные срочные задачи, но копится технический долг, тестирование в конце и т.д.);
* **ADD** - API Driven Development: разработка на основе API - это практика сначала проектирования и создания API, а затем создания на их основе остальной части приложения;
* **BDT - Behavior Driven Testing**: в тестировании на основе поведения ваши тесты основаны на user stories, которые описывают некоторые конкретные ожидаемые действия приложения. Вместо проверки деталей реализации вы фактически проверяете то, что важно больше всего: правильно ли приложение выполняет user stories. Еще одним преимуществом является понятность тестов для менеджеров, аналитиков и т.п.;
* **MDT - Model Driven Testing**: Тестирование на основе моделей - это метод тестирования черного ящика, при котором поведение тестируемого программного обеспечения во время выполнения проверяется на основе прогнозов, сделанных моделями. Модель - это описание поведения системы. Поведение может быть описано в виде наглядной схемы, Data Flow, Control Flow, Dependency Graphs, Decision Tables, State transition machines или mind map. Простой аналогией модели в тестировании является электрическая схема при разработке электроприбора. Этот подход к тестированию требуется, когда высока цена ошибки в большом продукте и нужно как можно раньше попытаться ее предотвратить;
* **DDT - Data Driven Testing** (table-driven testing or parameterized testing): в тестировании на основе данных тестовые данные хранятся в виде таблицы. Оно позволяет одним скриптом выполнять тесты для всех тестовых данных из таблицы и ожидать результатов теста в той же таблице;
* **VDT** - Value Driven Testing: тестирование на основе ценности - это подход, в основе которого лежит анализ ценности и экономической целесообразности тестирования.

Источники:

* [TDDx2, BDD, DDD, FDD, MDD и PDD, или все, что вы хотите узнать о Driven Development](https://habr.com/ru/post/459620/)
* [The Basics of API-Driven Development](https://dzone.com/articles/abcs-of-api-driven-development)
* [Behavior-Driven Testing для iOS используя Quick и Nimble](https://habr.com/ru/post/352694/)
* [Тестирование на основе моделей](https://habr.com/ru/company/jugru/blog/506048/)
* [What is Data Driven Testing? Learn to create Framework](https://www.guru99.com/data-driven-testing.html)
* [Что нужно знать о Value Driven Testing. Анализируем ценность и экономическую целесообразность тестирования](https://dou.ua/lenta/columns/value-driven-testing/)
* [Mockup-Driven Development. Находка или ловушка?](https://www.youtube.com/watch?v=olAOOVe4f0A)

Доп. материал:

* [Leadership in test: modelling and coverage](https://theqalead.com/topics/test-modelling-and-coverage/)
* [Test Driven Development: By Example](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)
* [НЕ ООП ЕДИНЫ! Domain Driven Design на примере ХОЛОДИЛЬНИКА / Tech Lead Борис Беньковский](https://www.youtube.com/watch?v=rkQ3-T82pkU)
