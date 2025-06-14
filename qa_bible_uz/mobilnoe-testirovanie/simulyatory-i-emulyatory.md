---
title: "Симуляторы и эмуляторы"
---

# Симуляторы и эмуляторы

**Реальное устройство** позволяет запускать мобильные приложения и проверять его функциональность. Тестирование
реального устройства гарантирует, что ваше приложение будет работать без проблем на клиентских телефонах. Когда
устройств становится слишком много, их иногда собирают в так называемые фермы устройств. Реальными устройствами также не
обязательно обладать, сейчас широко распространены облачные решения.

**Эмулятор (emulator)** - это устройство, компьютерная программа или система, которая принимает те же самые входные
данные и выдает те же самые выходные данные, что и данная система. (IEEE 610)  
Эмулятор пытается дублировать устройство - это полноценная виртуалка (контейнер) со своей сетевой картой и диском, то
есть представляет собой полную повторную реализацию конкретного устройства или платформы изолированно внутри нашей
хост-системы. Одним из недостатков такого подхода является невысокая скорость работы и повышенные требования к
потреблению ресурсов. Примером служит эмулятор в Android Studio, хотя можно найти и неофициальные эмуляторы и образы
Android-устройств.

**Симулятор (simulator)** - это устройство, компьютерная программа или система, используемая в тестировании, работающая
или ведущая себя аналогично заданной при тех же входных данных. (IEEE 610, DO178b)  
Симулятор пытается дублировать только поведение устройства. Как правило, симулятор - это имитация лишь отдельных
свойств, возможностей или функций симулируемой системы, причем не в полном объеме, а только в том, в каком это
необходимо в рамках тех задач, которые были поставлены перед симулятором. Вы как будто бы работаете с настоящим
устройством, но при этом под капотом оно является лишь ПО-имитацией, не работающей изолированно от нашей системы и
использующей общий диск и сеть. Примером служит симулятор в XCode.

Доп. материал:

* [Как тестировать на эмуляторе (android studio)](https://www.youtube.com/watch?v=ic-sniUEYw4)
* [Как тестировать на симуляторе. Основы тестирования на симуляторе Iphone. Simulator ios xcode](https://www.youtube.com/watch?v=LimscelXdFI)
