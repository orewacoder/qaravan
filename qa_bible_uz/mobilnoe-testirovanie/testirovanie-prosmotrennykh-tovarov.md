---
title: "Тестирование просмотренных товаров"
---

# Тестирование просмотренных товаров

Весьма популярная фича во многих маркетплейсах, которая выделяет просмотренные товары от непросмотренных в какой-либо ленте, чтобы пользователю было проще ориентироваться.

**Немного ТЗ**

* Карточка товара будет считаться просмотренной, если она была открыта и в ней хоть что-то показали пользователю без ошибок. Срок хранения «просмотренности» на клиенте составляет неделю. Затем товар помечается непросмотренным;
* Для авторизованных пользователей: если пользователь разлогинивается, то все статусы «просмотрено» сбрасываются;
* Для неавторизованных пользователей: если пользователь авторизуется, то все статусы «просмотрено» сохраняются;
* Также имеются и другие товары с различными статусами, которым отдаются приоритеты.

**Как тестировать и на что обращать внимание**

* **Логика**: с одной стороны, логика довольно простая, необходимо просмотреть товар, вернуться в ленту и проверить, появился ли статус «просмотрено». Не совсем так. Обращаем внимание на условие того, а при каком условии именно проставляется статус. Верно! Необходимо, чтобы не просто товар отобразился, проверить, отобразились ли данные по товару. Например, если вернуться «назад» когда товар не отобразился, то товар не будет засчитан как «просмотренный». А если пользователь не авторизован? Необходимо проверить кейсы, связанные с авторизацией и разлогином. Просмотренный товар неавторизованным пользователем должен либо помечаться просмотренным после авторизации, либо возвращаться в «непросмотренные» при разлогине. Проверяем срок хранения статуса «просмотрено» в течение N времени. А если товар неделю статус хранится на клиенте - в таком случае ждать столь продолжительное время не стоит, можно изменить в коде переменную, отвечающую за срок хранения статуса.
* **Верстка**: при добавлении различных новых бейджей стоит отдельное внимание уделять верстке карточек на разных устройствах с разным разрешением экрана и альбомной ориентации.
* **Дополнительные проверки**: в зависимости от реализации могут быть добавлены тултипы, попапы, тоасты - все это, разумеется, требует дополнительных проверок. Также не стоит забывать и про базовые кейсы при тестировании.

Источники:

* [Просмотренные товары](https://telegra.ph/Prosmotrennye-tovary-10-17)
