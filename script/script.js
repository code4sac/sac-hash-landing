$(document).ready(function(){
  $('.tags').on('keyup', function () {
    var self = $(this),
        val = self.val(),
        lastChar = val.slice(-1),
        tag;

    if (lastChar == ' ') {
        val = val.trim();
        if (val.charAt(0) != '#') {
            val = '#' + val;
        }
        tag = $('<span class="tag"><span class="close"><i class="fa fa-times"></i></span>' + val + '</span>');
        $('.tag-container').append(tag);
        tag.animate({
            'margin-left': 0
        }, 60);

        if (tag.is(':first-child'))
            $('.submit').removeClass('disabled');
        self.attr('placeholder', 'Suggest another tag, or press submit when you\'re done').val('').focus();
    }
}).on('keydown', function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
    }
});


$(function() {
    $('.banner').unslider({
        speed: 800,
        delay: 3000,
        keys: true
    });
});


$(document).on('click', '.close', function () {
    $(this).closest('.tag').remove();
    if ($('.tag').length == 0) {
        $('.submit').addClass('disabled');
        $('.tags').attr('placeholder', 'Suggest a hashtag, ex. #midtownsac')
    }
});  
})
