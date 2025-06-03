---
title: "Eng yaxshi avtomatlashtirish amaliyoti"
---
# Eng yaxshi avtomatlashtirish amaliyoti

Har bir maqolada o‘ziga xos eng yaxshi amaliyotlar, yaxshi testlarning xususiyatlari va shunga o‘xshash narsalar bor, shuning uchun men shunchaki o‘zim uchun eng foydali deb bilgan ro‘yxatlarni ko‘chirib oldim.

a’lo darajada yozilgan testlarning 7 ta xususiyati

* **To‘liq avtomatlashtirilgan test** (aniq): Ba’zida to‘liq avtomatlashtirilmagan testlar ham uchraydi. Eng keng tarqalgan sabablar: yoki bu juda qiyin, yoki umuman imkonsiz;
* **Tekshiruvni takrorlaymiz**: agar ilova o‘zgartirilmagan bo‘lsa, tekshiruv buzilmaydi: Bu noyob ma’lumotlarni yaratish asoslariga taalluqli. Masalan, biz ro‘yxatdan o‘tishni sinovdan o‘tkazamiz. Shubhasiz, agar noyob e-mail yaratilmasa, bunday test ishlab chiqarishda ishlamasligi mumkin;
* **Test validatsiya bilan yakunlanadi**: Ma’lumotlarni tozalash va shunga o‘xshash amallarni bajarish kerak bo‘lgan holatlardan tashqari, validatsiya bilan yakunlash eng yaxshi amaliyot hisoblanadi. Bu oxirgi harakat muvaffaqiyatli o‘tganiga ishonch hosil qilishga yordam beradi;
* **Test CI/CD da ishlatish uchun yetarlicha barqaror**: Agar test muntazam ravishda buzilib tursa, u CI/CD da ishlatish uchun yetarlicha barqaror emas. Deyarli har qanday kompaniya CI yoki hatto CD’ga erishishga harakat qilganligi sababli, ko‘pincha bunday test nafaqat befoyda, balki zararli hamdir, chunki u ko‘p vaqtni oladi va baribir CI’da avtomatik ravishda ishlatib bo‘lmaydi;
* **Testni o‘qish juda oson**: Odatda biz testlarni yolg‘iz yozmaymiz. Ko‘pincha bu odamlar jamoasi va hamkasblarimiz ham bizning testlarimizni qo‘llab-quvvatlashga majbur bo‘lishadi. Jamoaning har qanday a’zosi ortiqcha vaqt sarflamasdan testning tuzilishini tushunib olishi juda muhimdir. Hatto biz testlarni yolg‘iz yozsak ham, ba’zida testni tushunishni osonlashtirish uchun maxsus yozilmagan bo‘lsa, uning nima va qanday ishlashini tushunish juda qiyin bo‘lishi mumkin;
* **Test minimal qo‘llab-quvvatlashni talab qiladi**: Bu aniq, lekin har doim ham bajarilmaydi. Qo‘llab-quvvatlashga qancha kam vaqt sarflasak, foydali ishlarga, masalan, ko‘proq test yozishga shuncha ko‘p vaqtimiz bo‘ladi;
* **Test boshqa testlar bilan parallel ishlaydi va buzilmaydi**: Qaysidir nuqtada, ayniqsa end-to-end testlar uchun, biz testlarni o‘tkazish juda ko‘p vaqt olishiga duch kelamiz, bu rivojlanish tezligini pasaytiradi va sinovdan o‘tmagan yamoq kabi ta’sirlarga olib keladi. Bu bosqichda biz odatda testlarni bajarishni tezlashtirish uchun parallellashtirish haqida o‘ylaymiz. Agar testlar har qanday ketma-ketlikda parallel ravishda ishga tushirilishi va bir-biri bilan kesishmasligi mumkin bo‘lgan tarzda yozilgan bo‘lsa, bu parallel bajarish vazifasini testlarni qayta yozish vazifasi emas, balki shunchaki infratuzilmani sozlash vazifasi qilib qo‘yadi.

