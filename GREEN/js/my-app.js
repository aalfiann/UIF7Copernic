// Initialize your app
var myApp = new Framework7({
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$$('a').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
});

myApp.onPageInit('tab', function (page) {
});

myApp.onPageInit('list', function (page) {
    $$('.action1').on('click', function () {
  myApp.alert('Action 1');
});
$$('.action2').on('click', function () {
  myApp.alert('Action 2');
}); 
});

myApp.onPageInit('form', function (page) {
});

myApp.onPageInit('google-map', function (page) {
  var myLatlng = new google.maps.LatLng(48.852873, 2.343627);
  var map;
  var mapOptions = {
    zoom: 12,
    center: myLatlng
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
      var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
});

myApp.onPageInit('notifications', function (page) {
    $$('.notification-default').on('click', function () {
    myApp.addNotification({
        title: 'Copernic',
        message: 'This is a simple notification message with title and message'
    });
});
$$('.notification-full').on('click', function () {
    myApp.addNotification({
        title: 'Copernic',
        subtitle: 'Notification subtitle',
        message: 'This is a simple notification message with custom icon and subtitle',
        media: '<i class="fa fa-heart"></i>'
    });
});
$$('.notification-custom').on('click', function () {
    myApp.addNotification({
        title: 'Copernic',
        subtitle: 'New message from John Doe',
        message: 'Hello, how are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere erat. Pellentesque id elementum urna, a aliquam ante. Donec vitae volutpat orci. Aliquam sed molestie risus, quis tincidunt dui.',
        media: '<img width="44" height="44" style="border-radius:100%" src="http://img4.wikia.nocookie.net/__cb20130920142351/simpsons/images/e/e9/Pic_1187696292_8.jpg">'
    });
});
$$('.notification-callback').on('click', function () {
    myApp.addNotification({
        title: 'My Awesome App',
        subtitle: 'New message from John Doe',
        message: 'Hello, how are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere erat. Pellentesque id elementum urna, a aliquam ante. Donec vitae volutpat orci. Aliquam sed molestie risus, quis tincidunt dui.',
        media: '<img width="44" height="44" style="border-radius:100%" src="http://img4.wikia.nocookie.net/__cb20130920142351/simpsons/images/e/e9/Pic_1187696292_8.jpg">',
        onClose: function () {
            myApp.alert('Notification closed');
        }
    });
});      
});

myApp.onPageInit('calendar', function (page) {
    // Default
      var calendarDefault = myApp.calendar({
          input: '#calendar-default',
      });
      // With custom date format
      var calendarDateFormat = myApp.calendar({
          input: '#calendar-date-format',
          dateFormat: 'DD, MM dd, yyyy'
      });
      // With multiple values
      var calendarMultiple = myApp.calendar({
          input: '#calendar-multiple',
          dateFormat: 'M dd yyyy',
          multiple: true
      });
      // Inline with custom toolbar
      var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
      var calendarInline = myApp.calendar({
          container: '#calendar-inline-container',
          value: [new Date()],
          weekHeader: false,
          toolbarTemplate: 
              '<div class="toolbar calendar-custom-toolbar">' +
                  '<div class="toolbar-inner">' +
                      '<div class="left">' +
                          '<a href="#" class="link icon-only"><i class="fa fa-chevron-left"></i></a>' +
                      '</div>' +
                      '<div class="center"></div>' +
                      '<div class="right">' +
                          '<a href="#" class="link icon-only"><i class="fa fa-chevron-right"></i></a>' +
                      '</div>' +
                  '</div>' +
              '</div>',
          onOpen: function (p) {
              $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
              $$('.calendar-custom-toolbar .left .link').on('click', function () {
                  calendarInline.prevMonth();
              });
              $$('.calendar-custom-toolbar .right .link').on('click', function () {
                  calendarInline.nextMonth();
              });
          },
          onMonthYearChangeStart: function (p) {
              $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
          }
});
});

myApp.onPageInit('chat', function (page) {
    var conversationStarted = false;
 
// Init Messages
var myMessages = myApp.messages('.messages', {
  autoLayout:true
});
 
// Init Messagebar
var myMessagebar = myApp.messagebar('.messagebar');
 
// Handle message
$$('.messagebar .link').on('click', function () {
  // Message text
  var messageText = myMessagebar.value().trim();
  // Exit if empy message
  if (messageText.length === 0) return;
 
  // Empty messagebar
  myMessagebar.clear()
 
  // Random message type
  var messageType = (['sent', 'received'])[Math.round(Math.random())];
 
  // Avatar and name for received message
  var avatar, name;
  if(messageType === 'received') {
  }
  // Add message
  myMessages.addMessage({
    // Message text
    text: messageText,
    // Random message type
    type: messageType,
    // Avatar and name:
    // Day
    day: !conversationStarted ? 'Today' : false,
    time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
  })
 
  // Update conversation flag
  conversationStarted = true;
});                
});

myApp.onPageInit('checkbox', function (page) {
});

myApp.onPageInit('radio', function (page) {
});

myApp.onPageInit('login-screen', function (page) {
  var pageContainer = $$(page.container);
  pageContainer.find('.button-round').on('click', function () {
    var username = pageContainer.find('input[name="username"]').val();
    var password = pageContainer.find('input[name="password"]').val();
    // Handle username and password
    myApp.alert('Username: ' + username + ', Password: ' + password, function () {
    });
  });
});   

myApp.onPageInit('404', function (page) { 
});

myApp.onPageInit('userlist', function (page) { 
});

myApp.onPageInit('feed', function (page) { 
});

myApp.onPageInit('grid', function (page) { 
});

myApp.onPageInit('cards', function (page) { 
});

myApp.onPageInit('blog', function (page) {
$$('#stickySocial').find('#stickyBtn').each(function(){
  var $el = $$(this);
  var ssCount = $el.data("count");
  var ssClass = $el.attr("class").split(' ')[0];
  $$('.'+ssClass+' .count').html(ssCount);
});
});

myApp.onPageInit('article', function (page) {
$$('#stickySocial').find('#stickyBtn').each(function(){
  var $el = $$(this);
  var ssCount = $el.data("count");
  var ssClass = $el.attr("class").split(' ')[0];
  $$('.'+ssClass+' .count').html(ssCount);
});
});

myApp.onPageInit('gallery', function (page) {
  var mySwiper = new Swiper('.swiper-container', {
  preloadImages: false,
  lazyLoading: true,
  pagination: '.swiper-pagination'
})
});

myApp.onPageInit('video', function (page) {
});

myApp.onPageInit('contact', function (page) {
  var myLatlng = new google.maps.LatLng(48.852873, 2.343627);
  var map;
  var mapOptions = {
    zoom: 11,
    center: myLatlng,
    disableDefaultUI: true
  };
  map = new google.maps.Map(document.getElementById('map-canvas-contact'),
      mapOptions);
      var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
/*
--------------------------------
Ajax Contact Form
--------------------------------
+ https://github.com/pinceladasdaweb/Ajax-Contact-Form
+ A Simple Ajax Contact Form developed in PHP with HTML5 Form validation.
+ Has a fallback in jQuery for browsers that do not support HTML5 form validation.
+ version 1.0.1
+ Copyright 2014 Pedro Rogerio
+ Licensed under the MIT license
+ https://github.com/pinceladasdaweb/Ajax-Contact-Form
*/

    var $form = $('#contact-form');

      $form.find('.button-round').on('click', function (e) {
        // remove the error class
        $('.form-group').removeClass('has-error');
        $('.help-block').remove();

        // get the form data
        var formData = {
            'name' : $('input[name="form-name"]').val(),
            'email' : $('input[name="form-email"]').val(),
            'subject' : $('input[name="form-subject"]').val(),
            'message' : $('textarea[name="form-message"]').val()
        };

        // process the form
        $.ajax({
            type : 'POST',
            url  : 'process.php',
            data : formData,
            dataType : 'json',
            encode : true
        }).done(function (data) {
            // handle errors
            if (!data.success) {
                if (data.errors.name) {
                    $('#name-field').addClass('has-error');
                    $('#name-field').find('.item-input').append('<span class="help-block">' + data.errors.name + '</span>');
                }

                if (data.errors.email) {
                    $('#email-field').addClass('has-error');
                    $('#email-field').find('.item-input').append('<span class="help-block">' + data.errors.email + '</span>');
                }

                if (data.errors.subject) {
                    $('#subject-field').addClass('has-error');
                    $('#subject-field').find('.item-input').append('<span class="help-block">' + data.errors.subject + '</span>');
                }

                if (data.errors.message) {
                    $('#message-field').addClass('has-error');
                    $('#message-field').find('.item-input').append('<span class="help-block">' + data.errors.message + '</span>');
                }
            } else {
                // display success message
                $form.html('<div class="content-block">' + data.message + '</div><p><a href="index.html" class="button button-round">Back</a></p>');
            }
        }).fail(function (data) {
            // for debug
            console.log(data)
        });

        e.preventDefault();
    });
  });


myApp.onPageInit('typo', function (page) {
});

myApp.onPageInit('button', function (page) {
});

myApp.onPageInit('colors', function (page) {
});

myApp.onPageInit('feature', function (page) {
});

myApp.onPageInit('page', function (page) {
});