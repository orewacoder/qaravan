---
title: "Архитектура iOS Application"
---

# Архитектура iOS Application

Приложения представляют очень сложное взаимодействие между вашим кодом и системными фреймворками. Системный фреймворки предоставляют базовую инфраструктуру, с которой все приложения должны работать, а вы пишете код для настройки этой инфраструктуры.

Фреймворки iOS основаны на таких шаблонах проектирования, как MVC и делегирование.

**Жизненный цикл iOS приложения**

Точкой входа для каждого C-приложения является функция main. Во время запуска UIApplicationMain функция устанавливает несколько ключевых объектов и запускает приложение. Сердцем каждого iOS приложения является объект UIApplication, задача которого - облегчить взаимодействие между системой и другими объектами приложения. Рисунок ниже показывает объекты, обычно встречающиеся в iOS приложениях. А еще ниже представлено описание роли каждого объекта в приложении. Первое что стоит отметить - iOS приложения используют архитектуру Model-View-Controller. Эта архитектура имеет решающее значение для создания приложений, которые могут работать на различных устройствах с различными размерами экрана.

![https://i1.wp.com/blog.justdev.org/wp-content/uploads/2016/05/core\_objects\_2x.png?ssl=1](https://i1.wp.com/blog.justdev.org/wp-content/uploads/2016/05/core\_objects\_2x.png?ssl=1)

* Объект UIApplication: UIApplication управляет циклом обработки событий и разными типами поведения приложений высокого уровня. Он также сообщает о ключевые переходах приложения и некоторых специальных событиях (например, входящих уведомлений Push) своему делегату, который представляет собой пользовательский объект. Используйте UIApplication «как есть», без подклассов.
* Объект UIDelegate: App Delegate является сердцем вашего кода. Этот объект работает в связке с объектом UIApplication и служит для обработки инициализации приложения, перехода между состояниями, а также обеспечивает множество событий в приложениях высокого уровня.
* Documents и Data Model Objects: Модель данных может быть специфической для вашего приложения. Пример: банковская база данных и приложения со списком фильмов будут иметь разную модель данных. Приложения могут также использовать объекты Documents (подклассы UIDocuments) для управления моделями данных. Объекты Documents необязательны, но предлагают удобный способ группировать данные в пакетах файлов.
* Объект View Controller: Объект View Controller служит для управления отображением контента вашего приложения на экране. Класс UIViewController является базовым классом для всех объектов View Controller. Он предоставляет функциональные возможности по умолчанию для загрузки представления, показывая их, вращая их в ответ на поворот устройства, а также несколько других стандартных систем поведения.
* Объект UIWindow: Выводит и координирует один или несколько View на экране. Большинство приложений имеют только один Window, в котором представлен весь контент приложения на главном экране. Но могут потребоваться дополнительный Window. Например, для отображения вспомогательных элементов на внешнем экране.
* Объекты View, объекты Controls, объекты Layer: Объекты View обеспечивают визуальное представление содержимого вашего приложения. View является объектом, который рисует содержимое в назначенной прямоугольной области и реагирует на события в пределах этой области. Объекты Controls представляют из себя специальные типы View, отвечающие за реализацию привычных объектов интерфейса: кнопки, текстовые поля, переключатели и т. д. Объекты Layer - это объекты данных, которые представляют из себя визуальный контент.

Приложение в главном цикле обрабатывает все пользовательские события. Главный цикл работает в главном потоке приложения. На изображении ниже показана схема работы главного цикла.

![https://i2.wp.com/blog.justdev.org/wp-content/uploads/2016/05/event\_draw\_cycle\_a\_2x.png?ssl=1](https://i2.wp.com/blog.justdev.org/wp-content/uploads/2016/05/event\_draw\_cycle\_a\_2x.png?ssl=1)

В любой момент времени ваши приложение находятся в каком либо из перечисленных ниже состояний. Система меняет состояния вашего приложения в ответ на происходящие события. Например, когда пользователь нажимает кнопку Home, или поступает входящий вызов, или что либо еще - приложения в ответ на все это меняют свое состояние.

* Not Running: Приложение не запущено, либо запущенно но прервано системой;
* Inactive: Приложение работает, но в настоящий момент ничего не делает (это может быть связано с выполнением другого кода). Приложение, как правило, остается в этом состоянии очень мало времени и переходит в другое состояние;
* Active: Нормальный обычный режим работы приложения на переднем плане;
* Background: Приложение находится в фоне, но работает. Большинство приложений входят в это состояние на короткое время и позже приостанавливаются. Но если необходимо дополнительное время для работы в бекграунде, приложение может оставаться в этом состоянии;
* Suspended: Приложение работает в фоне, но не выполняет никакой код. Система перемещает приложение в это состояние автоматически и не предупреждает об этом. При условии малого количества памяти, система может не предупреждая закрыть приложения в этом состоянии для освобождения памяти.

![https://i1.wp.com/blog.justdev.org/wp-content/uploads/2016/05/high\_level\_flow\_2x.png?ssl=1](https://i1.wp.com/blog.justdev.org/wp-content/uploads/2016/05/high\_level\_flow\_2x.png?ssl=1)

Большинство переходов между состояниями обеспечивается соответствующими методами в AppDelegate.

Приложение должно быть готово к завершению в любое время. Завершение - это нормальная часть жизненного цикла. Система обычно выключает приложения, для очищения памяти и подготовки к запуску других приложений, которые запущены пользователем, но система также может выключить приложения , которые некорректно или не отвечающим на события своевременно.

Suspended приложения не получают уведомления о завершении. Система убивает процесс и восстанавливает соответствующую память. Если приложение запущено в фоне и не отвечает, система вызовет applicationWillTerminate: чтобы приложение подготовилось к выключению. Система не вызывает метод когда устройство перезагружается.

Система создает приложение в основном потоке и вы можете создавать отдельные потоки, если вам это необходимо, для решения каких либо задач. Для приложений iOS, предпочтительным методом является использование Grand Central Dispatch (GCD), оперирующим с объектами, и другими интерфейсами асинхронного программирования не создавая и управляя потоками собственноручно. Такие технологии как GCD позволяют определить работу, которую вы хотите сделать и в каком порядке вы хотите ее сделать, но пусть система решает как лучше выполнить эту работу для CPU. Когда система управляет вашими потоками вам становиться легче писать код, обеспечивается большая корректность кода, а так же увеличивает общую производительность.

![https://i0.wp.com/blog.justdev.org/wp-content/uploads/2016/05/IOSLifeCycle.png?ssl=1](https://i0.wp.com/blog.justdev.org/wp-content/uploads/2016/05/IOSLifeCycle.png?ssl=1)

Источники:

* [Preworking 4: жизненный цикл iOS приложения](https://blog.justdev.org/preworking/preworking-4-ios-app-lifecicle/)

Доп. материал:

* [Официальная документация](https://developer.apple.com/documentation/uikit)
* [Общее представление об архитектуре Clean Swift](https://habr.com/ru/post/453986/)
