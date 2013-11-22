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


$(document).on('click', '.close', function () {
    $(this).closest('.tag').remove();
    if ($('.tag').length == 0) {
        $('.submit').addClass('disabled');
        $('.tags').attr('placeholder', 'Suggest a hashtag, ex. #midtownsac')
    }
});  

  /* Functions for hashtag suggestions
   * ================================= */

  $('#suggest-submit').on('click', function() {
    var hashtag = $('#suggest-field').val();
    jQuery.ajax({
      url: 'suggest.php',
      data: 'hashtag='+hashtag,
      type: 'POST',
      async: false,
      success: function(data, stat, jqXHR) {
        $('#suggest-field').val('');
        $('#suggest-field').attr('placeholder', 'Thank you for the suggestion!');
      }
    });
  });



})
