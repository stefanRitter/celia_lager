(function() {
  jQuery(function($) {
    'use strict';

    // SLIDE DOWN navigation when down loading
    setTimeout(function() {
      $('nav').addClass('moveUp');
    }, 600);


    // MAIN NAV LINKS
    $('a.stockists').bind('click touch', function(e) {
      e.preventDefault(); e.stopPropagation();
      $('#stockists').toggleClass('extend');
      $('#info, #buyOnline').removeClass('extend');
      setTimeout(function() {
        toggleHome($('a.stockists'), 'Stockists');
        $('a.info').text('More Info');
      }, 500);
    });

    $('a.info').bind('click touch', function(e) {
      e.preventDefault(); e.stopPropagation();
      $('#info').toggleClass('extend');
      $('#stockists, #buyOnline').removeClass('extend');
      setTimeout(function() {
        toggleHome($('a.info'), 'More Info');
        $('a.stockists').text('Stockists');
      }, 500);
    });

    $('a.buyOnline').bind('click touch', function(e) {
      e.preventDefault(); e.stopPropagation();
      $('#buyOnline').toggleClass('extend');
      $('#stockists, #info').removeClass('extend');
      $('a.info').text('More Info');
      $('a.stockists').text('Stockists');
    });

    function toggleHome($e, txt) {
      // there are 2 links (one hidden)
      if ($e.text() === 'HomeHome') {
        $e.text(txt);
      } else {
        $e.text('Home');
      }
    }


    // MORE INFO NAV LINKS
    $('#info ul li').on("click touch", function(e) {
      $('#info ul li').removeClass('active');
      var target = $(e.target).attr('id');
      $('.subNav').find('#'+target).addClass('active');
      $('.topNav').find('#'+target).addClass('active');
      $('#info .about, #info .contact, #info .pressPr, #info .ingredients').fadeOut();
      $('#info .'+target).fadeIn();
    });
    $('#info .contact, #info .pressPr, #info .ingredients').fadeOut();

    function scrollTo($parentDiv, target) {
      $parentDiv.scrollTo(target,800);
    }

  });
}).call(this);
