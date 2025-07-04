---
title: "Тестирование покупок в Android-приложениях"
---

# Тестирование покупок в Android-приложениях

С помощью набора API-интерфейсов разработчики могут предлагать два типа продуктов:

* Управляемые продукты в приложении (Managed in-app products): Как следует из названия, этими продуктами управляет разработчик, и они делятся на расходуемые и нерасходуемые (consumable and non-consumable). Расходуемый продукт обычно носит временный характер, и после его использования его можно снова купить, в то время как нерасходуемый продукт - это одноразовое преимущество, которое пользователь будет продолжать получать в вашем приложении$
* Подписки (Subscriptions): Эти продукты имеют срок действия (дни, месяцы, недели, годы) и автоматически продлеваются в конце каждого платежного цикла. Если подписка не продлевается, продукт перестает быть активным для пользователя.

Официальная документация очень полезна, когда дело доходит до первых шагов по добавлению встроенных продуктов в ваше приложение. В частности, тренинг «[Продажа продуктов в приложениях](https://developer.android.com/training/in-app-billing/index.html)» хорошо структурирован и проведет вас через каждый необходимый шаг:

* Добавление библиотеки Play Billing в приложение (также ознакомьтесь с [этой статьей](https://medium.com/exploring-android/exploring-the-play-billing-library-for-android-55321f282929) Джо Берча);
* Настройка продуктов в консоли Google Play;
* Тестирование встроенных продуктов в вашем приложении.

Согласно документации по тестированию, у нас есть два способа тестирования покупок:

* Статические ответы от Google Play: Используя ограниченный набор ID продуктов, вы можете запускать статические ответы из Google Play, чтобы проверить, правильно ли ваше приложение обрабатывает все возможные состояния. Вы должны использовать это при интеграции Play Billing Library в наше приложение или для инструментального тестирования;
* Тестовые покупки: Аккаунт Google, внесенный в белый список как license-test в Play Console, сможет совершать покупки без фактической оплаты. Вы можете использовать это, когда приложение отправляется в QA или для общего тестирования.

Используя так называемую In-app Billing Sandbox, мы можем разрешить доступ к тестовым покупкам. Это самое близкое к реальным покупкам, за несколькими заметными исключениями:

* С вас не взимается никакая сумма за продукт, который вы покупаете;
* Если вы покупаете подписку, расчетный период повторяется ежедневно, независимо от продолжительности, настроенной в Play Console;
* У вас есть ручное управление откликом для каждой покупки.

Последний пункт особенно интересен, потому что у нас есть два способа настройки поведения тестовой покупки.

Первый метод позволяет точно контролировать поведение лицензирования для всех тестировщиков: например, оставив RESPOND\_NORMALLY, мы получим поведение, похожее на реальное. Второй метод, с другой стороны, позволяет грубо контролировать реакцию поддельной кредитной карты: вы можете решить, будет ли карта всегда одобрять покупку или всегда отклонять ее. Интуитивно понятно, что этот второй метод может быть настроен каждым тестировщиком.

![https://miro.medium.com/max/3948/1\*lOsmv4znt1BJZz0S4f8Ptw.png](https://miro.medium.com/max/3948/1\*lOsmv4znt1BJZz0S4f8Ptw.png)

![https://miro.medium.com/max/1376/1\*3OBb98gVTQg4L3tmvk1OYQ.png](https://miro.medium.com/max/1376/1\*3OBb98gVTQg4L3tmvk1OYQ.png)

Чтобы получить право на пробную покупку, необходимо пройти несколько шагов:

* Ваш APK должен быть загружен в Play Console (черновики больше не поддерживаются);
* Добавьте license testers в Play Console;
* Пригласите тестировщиков присоединиться к группе альфа-/бета-тестирования (если есть);
* Подождите 15 минут, затем начните тестирование.

Звучит достаточно просто, верно? Документация также очень обнадеживает: “Легко настроить пробные покупки”.

Тестирование, согласно реальной жизни. Вы неукоснительно следите за документацией, ждете 15 минут (на всякий случай 30), запускаете тестирование и… возникает ошибка. Что теперь? Оказывается, документация довольно оптимистично объясняет необходимые шаги для тестирования встроенных покупок. Согласно [этому ответу StackOverflow](https://stackoverflow.com/questions/13117081/the-item-you-requested-is-not-available-for-purchase/35132936#35132936), который, в свою очередь, представляет собой набор различных проб и ошибок других пользователей, а также мой личный опыт, на самом деле существует более 10 условий, которые вам необходимо выполнить или учесть, прежде чем вы сможете правильно использовать тестовые продукты:

* Ваше приложение опубликовано (то есть не находится в черновике);
* APK должен быть опубликован (рабочий, альфа- или бета-каналы);
* APK, который вы загрузили, соответствует тому, который вы тестируете, когда речь идет о коде версии, имени версии и подписи хранилища ключей (этот пункт, по моему опыту, не нужен);
* При тестировании на устройстве вы используете учетную запись, отличную от той, которая привязана к Play Console (т. е. не учетную запись разработчика);
* Инструкции ждать 15 минут слишком оптимистичны, так как распространение изменений из Play Console может занять до 2 часов;
* Дважды проверьте, соответствует ли артикул, который вы используете в приложении, артикулу продукта, который был настроен в Play Console;
* Дважды проверьте, не пытаетесь ли вы приобрести уже имеющийся продукт или уже активную подписку;
* Дважды проверьте, активировали ли вы свои продукты в Play Console: по умолчанию продукты в консоли деактивированы, и вам нужно активировать их вручную;
* Если вы используете альфа-/бета-каналы, убедитесь, что учетная запись, которую вы тестируете, входит в группу тестирования (т. е. нажала «Стать тестировщиком» после перехода по URL-адресу подписки);
* Если вы используете разновидности ABI, такие как arm-v7, arm-v8 и т. д., убедитесь, что APK, который вы используете для тестирования, содержит все библиотеки ABI;
* Убедитесь, что при получении Intent с помощью getBuyIntent вы передаете правильный тип продукта, т. е. inapp, если вы покупаете управляемые продукты в приложении, или подписки, если вы покупаете подписки;
* Если вы используете открытый ключ для повышения безопасности, убедитесь, что он совпадает с ключом в Play Console, поскольку со временем он может меняться (см. [здесь](https://stackoverflow.com/questions/14600664/android-in-app-purchase-signature-verification-failed/14647065#14647065));
* Убедитесь, что сервисы Google Play обновлены на тестовом устройстве, перейдя на страницу [сервисов Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms\&hl=en) в Play Store.

Как видите, песочница далеко не проста, когда дело доходит до реального использования, но, по крайней мере, теперь у нас есть несколько дополнительных подсказок, чтобы начать поиск решения!

Итак, вы должны тестировать свою интеграцию Google Play Billing Library на протяжении всей разработки. Для тестирования на этапе разработки мы рекомендуем использовать тестировщиков лицензий (license testers) для выполнения сценариев, описанных в этом разделе. Сведения о настройке license testers см. в разделе [Проверка выставления счетов в приложении с помощью лицензирования приложений](https://support.google.com/googleplay/android-developer/answer/6062777).

Использование license testers дает следующие преимущества:

* Обычно Платежная библиотека Google Play блокируется для приложений, которые не подписаны (signed) и не загружены в Google Play. Тестеры лицензий могут обойти эту проверку, что означает, что вы можете загружать приложения для тестирования, даже для приложений, использующих отладочные сборки с отладочными подписями, без необходимости загрузки в новую версию вашего приложения. Обратите внимание, что имя пакета должно совпадать с именем приложения, настроенного для Google Play, а учетная запись Google должна быть тестером лицензии для учетной записи Google Play Console;
* Тестировщики лицензий имеют доступ к тестовым методам оплаты, которые позволяют избежать взимания с тестировщиков реальных денег за покупки. Вы также можете использовать тестовые способы оплаты для имитации определенных ситуаций, например отклонения платежа;
* Тестировщики лицензий могут быстро протестировать функции подписки.

Вот некоторые дополнительные сведения о процессе тестовой покупки:

* Для тестовых покупок используется тот же процесс покупки приложений, что и для реальных покупок;
* Налоги не рассчитываются для пробных покупок;
* Google Play указывает на пробную покупку, отображая уведомление в центре диалогового окна покупки.

Вы можете подтвердить учетную запись, которая совершает покупку, развернув диалоговое окно покупки. Обратите внимание на следующее:

* Тестовые учетные записи должны быть на Android-устройстве тестировщика;
* Если на устройстве имеется более одной учетной записи, покупка осуществляется с использованием учетной записи, с которой было загружено приложение;
* Если ни одна из учетных записей не загрузила приложение, покупка осуществляется с помощью первой учетной записи.

Прежде чем распространять свое приложение, вы можете использовать [тестовые версии](https://support.google.com/googleplay/android-developer/answer/9845334?visit\_id=637775040806604937-1685107894\&rd=1) (test track) Google Play для дополнительной проверки. Например, вы можете использовать тестовые версии, чтобы ваша группа контроля качества проверяла новый выпуск. С помощью тестовых версий пользователи могут установить ваше приложение из Google Play и протестировать версию вашего приложения, которая еще не является общедоступной. Пользователи могут совершать реальные покупки, используя любой из своих способов оплаты в Google Play.

_Примечание. Покупки пользователей в тестовых версиях приводят к фактическому списанию средств с учетных записей пользователей, если только пользователь не является license tester._

Чтобы протестировать интеграцию с биллинговой библиотекой Google Play с помощью тестовых версий, выполните следующие действия:

* Опубликуйте свое приложение в test track. Обратите внимание, что после публикации приложения в версии для тестирования может пройти несколько часов, прежде чем оно станет доступным для тестировщиков.
* Убедитесь, что каждый тестировщик подписался на тест вашего приложения. На URL-адресе вашего теста ваши тестировщики увидят объяснение того, что значит быть тестировщиком, а также ссылку для регистрации.

Вы можете протестировать интеграцию на любом аппаратном устройстве с Android 1.6 или более поздней версии. На устройстве должна быть установлена ​​самая актуальная версия приложения Google Play. Общие сведения о том, как настроить устройство для использования в разработке приложений для Android, см. в разделе [Использование аппаратных устройств](https://developer.android.com/studio/run/device).

_Примечание. Несмотря на то, что тестеры лицензий рекомендуются для разработки и тестирования, убедитесь, что вы также тестируете свое приложение, используя учетные записи, не являющиеся тестировщиками лицензий, время от времени или при внесении крупных изменений. Нелицензионное тестирование помогает гарантировать, что ваше приложение не полагается на тестирование конкретной логики, такой как продолжительность продления (renewal durations)._

_Примечание. Пользователи в testing tracks также могут быть license testers для вашего приложения._

**Тестирование одноразовых продуктов**

Тестирование расходных материалов (**consumable products**):

* Успешная покупка, когда пользователь получает товар. С помощью license tester Test instrument вы можете настроить оплату как всегда успешную;
* Покупка, при которой оплата не была списана, и пользователь не должен получить товар. С помощью license tester вы можете использовать Test instrument, всегда отклоняющий оплату;
* Убедитесь, что товары можно покупать несколько раз.

Вы также должны убедиться, что покупки подтверждены должным образом, как описано в разделе «[Обработка покупок](https://developer.android.com/google/play/billing/integrate#process)». Для покупок у license tester покупка будет возвращена через 3 минуты, если ваше приложение не подтвердит покупку, и вы получите электронное письмо об отмене. Вы также можете проверить вкладку «Заказы» в консоли Google Play, чтобы узнать, был ли возмещен заказ через 3 минуты.

Тестирование **non-consumable products**: следует тестировать так же, как и consumable products, но вы должны убедиться, что элемент нельзя купить снова в вашем приложении. Обязательно проверьте подтверждение покупки как для consumable products, так и для non-consumable products (если применимо), поскольку логика обработки каждого из двух типов покупок различается.

_Примечание. Чтобы совершить несколько тестовых покупок одного и того же non-consumable product, вы можете вернуть средства и отозвать покупки с помощью Google Play Console._

**Тестирование функций подписки**

Флоу покупки одноразовых продуктов и подписок аналогичны, но у подписок есть дополнительные сценарии, такие как успешное или отклоненное продление подписки. Чтобы протестировать продление, вы можете использовать Test instrument, always approves and Test instrument, always declines payment methods, доступные для license testers. Используйте эти инструменты оплаты для тестирования сценариев, выходящих за рамки успешного сценария подписки.

Как и в случае с одноразовыми продуктами, вы также должны убедиться, что покупки подтверждены должным образом, как описано в разделе «Обработка покупок». Для покупок у тестировщиков лицензий покупка будет возвращена через 3 минуты, если ваше приложение не подтвердит покупку, и вы получите электронное письмо об отмене. Вы также можете проверить вкладку «Заказы» в Google Play Console, чтобы узнать, был ли возвращен заказ через 3 минуты.

Периоды продления: Тестовые подписки продлеваются быстрее, чем фактические подписки, а тестовые подписки можно продлевать не более шести раз. В следующей таблице указано время продления тестирования для подписок различной продолжительности. Эти времена являются приблизительными. Вы можете увидеть небольшие отклонения в точном времени события. Чтобы компенсировать вариацию, вызывайте API для просмотра текущего состояния после каждой даты истечения срока действия подписки.

| Срок реальной подписки (**Production subscription period**) | Продление тестовой подписки (**Test subscription renewal**) |
| ----------------------------------------------------------- | ----------------------------------------------------------- |
| 1 неделя                                                    | 5 минут                                                     |
| 1 месяц                                                     | 5 минут                                                     |
| 3 месяца                                                    | 10 минут                                                    |
| 6 месяцев                                                   | 15 минут                                                    |
| 1 год                                                       | 30 минут                                                    |

Функции подписки на основе времени, такие как бесплатные пробные версии, также сокращены для тестирования. В следующей таблице указаны периоды тестирования, связанные с функциями подписки на основе времени:

| **Feature**                                          | **Test period**                       |
| ---------------------------------------------------- | ------------------------------------- |
| Подтверждение покупки                                | 5 минут                               |
| Бесплатная пробная версия                            | 3 минуты                              |
| Начальный ценовой период (Introductory price period) | То же, что и subscription test period |
| Льготный (Grace) период (3- и 7-дневный)             | 5 минут                               |
| Account hold                                         | 10 минут                              |
| Пауза (1 месяц)                                      | 5 минут                               |
| Пауза (2 месяц)                                      | 10 минут                              |
| Пауза (3 месяц)                                      | 15 минут                              |

Разверните [следующий раздел](https://developer.android.com/google/play/billing/test#test\_cases), щелкнув Показать/Скрыть, чтобы отобразить сценарии тестирования, которые следует использовать для проверки интеграции подписки.

**Тестирование промокодов (промоакций)**

Вы можете использовать Google Play Console для [создания кодов для собственного тестирования](https://support.google.com/googleplay/android-developer/answer/6321495). Имейте в виду, что вы можете создавать только 500 промокодов в квартал для всех управляемых продуктов в приложении.

Вам следует протестировать следующие сценарии погашения (Redemption) промокода:

* При вводе промокода в диалоговом окне покупки, запущенном в вашем приложении;
* При активации промокода в приложении Google Play Store;
* При активации промокода на странице https://play.google.com/store с помощью кнопки «Активировать» на панели навигации слева.

В этих сценариях вы должны тестировать коды всеми возможными способами. Мы рекомендуем выполнить как минимум следующие тесты:

* Выкуп до установки приложения;
* Выкуп, пока приложение работает на переднем плане. Обратите внимание, что для этого теста вам понадобится другое устройство для тестирования с помощью приложения Google Play Store. Обязательно протестируйте погашения с разных экранов в своем приложении;
* Погашение с многооконным режимом, в котором ваше приложение и приложение Google Play Store отображаются одновременно.

Для каждого теста убедитесь, что элемент правильно обнаружен и что пользователь уведомлен.

Источники:

* [Testing in-app purchases on Android](https://medium.com/bleeding-edge/testing-in-app-purchases-on-android-a6de74f78878)
* [Test your Google Play Billing Library integration](https://developer.android.com/google/play/billing/test)

Доп. материал:

* [Более подробно о подписках](https://developer.android.com/google/play/billing/subscriptions)
* [Дмитрий Макаренко - Тестирование платежей в Android-приложении](https://www.youtube.com/watch?v=U9r-uOI7g3Q\&ab\_channel=Heisenbug)
