---
title: "Infratuzilma va payplayn (CI/CD)"
---

# Infratuzilma va payplayn (CI/CD)

Bu mavzuda tajribam kam, shuning uchun noaniqlik ehtimoli uch barobar oshgan.

Hozirda TestOps sohasidagi kompetentlik avtomatlashtirilgan testlarni yozish kabi QA muhandislariga qo‘yiladigan asosiy talabdir. Buning sababi - loyihalarda CI/CD ning faol rivojlanishi va QA muhandislarining payplaynlar bilan ishlash zaruratidadir.

Ko‘pchilik boshlovchi avtomatchilar dasturlash tilini o‘rganishga shoshiladilar, birinchi o‘quv testlarini yozadilar va hatto test-keyslarni avtomatlashtirish bo‘yicha test topshiriqlarini muvaffaqiyatli bajaradilar. Biroq, hamma ham haqiqiy ishda bu testlar bilan nima qilish kerakligi haqida o‘ylamaydi. Ularni kim ishga tushiradi? Qachon? Qanday qilib? Bu yerda men CI payplayni, undagi avtotestlarning o‘rni, shuningdek, testlar qanday va nima asosida ishga tushirilishi haqida gapirib bermoqchiman.

Avvalo, bu payplayn qayerdan paydo bo‘ldi va CI/CD nima ekanligini tushuntirib o‘taman.

**Uzluksiz integratsiya** (Continuous Integration, CI) va **uzluksiz yetkazib berish** (Continuous Delivery, CD) dasturchilarga dasturiy ta’minot o‘zgarishlarini tez-tez va ishonchliroq amalga oshirish imkonini beruvchi madaniyat, tamoyillar va amaliyotlar to‘plamidir.

CI/CD - bu DevOps amaliyotlaridan biri. Bu, shuningdek, agile amaliyotlariga ham tegishli: joylashtirishni avtomatlashtirish ishlab chiquvchilarga biznes talablarini amalga oshirish, kod sifati va xavfsizlikka e’tibor qaratish imkonini beradi.

**Uzluksiz integratsiya (Continuous Integration, CI)** - bu dasturiy ta’minotni ishlab chiqish amaliyoti bo‘lib, turli jamoa a’zolari tomonidan yozilgan kodni avtomatik va muntazam ravishda umumiy kod omboriga yoki xotirasiga birlashtirish (integratsiyalash)dan iborat. Uzluksiz integratsiyaning asosiy maqsadi - ishlab chiqish jarayonida ziddiyatlar, xatolar va integratsiya muammolarini erta aniqlash va bartaraf etishdir.
Uzluksiz integratsiyaning asosiy elementlari va amaliyotlari quyidagilarni o‘z ichiga oladi:
1. **Avtomatik yig‘ish (Build Automation)**: Repozitoriyga har bir komitdan keyin manba kodidan bajariluvchi fayllarni (binar fayllarni) avtomatik ravishda yaratish.
2. **Avtomatik testlash (Automated Testing)**: Yangi kod integratsiyasidan keyin ilovaning ishlash qobiliyatini tekshirish uchun modulli, integratsion va funksional testlar kabi avtomatik testlarni ishga tushirish.

3. **Yig‘ish va sinovlar integratsiyasi (Integration of Builds and Tests)**: Yig‘ish va sinovni CI jarayoniga avtomatik integratsiyalash.

4. **Nizolarni aniqlash (Conflict Detection)**: Integratsiya xatolarini keltirib chiqarishi mumkin bo‘lgan turli ishlab chiquvchilarning komitlari o‘rtasidagi nizolarni erta aniqlash.
5. **Avtomatik joylashtirish (Automated Deployment)**: Yig‘ilgan va sinovdan o‘tkazilgan ilovani test yoki staging-serverlarda avtomatik joylashtirish.

6. **Natijalar monitoringi (Monitoring of Results)**: Xatolarga tezkor munosabat bildirish uchun yig‘ish va testlar natijalarini kuzatib borish.
7. **Avtomatik bildirishnoma (Automated Notification)**: Ishlab chiquvchilar jamoasini yig‘ish va testdan o‘tkazish natijalari haqida avtomatik xabardor qilish.

8. **Nosozliklardan keyingi tiklanish (Failure Recovery)**: CI jarayonini nosozliklardan keyin tiklash va nosozliklar haqida avtomatik xabar berish.
9. **CI/CD vositalaridan foydalanish (CI/CD Tools)**: Uzluksiz integratsiya va yetkazib berish jarayonlarini amalga oshirish uchun maxsus vositalar va platformalardan foydalanish.

