(function() {
  'use strict';

  jQuery(function($) {

    checkCookie();

    // SLIDE DOWN navigation when down loading
    setTimeout(function() {
      $('nav').addClass('moveUp');
      $('#newsletter').addClass('extend');
    }, 600);


    // MAIN NAV LINKS
    $('a.stockists').bind('click touch', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('#stockists').toggleClass('extend');
      $('#info, #buyOnline').removeClass('extend');
      setTimeout(function() {
        toggleHome($('a.stockists'), 'Stockists');
        $('a.info').text('More Info');
      }, 500);
    });

    $('a.info').bind('click touch', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('#info').toggleClass('extend');
      $('#stockists, #buyOnline').removeClass('extend');
      setTimeout(function() {
        toggleHome($('a.info'), 'More Info');
        $('a.stockists').text('Stockists');
      }, 500);
    });

    $('a.buyOnline').bind('click touch', function(e) {
      e.preventDefault();
      e.stopPropagation();
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
    $('#info ul li').on('click touch', function(e) {
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

    // ABOUT SECTIONS
    $('#aboutContainer').on('click touch', 'h3', function (e) {
      if ($(e.target).next().css('display') !== 'block') {
        $('#aboutContainer').find('p, img').slideUp();
        $(e.target).next().slideDown().next().slideDown();
      }
    });

    // MAILCHIMP POPUP
    $('#noThanks').bind('click touch', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('#newsletter').removeClass('extend');
    });

  });
}).call(this);



//cookie code is based on the w3school
function setCookie(c_name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value = escape(value) + ((exdays == null) ? '' : '; expires=' + exdate.toUTCString());
  document.cookie = c_name + '=' + c_value;
}

function getCookie(c_name) {
  var i, x, y;
  var ARRcookies = document.cookie.split(";");

  for ( i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf('='));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf('=') + 1);
    x = x.replace(/^\s+|\s+$/g, '');
    if (x == c_name) {
      return unescape(y);
    }
  }
}

function checkCookie() {
  var username = getCookie('hasbeenhere');
  if (username != null && username != '') {
    $('#newsletter').remove();
  } else {
    setCookie('hasbeenhere', 'yes', 4);
  }
}
//end of cookie code