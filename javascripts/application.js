(function() {
  jQuery(function($) {

    function toggleHome($e, txt) {
      if ($e.text() == 'Home') {
        $e.text(txt);
      } else {
        $e.text('Home');
      }
    }
    
    $('a.stockists').bind('click touch', function(e) {
      e.preventDefault(); e.stopPropagation();
      $('#stockists').toggleClass('extend');
      $('#info').removeClass('extend');
      setTimeout(function() {
        toggleHome($('a.stockists'), 'Stockists');
        $('a.info').text('More Info');
      }, 500);
    });

    $('a.info').bind('click touch', function(e) {
      e.preventDefault(); e.stopPropagation();
      $('#info').toggleClass('extend');
      $('#stockists').removeClass('extend');
      setTimeout(function() {
        toggleHome($('a.info'), 'More Info');
        $('a.stockists').text('Stockists');
      }, 500);
    });

  });
}).call(this);
