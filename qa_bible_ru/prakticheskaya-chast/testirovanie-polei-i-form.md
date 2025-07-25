---
title: "Тестирование полей и форм"
---

# Тестирование полей и форм

“Дана форма для регистрации. Протестируйте” - вопрос номер один практически на всех собеседованиях на младшую позицию. Он хорош еще и тем, что в зависимости от уровня кандидата будет раскрыт в разной степени. Всегда в первую очередь уточняйте хотя бы какие-то минимальные требования, даже если вначале озвучивают, что требования не формализованы.

* Начальный уровень представляет из себя простые позитивные и негативные кейсы (в основном на валидацию):
  * Обязательные поля отмечены \*
  * Обязательные поля заполнены/нет
  * Галочки на соглашениях проставлены/нет
  * Поле password и подтверждение имеет соответствующий тип (в полях формы прописан корректный атрибут TYPE, сообщающий браузеру тип элементов формы.)
  * Проверяется, что пароли одинаковы
  * Имя пользователя валидируется как минимум на длину и спец. символы, остальное по ТЗ
  * Адрес почты валидируется в соответствии со стандартом (наличие символа @, несколько символов @, длины частей до и после @, допустимые символы до и после, наличие пробелов перед адресом и после, корректная доменная часть и т.п.)
  * Поля с ожидаемым числовым вводом и текстовым соответственно проверить позитивными и негативными кейсами по типам данных
* Следующий уровень:
  * Все из предыдущего
  * Кроссбраузерность
  * Понятность формы. Присутствует описание полей или плейсхолдеры
  * Сенситив данные не должны передаваться в URL
  * Проверяем, как форма отображается до сабмита и после
  * Поведение, если нажать сабмит несколько раз подряд
  * Если формы очищаются после сабмита, проверить регистрацию существующего пользователя
  * Проверка глобализации - номер телефона, дата, почтовый индекс, валюта, вертикальное или RTL письмо и т.п. (опционально)
  * Проверка простых инъекций
  * Правильная работа многошаговых форм (Навигация рядом с формой показывает текущий этап и количество оставшихся шагов.)
  * Для полей, предполагающих загрузку файлов, прописан атрибут accept, определяющий тип загружаемых документов
  * Текстовое многострочное поле при вводе объемного сообщения изменяет высоту либо в правой части появляется скроллбар для просмотра всего содержимого
  * Для авторизованного пользователя в поля формы автоматически подставляются все известные о посетителе данные.
  * Форма сохраняется в веб-формах (админ-панели) или SQL-таблицах.
  * Прописан реальный e-mail лица, отвечающего за обработку заявок (если предполагается ОС)
  * Опционально. Пользователь получает уведомление на свой e-mail об успешно полученной заявке и последующих действиях, которые от него требуются.
  * Прописан атрибут autocomplete для полей, поддерживающих это значение
* Extra:
  * Проверяем, отправились ли данные после сабмита
  * Проверяем, добавились ли соответствующие записи в бд
  * Проверка загрузки формы и сабмита при медленном/нестабильном интернет-соединении
  * Корректность cookies/токена и т.п. после сабмита

Доп. материал:

* [Пароли, их тестирование и использование](https://training.qatestlab.com/blog/technical-articles/testing-and-using-passwords/)
* [Принципы и тестовые сценарии для тестирования паролей](https://testmatick.com/ru/osobennosti-testirovaniya-parolej/)
* [Как Тестировать? Форма Входа](http://marshrut-testirovshika.ru/forma\_vhoda/)
* [Acceptable email address syntax according to RFC](https://www.mailboxvalidator.com/resources/articles/acceptable-email-address-syntax-rfc/)
* [Как тестировать формы? Мини-руководство](https://testengineer.ru/mini-gajd-po-testirovaniyu-form/)
* [Как вы протестируете текстовое поле?](https://software-testing.ru/library/testing/test-analysis/3713-how-would-you-test-text-field)
* [Чек-лист для тестирования числового поля](https://okiseleva.blogspot.com/2020/10/blog-post\_28.html#more)
* [Чек-лист для веб-форм](https://disk.yandex.ru/i/VdGkQ\_oPt7n9xQ)
* [Как протестировать какое-то поле](https://www.youtube.com/watch?v=Q0kSqdOzFvw)
* [Пример тестирования поля «Имя»](https://www.youtube.com/watch?v=3-5RbtRaYnk)
* [Как найти границы на клиенте и сервере](https://habr.com/ru/post/510458/)
* [Чек-лист - как тестировать поиск](http://okiseleva.blogspot.com/2021/09/blog-post.html)
