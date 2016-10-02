console.log('\'Allo \'Allo!');


$(document).ready(function() {

  function makeBoxes() {

    var $grid =  $('.grid');
    var limit = 33;

    var box = '<div class="box my_popup_open"><img src="/images/BestofUM_Logo_White.jpg" /></div>';

    for (var i = 0; i < limit; i++) {
      $grid.append(box);
    }

    $('.grid').isotope({
       // options
       itemSelector: '.box'
       //layoutMode: 'fitRows'
     });
  }

  makeBoxes();

     // Initialize the plugin
     $('#my_popup').popup();

});
