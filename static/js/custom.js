$(document).ready(function(){
	/* removed sticky header on scroll
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$("#header").addClass("sticky_header");
		}
		else{
			$("#header").removeClass("sticky_header");
		}
	});
	*/
	$('select').niceSelect();
 // $('.main-nav').scroller();
 // $('.smooth-btn').scroller();
 	// ANIMATE SCROLL 
 	$("#bs-example-navbar-collapse-1 ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
 	
	$('.logo_banner').slick({
	  dots: false,
	  infinite: false,
		arrows:false,
	  slidesPerRow: 3,
      rows: 3,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesPerRow: 1,
      rows: 3
      }
    }
  ]
	});
	
	$('#slider').slick({
	  infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	 arrows:false
   }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	    var mySlideNumber = nextSlide;
	    $(".center-dots").find('.active').removeClass("active");
		$(".center-dots li").eq(mySlideNumber).addClass('active');
		});
	$(".center-dots li").click(function(e){
		e.preventDefault();
       $(this).parents(".center-dots").find('.active').removeClass("active");
		$(this).addClass("active");
        var slideno = $(this).data('slide');
      $('#slider').slick('slickGoTo', slideno - 1);
    });	
});


equalheight = function(container){
    var currentTallest = 0,
         currentRowStart = 0,
         rowDivs = new Array(),
         $el,
         topPosition = 0;
     $(container).each(function() {

       $el = $(this);
       $($el).height('auto')
       topPostion = $el.position().top;

       if (currentRowStart != topPostion) {
         for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
           rowDivs[currentDiv].height(currentTallest);
         }
         rowDivs.length = 0; // empty the array
         currentRowStart = topPostion;
         currentTallest = $el.height();
         rowDivs.push($el);
       } else {
         rowDivs.push($el);
         currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
      }
       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }
     });
}

$(window).load(function() {
    
  
    equalheight('.cat_div');
    equalheight('.eq');
   
	
   });


$(window).resize(function(){	
  
	 equalheight('.cat_div');
	 equalheight('.eq');
	
});			
