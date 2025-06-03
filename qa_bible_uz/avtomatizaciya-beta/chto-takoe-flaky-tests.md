---
title: "Flaky testlar nima?"
---

# Flaky testlar nima?

Flaky testlar, ya’ni "flaklar", beqaror, ishonchsiz, "miltillovchi", "tasodifan muvaffaqiyatli" testlar

Flaky-test, so‘zma-so‘z "mo‘rt", "bo‘laklarga bo‘linib ketadigan" ma’nosini anglatadi. IT-test sohasida bu atama beqaror, ishonchsiz testni bildiradi. Bunday test ba’zan "o‘tadi", ba’zan "o‘tmaydi" va qaysi qonuniyat bo‘yicha ekanligini tushunish qiyin. Bu testlovchining vaqtini bekorga sarflaydigan, jamoada asabiylashuvga sabab bo‘ladigan omildir.

Bunday testlarga ko‘p vaqt ketadi. Jamoa muammoni aniqlamaguncha kechikish yuzaga keladi. Tabiiyki, mahsuldorlik pasayadi.

**Qisqacha sabablar**

* Test freymvorki boshidanoq yaxshi tuzilmagan. Uning kodi vazifalarga muvofiqligi tekshirilmagan. Maslahat: freymvork kodi yetarlicha toza bo‘lishi kerak; DRY tamoyillariga rioya qilish, sahifaning Object dizayn namunasi yoki Factory dizayn namunasiadan foydalanish lozim.
* Testda qattiq kodlangan ma’lumotlar juda ko‘p. Test natijalari beqarorligi bu testlar boshqa muhitda ishga tushirilganda yuzaga keladi. Qattiq kodlangan ma’lumotlarni tuzatish kerak (tajriba shuni ko‘rsatadiki, bu ko‘pincha noto‘g‘ri yozilgan yo‘llar, noto‘g‘ri IP-manzillar va shu kabilar).
* Testning oldingi holatini keshlash va keshlangan ma’lumotlar bilan yangi testni ishga tushirish. Har bir test bajarilishi uchun keshni tozalash ma’qul. Har bir testdan oldin ma’lumotlarni tekshiring va har bir testdan keyin ularning holatini tozalang.
* Testlar bilan bog‘liq bo‘lmagan tashqi sabablar. Internetga yoki ma’lum bir ma’lumotlar bazasiga yomon ulanish; brauzerning nomuvofiq versiyasi; xotira sizib chiqishi.
* Uchinchi tomon komponenti bilan "aloqaning uzilishi" ham ishonchsizlikka olib keladi. Bu holda ishga tushirishdan oldin tashqi komponentlarni sinchkovlik bilan tekshirish yordam beradi.
* Samarasiz element selektorlari (masalan, XPATH) yoki elementlarning noto‘g‘ri koordinatalari. Selektorlarni sahifa dizaynini o‘zgartirish orqali oson almashtirish mumkin. Ishonchliroq selektorlar (masalan, "id" yoki "name") bilan ishlash tavsiya etiladi.
* Biror narsani kutib, bajarishni to‘xtatuvchi "sleep" buyruqlarini suiiste’mol qilish. Bu yerda "sleep" kutishni ishonchliroq bo‘lgan "wait" bilan almashtirish yordam beradi (element paydo bo‘lguncha). Bu vaqtni tejaydi va ko‘p hollarda testlarning "miltillashini" (deyarli) bartaraf etadi.

**Nima qilish kerak**

Vaqt bo‘lsa, bunday testlarni hujjatlashtirish va "karantin"ga jo‘natish kerak. Testlarni bajargandan so‘ng, chiqarilgan ma’lumotlarni tekshiring. Loglar, xotira damplari, tizimning joriy holatini ko‘zdan kechiring. Agar UI-testlar bo‘lsa, skrinshot olish mumkin. 90% hollarda sabab shu bosqichdayoq aniqlanadi! Agar aniqlanmasa, bu testlar haqida turdagi vazifalar yarating va ularni karantinda birma-bir sinchiklab tekshiring. Barqarorlikka erishmaguncha, tekshiruv tugaguncha karantin testlarini pipelinedan chiqarib tashlang. Google’da ham flaky-testlar uchraydi, deydi Google’dan Hala Samir. Ular bu muammoni qanday hal qiladi? Odatda, masalan, chiqarilgan ma’lumotlarni beqarorlikni keltirib chiqarishi mumkin bo‘lgan funksiyalar bilan bog‘liqligini tekshirib, iloji boricha testlarni qayta ishga tushirmasdan tahlil qiladilar.

