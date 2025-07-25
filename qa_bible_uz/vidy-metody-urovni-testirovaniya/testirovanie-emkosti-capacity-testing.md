---
title: "Тестирование емкости (Capacity testing)"
---

# Тестирование емкости (Capacity testing)

_Тестирование потенциальных возможностей (capacity testing): Тип тестирования уровня производительности для оценки уровня, при котором с увеличением нагрузки (числа пользователей, транзакций, элементов данных и т.д.) элемент тестирования подвергается угрозе не обеспечивать требуемую производительность. (ГОСТ 56920)_

Capacity - базовый тест, который обычно выполняется первым. Все последующие тесты на среднее время ответа, регенерацию системы, утилизацию ресурсов нужно выполнять с оглядкой на результаты Capacity.

Тестирование емкости гарантирует, что приложение и среда могут беспрепятственно обрабатывать максимальное количество пользователей или транзакций в соответствии с требованиями к производительности, определенными в вашем соглашении об уровне обслуживания (SLA). Тестирование емкости нацелено на тестирование максимальной емкости вашей системы с точки зрения трафика, при этом обеспечивая оптимальное взаимодействие с пользователем. Общие примеры SLA по производительности включают время загрузки домашней страницы, время ответа веб-страницы, продолжительность транзакции (например, - время входа в учетную запись, время поиска и платежа). Общая цель состоит в том, чтобы идентифицировать «зону безопасности» системы и удерживать ее в максимально возможной степени. Тестирование емкости помогает определить, в какой степени она может быть расширена без ущерба для опыта конечного пользователя.

Емкость системы измеряется в rps (requests per second). Используемый подход: ступенчато повышаем нагрузку до момента, когда время ответа начнет расти экспоненциально. Экспоненциальный рост времени ответа, как правило, связан с полной утилизацией одного из ресурсов, из-за которого запросы вместо моментальной обработки выстраиваются друг за другом и ждут своей очереди на обработку.

![https://miro.medium.com/max/1344/1\*B3cAJ7GfwhpgxhUX-otz-g.png](https://miro.medium.com/max/1344/1\*B3cAJ7GfwhpgxhUX-otz-g.png)

Обратите внимание: от 1 до 12 rps процентиль времени ответа практически не изменяется. Только на 13 и 14 rps мы видим незначительный рост, который не изменяется с течением времени. Это значит, что мы практически исчерпали ресурс, в который упремся, но очередь еще не образуется. На 15 rps время ответа начало расти экспоненциально, значит это и есть наш предел. Таким образом, можно сделать вывод, что емкость =14 rps. Следующий шаг - поиск ресурса который исчерпался и не дает системе обрабатывать больше 14 rps.

![https://camo.githubusercontent.com/20dc14aa223c19464db011a8f71c8c61e426fee5849f1f2f36a3681901c7844e/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f4e466265424f7a7139685f3531375a7730754b3536396571336b306b5759324242694f5251564b4b54613147716930457553334b65594e513259354e6649376670464a65786431436143345365446858447a344265396f535f727959524f4d624e486f4a2d434b4f46696e4f4878654e483472364f6835306c677848795944787855676172714777](https://camo.githubusercontent.com/20dc14aa223c19464db011a8f71c8c61e426fee5849f1f2f36a3681901c7844e/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f4e466265424f7a7139685f3531375a7730754b3536396571336b306b5759324242694f5251564b4b54613147716930457553334b65594e513259354e6649376670464a65786431436143345365446858447a344265396f535f727959524f4d624e486f4a2d434b4f46696e4f4878654e483472364f6835306c677848795944787855676172714777)

Capacity point - точка, где перестает расти пропускная способность и увеличивается время ответа.

Исходя из этого тестирования выбираются значения для stress, load и soak/endurance тестов. Для stress берется значение близкое к capacity point, но немного меньше. Для load количество пользователей из зоны деградации.

Важно, ваша цель - не получить кол-во rps, при котором все взрывается, а понять, какой именно ресурс станет узким местом при повышении нагрузки. Поэтому, если обстреливаемый вами сервер не покрыт мониторингом - можете даже не начинать тест. Общий подход к сбору телеметрии - чем больше метрик собирается, тем лучше. Начать стоит с минимального набора:

* Основные физические, функциональные, компоненты сервера(железо): процессор, память, сеть, жесткий диск.
* Метрики операционной системы: прерывания, переключение контекстов, среднее значение загрузки системы за 1, 5 и 15 минут.
* Метрики программного обеспечения, используемого на сервере.
* По возможности постарайтесь определять в каких пропорциях ресурсы используются вашим программным обеспечением.

Источники:

* [All You Need to Know About Capacity Testing](https://www.radview.com/blog/all-you-need-to-know-about-capacity-testing/)
* [Тестируем производительность: как определить емкость системы](https://medium.com/@sheidaievkostiantyn/capacity-testing-273c87ff03b4)

Доп. материал:

* [Как оценить ёмкость сервиса и не упасть под нагрузкой](https://habr.com/ru/company/yandex/blog/481134/)
