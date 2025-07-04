---
title: "Интеграционное тестирование (Integration testing)"
---

# Интеграционное тестирование (Integration testing)

_Интеграционное тестирование (integration testing): Тестирование, выполняемое для обнаружения дефектов в интерфейсах и во взаимодействии между интегрированными компонентами или системами. См. также тестирование интеграции компонентов, системное интеграционное тестирование. (ISTQB)_

_Системное интеграционное тестирование (system integration testing): Тестирование интеграции систем и пакетов программ, тестирование интерфейсов связи с внешними системами (интернет и т.д.). (ISTQB)_

_Интеграционное тестирование в малом (integration testing in the small): См. тестирование интеграции компонентов. (ISTQB)_

_Интеграционное тестирование в целом (integration testing in the large): См. системное интеграционное тестирование. (ISTQB)_

_Изоляционное тестирование (isolation testing): Тестирование отдельных компонентов в изоляции от окружающих компонентов в окружении компонентов, которые при необходимости эмулируются заглушками и драйверами. (ISTQB)_

_Попарное интеграционное тестирование (pairwise integration testing): Вид интеграционного тестирования, нацеленного на пары компонентов, работающих совместно соответственно графу вызовов. (ISTQB)_

Интеграционное тестирование предназначено для проверки насколько хорошо два или более компонента ПО взаимодействуют друг с другом, а также взаимодействия с различными частями системы (операционной системой, оборудованием либо связи между различными системами). С технологической точки зрения интеграционное тестирование является количественным развитием компонентного, поскольку также оперирует интерфейсами модулей и подсистем и требует создания тестового окружения, включая заглушки (Stub) на месте отсутствующих модулей. Основная разница между компонентным и интеграционным тестированием состоит в целях, то есть в типах обнаруживаемых дефектов, которые, в свою очередь, определяют стратегию выбора входных данных и методов анализа. В частности, на уровне интеграционного тестирования часто применяются методы, связанные с покрытием интерфейсов, например, вызовов функций или методов, или анализ использования интерфейсных объектов, таких как глобальные ресурсы, средства коммуникаций, предоставляемых операционной системой.

**Уровни интеграционного тестирования**:

