---
title: "Покрытие девайсов"
---

# Покрытие девайсов

**Подбор девайсов (устройств) для тестирования** — это важный этап, с которым тестировщик сталкивается в начале работы над новым продуктом. Это процесс определения  минимально необходимого набора устройств для проведения тестирования продукта, учитывающий исходные данные и бюджет компании.&#x20;

Общие принципы подбора пула устройств для тестирования:

* в первую очередь ориентируемся на статистику использования (если приложение опубликовано, то статистку вашего приложения, если нет – то поискать открытые источники с рейтингами устройств и версий OS);
* по версиям операционных систем в идеале иметь все версии начиная с минимальной поддерживаемой вашим приложением, если такой возможности нет, то стоит подбирать девайсы так, чтобы покрывать важные изменения в версиях os (например, появление тёмной темы в android 10 – т.е. нужно 1 устройство до и 1 после);
* выбор, учитывая особенности приложения, характеристики реальных устройств и бюджет;
* на Android особое внимание нужно уделить производителям, так как каждый из них имеет свои особенности, такие как отсутствие google services на устройствах от huawei;
* упомянуть, что девайс на руках - не единственный вариант, частично можно протестировать эмуляторами и симуляторами и про фермы тоже не забыть.

**Первым делом запросите статистику у команды**

Если вдруг она есть, да еще и подробная – вы счастливчик и сюда заглянули скорее из любопытства. Если собственной статистики нет, но приложение уже опубликовано в магазине приложений, можно достать статистику по устройствам оттуда. Если приложение не опубликовано, не отступайте так сразу, может оказаться что таки есть, допустим, статистика сайта, но про это или не подумали, или решили что она не годится, или прошлая версия приложения, или был проект близкой тематики, но не взлетел. Любая статистика лучше ее полного отсутствия, даже если это не достоверные данные на конкретное приложение, а срез аудитории в вашей теме. Но рассматривайте эти варианты только как подсказку, а не как готовый список.

**Изучите целевую аудиторию (ЦА)**

Часто этим пунктом пренебрегают. Но он может быть важен. Приложение элитного барбершопа нацелит вас на новые модели смартфонов, флагманы с большим экраном; в женском салоне предположительно увеличится процент айфонов и уменьшится любовь к формату Plus (модели iOS увеличенного размера с приставками Max, Plus). А если ваша ЦА средний класс в регионах - тут будет большой разброс по производителям/устройствам, заметный процент старых моделей и Android в приоритете.

**Особенности самого приложения тоже могут влиять на выбор**

Пообщайтесь с менеджером или разработчиками (как вариант редкий, но существующий - изучите документацию), чтобы потом не оказалось, что в приложении графическом вы не можете протестировать поведение Pencil 2, потому что купили девайсы только с первым. Или ваше мобильное приложение сильно зависит от железа, а вы этот момент не учли и у всех ваших девайсов схожие характеристики. Узнайте и выпишите отдельно требования. Погуглите могут ли быть нюансы на разных устройствах при использовании «ваших» технологий (NFC, Fingerprint etc.).

**Готовим шаблон**

При наличии своей статистики таблицу можно заполнить сразу в чистовую. Иначе накидать черновик с которым вы потом будете работать, уточняя и редактируя.

* **Производители**. Посмотреть лидирующих (по трафику) вендоров можно на [Statcounter](https://gs.statcounter.com/vendor-market-share/mobile/russian-federation). Определиться с разработкой нужна ли поддержка версии для Huawei без гугл-сервисов;
* **Модели устройств**. Модель для каждого производителя также подбираем исходя из статистики, если нет собственной, то можно найти информацию тут: [Android (appbrain)](https://www.appbrain.com/stats/top-android-phones-tablets-by-country?country=ru) – статистика по РФ небольшая, возможно есть смысл открыть мировую на том же сайте, [iOS (mixpanel)](https://mixpanel.com/trends/#report/iphone\_models) – мировая;
* **Версия OS**. Подбирайте пул устройств так, чтобы покрыть наибольше количество версий систем. Ориентируйтесь также на статистику на сайте Statcounter: [Android](https://gs.statcounter.com/android-version-market-share/mobile-tablet/russian-federation), [iOS](https://gs.statcounter.com/os-version-market-share/ios/mobile-tablet/russian-federation);
* **Соотношение сторон экрана**. При выборе постарайтесь захватить оба значения ближе к краю (из используемых) и среднее;
* **Размер**. Нужны ли планшеты, а также отдельно варианты для Android и для iOS, т.к. у них немного отличается и подход и обозначение;
* **Особенности**. На iOS могут быть нюансы работы нативной «Назад» у моделей с монобровью/челкой, хотя физически она и расположена в зоне статус-бара. Любое приложение с ландшафтной ориентацией и полным использованием экрана (например плеер) также желательно посмотреть на моделях с бровью. Если у вас не веб, а приложение, рассчитанное не на премиум-сегмент, да еще и с записью данных на устройство - работа с SD-картой иногда вызывает вопросы, включаем в список.

Источники:

* Выбор мобильных устройств: пошаговая инструкция для начинающих QA. [Часть I](https://habr.com/ru/post/513018/)

Доп. материал:

* Выбор мобильных устройств: пошаговая инструкция для начинающих QA. [Часть II](https://habr.com/ru/post/516160/)
* [Сервисы статистики для мобильных приложений](https://habr.com/ru/post/457304/)
* [Облачные платформы для мобильного тестирования](https://habr.com/ru/post/464433/)
* [Что общего у мобильного QA и осьминога](https://habr.com/ru/company/badoo/blog/317964/)
* [Тестовая ферма из Android-устройств: как собрать, отладить и не взорвать офис](https://habr.com/ru/company/vk/blog/579210/)
