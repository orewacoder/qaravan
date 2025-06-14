---
title: "QA/QC/Testing"
---

# QA/QC/Testing

* _**Обеспечение Качества - это совокупность запланированных и систематических процессов и действий поддержки, необходимых для обеспечения надлежащего уровня уверенности в том, что процесс или рабочий продукт удовлетворяет установленным техническим требованиям или требованиям к качеству. Достигается это сочетанием методов, стандартов, инструментов и навыков, признанных как соответствующая практика. Процесс Обеспечения Качества использует результаты тестирования и другую информацию для анализа, оценки и информирования о любой проблеме (включая любой риск) в проектировании, планировании или выполнении процессов программной инженерии. (ГОСТ 56920)**_
* _**Контроль качества (quality control): Рабочие методы и активности, нацеленные на выполнение требований к качеству, являющиеся частью управления качеством. (ISO 8402)**_
* _**Тестирование (testing): Процесс, содержащий в себе все активности жизненного цикла, как динамические, так и статические, касающиеся планирования, подготовки и оценки программного продукта и связанных с этим результатов работ с целью определить, что они соответствуют описанным требованиям, показать, что они подходят для заявленных целей и для определения дефектов. (ISTQB)**_
* _**Тестирование (testing): Набор операций, проводимых для обеспечения выявления и/или оценки свойств одного или более элементов тестирования. Примечание - Действия тестирования могут включать в себя планирование, подготовку, выполнение, создание отчетов и менеджмент, поскольку все они направлены на тестирование. (ГОСТ 56920)**_

**Обеспечение качества (QA - Quality Assurance)** - это часть Quality Management - совокупность мероприятий, охватывающих все технологические этапы разработки, выпуска и поддержки ПО, предпринимаемых на разных стадиях жизненного цикла ПО, для обеспечения требуемого уровня качества выпускаемого продукта. QA обеспечивает создание правильных процессов для получения в результате качественного продукта.

Это также означает создание процессов **контроля качества (QC - Quality Control)**, которые в свою очередь гарантируют, что процессы, установленные QA, соблюдаются. То есть QC - это часть QA - процесс установления стандартов и проверки, что ПО сделано правильно. Цель контроля качества - проверить, соблюдалась ли предписанная модель. Это может быть достигнуто путем проведения аудитов и определения того, следовала ли команда определенной модели для достижения качества.

Активности QA проходят на всем протяжении SDLC: на этапе построения, анализа и улучшения процессов, формирования релизных политик, риск менеджмента и прочих how-to’s.