**Yana sabablar haqida**

Sabablarni kelib chiqishiga ko‘ra ajratadigan bo‘lsak:

* Testlarning o‘zida "beqarorlikka moyillik" mavjud
* Freymvork muammolari
* Ulangan kutubxona/xizmatlardagi muammolar
* Operatsion tizim/qurilmadagi muammolar

**Batafsil.**

Yuqorida aytib o‘tilganidek, natijalarning beqarorligi ko‘pincha noto‘g‘ri initsializatsiya yoki "tozalash" natijasida yuzaga keladi. Kamroq hollarda, lekin noto‘g‘ri tanlangan test ma’lumotlaridan ham shunday bo‘ladi. Testlovchilarning bosh og‘rig‘i asinxron harakatlardir, bunga alohida e’tibor berish lozim. Oddiyroq sabab - testlarni noto‘g‘ri ishga tushirish tartibi.

Freymvork bilan bog‘liq muammolar: ko‘pincha freymvork yetarli tizim resurslarini ajratish uchun moslashtirilmagan; yoki testlarni ishga tushirish ketma-ketligini noto‘g‘ri rejalashtiradi, natijada ular bir-birini "to‘sib qo‘yadi".

Agar loyihada ko‘plab uchinchi tomon kutubxonalari yoki ulanadigan xizmatlar bo‘lsa, ularda beqarorlik sabablari yashiringan "bog‘liqlik daraxti" bo‘lishi mumkin. Masalan, o‘zgaruvchilar noto‘g‘ri initsializatsiya qilinadi; xotira "oqib ketadi"; qandaydir resurs so‘rovga javob bermaydi va hokazo. Ushbu muammolarni bartaraf etish uchun, ideal holda, test muhitining "germetikligi"ga intilish kerak, ya’ni test muhiti tashqi bog‘liqliklarga ega bo‘lmasligi lozim.

Operatsion tizim va test qurilmalari. Oddiy tuyulsa-da, ba’zida bunga beqaror internet aloqasi sabab bo‘ladi. Shuningdek, oddiy sabab - jismoniy ma’lumotlar tashuvchisiga o‘qish/yozish xatolari.

**Statistika**&#x20;

Statistik ma’lumotlarga ko‘ra (testlovchilarning so‘zlariga ko‘ra), beqarorlikning asosiy sabablari quyidagilardir: "tahlil qilish qiyinligi" bo‘yicha birinchi o‘rinda asinxron operatsiyalar (async wait); keyin ko‘p oqimli operatsiyalar; so‘ngra testlarni noto‘g‘ri ishga tushirish tartibi; va nihoyat apparat muammolari (tarmoq va vaqt sinxronizatsiyasi yoki xotira bilan bog‘liq).

Agar beqaror testlarning sababini topib, ularni tuzatishning iloji bo‘lmasa, Unity3D vitse-prezidenti Alan Berd aytganidek, "beqaror testlar umuman testsiz o‘tkazilgandan ham yomonroqdir".

Manbalar:

* [Beqaror testlar. Ular nima uchun mavjud va ular bilan nima qilish kerak](https://testengineer.ru/nestabilnye-testy-pochemu-oni-sushchestvuyut-i-chto-s-nimi-delat/)

Qo‘shimcha materiallar:

* [Blog: Flaky Testing](https://www.developsense.com/blog/2021/02/flaky-testing/)
* [Flaky-тесты: Откуда ноги растут. Опыт Uber](https://habr.com/ru/post/565806/)
* [Flaky тесты (они же моргающие или "случайно успешные")](https://www.maxshulga.ru/2021/04/flaky-tests-or-random-success.html)