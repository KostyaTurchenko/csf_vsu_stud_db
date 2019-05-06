## Были исправлены, в соответствии с выставленными требованиями: доска в Trello и Miro, а также добавлены новые документы к проекту
Trello
https://trello.com/b/gZx6mGb6/tpcsf

Mire
https://realtimeboard.com/app/board/o9J_kxmDt4I=/

Анализ предметной области:
https://github.com/erilya/csf_vsu_stud_db/blob/master/__docs/%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BC%D0%B5%D1%82%D0%BD%D0%BE%D0%B9%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8.docx

Техническое задание:
https://github.com/erilya/csf_vsu_stud_db/blob/master/__docs/TZ.docx

Отчетный документ:

Документация:

Распределение по ролям:

Дополнительная информация о проекте расположена в Wiki репозитории.

Приложение, а так же вся документация разрабатывается группой студентов в рамках дисциплины "Технологии программирования" 3 курса ФКН 1 группы: Еремин Илья, Дуненбаев Артем и Баженов Вадим.

Login in GitHub: Еремин Илья erilya, Дуненбаев Артем Petizzen и Баженов Вадим Bazhen1337

# Система учёта аттестаций ВГУ ФКН для бакалавриата.
## Приложение должно позволять хранить информацию о:
1. Студентах факультета;
2. Студенческих группах (состояние группы в каждом семестре на протяжении всего срока обучения);
3. Учебных планах _(единица учебного плана - это предмет у определённой группы, в определённом семестре, с указанием преподавателя и типа отёчности: зачёт, экзамен, зачёт с оценкой)_;
4. Результатах аттестаций.

В системе необходимо реализовать авторизацию. Необходимо выделить следующие роли пользователей
### Роли:
1. **Секретарь (администратор)**. Формирует студенческие группы, списки студентов, преподавателей, учебные планы. Может также выставлять оценки по аттестациям по всем предметам.
2. **Преподаватель**. Может выставлять оценки по аттестациям только для своих предметов и групп.
3. **Гость**. Доступ без авторизации. Может просматривать результаты аттестаций.

Необходимо реализовать интерфейс для перевода всех студентов одной группы на следующий семестр(курс) и выпуска. При этом необходимо учитывать, что перевод возможен только при условии заполнения всех записей об аттестациях для текущего семестра. После перевода студента на следующий семестр (или оформления выпуска) редактирование результатов аттестаций запрещается, в том числе секретарю. Результаты за прошлый семестр должны быть сохранены включая выпущенных студентов.

Предусмотреть механизм отчисления и восстановления студента, а также установления для него атрибута "в академическом отпуске". 

### В приложении должно быть реализовано дополнительно:
1. Вывод статистической информации о результатах аттестации по группам и по конкретному студенту
2. Формирование бланков аттестационных ведомостей в формате odt, doc или pdf
