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

    $('a.info, .mainLogo').bind('click touch', function(e) {
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
      $(e.target).next().slideToggle().next().slideToggle();
      $(e.target).find('span.arrow-down').toggleClass('open');
    });

    // MAILCHIMP POPUP
    $('#noThanks').bind('click touch', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('#newsletter').removeClass('extend');
      setCookie('hasbeenhere', 'yes', 4);
    });

    $('#alreadySubscribed').bind('click touch', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('#newsletter').removeClass('extend');
      setCookie('hasbeenhere', 'yes', 360);
    });

  });
}).call(this);



//cookie code is based on the w3school
function setCookie(cName, value, exdays) {
  'use strict';
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var cValue = escape(value) + ((exdays == null) ? '' : '; expires=' + exdate.toUTCString());
  document.cookie = cName + '=' + cValue;
}

function getCookie(c_name) {
  'use strict';
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
  'use strict';
  var hasbeenhere = getCookie('hasbeenhere');
  if (hasbeenhere === 'yes') {
    $('#newsletter').remove();
  }
}
//end of cookie code