


jQuery(function($) {
  "use strict";
/* ==============================================
   Countdown
=============================================== */
  // Create a countdown instance. Change the launchDay according to your needs.
  // The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
  // Thus the launchDay below denotes 7 May, 2014.
  var launchDay = new Date(2015, 4-1, 3);
  $('#timer').countdown({
  until: launchDay
  });




    /* ----------------------------------------------------------- */
   /*  Animation
   /* ----------------------------------------------------------- */
        new WOW().init();


 



});