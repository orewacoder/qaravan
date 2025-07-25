---
title: "Тестирование VR программного обеспечения"
---

# Тестирование VR программного обеспечения

В виртуальной реальности пользователи полностью погружаются в сгенерированную компьютером реальность. Надев на голову дисплей или гарнитуру VR, пользователь перемещается среди виртуальных объектов на экране. Некоторые технологии виртуальной реальности, такие как Google Cardboard и Samsung Gear VR, полагаются на использование смартфона, закрепленного в очках, в то время как другие, такие как Oculus Go, представляют собой автономную гарнитуру виртуальной реальности.

Тестирование программного обеспечения в VR-индустрии трудно переоценить не только за счет внимания к рынку, но и ввиду того, что технологии нашли свое применение не только в привычном секторе развлечений, но и в отраслях, где цена багов в сценариях может быть очень высокой - например, в военно-промышленном комплексе и медицине.

Во многом тестирование VR не отличается от традиционного тестирования игр (в случае игр) или обычного ПО, но и особенностей хватает.

**Подготовка**

Перед тестированием решим вопросы с софтом для захвата изображений и видео (возможно, потребуется записывать и сам процесс тестирования со стороны), не будем объедаться и приоткроем окно в помещении. Само помещение должно быть подходящим и иметь достаточно пространства для тестов. Желательно иметь напарника, который не даст убиться об стену.

Во время тестирования будем делать перерывы и обращать внимание на следующее:

* Motion sickness и то, что может его вызывать: FPS, перемещение по сцене, воздействие на игрока;
* Высота камеры;
* Сохранение эффекта погружения;
* Корректное переключение LOD’ов и читабельность текста;
* Проходимость уровней, невозможность срезать путь;
* Интерактивные объекты: выкидывайте ключевые предметы и хватайте все, что можно.

**Как делать скриншоты?**

Поскольку при тестировании VR проектов мы, как правило, находимся не у компьютера и не видим его из-за надетого шлема, нужно заранее подумать над тем, как мы будем фиксировать различные баги, встречающиеся в игре.

В Steam предусмотрена возможность делать скриншоты с помощью комбинации кнопок на VR контроллере (на Oculus комбинация та же: кнопка меню + триггер), но данное сочетание срабатывает не всегда..

Оптимальный вариант - попросить разработчиков привязать захват скриншотов к одной из кнопок контроллера: это сэкономит вам кучу времени, которое вы потратите, если будете бегать каждый раз до компьютера, увидев новый баг. А ведь может случиться так, что вы не успеете добежать, и тогда придётся заново проходить фрагмент уровня для фиксации важного недочета.

Если же разработчики не привязали логику к кнопке, или Steam’овское сочетание не работает, придется пользоваться сторонним софтом. Мой выбор - NVIDIA GeForce Experience, т.к. с его помощью можно не только делать скриншоты, но и записывать видео с наименьшей нагрузкой на систему.

**На что еще обратить внимание?**

* Осторожнее с едой перед тестами: вам, скорее всего, придётся активно двигаться или постоянно падать куда-то в виртуальном пространстве. А если и не придётся, то любая просадка FPS, вызывающая эффект Motion Sickness (об этом чуть позже), может серьёзно подпортить день. Лучше выпейте мятного или имбирного чаю: это натуральный способ, помогающий справляться с укачиванием.
* Отдыхайте: все мы разные и по-разному переносим нагрузки, но лично мне жизненно необходим небольшой перерыв после каждых 25-30 минут в VR. Важно давать глазам и вестибулярному аппарату восстановиться после всего пережитого в виртуальных мирах.
* Свежий воздух: обеспечьте приток свежего воздуха, открыв окно или хотя бы направив на себя вентилятор. Это поможет избежать укачивания.

**Насколько комфортно играть?**

**Motion Sickness (укачивание)**

Тестирование VR продуктов - увлекательное приключение, в том числе и потому, что некоторые неоптимизированные проекты легко могут дать вам нагрузки похлеще тех, что испытывают на себе космонавты, готовясь к полету.

Motion Sickness или, по-нашему, укачивание, возникает при рассинхронизации вестибулярного аппарата и органов зрения. Проще говоря, вы стоите на месте, а в VR вас начинает куда-то тащить неведомая сила. Подобный эффект также может быть вызван низкой частотой FPS.

Чтобы помочь разработчикам выпустить продукт, от которого людям не будет физически плохо, вам во время тестов следует обратить внимание на следующее:

