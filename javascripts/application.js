
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



jQuery(function($) {
  
  var router = new (Backbone.Router.extend({

    routes: {
      "(/)": "index",
      "stockists": "stockists",
      "info": "info",
      "buyOnline": "buyOnline",
      "trade": "trade",
      "(/)*path": "index"
    },

    index: function() {
      $('#info, #buyOnline, #trade, #stockists').removeClass('extend');
      $('a.info').text('More Info');
      $('a.buyOnline').text('Buy Online');
      $('a.trade').text('Trade');
      $('a.stockists').text('Stockists');
    },
    
    stockists: function() {
      $('a.info').text('More Info');
      $('a.buyOnline').text('Buy Online');
      $('a.trade').text('Trade');
      
      $('#stockists').toggleClass('extend');
      $('#info, #buyOnline, #trade').removeClass('extend');
      
      if($('a.stockists').text() !== 'Home') {
        $('a.stockists').text('Home');
      } else {
        $('a.stockists').text('Stockists');
      }
    },
    
    info: function() {
      $('a.stockists').text('Stockists');
      $('a.buyOnline').text('Buy Online');
      $('a.trade').text('Trade');
      
      $('#info').toggleClass('extend');
      $('#stockists, #buyOnline, #trade').removeClass('extend');
      
      if($('a.info').text() !== 'Home') {
        $('a.info').text('Home');
      } else {
        $('a.info').text('More Info');
      }
    },
    
    buyOnline: function() {
      $('a.stockists').text('Stockists');
      $('a.info').text('More Info');
      $('a.trade').text('Trade');
      
      $('#buyOnline').toggleClass('extend');
      $('#stockists, #info, #trade').removeClass('extend');
      
      if($('a.buyOnline').text() !== 'Home') {
        $('a.buyOnline').text('Home');
      } else {
        $('a.buyOnline').text('Buy Online');
      }
    },
    
    trade: function() {
      $('a.stockists').text('Stockists');
      $('a.info').text('More Info');
      $('a.buyOnline').text('Buy Online');
      
      $('#trade').toggleClass('extend');
      $('#stockists, #info, #buyOnline').removeClass('extend');
      
      if($('a.trade').text() !== 'Home') {
        $('a.trade').text('Home');
      } else {
        $('a.trade').text('Trade');
      }
    }
  }))();


  // MAIN NAV LINKS
  $('a.stockists').bind('click touch', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if($(e.currentTarget).text() !== 'Home') {
      router.navigate('stockists', {trigger: true});
    } else {
      router.navigate('/', {trigger: true});
    }
  });

  $('a.info, .mainLogo').bind('click touch', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if($(e.currentTarget).text() !== 'Home') {
      router.navigate('info', {trigger: true});
    } else {
      router.navigate('/', {trigger: true});
    }
  });

  $('a.buyOnline').bind('click touch', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if($(e.currentTarget).text() !== 'Home') {
      router.navigate('buyOnline', {trigger: true});
    } else {
      router.navigate('/', {trigger: true});
    }
  });

  $('a.trade').bind('click touch', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if($(e.currentTarget).text() !== 'Home') {
      router.navigate('trade', {trigger: true});
    } else {
      router.navigate('/', {trigger: true});
    }
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

  $('#newslettericon').on('click touch', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('#newsletter').addClass('extend');
  });

  // SLIDE DOWN navigation when done loading
  setTimeout(function() {
    $('nav.hidden').addClass('moveUp');
    checkCookie();
    Backbone.history.start();
  }, 600);
});