Uzluksiz integratsiyaning maqsadi ishlab chiqish jarayonini tezlashtirish, kod sifatini oshirish va kodni integratsiyalash hamda birlashtirish bilan bog‘liq xavflarni kamaytirishdir. CI, shuningdek, jarayonlarni avtomatlashtirish va ishlab chiqish jamoasi a’zolari o‘rtasidagi hamkorlikni yaxshilashga yordam beradi.
**Uzluksiz yetkazib berish (Continuous Delivery, CD)** - bu uzluksiz integratsiya (CI) tamoyilini kengaytiruvchi dasturiy ta’minot ishlab chiqish amaliyoti bo‘lib, uzluksiz integratsiya va testlash jarayoni muvaffaqiyatli yakunlangandan so‘ng ilovani maqsadli muhitga (production, staging, testing va h.k.) avtomatik ravishda joylashtirish (yetkazib berish)ni o‘z ichiga oladi. Uzluksiz yetkazib berishning asosiy maqsadi - ilovaning yangi versiyalarini istalgan vaqtda chiqarishga tayyorligini ta’minlashdir.

Uzluksiz yetkazib berishning asosiy elementlari va amaliyotlari quyidagilarni o‘z ichiga oladi:
1. **Avtomatik joylashtirish (Automated Deployment)**: CI jarayonida testlardan muvaffaqiyatli o‘tgandan so‘ng ilovani maqsadli serverlarda yoki platformalarda avtomatik ravishda joylashtirish.

2. **Avtomatlashtirilgan payplayn (Automated Pipeline)**: Yig‘ish, sinovdan o‘tkazish va joylashtirish bosqichlarini o‘z ichiga olgan avtomatlashtirilgan payplayn (ta’minot zanjiri)ni yaratish.
3. **Konfiguratsiyani boshqarish (Configuration Management)**: Joylashtirishning izchilligi va takrorlanishini ta’minlash uchun maqsadli muhitlar va resurslar konfiguratsiyalarini boshqarish.

4. **Versiyalarni boshqarish (Version Control)**: Ilova kodi, konfiguratsiyalari va resurslaridagi o‘zgarishlarni nazorat qilish uchun versiyalarni boshqarish tizimlaridan foydalanish.
yig‘ish va testdan o‘tkazish natijalari.

8. **Tuzilishdan keyingi tiklanish (Failure Recovery) **: CI jarayonini nosozliklardan keyin va avtomatik ravishda tiklash
nosozliklar haqida bildirishnoma

9. **CI/CD vositalaridan foydalanish (CI/CD Tools) **: Buning uchun maxsus vositalar va platformalardan foydalanish
uzluksiz integratsiya va yetkazib berish jarayonlarini amalga oshirish (Continuous Delivery, CD).

Uzluksiz integratsiyaning maqsadi ishlab chiqish jarayonini tezlashtirish, kod sifatini oshirish va xavflarni kamaytirish,
kodni integratsiyalash va birlashtirish bilan bog‘liq. CI, shuningdek, jarayonlarni avtomatlashtirish va o‘rtasidagi hamkorlikni yaxshilashga yordam beradi.
ishlab chiqish jamoasi a’zolari.

**Uzluksiz yetkazib berish (Continuous Delivery, CD) ** - bu kengaytiruvchi dasturiy ta’minot ishlab chiqish amaliyoti
uzluksiz integratsiyalash prinsipi (CI) va ilovani maqsadli
muhiti (production, staging, testing va h.k.) uzluksiz integratsiya va testlash jarayoni muvaffaqiyatli yakunlangandan so‘ng.
Uzluksiz yetkazib berishning asosiy maqsadi - ilovaning yangi versiyalarini istalgan vaqtda chiqarishga tayyorligini ta’minlash.

Uzluksiz yetkazib berishning asosiy elementlari va amaliyotlari quyidagilarni o‘z ichiga oladi:

1. **Automated Deployment**: Ilovani maqsadli serverlarda avtomatik ravishda joylashtirish
yoki CI jarayonida testlardan muvaffaqiyatli o‘tgandan so‘ng platformalarda.

2. **Avtomatlashtirilgan quvur liniyasi**: Avtomatlashtirilgan quvur liniyasini (ta’minot zanjirini) yaratish
yig‘ish, sinovdan o‘tkazish va joylashtirish bosqichlarini o‘z ichiga oladi.

3. **Konfiguratsiyani boshqarish (Configuration Management) **: uchun maqsadli muhitlar va resurslar konfiguratsiyalarini boshqarish
yoyishning izchilligi va takrorlanuvchanligini ta’minlash.

