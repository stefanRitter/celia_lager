(function() {
  'use strict';

  jQuery(function($) {

    // SLIDE DOWN navigation when down loading
    setTimeout(function() {
      $('nav.hidden').addClass('moveUp');
      checkCookie();
    }, 600);


    // MAIN NAV LINKS
    $('a.stockists').bind('click touch', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('a.info').text('More Info');
      $('a.buyOnline').text('Buy Online');
      
      $('#stockists').toggleClass('extend');
      $('#info, #buyOnline').removeClass('extend');
      
      if($('a.stockists').text() !== 'Home') {
        $('a.stockists').text('Home');
      } else {
        $('a.stockists').text('Stockists');
      }
    });

    $('a.info, .mainLogo').bind('click touch', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('a.stockists').text('Stockists');
      $('a.buyOnline').text('Buy Online');
      
      $('#info').toggleClass('extend');
      $('#stockists, #buyOnline').removeClass('extend');
      
      if($('a.info').text() !== 'Home') {
        $('a.info').text('Home');
      } else {
        $('a.info').text('More Info');
      }
    });

    $('a.buyOnline').bind('click touch', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('a.stockists').text('Stockists');
      $('a.info').text('More Info');
      
      $('#buyOnline').toggleClass('extend');
      $('#stockists, #info').removeClass('extend');
      
      if($('a.buyOnline').text() !== 'Home') {
        $('a.buyOnline').text('Home');
      } else {
        $('a.buyOnline').text('Buy Online');
      }
    });

    $('.comingSoon').on('click touch', function(e) {
      e.preventDefault();
      $(e.target).text('Coming Soon');
    });


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

    $('.triggerNewsletter').on('click touch', function() {
      $('#newsletter').addClass('extend');
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
    $('#newsletter').removeClass('extend');
  } else {
    $('#newsletter').addClass('extend');
  }
}
//end of cookie code