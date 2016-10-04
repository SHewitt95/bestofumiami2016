$(document).ready(function() {

  function makeBoxes() {

    var $grid =  $('.grid');
    var limit = 33;

    //var box = '<div class="box my_popup_open"><img src="/images/BestofUM_Logo_White.jpg" /></div>';

    var $box;
    /*
    for (var i = 0; i < limit; i++) {
      $grid.append(box);
    }*/

    bestOfData.forEach(function(d) {
      $box = $('<div class="box my_popup_open"><img src="/images/' + d["fake photo"] + '.jpg" /></div>');

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

      //console.log($box.data());

      $grid.append($box);
    });

    $grid.isotope({
       // options
       itemSelector: '.box'
       //layoutMode: 'fitRows'
     });

     //console.log(bestOfData);
  }

  function makeSinglePage() {
    var that = $(this);
    var category = $('.category');
    var categoryname = $('.category-name');
    var name = $('.name');
    var blurb = $('.blurb');

    category.text(that.data('category'));
    categoryname.text(that.data('category section'));
    name.text(that.data('name'));
    blurb.text(that.data('blurb'));
  }

  function doFilter() {
    var $grid =  $('.grid');
    var $that = $(this);
    var $box = $('.box');

    $grid.isotope({
      filter: function(i,d) {
        if ($that.text() == "Visitors' Choice") {
          return $(d).data('voted') == 'yes';

        } else if ($that.text() == "View All") {
          return true;

        } else {
          return $that.text() == $(d).data('category');
        }
      }
    })

  }

  makeBoxes();
  $('.box').click(makeSinglePage);
  $('.sort-box-holder p').click(doFilter);

     // Initialize the plugin
     $('#my_popup').popup({
       color: 'white',
        opacity: 1,
        transition: '0.3s',
        scrolllock: true
     });

     //Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1200) {
			$('.backtotop').fadeIn();
		} else {
			$('.backtotop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.backtotop').click(function(){
		$('html, body').animate({scrollTop : 500},800);
		return false;
	});

});