**Avtomatlashtirishning yana o‘nta qoidasi**

1. **Faqat "test-keyslar bo‘yicha" avtomatlashtirmang**

Test-avtomatlashtirish test-keyslardan o‘sib chiqishi kerak degan keng tarqalgan noto‘g‘ri tushuncha mavjud. Avtomatlashtiruvchilar mavjud yoki yangi yaratilgan test-keyslarni olib, ularni avtomatlashtirilgan ssenariylarga aylantiradi. Bu "avtokahvaxona" deb ataladi. Bu yondashuvda ma’no bo‘lishi mumkin, ammo boshqa yondashuvlar kamroq yoki ko‘proq foyda keltiradi. Avtomatlashtirishning ta’rifini "test-keys - vosita - test-skript"dan "odamlarga o‘z ishlarini bajarishga yordam berish uchun texnologiyani puxta o‘ylab qo‘llash"gacha kengaytirib, biz kompyuter imkoniyatlaridan ular uchun mo‘ljallangan vazifalar uchun foydalanishimiz mumkin. Yaxshiyamki, odamlar yaxshi ishlaydigan ko‘plab vazifalarda kompyuterlar yomon ishlaydi va aksincha.

2. Dasturiy ta’minot ishlab chiqish kabi avtomatlashtirishni ishlab chiqish bilan ham shug‘ullaning**

Avtomatlashtirishni ishlab chiqish - bu dasturiy ta’minotni ishlab chiqishdir. Agar biz avtomatizatsiyani yaratish uchun tortish yoki yozish va ijro etish interfeysidan foydalansak ham, bizning harakatlarimiz ustida qayerdadir kapot ostida yoki parda ortida kod ishlaydi. Biz avtomatlashtirishga dasturiy ta’minot ishlab chiqish sifatida qarashimiz kerak, aks holda qo‘limizda qo‘llab-quvvatlanmaydigan nimadir bo‘lib qoladi va loyiha tug‘ilishi bilanoq o‘ladi. Avtomatlashtirishga dasturiy ta’minotni ishlab chiqish sifatida yondashish shuni anglatadiki, biz dasturiy ta’minotni ishlab chiqishda talab qilinadigan jarayonlar va faoliyatlarning ko‘pchiligini (agar hammasini bo‘lmasa) hisobga olishimiz kerak. Jumladan:

* Dizayn - biz qo‘llab-quvvatlanadigan va foydalanishga yaroqli bo‘lishi uchun nimani va qanday amalga oshirishni hal qilishimiz kerak.
* Amalga oshirish - kod yozish kerak.
* Saqlash - kod va uning artefaktlari qayerdadir saqlanishi kerak.
Testlash - testlarni testdan o‘tkazish? Tabiiy! Biz avtomatlashtirish o‘zini biz xohlagandek tutishiga yetarlicha ishonch hosil qilishimiz kerak. Agar biz avtotestlarga ishonmasak, ulardan ma’no yo‘q.
* Xatolar - har qanday dasturiy ta’minotda xatolar mavjud; dasturiy ta’minot kabi avtomatlashtirish ham bundan mustasno emas. Sinov bizga yordam beradi, lekin dunyodagi barcha xatolarni aniqlay olmaydi. Xatolarni tuzatish uchun vaqt ajrating.
Loglar avtomatlashtirish arteriyasidir. Ularsiz biz avtomatlashtirish nima qilayotganini tushunmaymiz va buzilganida uni tuzatolmaymiz. Bundan tashqari, biz muammo avtomatlashtirishdami yoki sinovdan o‘tkazilayotgan dasturiy ta’minotdami ekanligini ayta olmaymiz.

**3. Dasturlash standartlari va idiomalariga amal qiling**

