$(document).ready(function() {
  var portfolioHeight = $('#portfolio-slide').height();
   var  portfolioOffset = $('#portfolio-h1').offset().top;
  var  aboutOffset = $('#kulhanek').offset().top;
  $('#header').css('margin-top', aboutOffset);
  var  portfolioMargin = (aboutOffset - portfolioHeight);
  $('#slide2').css('padding-top', portfolioMargin);
  $('#slide3').css('padding-top', portfolioMargin);
 
  
    $("#nav li a").hover(function() {
        $(this).css('opacity', '1');
    }, function() {
        $(this).css('opacity', '0.6');
    });
  $("#nav li a").on('click', function(){
    $("#nav li a").removeClass('active');
    $(this).addClass('active');
});
  
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

  $('#contact').click( function() {
    $('html,body').animate({scrollTop: $('#contact-h1').offset().top - aboutOffset},  1000);
}); 
  
  
$('#portfolio').click( function() {
    $('html,body').animate({scrollTop: $('#portfolio-h1').offset().top - aboutOffset},  1000);
});   
  
  }); // document ready
