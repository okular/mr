$('img').on('click', function (){
  $('body').append('<div id="dialog" class="active" title="Image"><img src="' + $(this).attr('src') + '" width="300" /></div>');
  //$('#dialog').dialog();
});

$('html').keyup(function(e) {

  if($('#dialog').hasClass('active')) {
      if (e.keyCode == 27) { 
        $('#dialog').remove(); 
      }  
    }
});