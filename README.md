Дополнительная информация о проекте расположена в Wiki репозитории.

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