* **Компонентный интеграционный уровень** (CIT - [Component Integration testing](https://www.testing.guru/what-is-component-integration-testing/)): Проверяется взаимодействие между компонентами одной системы после проведения компонентного тестирования. Программные компоненты или модули могут быть определены в разное время совершенно разными группами спецификаций, component integration testing выполняется чтобы убедиться, что даже после различий в разработке модулей интеграция всего работает вместе. В этом случае также важно учесть отрицательные случаи, так как компоненты могут делать предположения относительно данных;
* **Системный интеграционный уровень** (SIT - [System Integration testing](https://www.softwaretestinghelp.com/system-integration-testing/)): - это полное тестирование всей системы, состоящей из множества подсистем. Основная цель SIT - обеспечить правильное функционирование всех зависимостей программных модулей и сохранение целостности данных между отдельными модулями всей системы. SUT ([System Under Test](https://www.tutorialspoint.com/software\_testing\_dictionary/system\_under\_test.htm)) может состоять из аппаратного обеспечения, базы данных, программного обеспечения, комбинации аппаратного и программного обеспечения или системы, требующей взаимодействия с человеком (HITL - [Human in the Loop](https://en.wikipedia.org/wiki/Human-in-the-loop) Testing). SIT имеет предварительное условие, при котором несколько базовых интегрированных систем уже прошли системное тестирование. Затем SIT проверяет необходимые взаимодействия между этими системами в целом. Результаты SIT передаются в UAT (пользовательское приемочное тестирование);

**Интеграция может быть как программной, так и софт-железо**:

* **HSIT** - Hardware Software Integration Testing: представляет собой процесс тестирования компонентов компьютерного программного обеспечения (CSC - Computer Software Components) на предмет функциональности высокого уровня в целевой аппаратной среде. Тестирование черного ящика - это основной тип тестирования, используемый на этом уровне тестирования. Целью тестирования интеграции аппаратного / программного обеспечения является проверка поведения разработанного программного обеспечения, интегрированного в аппаратный компонент. Цель тестирования интеграции аппаратного и программного обеспечения на основе требований (Requirement based Hardware-Software Integration Testing) - убедиться, что программное обеспечение на целевом компьютере удовлетворяет высокоуровневым требованиям (high-level requirements);
* **SSIT** - Software Software Integration Testing: это Computer Software Component Testing, работающего в среде целевого компьютера при моделировании всей системы (других CSC), и на функциональности высокого уровня. Оно фокусируется на поведении CSC в смоделированной среде хоста / цели. Для проверки интеграции программного обеспечения используются разные подходы;

**Подходы к интеграционному тестированию**:

* **Подход Большого взрыва (Big Bang Approach)**: _“Вид подхода к интеграционному тестированию, при котором элементы программного или аппаратного обеспечения, или и то и другое, собираются в компонент или в целую систему сразу, а не по этапам.” ( IEEE 610)_. Все или практически все разработанные модули собираются вместе в виде законченной системы или ее основной части, и затем проводится интеграционное тестирование. Такой подход очень хорош для сохранения времени. Однако если Test case и их результаты записаны неверно, то сам процесс интеграции сильно осложнится, что станет преградой для команды тестирования при достижении основной цели интеграционного тестирования;
* **Инкрементальный подход (Incremental Approach)**: при таком подходе тестирование выполняется путем объединения двух или более логически связанных модулей. Затем другие связанные модули поэтапно добавляются и тестируются для правильного функционирования. Процесс продолжается до тех пор, пока все модули не будут соединены и успешно протестированы. Осуществляется разными методами:
  * **Нисходящий подход (Top-Down Approach)**: Вначале тестируются все высокоуровневые модули, и постепенно один за другим добавляются низкоуровневые. Все модули более низкого уровня симулируются заглушками с аналогичной функциональностью, затем по мере готовности они заменяются реальными активными компонентами. Преимущества: Локализация неисправностей проще. Возможность получить ранний прототип. Основные недостатки дизайна могут быть найдены и исправлены в первую очередь. Недостатки: Нужно много заглушек. Модули на более низком уровне тестируются недостаточно;
  * **Восходящий подход (Bottom-Up Approach)**: В восходящей стратегии каждый модуль на более низких уровнях последовательно тестируется с более высокоуровневыми модулями, пока не будут протестированы все модули. Требуется помощь драйверов для тестирования. Данный подход считается полезным, если все или практически все модули, разрабатываемого уровня, готовы. Также данный подход помогает определить по результатам тестирования уровень готовности приложения. Пример низкоуровневого модуля - модуль, который заведует хранением токенов авторизации. Высокоуровневый - модуль авторизации, в состав которого помимо прочего входит модуль токенов. Преимущества: Локализация ошибок проще. Не тратится время на ожидание разработки всех модулей, в отличие от подхода Большого взрыва. Недостатки: Критические модули (на верхнем уровне архитектуры ПО), которые контролируют поток приложения, тестируются последними и могут быть подвержены дефектам. Ранний прототип невозможен;
  * [**Гибридный/сэндвич-подход**](https://www.ques10.com/p/38806/describe-bi-directionalsandwitch-integration-testi/) **(Sandwich/Hybrid/Bi-Directional Approach)**: Представляет собой комбинацию восходящего и нисходящего подходов. Здесь целью является средний слой, в то время как драйверы заменяют верхний слой, а заглушки нижний пока компоненты этих слоев не будут разработаны;

**Критерии начала и окончания Integration Testing**:

Обычно при выполнении интеграционного тестирования используется стратегия [ETVX](https://vijaybn.wordpress.com/2012/09/06/etvx-entry-task-validation-exit/) (Entry Criteria, Task, Validation, Exit Criteria).

* Критерии начала:
  * завершено модульное тестирование;
* На входе:
  * Software Requirements Data;
  * Software Design Document;
  * Software Verification Plan;
  * Software Integration Documents;
* Действия:
  * На основе требований высокого и низкого уровня (High and Low-level requirements) создайте test cases and procedures;
  * Комбинируйте сборки низкоуровневых модулей, которые реализуют общую функциональность;
  * Разработайте тестовую обвязку (test harness);
  * Протестируйте сборку;
  * После прохождения теста сборка объединяется с другими сборками и тестируется до тех пор, пока система не будет интегрирована как единое целое;
  * Повторите все тесты на целевой processor-based platform и получите результаты;
* Критерии выхода:
  * Успешное завершение интеграции Программного модуля на целевое Hardware;
  * Правильная работа программного обеспечения в соответствии с указанными требованиями;
* На выходе:
  * Integration test reports;
  * SVCP - Software Test Cases and Procedures;

[_Test Harness_](https://www.softwaretestinghelp.com/what-is-test-harness/)_- (тестовая обвязка): Тестовое окружение, включающее в себя заглушки и драйверы, необходимые для проведения теста. (ISTQB)_

[Test Driver и Test Stub](https://www.geeksforgeeks.org/difference-between-stubs-and-drivers/) являются искусственными заменами компонентов программы на время тестов по аналогии с моками в тестировании API. Тестовый драйвер - то, что вызывает тестируемый компонент. Тестовая заглушка - то, что возвращает тестируемому компоненту фиктивный ответ. Т.е. заглушки и драйверы не реализуют всю логику программного модуля, а только моделируют обмен данными с тестируемым модулем.

[**Тестирование интерфейса**](https://www.softwaretestinghelp.com/what-is-interface-testing/) - это тип интеграционного теста, который проверяет, правильно ли установлена ​​связь между двумя различными программными системами или их частями (модулями). Соединение, которое объединяет два компонента, называется интерфейсом. Этот интерфейс в компьютерном мире может быть чем угодно, как API, так и веб-сервисами и т. д. Тестирование интерфейса включает в себя тестирование двух основных сегментов:

* Интерфейс веб-сервера и сервера приложений
* Интерфейс сервера приложений и базы данных

**Тестирование потоков (Thread testing)** - это вид тестирования программного обеспечения, который проверяет основные функциональные возможности конкретной задачи (потока). Обычно проводится на ранней стадии фазы интеграционного тестирования. Тестирование на основе потоков является одной из дополнительных стратегий, принятых в ходе System Integration Testing. Поэтому его, вероятно, следует более правильно назвать «тестом взаимодействия потоков» (thread interaction test).

Thread Testing подразделяется на две категории:

* Однопоточное тестирование (Single thread testing) включает одну транзакцию приложения за раз;
* Многопоточное тестирование (Multi-thread testing) включает одновременно несколько активных транзакций;

Как проводить Thread Testing:

* Тестирование на основе потоков является обобщенной формой тестирования на основе сеансов (session-based testing), в котором сеансы являются формой потока, но поток не обязательно является сеансом;
* Для тестирования потока, поток или программа (небольшая функциональность) интегрируются и тестируются постепенно как подсистема, а затем выполняются для всей системы;
* На самом низком уровне оно предоставляет интеграторам лучшее представление о том, что тестировать;
* Вместо непосредственного тестирования программных компонентов требуется, чтобы интеграторы сосредоточились на тестировании логических путей выполнения в контексте всей системы;

Советы:

* Протестируйте свою многопоточную программу, многократно выполняя ее с другим набором запущенных приложений;
* Протестируйте свою многопоточную программу, активировав одновременно несколько экземпляров программы;
* Выполняйте многопоточную программу на разных моделях оборудования с различными уровнями нагрузки и рабочими нагрузками;
* Инспекция кода;
* Собирайте только ошибки и сбои, которые произошли в потоках, отличных от основного;

Источники:

* [Integration Testing](https://www.guru99.com/system-integration-testing.html)
* [Лекция 5: Модульное и интеграционное тестирование](https://intuit.ru/studies/courses/48/48/lecture/1432)
* [What is Thread Testing in Software Testing?](https://www.guru99.com/thread-testing.html)

Доп. материал:

* [ГОСТ Р 56920-2016/ISO/IEC/IEEE 29119-1:2013](https://docs.cntd.ru/document/1200134996) “D.4 Подпроцесс интеграционного тестирования”
* [Ручное интеграционное тестирование в банковском секторе. Что внутри?](https://habr.com/ru/post/595379/)
* [Интеграционные тесты в микросервисах](https://tproger.ru/articles/integracionnye-testy-v-mikroservisah/)
* [Лекция 6: Интеграционное тестирование и его особенности для объектно-ориентированного программирования](https://intuit.ru/studies/courses/48/48/lecture/1434)
* [Для чего нужно интеграционное тестирование?](https://habr.com/ru/post/556002/)
* [Component / System integration testing examples](https://www.scnsoft.com/software-testing/integration-testing-example)
* [#11 Артем и Сева. Моки(Mocks) и стабы(Stubs)](https://www.youtube.com/watch?v=VbVcGpS8HV4\&ab\_channel=Heisenbug)
* [Mocks Aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html)
* [Почему мы решили создать отдел кросс-системного тестирования](https://habr.com/ru/company/mvideo/blog/559542/)
* [Кто такой кросс-системный тестировщик и почему он не должен быть «agile»?](https://habr.com/ru/company/mvideo/blog/560030/)
* [What Is Thread Testing In Software Testing](https://www.softwaretestinghelp.com/what-is-thread-testing/)
* [Юнит-тесты vs интеграционные тесты](https://testengineer.ru/unit-testy-vs-integracionnye-testy/)