4. **Versiyalarni boshqarish (Version Control) **: Koddagi o‘zgarishlarni nazorat qilish uchun versiyalarni boshqarish tizimlaridan foydalanish,
ilova konfiguratsiyalari va resurslari.

5. **Avtomatik xabarnoma (Automated Notification)**: Yetkazib berish jarayonining holati haqida ishlab chiqish va operatsiyalar jamoasiga avtomatik ravishda xabar berish.
6. **Monitoring va qayta aloqa (Monitoring and Feedback)**: Ilovaning ishlashi va mavjudligini real vaqt rejimida kuzatish tizimini o‘rnatish, shuningdek, nosozliklar va muammolarga tezkor javob berish uchun qayta aloqa olish.

7. **Zaxiralash va tiklash (Backup and Recovery)**: Ma’lumotlarni zaxiralash va zarur bo‘lganda tiklash imkoniyatlarini ishlab chiqish.
8. **Bosqichli joylashtirish (Staging)**: Ilovani ishlab chiqarish muhitiga yakuniy joylashtirishdan oldin tekshirish uchun dastlabki joylashtirish (staging) bosqichidan foydalanish.

9. **Uzluksiz joylashtirish (Rolling Deployment)**: Ilovaning yangi versiyasini foydalanuvchilarni bosqichma-bosqich yangi versiyaga o‘tkazish orqali, ish jarayonini to‘xtatmasdan va tanaffuslarsiz joriy etish.
10. **Mikroservislar arxitekturasi (Microservices)**: Yanada moslashuvchan va tezkor yetkazib berish uchun mikroservislarga asoslangan arxitekturadan foydalanish.

Uzluksiz yetkazib berishning maqsadi jamoalarga istalgan vaqtda minimal xavf va maksimal avtomatlashtirish bilan ilovaning yangi versiyalarini yetkazib berish imkonini beruvchi ishlab chiqish jarayonini yaratishdir. Bu tashkilotlarga mijozlar va bozor talablaridagi o‘zgarishlarga tezda javob berish, mahsulot sifati va barqarorligini yaxshilash hamda ishlab chiqish samaradorligini oshirish imkonini beradi.
CI/CD vositalari joylashtirish paytida sozlanadigan o‘ziga xos muhit parametrlarini sozlashga yordam beradi. Shuningdek, CI/CD-avtomatlashtirish veb-serverlar, ma’lumotlar bazalari va ilovalarni joylashtirish jarayonida qayta ishga tushirish yoki qo‘shimcha harakatlarni talab qilishi mumkin bo‘lgan boshqa xizmatlarga zarur so‘rovlarni amalga oshiradi.

Uzluksiz integratsiya va uzluksiz yetkazib berish uzluksiz sinovdan o‘tkazilishi kerak, chunki yakuniy maqsad sifatli ilovalarni ishlab chiqishdir. Uzluksiz testlash ko‘pincha turli xil avtomatlashtirilgan testlar to‘plami (regressiya, unumdorlik va boshqalar) ko‘rinishida amalga oshiriladi, ular CI/CD konveyerida (pipeline, build chain va boshqalar) bajariladi. Yetuk CI/CD amaliyoti uzluksiz joylashtirishni amalga oshirish imkonini beradi: kod CI/CD konveyeridan muvaffaqiyatli o‘tganda, yig‘malar ishlab chiqarish muhitida avtomatik ravishda joylashtiriladi. Uzluksiz ta’minot bilan shug‘ullanadigan jamoalar har kuni yoki hatto har soatda joylashtirish imkoniyatiga ega bo‘lishlari mumkin.
Odatiy CD-**konveyer** yig‘ish, sinovdan o‘tkazish va joylashtirish bosqichlaridan iborat. Murakkabroq konveyerlar quyidagi bosqichlarni o‘z ichiga oladi:

* Versiyalarni nazorat qilish tizimidan kodni olish va yig‘ishni amalga oshirish;
* "Infratuzilma kod sifatida" yondashuvi orqali avtomatlashtirilgan infratuzilmani sozlash;

* Kodni maqsadli muhitga nusxalash;