* **FPS**: попросите разработчиков добавить виджет (в версии 4.20.2 значения, выводимые командой stat FPS - нечитабельны в шлеме), показывающий частоту кадров в секунду, чтобы оперативно замечать проблемные участки локаций, эффекты, события и фиксировать частоту кадров на скриншотах.
* **Перемещение игрока**: главная причина укачивания в VR проектах. Прислушайтесь к своим ощущениям во время перемещения по уровню. Если вам становится плохо, обязательно указывайте это в отчете. Возможно, разработчикам следует предусмотреть альтернативные способы передвижения или добавить эффекты, уменьшающие укачивание (например, небольшое затемнение экрана при телепортации).
* **Воздействия на игрока**: крайне нежелательно воздействие на игрока сторонних сил, затрагивающее камеру. Например, отбрасывающие монстры, трясущаяся перед обрушением пещера и.т.п. В одном из проектов, в разработке которого я принимал участие, нужно было "вытягивать" игрока со дна моря после 5 минут нахождения под водой, что непременно привело бы к укачиванию, т.к вытянуть кого-то с глубины \~140 метров - задача долгая. Поломав немного голову над тем, как угодить клиенту, которому обязательно нужен был подъём вверх, и игрокам, которые были бы от этого не в восторге, мы приняли решение показывать процесс подъёма в течение нескольких секунд, а потом включать затемнение экрана.

**Высота камеры**

Различные VR гарнитуры могут по-разному определять рост игрока, из-за этого высота "глаз", которыми игрок смотрит на виртуальный мир, может значительно отличаться. Проблемы возникают, когда разработчики, делая проект, например, на HTC Vive, до последнего не тестируют билд на Oculus, думая, что они верно прикинули рост персонажа для всех платформ. Однако зачастую решает каждый лишний или недостающий сантиметр роста игрока. Именно поэтому стоит обращать внимание, на какой высоте находится ваша камера при использовании различных девайсов. Это позволит избежать не только неловких моментов с заглядыванием игрока за потолок в небольших помещениях, но и сохранит задуманный разработчиками комфорт от игры. Согласитесь, лучше, когда интерактивный объект находится, как предполагалось, на уровне пояса, а не на уровне колен. Во втором случае игроку будет не до интерактива: всё внимание будет приковано к ноющей пояснице.

Помните, что продуктом, который вы тестируете, будут пользоваться разные люди. Для имитации небольшого роста я обычно играю сидя, а вот для проверки ситуации с высоким игроком придётся обратиться за помощью к самому большому другу или изобрести какое-нибудь нехитрое приспособление типа подставки :) Убедитесь, что рост игрока не ломает существующие механики и не дает ему преимущества.

**Погружение**

Виртуальная реальность способна обеспечить потенциально более глубокий уровень погружения игрока в происходящие в шлеме события за счёт отслеживания положения головы и рук (контроллеров). Однако погружение - понятие очень хрупкое и легко может быть разрушено неопытностью разработчиков. Как этого избежать?

Обращайте внимание на габариты предметов, которые могут по-другому восприниматься в виртуальной реальности. Габариты, отличные от реальных, могут негативно сказаться на чувстве погружения.

Интерактивные объекты должны иметь верную коллизию, корректно лежать на других объектах и иметь реалистичный вес при взаимодействии с ними других объектов.

Положение виртуальных рук игрока должно соответствовать положению рук пользователя и иметь правильный угол наклона.

**Визуальная часть**