Avtomatlashtirishga dasturiy ta’minot ishlab chiqish sifatida munosabatda bo‘lishdan tashqari, biz unga tegishli joriy etish g‘oyalarini kiritishimiz kerak. Har bir vosita va tilning o‘ziga xos iboralari va hiyla-nayranglari bor, ammo loyihalash va amalga oshirishning umumiy qabul qilingan yondashuvlari odatda hamma narsa uchun mos keladi. Inkapsulyatsiya va abstraksiya haqidagi ushbu maqola boshqa o‘ziga xos sohalarga o‘tkazilishi mumkin bo‘lgan namunali amaliyotlar haqida hikoya qiladi.

**4. Qo‘llab-quvvatlash va xizmat ko‘rsatishni unutmang**

Dasturiy ta’minot mukammal emas va hech qachon to‘liq tayyor bo‘lmaydi; avtomatlashtirish bilan ham xuddi shunday. Unda baglar bo‘ladi. Sinalayotgan ilova o‘zgarishi bilan avtomatlashtirishni mos ravishda o‘zgartirish kerak bo‘ladi. Biz buning oldini ololmaymiz, lekin dasturiy ta’minotni qo‘llab-quvvatlash va xizmat ko‘rsatish xarajatlarini kamaytirish uchun ishlab chiqishimiz mumkin; va ularga ham vaqt ajratish kerak. Ushbu maqola va blogdagi ushbu post kelajakdagi qo‘llab-quvvatlashni rejalashtirishda e’tiborga olinishi kerak bo‘lgan omillar haqida hikoya qiladi.

**5. Skriptlarni bir-biriga bog‘liq qilmang**

Boshqa test natijalariga bog‘liq bo‘lgan test skriptini yaratish odatda kuchli anti-pattern hisoblanadi. Agar skriptlar bir-biriga bog‘liq bo‘lsa, ularni alohida haydab bo‘lmaydi va bu avtomatlashtirish nuqsonlari va ilova muammolarini murakkablashtiradi. Bundan tashqari, bog‘liq skriptlarni ular bog‘liq bo‘lgan skriptlar bilan parallel ravishda ishga tushirish mumkin emas. Bu yerda barcha skriptlar bitta yagona skriptga bog‘liq bo‘lgan chegaraviy holat mavjud. Bu yagona skript odatda sinov muhiti va sinov ma’lumotlarini sozlaydi. Zamonaviy avtomatlashtirish va uzluksiz joylashtirish freymvorklari sharoitida bu tobora kam uchraydi, ammo bu ssenariy freymvorklar mavjud bo‘lmagan yoki ma’lum bir avtomatlashtirish vazifasiga mos kelmaydigan vaziyatlarda o‘rinli bo‘lishi mumkin.

**6. Savodli logistika va hisobotlarni joriy etish**

Bu yerda ta’riflanganidek, savodli loglar, natijalar va xato xabarlari avtomatlashtirishni tushunish, unga ishonish va qo‘llab-quvvatlash uchun juda muhimdir. Bu mantiqlar avtotestlarni o‘tkazishning batafsil tasviridir: nima ishga tushirildi, qanday tushdi, qanday tushdi, qanday muvaffaqiyat qozondi va hokazo. Albatta, agar biz bu ma’lumotni o‘qishli shaklda beradigan to‘g‘ri logni puxta joriy qilgan bo‘lsak.

**7. Tekshiruv va avtomatlashtirishga ta’sir ko‘rsatish**

Sinov darajasi, ya’ni ilova yoki xususiyatni sinovdan o‘tkazish mumkin bo‘lgan daraja va avtomatlashtirish, ya’ni test faoliyati avtomatik ravishda amalga oshirilishi mumkin bo‘lgan daraja - bular testerlar, QA va QE tomonidan yaratiladigan narsalar emas, lekin, albatta, biz ta’sir ko‘rsatishimiz mumkin bo‘lgan narsalar mavjud. Bu ta’sirni amalga oshirish bizning majburiy vazifamizdir. Dasturchilar har doim ham sinovdan o‘tkazish va avtotestlar yaratish uchun bizga nima kerakligini bilishmaydi. Biz buni ularga yetkazishimiz kerak. Bu yerdagi va bu yerdagi maqolalar testlash va avtomatlashtirishning ba’zi jihatlari haqida hikoya qiladi.