* Maqsadli muhit uchun [muhit o‘zgaruvchilarini](https://theqalead.com/topics/api-smoke-tests-cd-pipeline/) sozlash;

* Ilova komponentlarini joylashtirish (veb-serverlar, API-xizmatlar, ma’lumotlar bazalari); Uzluksiz testlash ko‘pincha turli xil avtomatlashtirilgan testlar to‘plami (regression, unumdorlik va boshqalar) ko‘rinishida amalga oshiriladi, ular CI/CD konveyerida (pipeline, build chain va boshqalar) amalga oshiriladi. Yetuk CI/CD amaliyoti uzluksiz joylashtirishni amalga oshirish imkonini beradi: kod CI/CD konveyeridan muvaffaqiyatli o‘tganda, yig‘malar ishlab chiqarish muhitida avtomatik ravishda joylashtiriladi.

* Xizmatlarni qayta ishga tushirish yoki yangi o‘zgarishlarning ishlashi uchun zarur bo‘lgan xizmatlarni chaqirish kabi qo‘shimcha amallarni bajarish;

* Testlarni bajarish va testlar muvaffaqiyatsizlikka uchragan taqdirda muhitdagi o‘zgarishlarni bekor qilish;
* Yetkazib berish holati haqidagi xabarlarni qayd etish va yuborish.
Masalan, Jenkinsda konveyer Jenkinsfile faylida aniqlanadi, unda yig‘ish (build), sinovdan o‘tkazish (test) va joylashtirish (deploy) kabi turli bosqichlar tavsiflanadi. Shu bilan birga, konveyer bosqichlarida ishlatilishi mumkin bo‘lgan muhit o‘zgaruvchilari, maxfiy kalitlar, sertifikatlar va boshqa parametrlar tavsiflanadi. Post bo‘limida xatolarni qayta ishlash va bildirishnomalar sozlanadi. Murakkabroq CD-konveyerda ma’lumotlarni sinxronlash, axborot resurslarini arxivlash, yangilanishlar va tuzatishlarni o‘rnatish kabi qo‘shimcha bosqichlar bo‘lishi mumkin. CI/CD vositalari odatda plaginlarni qo‘llab-quvvatlaydi. Masalan, Jenkins tashqi platformalar bilan integratsiya qilish, foydalanuvchi interfeysini kengaytirish, ma’muriyat, manba kodini boshqarish va yig‘ish uchun 1500 dan ortiq plaginlarga ega.
Bulutlarda CI/CD-konveyerlardan foydalanadigan ko‘plab jamoalar [Docker](https://www.software-testing.ru/library/testing/testing-for-beginners/3661-docker) kabi **konteynerlardan** va Kubernetes kabi **orkestratsiya tizimlaridan** foydalanadilar. Konteynerlar qadoqlash va yetkazib berishni standartlashtirish hamda doimiy bo‘lmagan yuklama bilan ishlayotgan muhitlarni kengaytirish va yo‘q qilishni soddalashtirish imkonini beradi. Konteynerlardan, kod sifatidagi infratuzilmadan (**IaaS**) va CI/CD konveyerlaridan birgalikda foydalanishning ko‘plab variantlari mavjud. Serversiz hisoblash arxitekturasi ilovalarni joylashtirish va masshtablashning yana bir usuli hisoblanadi. Serversiz muhitda infratuzilma to‘liq bulutli xizmat provayderi tomonidan boshqariladi va ilova uning sozlamalariga muvofiq zarur bo‘lganda resurslarni iste’mol qiladi. Masalan, AWSda serversiz ilovalar AWS Lambda funksiyalari orqali ishga tushiriladi, ularning joylashtirilishi Jenkins CI/CD konveyeriga plagin yordamida integratsiya qilinishi mumkin.
_CI/CD haqida batafsil_ [_bu yerda_](https://martinfowler.com/articles/continuousIntegration.html) _va_ [_bu yerda_](https://martinfowler.com/delivery.html) _o‘qishingiz mumkin._
**Konveyer bosqichlari**
* Testlarni bajarish va testlar muvaffaqiyatsizlikka uchragan taqdirda atrof-muhitdagi o‘zgarishlarni bartaraf etish;
* Yetkazib berish holati haqidagi xabarlarni qayd qilish va yuborish.

Masalan, Jenkinsda konveyer Jenkinsfile faylida aniqlanadi, unda yig‘ish (build), sinovdan o‘tkazish (test) va joylashtirish (deploy) kabi turli bosqichlar tavsiflanadi. Shu bilan birga, konveyer bosqichlarida ishlatilishi mumkin bo‘lgan o‘zgaruvchan muhitlar, maxfiy kalitlar, sertifikatlar va boshqa parametrlar tavsiflanadi. Post bo‘limida xatolarni qayta ishlash va bildirishnomalar sozlanadi. Murakkabroq CD-konveyerda ma’lumotlarni sinxronlash, axborot resurslarini arxivlash, yangilanishlar va tuzatishlarni o‘rnatish kabi qo‘shimcha bosqichlar bo‘lishi mumkin. CI/CD vositalari odatda plaginlarni qo‘llab-quvvatlaydi. Masalan, Jenkins tashqi platformalar bilan integratsiya qilish, foydalanuvchi interfeysini kengaytirish, ma’muriyat, manba kodini boshqarish va yig‘ish uchun 1500 dan ortiq plaginlarga ega.

Bulutlarda CI/CD-konveyerlardan foydalanadigan ko‘plab jamoalar [Docker] (https://www.software-testing.ru/library/testing/testing-for-beginners/3661-docker) kabi **konteynerlardan** va Kubernetes kabi **orkestratsiya tizimlaridan** foydalanadilar. Konteynerlar qadoqlash, yetkazib berishni standartlashtirish va doimiy bo‘lmagan yuk bilan atrof-muhitni kengaytirish va yo‘q qilishni soddalashtirish imkonini beradi. Konteynerlardan, kod (**Iaas**) va CI/CD konveyerlari kabi infratuzilmalardan birgalikda foydalanishning ko‘plab variantlari mavjud. Serversiz hisoblash arxitekturasi ilovalarni joylashtirish va masshtablashning yana bir usuli hisoblanadi. Serversiz muhitda infratuzilma to‘liq bulutli xizmat provayderi tomonidan boshqariladi va ilova uning sozlamalariga muvofiq zarur bo‘lganda resurslarni sarflaydi. Masalan, AWSda serversiz ilovalar AWS Lambda funksiyalari orqali ishga tushiriladi, ularning joylashtirilishi Jenkins CI/CD konveyeriga plagin yordamida integratsiya qilinishi mumkin.

CI/CD haqida _batafsil ma’lumotni_ [_bu yerda_](https://martinfowler.com/articles/continuousIntegration.html) _va_ [_bu yerda_](https://martinfowler.com/delivery.html) _o‘qishingiz mumkin._

**Konveyer bosqichlari**

Yig‘ish jarayoni ishga tushirilganda, masalan, ishlab chiquvchi o‘z tarmog‘iga kommit qilganda, maxsus yozilgan skriptlar va yordamchi dasturlar tomonidan bajariladigan jarayon boshlanadi. Bu jarayon bir nechta majburiy bosqichlardan iborat. PR uchun oddiy misol:

* Har bir Pull Request ochilganda, Git-server CI-serverga xabar yuboradi;
* CI-server repozitoriyni klonlaydi, dastlabki tarmoqni tekshiradi (masalan, bugfix/wrong-sorting) va kodni master-tarmoq bilan birlashtiradi;
* So‘ngra build-skript (yig‘ish ssenariysi) ishga tushiriladi. Masalan: ./gradlew build;
* Agar bu buyruq "0" javob kodini qaytarsa, build muvaffaqiyatli bajarilgan hisoblanadi. (Boshqa javob xatolikni anglatadi);
* CI-server muvaffaqiyatli build haqidagi xabarni Git-serverga yuboradi;
* Agar build muvaffaqiyatli bo‘lsa, Pull Request’ni mavjud kod bilan birlashtirish ruxsat etiladi. (Agar muvaffaqiyatsiz bo‘lsa, tegishli ravishda ruxsat berilmaydi).

Har qanday bosqichdagi xato butun yig‘ishning to‘liq buzilishiga olib keladi. Tabiiy ravishda, bosqichlar potensial muammolar doirasini toraytirish uchun shunday tartibda joylashtirilgan. Agar oldingi bosqichning Quality Gate’i o‘tmasa, keyingi bosqichni tekshirish uchun resurslarni sarflashning hojati yo‘q.

Pipeline’ga o‘rnatilgan Quality Gate’larga misol [bu yerdan](https://habr.com/ru/company/otkritie/blog/568612/):

* Xizmatni yig‘ish:
* To‘g‘ri format konfiguratsiyasining mavjudligini tekshirish;
* Kodni rasmiylashtirish standartlarini tekshirish;
* Unit-testlar bilan zaruriy qoplanishni tekshirish;
* Kontraktlarni generatsiyalash va e’lon qilish (teskari moslikni nazorat qilish).
* Beta-testlarni ishga tushirish;
* Majburiy code-review;
* Zaifliklarni skanerlash.

Vakuumda sferik pipeline’ga misol [bu yerdan](https://habr.com/ru/company/rabota/blog/560922/):

* Code scanning: kod umumiy yo‘riqnomaga (linters), zaifliklarga (code security) va sifatga (code quality) muvofiqligi tekshiriladi;
* Unit tests;
* Build: artifacts/packages/images va hokazolarni yig‘ish bosqichi. Bu yerda butun ilovani versiyalash strategiyasi qanday bo‘lishi haqida o‘ylash mumkin. Konteynerlashtirish davrida, birinchi navbatda, konteynerlar uchun obrazlar va ularni versiyalashtirish usullari qiziqarli;
* Scan package: paket/obraz yig‘ildi. Endi uni zaifliklar uchun skanerlash kerak. Zamonaviy registrlar allaqachon buning uchun vositalarni o‘z ichiga oladi;
* Deploy: turli muhitlarda ilovani joylashtirish bosqichi;
* Integration testing: ilova joylashtirildi. U alohida muhitda ishlaydi. Integratsion testlash bosqichi boshlanadi. Testlash ham qo‘lda, ham avtomatlashtirilgan bo‘lishi mumkin;
* Performance testing (load/stress testing): bu turdagi testlarni stage/pre-production muhitida o‘tkazish maqsadga muvofiq. Uning resurs quvvatlari ishlab chiqarishdagi kabi bo‘lishi sharti bilan;
* Code Review / Approved: Eng muhim bosqichlardan biri Merge Request hisoblanadi. Aynan ularda birlashtirish oldidan pipeline’da alohida harakatlar amalga oshirilishi, shuningdek, birlashtirish oldidan ma’qullanishi kerak bo‘lgan shaxslar guruhlari tayinlanishi mumkin.

_Build-agent haqida ko‘proq ma’lumotni bu yerda o‘qishingiz mumkin:_ [_TeamCity: jamoangizda CI/CD ni sozlaymiz_](https://habr.com/ru/company/tinkoff/blog/532546/) _va bu yerda_ [_Mahsulot yig‘uvchi nima_](https://habr.com/ru/post/595375/)_, muhitlar haqida bu yerda_ [_Integratsiya testlari uchun infratuzilma yaratamiz_](https://habr.com/ru/company/2gis/blog/575688/)

**E2E avtotestlar**

Endi bevosita oddiy avtomatlashtiruvchiga eng ko‘p tegishli bo‘lgan narsa - **E2E avtotestlari** haqida gaplashish vaqti keldi. Yuqorida aniqlaganimizdek, E2E o‘tkazishdan oldin yig‘ish dastlab bir necha bosqichni bosib o‘tadi va ishga tushirish shartlari ko‘pincha asosiy nuqtalar hisoblanadi: commit, pull request va merge request. Mening oldingi kompaniyamda juda oddiy konveyer bor edi: feature-branch’ga kommit qilinganda ishlab chiquvchi testlari ishga tushardi, develop’ga qo‘shilish uchun esa muhim E2E testlari, master’ga qo‘shilish uchun esa regressiya testlarini ham o‘z ichiga olgan barcha testlar ishga tushardi. Endi, konveyerdagi avtotestlarning o‘rni ma’lum bo‘lgach, bu testlar nimada o‘tkazilishini va avtotest skriptini konveyerda qanday ishga tushirishni tushunish kerak.

Bu jihatlarning barchasi CI-agentning o‘zida shakllantiriladi, Jenkins’da bular job edi. Misol: [How to Add Your First Android Job to Jenkins](https://bugfender.com/blog/how-to-add-your-first-android-job-to-jenkins/). Konveyerdan yoki mahalliy ravishda ishga tushirishni boshlaganingizda test kodini ishga tushirish uchun **Test Runner** javobgar bo‘ladi. Bu faqat bir vazifa bo‘lib, runner’ning mas’uliyat doirasiga quyidagilar kiradi [manba](https://habr.com/ru/company/avito/blog/516650/):

* muhitni tayyorlash;
* bajarish uchun testlar to‘plamini shakllantirish;
* testlarni ishga tushirish;
* testlarni bajarish natijalarini olish;
* test o‘tkazilganligi to‘g‘risidagi hisobotlarni tayyorlash;
* statistika to‘plash.

Freymvork bilan birga runner ham yetkazib berilgan bo‘lsa-da, yanada takomillashgan tashqi runner’lardan foydalanish imkoniyati mavjud.

Testlar uchun qaysi runner’ni tanlash kerakligi haqidagi savolga parallel ravishda, boshqa savol paydo bo‘ladi: testlarni nimada ishga tushirgan ma’qul? Uchta variant mavjud:

* Haqiqiy qurilma.
* Afzalliklari. Muayyan qurilmalar va mikrodasturlarga xos muammolarni ko‘rsatadi. Ko‘plab ishlab chiqaruvchilar Androidni o‘zlariga moslashtirmoqda - ham foydalanuvchi interfeysini, ham operatsion tizimning ishlash mantiqini. Ilovangiz bunday muhitda to‘g‘ri ishlayotganini tekshirish foydali bo‘ladi.
* Kamchiliklari. Qurilmalar to‘plamini qayerdandir topish, ular uchun maxsus xona tashkil etish zarur - past harorat, to‘g‘ridan-to‘g‘ri quyosh nuri tushmasligi kerak va hokazo. Bundan tashqari, akkumulyatorlar shishib ketish va ishdan chiqish xususiyatiga ega. Shuningdek, testlarning o‘zi qurilma holatini o‘zgartirishi mumkin va siz shunchaki barqaror holatga qaytib o‘ta olmaysiz.
* Sof emulyator. "Sof" deganda biz emulyatorni o‘zingizda yoki kompyuteringizda o‘rnatilgan AVD Manager yordamida ishga tushirishingizni nazarda tutamiz.
* Afzalliklari. Haqiqiy qurilmadan tezroq, qulayroq va barqarorroq. Yangi emulyator yaratish uchun bir necha daqiqa kifoya. Alohida xona, akkumulyatorlar va boshqalar bilan bog‘liq muammolar yo‘q.
* Kamchiliklari. Yuqorida aytib o‘tilgan qurilma xususiyatlarining yo‘qligi. Biroq, ko‘pincha qurilmaning o‘ziga xos xususiyatlariga bog‘liq bo‘lgan test ssenariylari soni juda oz va ular yuqori ustuvorlikka ega emas. Ammo eng asosiy kamchilik - bu yomon miqyoslanish. Emulyatorning yangi versiyasini barcha xostlarga yuklashning oddiy vazifasi azobli jarayonga aylanadi.
* Android emulyatorining Docker-tasviri. Docker sof emulyatorlarning kamchiliklarini bartaraf etadi.
* Afzalliklari. Docker va emulyator tasvirini tayyorlash hamda tarqatish ko‘rinishidagi tegishli kompleks - bu emulyatorlarni tez va sifatli tayyorlash va ularni barcha xostlarga yoyish imkonini beruvchi to‘liq miqyosli yechim bo‘lib, ularning yetarli darajada izolyatsiyasini ta’minlaydi.
* Kamchiliklari. Kirish chegarasi yuqoriroq.

Internetda Android emulyatorlarining turli xil Docker tasvirlari mavjud:

* [Avito‘dan Docker tasviri](https://avito-tech.github.io/avito-android/docs/ci/containers/);
* [Google’dan Docker tasviri](https://github.com/google/android-emulator-container-scripts);
* [Agoda’dan Docker tasviri](https://github.com/agoda-com/docker-emulator-android).

Agar kompaniyada boshqa platformalarni sinovdan o‘tkazish uchun o‘z infratuzilmasi bo‘lsa, bulutli yechim, noldan mahalliy yechim va mavjud asosga qurilgan mahalliy yechim o‘rtasida murakkab tanlov qilish kerak bo‘ladi. Bu infratuzilmaning barchasi allaqachon testlarni ishga tushirish uchun runner bilan bog‘lanadi, shundan so‘ng testlarni o‘tkazish bo‘yicha hisobotni chiqarish (masalan, Allure) va TMS bilan integratsiya/sinxronizatsiya kabi boshqa masalalar hal qilinadi.

Manbalar:

* [CI/CD nima? Uzluksiz integratsiya va uzluksiz yetkazib berish haqida] (https://habr.com/ru/company/otus/blog/515078/)
* [CI/CD haqida batafsil] (https://testengineer.ru/razbiraemsya-v-ci-cd/)
* [Android uchun avtomatik testlar. To‘liq manzara] (https://habr.com/ru/company/kaspersky/blog/510230/)

Qo‘shimcha material:

* [Continuous Testing в CI/CD: что это, зачем нужно и как работает](https://habr.com/ru/company/southbridge/blog/670422/)
* [DevOps инструменты не только для DevOps. Процесс построения инфраструктуры автоматизации тестирования с нуля](https://habr.com/ru/post/497918/)
* [Руководство для начинающих: создаем DevOps-пайплайн](https://habr.com/ru/company/skillfactory/blog/509964/)
* [Зачем CI/CD тестировщикам?](https://habr.com/ru/company/JetBrains/blog/650757/)
* [Jenkins Pipeline. Что это и как использовать в тестировании](https://habr.com/ru/company/yoomoney/blog/538664/)
* [ГДЕ И КАК ПРОГОНЯТЬ UI ТЕСТЫ](https://www.youtube.com/watch?v=0AQlKbskhkM\&t=3963s)
* [Инфраструктура + тестирование = любовь](https://habr.com/ru/post/655671/)
* [Leadership in test: a guide to infrastructure and environments](https://theqalead.com/topics/infrastructure/)
* [Leadership in test: testing tools](https://theqalead.com/topics/testing-tools/)
* [Создаем инфраструктуру для интеграционных тестов](https://habr.com/ru/company/2gis/blog/575688/)
* [HOW TO RUN API SMOKE TESTS IN YOUR CONTINUOUS DEPLOYMENT PIPELINE](https://theqalead.com/topics/api-smoke-tests-cd-pipeline/)
* [Разбираемся в CI/CD](https://testengineer.ru/razbiraemsya-v-ci-cd/)
* [Что такое CI (Continuous Integration)](https://habr.com/ru/post/508216/)
* [Как мы настроили CI/CD, чтобы релизить часто и без страха](https://habr.com/ru/company/otkritie/blog/568612/)
* [Как настроить Pipeline для Jenkins, Selenoid, Allure](https://habr.com/ru/company/simbirsoft/blog/597703/)
* [CI-билд - это не елка](https://telegra.ph/CI-bild--ehto-ne-elka-02-15)
* [Идеальный пайплайн в вакууме](https://habr.com/ru/company/rabota/blog/560922/)
* [Основные подходы к CI/CD для целей тестирования ПО](https://www.youtube.com/watch?v=oiSUH4eHYoc\&t=5980s)
* [How To Have Seamless Script Execution Planning And Reporting For Success Of An Automation Project](https://www.softwaretestinghelp.com/automation-testing-tutorial-6/)
* [Что такое сборщик продукта](https://habr.com/ru/post/595375/)
* [#8 QA инфраструктура компании на локальной машине. Docker, Jenkins, Jira, Selenoid, Allure.](https://www.youtube.com/watch?v=LeA2\_GJ1e70\&list=WL\&index=9\&t=3047s)
* [Автотесты и Docker](https://testengineer.ru/avtotesty-i-docker/)
* [Интеграция с Allure: структурировать, упростить, стабилизировать](https://habr.com/ru/company/wrike/blog/588873/)
* [Автоматизация расчета покрытия требований и его визуализация в Allure Report](https://www.youtube.com/watch?v=oPpVRc7xvDc)
* [Что такое Docker](https://www.software-testing.ru/library/testing/testing-for-beginners/3661-docker)
* [Continuous Integration with Jenkins](https://learn.epam.com/detailsPage?id=62dc3947-e941-4c30-ba32-552eb363978e)
* [Стратегии деплоя в Kubernetes: rolling, recreate, blue/green, canary, dark (A/B-тестирование)](https://habr.com/ru/company/flant/blog/471620/)
* [Как e2e автотесты на Selenide помогают QA-команде при частых релизах](https://habr.com/ru/company/croc/blog/546430/)
* [Как ускорить автотесты](https://habr.com/ru/company/vk/blog/645695/)
* [Тестируем CI Pipeline](https://www.youtube.com/watch?v=OvhjxN9fY5c)
* [Switchboard: набор инструментов для управления авто-тестами](https://www.youtube.com/watch?v=2RDT1gsSjcE)
* [Централизованное логирование в Docker с применением ELK Stack](https://habr.com/ru/company/otus/blog/542144/)
* [Строим домашний CI/CD при помощи GitHub Actions и Python](https://habr.com/ru/post/476368/)
* [Нагрузочное тестирование как CI-сервис для разработчиков](https://habr.com/ru/company/pt/blog/504290/)
* [Автоматическое тестирование микросервисов в Docker для непрерывной интеграции](https://habr.com/ru/company/auriga/blog/503334/)
* [Тесты на pytest с генерацией отчетов в Allure с использованием Docker и Gitlab Pages и частично selenium](https://habr.com/ru/post/513432/)
* [Автоматизация системных тестов на базе QEMU (Часть 1/2)](https://habr.com/ru/post/520310/)
* [Как сократить время сборки образов Docker в GitLab CI](https://habr.com/ru/company/otus/blog/537780/)
* [Crash-crash, baby. Автоматический мониторинг фатальных ошибок мобильных приложений](https://habr.com/ru/company/avito/blog/518222/)
* [Anna: готовим отчет о тестировании API, чтобы все были довольны](https://habr.com/ru/post/659729/)
* [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/index.ru\_RU.html), [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow), [GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab\_flow.html)