Значение, отвечающее за то, сколько каждый объект занимает на экране места, в виртуальной реальности отличается от того же значения при обычном запуске игры. Это может привести к тому, что переключение [LOD’ов](https://docs.unrealengine.com/4.27/en-US/WorkingWithContent/Types/StaticMeshes/HowTo/AutomaticLODGeneration/) объекта, которое как раз опирается на размер объекта на экране, может работать не так, как в редакторе и тестах не в VR.

Для проверки LOD’ов я пользуюсь консольной командой show LODColoration, окрашивающей объекты в цвета, соответствующие текущим уровням детализации. Подробнее - [в документации](https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/LevelEditor/Viewports/ViewModes/).

Помимо детализации объектов следует обратить внимание на читабельность текста. Часто бывает, что отлично выглядящий в редакторе текст невозможно читать в VR.

**Проходимость**

Некоторые разработчики считают, что обычные коллизии и невидимые стены могут остановить игроков в VR от попадания в запрещённые места и срезания пути. К сожалению, с виртуальной реальностью, в отличие от обычных игр, этот приём не работает.

Как пользователи могут сломать систему перемещения и как это предотвратить?

Во-первых, всегда пытайтесь попадать в недоступные места, перемещаясь физически в пределах игрового пространства. Например, есть ворота, для открытия которых нужно убить 100 кабанов, сделать 5 квестов и только после этого получить заветный ключ. Телепортируйтесь вплотную к воротам и просто сделайте несколько шагов в реальном мире в направлении ворот и, вероятно, вы окажетесь за ними и сможете идти дальше, миновав кабанов.

Таким же образом падайте во все пропасти: даже если разработчики запретили телепортироваться в яму, поставив невидимую стену, следует быть уверенным, что случайно зашедшие туда игроки не останутся сидеть на дне, а умрут от падения (а ещё лучше, вообще не будут долго падать: см пункт motion sickness).

Вышеупомянутые невидимые стены также должны быть проверены: игрок не должен иметь возможность срезать путь независимо от выбранного режима перемещения.

Ещё одна хитрость, к которой игроки могут прибегнуть для преодоления тех самых ворот, проверяется так: подойдите вплотную к воротам и просуньте за них руку, которой можно телепортироваться. Сможете переместиться за препятствие?

**Интерактив**

Свобода действий, которую игроки имеют в VR, может легко сломать любую запланированную разработчиками последовательность. Чтобы этого не произошло, во время тестов вы должны основательно покидаться вещами: выкидывайте необходимые для прохождения объекты, бейте их другими предметами, чтобы они улетали в пропасть или залетали в недоступные места. Качественный продукт сможет пройти до конца даже самый буйный игрок.

Обязательно попробуйте хватать зафиксированные интерактивные объекты (рычаги, штурвалы и.т.п) с разных сторон: они не должны дёргаться в момент, когда вы захватываете их. Рывок в начале взаимодействия связан, как правило, с тем, что разработчики забывают учитывать при вычислении нового положения объекта точку, в которой игрок взял объект, компенсируя тем самым рывок объекта в сторону руки.

**Проверка производительности**

На этапе проверки производительности необходимо отрегулировать уровень кадровой частоты (frame per second, FPS) на протяжении всего сценария приложения. Этот показатель критически важен для VR приложений, так как его стабильный уровень обеспечивает тот самый «эффект погружения». В играх, запускаемых на ПК или консоли, кратковременная просадка FPS может остаться незамеченной, но в VR это может разрушить ощущение присутствия, а также вызвать головокружение.

Для VR-приложений золотой стандарт на гарнитуре Oculus Quest FPS 90. Однако, все платформы размещения VR-контента, кроме Oculus Store, не требуют сурового соответствия гайдлайнам, и поэтому допускают контент, который не обязуется соблюдать стабильный fps или иметь определенные правила взаимодействия с пользователем, модерируется только спорный контент, который и так подпадает под общие правила игровых площадок.

При тестировании можно проверять уровень вручную или с помощью алгоритма.

Задача алгоритма - проверка всех наиболее вероятных (вероятность основана на расположении интерактивных и статичных предметов, возможных вариантов взаимодействия с ними) локаций вызывающих просадки fps, места и моменты появления эффектов или даже спавна предметов, когда появляется ранее отсутствующая геометрия.

В случае если такой алгоритм, оказавшись в некоторой точке или совершив в ней действие, получит долговременное понижение кадровой частоты, он пишет в лог положения, цепочку событий и предметов, которые привели к этому и прикладывает скриншот игровой камеры, чтобы затем разработчик мог легко повторить требуемые действия.

Если у нас очень большая локация, то алгоритм использует поведенческую модель, в которой за прохождение сценария алгоритм зарабатывает определенное число очков, взаимодействия с предметами в нужном порядке, находясь в локациях наиболее вероятных проблем с fps. Для всех нештатных ситуаций и просадок fps, получаемые очки максимальны и стимулируют алгоритм повторять действия, приводящие к ошибкам приложения.

**Пользовательское тестирование**

Тестирование VR-приложения может быть усилено за счет теста на специальных фокус-группах, особенно если приложение рассчитано на массового потребителя. Этот этап позволяет понять, насколько хорошо в целом идея принимается рынком.

Пользователям ставятся определенные задачи, которые нужно выполнить внутри приложения. Все действия, реакции и эмоции записываются на аудио и видео для дальнейшего анализа на предмет необходимых корректировок.

**Что еще учитывать при тестировании**:

* Ограничения по “железу”;
* Ограничения устройств вывода;
* Разнообразие контроллеров;
* Калибровка устройств;
* Целевая аудитория (в частности, продукт рассчитан на новичка или опытного VR юзера?);
* Индивидуальные особенности психики и организма;
* Конфиденциальность данных об окружении пользователей и их действиях.

Источники:

* [Особенности тестирования VR продуктов](https://ue4daily.com/blog/VR-QA-howto)
* [Как происходит тестирование VR программного обеспечения](https://tproger.ru/articles/kak-proishodit-testirovanie-vr-programmnogo-obespechenija/)
* [Секция QA: Особенности тестирования VR/AR](https://www.youtube.com/watch?v=wYJ2wuHV2jA)

Доп. материал:

* [Тестирование VR - Испытательная Троица (русский перевод)](https://www.youtube.com/watch?v=l5xgaSW6nRE)
* [VR App Testing Guide - Automation and Performance](https://developer.oculus.com/resources/automation-performance-testing/)
* [A Guide to Virtual Reality Application Testing](https://www.qaoncloud.com/vr-app-testing/)
