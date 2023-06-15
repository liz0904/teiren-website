$(function () {
    $('#submit').on('click', function () {
        var overlay = $('<div>').css({
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999999
        }).attr('id', 'overlay');
        $('body').append(overlay);
        $.ajax({
            type: 'post',
            url: '/send',
            data: $('#inq-form').serialize()
        }).done(function (data) {
            if (data.message) {
                alert(data.message)
                location.reload()
            }
            else if (data.error) {
                alert(data.error)
                $('#overlay').remove()
            }
            else {
                alert('전송 실패:\n 직접 [ liz09045@gmail.com ]으로 문의하시길 바랍니다.')
                $('#overlay').remove()
            }
        }).fail(function () {
            alert('전송 실패:\n 직접 [ liz09045@gmail.com ]으로 문의하시길 바랍니다.')
            $('#overlay').remove()
        })
    })
})