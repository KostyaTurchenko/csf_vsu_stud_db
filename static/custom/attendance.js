function init() {
    let previous_clicked_td;

    let table = $("#table-attendance");
    let now_date = new Date().toLocaleDateString();
    let tr_with_now_date = $(table)
        .children('thead')
        .children('tr:first')
        .children('th:contains(' + now_date + '):first');

    let now_date_index = $(tr_with_now_date).index();
    let td_on_one_line_with_now_date;
    if (now_date_index !== -1) {
        td_on_one_line_with_now_date = $(table)
            .children('tbody')
            .children('tr')
            .find('td:eq(' + now_date_index + ')');
    }
    $(tr_with_now_date).css({backgroundColor: 'red'});
    $(td_on_one_line_with_now_date).css({backgroundColor: 'red'});
    $(td_on_one_line_with_now_date).css({cursor: 'pointer'});

    $(td_on_one_line_with_now_date).on('click', function () {
        $(previous_clicked_td).css({backgroundColor: 'red'});
        previous_clicked_td = $(this);
        $(this).css({backgroundColor: 'blue'});
    });

    $(td_on_one_line_with_now_date).on('dblclick', function () {
        if ($(this).text() === '-') {
            $(this).text('+');
        } else {
            $(this).text('-');
        }
    });

    $('select.custom-select').on('change', function () {
        let course = $("#course").children("option:selected").val().split(' ')[0];
        let group = $("#group").children("option:selected").val();
        let group_split = group.split(' ')[0].split('.');
        let group_num = group_split[0];
        let group_subnum;
        if (group_split[1] !== undefined) {
            group_subnum = group_split[1];
        } else {
            group_subnum = 0;
        }
        let lesson_type = $("#lesson_type").children("option:selected").val();
        let lesson = $("#lesson").children("option:selected").val();
        $.post('/attendance', {
            course: course,
            group_num: group_num,
            group_subnum: group_subnum,
            lesson_type: lesson_type,
            lesson: lesson
        }, function (data) {
            console.log(data);
            let table = $('#table-attendance');
            $('select.custom-select').empty();
            $(table)
                .children('thead')
                .children('tr:first')
                .empty();
            $(table)
                .children('tbody')
                .empty();
            for (let i = 1; i < 5; i++) {
                if (i !== parseInt(data.course)) {
                    $('#course').append('<option>' + i + ' курс');
                } else {
                    $('#course').append('<option selected>' + i + ' курс');
                }
            }
            $.each(data.groups, function (index, group) {
                if (group.num === parseInt(data.group_num) && group.subnum === parseInt(data.group_subnum)) {
                    if (group.subnum === 0) {
                        $('#group').append('<option selected>' + group.num + ' группа');
                    } else {
                        $('#group').append('<option selected>' + group.num + '.' + group.subnum + ' группа');
                    }
                } else {
                    if (group.subnum === 0) {
                        $('#group').append('<option>' + group.num + ' группа');
                    } else {
                        $('#group').append('<option>' + group.num + '.' + group.subnum + ' группа');
                    }
                }
            });
            $.each(data.lesson_types, function (index, lesson_type) {
                $('#lesson_type').append('<option>' + lesson_type);
            });
            for (let j = 0; j < 4; j++) {
                $('#lesson').append('<option>Язык С++');
            }
            let table_header = $(table)
                .children('thead')
                .children('tr:first');
            $(table_header).append('<th scope="col">ФИО студента/Дата проведения занятия');
            $.each(data.week_dates, function (index, week_date) {
                $(table_header).append('<th scope="col" class="align-middle">' + week_date);
            });
            let tbody = $(table).children('tbody');
            $.each(data.students, function (index, student) {
                $(tbody).append('<tr>');
                let tr = $(tbody).children('tr:last');
                $(tr).append('<td class="align-middle font-weight-bold">' +
                    student.surname + " " + student.firstname + " " + student.middlename);
                for (let h = 0; h < 12; h++) {
                    $(tr).append('<td class="align-middle h2">+');
                }
            });
        });
    });
}

$(document).ready(function () {
    init();
});

$(document).ajaxComplete(function () {
   init();
});