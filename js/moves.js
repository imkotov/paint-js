var a = 0;
$("body").on( "keydown", function( event ) {
  var keycode = event.which;
  if(keycode == 68 || keycode == 39) {
    var nowmarg = parseInt($('.block').css('left'));
    $('.block').css({'left': nowmarg+10});
    // kb.d
  } else if(keycode == 65 || keycode == 37) {
    var nowmarg = parseInt($('.block').css('left'));
    $('.block').css({'left': nowmarg-10});
    // kb.a
  } else if(keycode == 83 || keycode == 40) {
    var nowmarg = parseInt($('.block').css('top'));
    $('.block').css({'top': nowmarg+10});
    // kb.s
  } else if(keycode == 87 || keycode == 38) {
    var nowmarg = parseInt($('.block').css('top'));
    $('.block').css({'top': nowmarg-10});
    // kb.w
  } else if(keycode == 69 || keycode == 13) {
    $('body').append('<div class=".pastedblock" id="pasted'+a+'"></div>');
    $('#pasted'+a).css({
      "position": "absolute",
      "background-color": drawColor,
      "width": "10px",
      "height": "10px",
      "top": $('.block').css('top'),
      "left": $('.block').css('left'),
    });
    a = a+1;
    // kb.e
  }
});
