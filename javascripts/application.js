(function() {
  jQuery(function($) {
    'use strict';

    checkCookie();

    // SLIDE DOWN navigation when down loading
    setTimeout(function() {
      $('nav').addClass('moveUp');
      $('#newsletter').addClass('extend');
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

    // ABOUT SECTIONS
    $('#aboutContainer').on('click touch', 'h3', function (e) {
      if ($(e.target).next().css('display') !== 'block') {
        $('#aboutContainer').find('p, img').slideUp();
        $(e.target).next().slideDown().next().slideDown();
      }
    });

    // MAILCHIMP POPUP
    $('#noThanks').bind('click touch', function(e) {
      e.preventDefault(); e.stopPropagation();
      $('#newsletter').removeClass('extend');
    });

    // SECIAL OFFER
    $('.specialOffer').on('click touch', function(e) {
      e.preventDefault(); e.stopPropagation();
      $('#specialOfferPopup').addClass('extend');
    });
    $('#specialOfferPopup').on('click touch', function(e) {
      $('#specialOfferPopup').removeClass('extend');
    });
  });
}).call(this);



//cookie code is based on the w3school's cookie tutorial, comments are mine
//setCookie is used to install a new cookie
function setCookie(c_name, value, exdays) {

  var exdate = new Date();
  //get system date&time
  exdate.setDate(exdate.getDate() + exdays);
  //calculates the expiration date, adding exdays to the current date

  var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
  //escape() makes the string stored in value ASCII confirm, ie no special characters
  //example: c_value = "value string; expires=Wed, 21 Nov 2012 16:38:52 GMT"

  document.cookie = c_name + "=" + c_value;
  //writes out cookie:
  //MyCookieName=MyCookieValue; expires=Wed, 21 Nov 2012 16:38:52 GMT
}

//returns the value of a cookie
function getCookie(c_name) {

  var i, x, y;
  //counters and iteratorxs

  var ARRcookies = document.cookie.split(";");
  //this creates an array of strings for all the arguments in the cookie

  for ( i = 0; i < ARRcookies.length; i++) {//loop through the elements of the array

    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    //this extracts the name of cookie

    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    //this extracts the rest of the arguement after the equalsign

    x = x.replace(/^\s+|\s+$/g, "");
    //this deletes all white and empty spaces in the string, using RegExp

    if (x == c_name) {
      return unescape(y);
      //if this is what we are looking for then return the value
    }
  }
}

function checkCookie() {
  var username = getCookie("hasbeenhere");

  if (username != null && username != "") {
    $('#newsletter').remove();
  } else {
    setCookie("hasbeenhere", "yes", 4);
  }
}
//end of cookie code