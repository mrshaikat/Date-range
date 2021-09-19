$(function () {
    $('input[name="datetimes"]').daterangepicker({
        opens: 'left',
        "autoUpdateInput": false,
        "minDate": new Date(),
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('DD/MM/YYYY') + ' to ' + end.format('DD/MM/YYYY'));
    });

    $('input[name="datetimes"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY'));
        $('input[name="datetimes2"]').val(picker.endDate.format('DD/MM/YYYY'));
    });

});

$(function () {
    $('input[name="datetimes2"]').daterangepicker({
        opens: 'left',
        "autoUpdateInput": false,
        "minDate": new Date(),

    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('DD/MM/YYYY'));
    });

    $('input[name="datetimes2"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY'));
        $('input[name="datetimes"]').val(picker.endDate.format('DD/MM/YYYY'));
    });

});