**8. Qaytarilmaydigan xarajatlar tuzog‘iga tushib qolmang**

Ba’zida xato qilamiz. Ba’zan bu katta xatolardir. Biz o‘zimizda mavjud bo‘lgan ma’lumotlardan maksimal darajada foydalanamiz, ammo bu har doim ham ish bermaydi. Rejamizda biror narsa noto‘g‘ri ketsa, biz instinktiv ravishda uni tuzatishga harakat qilamiz va tuzatishda davom etamiz. Biroq, ba’zida yangidan boshlash kerak, aks holda biz yaxshi pullarni yomon pullar ortidan tashlab yuborishimiz mumkin. Bu "qaytarilmaydigan xarajatlar tuzog‘i" deb ataladi. Qisqacha aytganda, bu fikr shundan iboratki, biz allaqachon ushbu loyihaga shunchalik ko‘p pul sarfladikki, uni tiklash uchun yana sarflashimiz kerak, shunda biz allaqachon sarflangan, qaytarib bo‘lmaydigan xarajatlardan foyda olamiz. Ehtimol, biz o‘zimizning dasturiy "bolamiz"ga hissiy bog‘langanmiz; biz unga shunchalik ko‘p vaqt va pul sarfladikki, uni tashlab yuborishga va qayta boshlashga qodir emasmiz. Ehtimol, biz qo‘rqayotgandirmiz; rahbariyat, ehtimol, xursand bo‘lmaydi, agar biz hamma narsani tashlab, yana "o‘sha narsani" qilishni xohlasak. Biz bunday vaziyatlarga hissiyotlarga berilmasdan, biznes nuqtayi nazaridan qarashimiz kerak.

9-§. Ayyor moslamalardan ehtiyot bo‘ling**

Rub Goldberg mashinalari "Mustaqil ro‘molcha" kabi nisbatan oddiy vazifalarni bajaradigan murakkab mashinalardir. Avtomatlashtirish dunyosida bunday mashinalarni yaratish juda qiziqarli ish va ular test vazifalarini bajarish uchun turli xil vositalarni birlashtirish kabi ajoyib narsalarni qila oladi. Salbiy tomoni shundaki, buni tushunish va qo‘llab-quvvatlash qiyin; bu vazifalarni qo‘lda bajarishdan ko‘ra qo‘llab-quvvatlash qiyinroq bo‘lgan narsalarni yaratishdan qo‘rqish kerak. Ushbu maqola Rub Goldbergning avtomatlashtirilgan mashinalari haqida ko‘proq ma’lumot beradi; bu post "avtomatlashtirish" holati haqida fikr yuritadi.

10-§. Test ma’lumotlarini vaqtinchalik ma’lumotlarga bog‘liq qilmang**

Yaqinda men duch kelgan skript ajoyib kunlarning birida qulab tusha boshladi. Savolni o‘rganar ekanmiz, u iyuldan avgustga o‘tgan oy tufayli tushib qolganini aniqladik. Skript shunday yozilgan ediki, folbin iyul oyidagi sanalarni tekshirardi va iyul oyida hammasi yaxshi edi - ilova joriy oyning iyul oyidagi sanalarni qaytarardi. Sana avgustga o‘zgarganda, ilova avgust sanalarini qaytara boshladi va test tushib ketdi. Bunday holda, iyul oyidagi sanalarni qat’iy kodlash emas, balki joriy oy asosida dinamik ravishda ma’lumotlarni shakllantirish kerak.

**Qanday qilib avtomatlashtirish mumkin va mumkin emas**

**Mumkin emas**:

* **Barcha qo‘lda bajariladigan testlarni avtomatlashtirish**: qo‘lda bajariladigan testlar ajoyib - ular hatto xayolingizga ham kelmagan muammolarni topadi. Ammo testga qo‘lda yondashuvni har doim ham to‘g‘ridan-to‘g‘ri avtomatlashtirilgan tekshiruvlarga o‘tkazish mumkin emas. Ehtimol, avtomatlashtirish uchun maxsus yangi ssenariylar yaratish kerakdir.
* **Avtomatik testlarni bir kishining vazifasiga aylantirish**: endigina boshlayotgan bo‘lsangiz, avtomatlashtirish bo‘yicha maslahatchi yollash yaxshi fikr, ammo tegishli bilimlar loyihaning barcha ishtirokchilari uchun mavjud bo‘lishiga ishonch hosil qiling. Bir kun kelib, maslahatchi yoki asosiy ijrochi sizni tark etadi va qolganlar test to‘plami bilan shug‘ullanishlari kerak bo‘ladi.
* **Dunyodagi hamma narsani avtomatlashtirish**: ssenariy shunchaki avtomatlashtirilmaydi - buning sabablari bor, uning avtomatlashtirilishi loyiha uchun qaysidir ma’noda qimmatlidir. Har kuni bajariladigan odatiy vazifalardan boshlang - va siz darhol avtomatlashtirish sa’y-harakatlarining birinchi, bir lahzali foydasini ko‘rasiz.
* **Avtomatlashtirish, shunchaki avtomatlashtirish uchun**: sizga nima kerakligini va hozir nima kerakligini o‘ylab ko‘ring. Agar siz "bosh direktor shundoq ham buni xohlayapti" yoki "direktorlar kengashi yig‘ilishlarida bu yaxshi eshitiladi" deb barcha loyihalarda 80-100% avtomatlashtirishga tayyor bo‘lsangiz, vaqt va pulni behuda sarflayapsiz.
* **Bozorda yetakchi, eng yaxshi avtomatlashtirish vositasini sotib olish**: vazifangizga mos keladigan vositani toping va u haqiqatan ham va’da qilganini bajarishiga ishonch hosil qiling. Sotuvchilarning ayni paytda ushbu loyihada yoki platformada juda zo‘r bo‘lgan qimmatbaho dasturni sotib olish haqidagi da’vatlariga uchmang. Va boshqa loyihalarga kerak bo‘lmasa, vositadan foydalanishga majburlamang.
* **"O‘tdi" va "yiqildi" atamalarida fikrlash**: sizda yiqilgan holatlar bo‘ladi. Bu u yerda xato bor degani emas. Tushib ketgan testni xatolik signali sifatida qabul qilmang - siz nima uchun test tushib ketganini tushunishingiz kerak. Shuningdek, o‘ylab ko‘ring, "o‘tdi/yiqildi" toifalari haqiqatan ham avtotest hisoboti uchun mos keladimi? Ehtimol, sodir bo‘layotgan voqealarni yaxshiroq tavsiflaydigan boshqa tasnif haqida o‘ylab ko‘rish kerakdir?
* **Har safar ketma-ket ishga tushirish**: testlarni o‘tkazishdan maqsadingiz haqida o‘ylab ko‘ring. Agar sizga alohida sohani sinovdan o‘tkazish kerak bo‘lmasa, bunday qilmang, faqat kerakli funksionallikni sinab ko‘ring. Boshqa sinovlar - bu ortiqcha vaqt va kuch sarflash bo‘lib, hisobotingizni keraksiz ma’lumotlar bilan to‘ldirib tashlaydi. Albatta, ba’zi tekshiruvlar doimiy ravishda davom etishi mumkin, lekin bu o‘zini oqlaydigan choralar ekanligiga ishonch hosil qiling.
* **O‘z testlarini sinab ko‘rishni unutish**: o‘z testlarini sinab ko‘rishga odatlaning. Avtomatlashtirilgan test ssenariysi bir necha marta qulaganini ko‘rmaguningizcha dunyoga chiqarilmasligi kerak. Testni u chiqarilganda buni hisobga olish uchun u aniq tushib ketadigan sharoitlarda ishga tushiring.
* **Avtomatlashtirilgan testlar to‘plamini qo‘llab-quvvatlash borasidagi sa’y-harakatlarni yetarlicha baholamaslik**: avtomatlashtirilgan testlar to‘plami shunchaki bajarilgan va unutilgan narsa emas, balki u o‘z-o‘ziga yugurib yuradi. Tizimingiz doimiy ravishda o‘zgarib turadi va test to‘plamini doimiy ravishda yangilash va to‘ldirish kerak. Bu mas’uliyatni kompaniyangizdagi yagona texnik test o‘tkazuvchiga yuklamang.