QC подключаются на этапе составления критериев качества, [quality gate](https://istqb-glossary.page/quality-gate/)-ов, метрик и способов оценки.

Тестировщик вступает уже после этапа разработки (с shift left на этапе получения тз и превращения его в спецификацию).

Иными словами, QA занимается не проверкой постфактум уже готового ПО на соответствие требованиям и наличие дефектов, а пытается предотвратить само появление этих дефектов, являясь эдаким “инфлюенсером”, специалистом, влияющим на процессы разработки и улучшающий их качество для обеспечения качества итогового продукта. QA - не должность, а набор активностей по аналогии с DevOps. Где-то это может быть отдельный человек, где-то этим занимается вся команда.

_**Тестирование** - это деятельность, направленная на предоставление всем заинтересованным лицам исчерпывающих сведений о текущем качестве продукта и любых остаточных рисках, а также на сведение к минимуму дефектов, которые может обнаружить конечный пользователь, при заданных сроках и бюджете. (с) отсебятина_

Тестирование программного обеспечения направлено на предоставление информации о программном продукте и нахождении максимально возможного числа дефектов на ранних этапах процесса разработки при заданных ограничениях стоимости и графика разработки.

Основными целями **тестирования** как части QC являются:

* предоставление информации о качестве элемента тестирования и любых остаточных рисках относительно того, до какой степени элемент тестирования был проверен;
* обнаружение дефектов в элементе тестирования до его передачи в эксплуатацию;
* смягчение рисков получения продукта низкого качества заинтересованными сторонами.

Вышеупомянутая информация может использоваться в нескольких целях, включая:

* улучшение элемента тестирования путем устранения дефектов;
* улучшение управленческих решений, предоставляя как основание для решений информацию о качестве и рисках;
* улучшение процессов в организации, особо выделяя процессы, которые позволяют дефектам возникать и/или оставаться скрытыми там, где они могут быть обнаружены.

**Как понять, что тестировщик хорошо сделал свою работу?**

Бытует мнение, что основная задача тестировщиков - сломать продукт, на самом деле тот уже приходит на тестирование с дефектами, одна из задач тестировщика как раз их выявить.

Понять, что тестировщик выполнил свою работу хорошо можно по факту выполнения следующих задач:

* продукт проверен на соответствие требованиям;
* сведено к минимуму количество дефектов, которые обнаружит конечный пользователь;
* предоставлена отчетность по актуальному качеству продукта и любых остаточных рисках заинтересованным лицам.

**QA в СНГ и на западе**

У нас понятия QA/QC/Testing часто не разделяются (особенно рекрутерами), поэтому и происходит путаница, поэтому же мы видим ворох вакансий с названием Junior QA, что само по себе - оксюморон. В QA можно развиваться только будучи уже опытным специалистом.

**Quality Assistance и Quality Engineering**

На западе, как обычно, терминологии и вариаций больше. Помимо привычных QA/QC/Testing можно встретить несколько другое вИдение картины. Акцент делается на том, что качество обеспечивает разработка (что разумно), а тестировщик своими навыками в этом помогает, то есть ассистирует (Assistance). В совокупности с менеджерскими задачами по улучшению процессов и прочего в сумме получается уже Quality Assurance. В других источниках Quality Assistance подразумевает развитие у разработчиков навыков тестирования.

При этом в других источниках можно встретить другое название для того, что у нас подразумевается под QA - QE. [Quality Engineer](https://medium.com/slalom-build/quality-engineer-learning-roadmap-fddfcb77409e) - это больше, чем просто тестировщики или автоматизаторы, они расширяют возможности команд, привнося качественное мышление во все аспекты создания программного обеспечения. Они являются экспертами в области обеспечения качества, автоматизации тестирования, анализа рисков, гибких процессов, CI/CD и всего остального, что может повлиять на качество продукта. Они сотрудничают со всеми другими ролями, чтобы обеспечить качество с первого дня, с первой истории, до того, как будет написана первая строка кода. Некоторые компании называют эту роль SDET (инженер-разработчик программного обеспечения в тестировании), но каждая компания определяет роли по-своему, поэтому то, что делает SDET или QE в одной компании, может не совсем совпадать с другой.

Источники:

* [Real Time Software QA Interview Questions And Answers](https://www.softwaretestingmaterial.com/software-qa-interview-questions-answers/)
* [Testing vs Quality Assurance vs. Quality Control What’s the Difference?](https://testsigma.com/blog/testing-vs-quality-assurance-vs-quality-control-whats-the-difference/)
* [ГОСТ Р 56920-2016/ISO/IEC/IEEE 29119-1:2013](https://docs.cntd.ru/document/1200134996)

Доп. материал:

**QA**

* [QA - специалист по пожарной безопасности вашего проекта](https://habr.com/ru/company/badoo/blog/496452/)
* [Being an Influencer of Quality](https://julie-griech.medium.com/being-an-influencer-of-quality-a2411e2bf2a6)
* [What is quality engineering?](https://theqalead.com/topics/what-is-quality-engineering/)
* [QA in Production](https://martinfowler.com/articles/qa-in-production.html)
* [Кто такой QA Engineer, QC Engineer и Software Engineer in Test](https://habr.com/ru/post/563204/)
* [В чем отличие QA-инженеров от тестеров](https://www.youtube.com/watch?v=XxdPPdt16yM)
* [Обеспечение качества - чья это работа?](https://telegra.ph/Obespechenie-kachestva---chya-ehto-rabota-05-17)
* [Quality Assurance vs Quality Control vs Testing](https://qatestlab.com/resources/knowledge-center/quality-assurance-control/)
* [Кто такой QA Engineer?](https://www.youtube.com/watch?v=tMVC2nNmg9M)
* [What Is Software Quality Assurance (SQA): A Guide For Beginners](https://www.softwaretestinghelp.com/software-quality-assurance/)
* [Why Quality Assurance should never be an Afterthought](https://www.softwaretestingnews.co.uk/why-quality-assurance-should-never-be-an-afterthought/)
* [Вакханалия в терминологии: Testing, Quality Control, Quality Assurance, Quality Assistance](https://qsusha.wordpress.com/2021/10/03/%D0%B2%D0%B0%D0%BA%D1%85%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D1%8F-%D0%B2-%D1%82%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8-testing-quality-control-quality-assurance-quality-assis/)
* [From QA to Engineering Productivity](https://testing.googleblog.com/2016/03/from-qa-to-engineering-productivity.html)
* [от Тестирования к Обеспечению качества](https://habr.com/ru/post/671874/)

**Testing**

* [“Когда говорят, что тестировщики что-то там должны уметь «ломать» - я перестаю дальше слушать. Тестирование вообще не про это.”](https://habr.com/ru/post/462553/#comment\_20475675)
* [Основные положения тестирования](https://testitquickly.com/2010/03/09/testing-basics-by-barancev/)
* [Что же такое тестирование?](https://www.software-testing.ru/library/testing/general-testing/2576-so-what-is-software-testing)
* [Уроки ретроспективного анализа: наука о тестировании](https://telegra.ph/Uroki-retrospektivnogo-analiza-nauka-o-testirovanii-02-23)
* [Тестирование за пределами требований](https://software-testing.ru/library/around-testing/requirements/3632-testing-beyond-requirements)
* [История тестирования](http://www.testingreferences.com/testingtimeline/testingtimeline.jpg)
* [Testing Doesn’t Improve the Product](https://www.developsense.com/blog/2021/11/testing-doesnt-improve-the-product/)
* [“Testers just Validate Acceptance Criteria”](https://medium.com/@blakenorrish/testers-just-validate-acceptance-criteria-4c25566b591e)
* [Что такое тестирование](https://www.youtube.com/watch?v=rz9Ks4sFx8c)
* [What Test Engineers do at Google](https://testing.googleblog.com/2016/09/what-test-engineers-do-at-google.html)
* [Антипаттерны тестирования](https://www.youtube.com/watch?v=8wvkL5UY54g)
* [8 стереотипов, с которыми сталкиваются тестировщики](https://habr.com/ru/company/usetech/blog/656595/)
* [10 мифов о тестировании ПО](https://blog.serioustester.io/yT6d2L\_GupR)
* [ТЕСТИРОВАНИЕ НА ПРИМЕРЕ. ЧТО ДЕЛАЕТ ТЕСТИРОВЩИК?](https://www.youtube.com/watch?v=Ut8lQ-w5fOc)
* [QA: 9 мифических заявлений](https://habr.com/ru/post/677464/)
* [Тестировщики всего-навсего проверяют критерии приемки](https://telegra.ph/Testirovshchiki-vsego-navsego-proveryayut-kriterii-priemki-07-16)
