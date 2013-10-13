(function() {
  jQuery(function($) {


    // SLIDE DOWN navigation when down loading
    setTimeout(function() {
      $('nav').addClass('moveUp');
    }, 600);


    // MAIN NAV LINKS
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

    function toggleHome($e, txt) {
      // there are 2 links (one hidden)
      if ($e.text() === 'HomeHome') {
        $e.text(txt);
      } else {
        $e.text('Home');
      }
    }

  });
}).call(this);