**Kerak**:

* **Testlarni mustaqil ssenariylarga ajratish**: agar test to‘plamingiz qisqa, aniq test ssenariylaridan iborat bo‘lsa, muammo va xatolar qayerda yashiringanini aniqlash osonroq bo‘ladi. Hammasini bitta ssenariyga tiqishtirishga urinmang. Agar siz o‘z testingizda sinalayotgan dunyodagi hamma narsaning tagiga yetishingiz kerak bo‘lsa, nima noto‘g‘ri bo‘lganini tushunish juda qiyin. Testlar qisqa va sodda bo‘lsin.
* **Avtomatlashtirishni butun loyiha jamoasining vazifasiga aylantirish**: nima uchun faqat test o‘tkazuvchilarga emas, balki barchaga avtotestlar to‘plamiga ta’sir o‘tkazish imkoniyatini bermaslik kerak? Dasturchilar, loyiha menejerlari, mahsulot egalari - ularning barchasida avtomatlashtirilgan testlash bo‘yicha fikrlar bor va ular unga foyda keltirishi mumkin.
* **Avtomatlashtirilgan test natijalari haqidagi ma’lumotni barchaga yetkazish va bu natijalarni kim olayotganini o‘ylab ko‘rish**: loyihadagi turli odamlarga turli xil ma’lumotlarni taqdim eting. Dasturchiga avtotestlarni o‘tkazish haqida o‘ziga xos ma’lumot kerak va u loyiha menejeriga befarq. Barcha manfaatdor shaxslardan so‘rang, ularga qanday ma’lumot kerakligini aniqlang.
* **Oddiy narsalardan boshlash va test-syujetlarni yo‘l-yo‘lakay to‘ldirib borish**: o‘zingizga kerakli narsadan boshlang va loyihaning ish jarayonini kuzatib boring. Loyihalar doimiy ravishda o‘zgarib turadi - oxirgi lahzada ishlatilmaydigan yoki o‘zgartiriladigan narsalarga vaqt, kuch va pul sarflash shart emas. Bo‘laklarga bo‘lingan bosqichma-bosqich testlar to‘plamini yarating.
* **Freymvorkingizni ishdan chiqishga majbur qilish**: siz qimmat dastur sotib oldingiz, uni sozladingiz va test to‘plamlarini yaratish hamda yangilashga vaqt sarfladingiz. Foydalaning! Tez-tez ishlay oladigan va shu bilan birga loyiha uchun qimmatli bo‘lgan to‘plam yarating! Ishga tushmaydigan avtotestlar to‘plami pulni behuda sarflashdir.
* **Loyihaviy va tashkiliy o‘zgarishlarni hisobga olish**: loyihalaringiz va tashkilotingiz bilan birga o‘sishi mumkin bo‘lgan dasturni toping va u bilan nima qila olishingiz yoki qila olmasligingizni aniqlang. Agar u sizga mos kelmasa, uni tashlab yuboring. Sizga mos kelmaydigan resurslarga kuch va vaqt sarflashdan ma’no yo‘q.
* **Qo‘lda bajariladigan testlarni yechish**: avtotestlar to‘plamini qo‘lda bajariladigan testlarga yordam sifatida tasavvur qiling. Ularni zerikarli takrorlanuvchi vazifalardan xalos qiling, ular o‘zlari yulduz bo‘lgan narsani qilishsin - ssenariylarga to‘mtoqlik bilan ergashmasdan, sinab ko‘rishsin.
* **Testlarni ishga tushirishni oson va tez qilish**: avtotestlar to‘plamini sozlash va ishga tushirish oddiy vazifa bo‘lishi va tezkor fikr-mulohaza bildirishi kerak. Agar test to‘plamingiz sekin yoki juda murakkab bo‘lsa, odamlar shunchaki ishga tushirish haqida bosh qotirishmaydi.
* **Test to‘plamini doimiy yangilab borish**: agar kodingiz o‘zgarsa, avtomatik testlar ham o‘zgaradi va bu sizning oltin qoidangizdir. U kod bazasining BARCHA o‘zgarishlari uchun to‘g‘ri. Xatolarni tuzatish, fishni joriy etish - bularning barchasi test to‘plamining o‘zgarishiga olib keladi.

