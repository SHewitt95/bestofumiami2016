$(document).ready(function() {

    function makeBoxes() {

      var $grid =  $('.grid');
      var $box;

      bestOfData.forEach(function(d) {

        //if (d['photo url'] != "") {
          $box = $('<div class="box my_popup_open"><img src="images/' + d['photo url'] + '" /></div>');

          $box.data({'address': d['address']});
          $box.data({'author': d['author']});
          $box.data({'blurb': d['blurb']});
          $box.data({'category': d['category']});
          $box.data({'category section': d['category section']});
          $box.data({'name': d['name']});
          $box.data({'phone': d['phone']});
          $box.data({'photo url': d['photo url']});
          $box.data({'photographer': d['photographer']});
          $box.data({'voted': d['voted']});
          $box.data({'website': d['website']});

          $box.prepend('<div class="bg-color-green"><p class="center-text bold-text">' + d['category section'] + '<p/></div>');
          //$box.prepend('<div class=""><p class="center-text bold-text">' + d['category section'] + '<p/></div>');
          $grid.append($box);

      });

      $grid.imagesLoaded( function() {
          // init Isotope after all images have loaded
          $grid.isotope({
            // options
            itemSelector: '.box',
            layoutMode: 'masonry'
          });

        });

    }

    function makeSinglePage() {
      var that = $(this);
      var photo = $('.popup-img-container');
      var category = $('.category');
      var categoryname = $('.category-name');
      var name = $('.name');
      var blurb = $('.blurb');
      var author = $('.author');
      var photographer = $('.photographer');
      var address = $('.address');
      var phoneNumber = $('.phone-number');

      //category.text(that.data('category'));
      categoryname.text(that.data('category section') + ':  ');
      name.text(that.data('name'));
      blurb.text(that.data('blurb'));
      author.text('Words by ' + that.data('author'));
      photographer.text('Photo by ' + that.data('photographer'));
      address.text(that.data('address'));
      phoneNumber.text(that.data('phone'));
      photo.empty();
      photo.append('<img src="images/' + that.data('photo url') + '" alt="" />');
    }

    function doFilter() {
      var $grid =  $('.grid');
      var $that = $(this);
      var $box = $('.box');
      var $buttons = $('.sort-box-holder p');

      $buttons.css('background-color', '#7CBD9F');
      $that.css('background-color', '#479A3E');

      $grid.isotope({
        filter: function(i,d) {
          if ($that.text() == 'Voters\' Choice') {
            return $(d).data('voted') == 'yes';

          } else if ($that.text() == 'View All') {
            return true;

          } else {
            return $that.text() == $(d).data('category');
          }
        }
      })

    }



    $(window).scroll(function(){
  		if ($(this).scrollTop() > 1200) {
  			$('.backtotop').fadeIn();
  		} else {
  			$('.backtotop').fadeOut();
  		}
  	});



  	//Click event to scroll to top
  	$('.backtotop').on('click touchstart', function(){
  		$('html, body').animate({scrollTop : 0},800);
  		return false;
  	});

    makeBoxes();

    $('.box').on('click touchstart', makeSinglePage);
    $('.sort-box-holder p').on('click', doFilter);



   // Initialize the popup plugin
   $('#my_popup').popup({
     color: 'white',
      opacity: 1,
      transition: '0.3s',
      scrolllock: true
   });



});