_Loyihalash/arxitektura naqshlari haqida quyidagi qo‘shimcha materiallarda havolalar mavjud. Turlar va vositalar mavzusida freymvork yaratish haqida._

## Manbalar:

* [7 характеристик хороших тестов](https://habr.com/ru/post/599507/)
* [Еще десять заповедей автоматизации](https://software-testing.ru/library/testing/testing-automation/3492-ten-more-commandments-of-automation)
* [Как можно и нельзя автоматизировать](https://software-testing.ru/library/testing/testing-automation/2940-starting-up-test-automation)

Доп. материал:

* [Святослав Куликов “Тестирование программного обеспечения. Базовый курс”](https://svyatoslav.biz/software\_testing\_book/) 3.2.2. Особенности тест-кейсов в автоматизации
* ****[**Паттерны проектирования в автоматизации тестирования**](https://habr.com/ru/company/jugru/blog/338836/)****
* [21 распространённая ошибка в автоматизированном тестировании и способы борьбы с ними](https://habr.com/ru/post/662211/)
* [YAMP 30.04.2022 - Разберем культуру написания автотестов с Рустамом Кенджаевым (Яндекс Маркет) и Дмитрием Мовчаном (Автор Cookbook для UI-тестов)](https://www.youtube.com/watch?v=n3OfjZxFo04\&t=12643s)
* [Чистая архитектура в автотестах](https://www.youtube.com/watch?v=ZIg-yFJx2A8)
* [Элементы хорошего автотеста](https://software-testing.ru/library/testing/testing-for-beginners/3714-what-makes-a-good-automated-test)
* [Ловушки автоматизации (и 9 советов, как в них не попасть)](https://testengineer.ru/sovety-avtomatizacii/)
* [7 характеристик хороших тестов](https://habr.com/ru/post/599507/)
* [UI-автотесты: как делать не стоит](https://habr.com/ru/company/badoo/blog/419419/)
* [7 способов повысить эффективность автоматизации тестирования в Agile разработке](https://habr.com/ru/company/otus/blog/520712/)
* [UI-автотесты: как делать не стоит](https://habr.com/ru/company/badoo/blog/419419/)
* [ТОП-5 вопросов начинающего автоматизатора про автотесты](https://habr.com/ru/company/hh/blog/584574/)
* [Top 10 Test Automation Strategies And Best Practices](https://www.softwaretestinghelp.com/automation-testing-tutorial-7/)
* [Пожалуй, лучшая архитектура для UI тестов](https://habr.com/ru/company/protei/blog/523802/)
* [Распространенные паттерны и методологии UI-автоматизации: реальные примеры](https://telegra.ph/Rasprostranennye-patterny-i-metodologii-UI-avtomatizacii-realnye-primery-01-31)
* [SOLID и другие принципы объектно-ориентированного проектирования в контексте автоматизации](https://www.youtube.com/watch?v=xG6NOxiOLhU)
* [ООП, «святая троица» и SOLID: некоторый минимум знаний о них](https://habr.com/ru/post/446816/)
* [Принцип открытости-закрытости](https://habr.com/ru/company/tinkoff/blog/472186/)
* [Переписываем API тесты](https://habr.com/ru/post/669880/)
* [Взгляд тестировщика на SOLID](https://habr.com/ru/company/lineate/blog/674144/)
