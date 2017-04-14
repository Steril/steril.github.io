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
        $(this).css('opacity', '0.8');
    });
    
     $("#messenger").hover(function() {
        $(this).css('opacity', '1.5');
    
    }, function() {
        $(this).css('opacity', '0.8');
    });
    
jQuery(window).scroll(function() {
if($(window).scrollTop() > $(document).height()/8) {
   $("#nav li a").removeClass('active');
    $("#about").addClass('active');
}
});    
   
jQuery(window).scroll(function() {
if($(window).scrollTop() > $(document).height()/5) {
    $("#nav li a").removeClass('active');
    $("#portfolio").addClass('active');
}
});

jQuery(window).scroll(function() {
if($(window).scrollTop() > $(document).height()/2) {
   $("#nav li a").removeClass('active');
    $("#contact").addClass('active');
}
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
    
function isMobileWidth() {
    return $('#mobile-indicator').is(':visible');
}    
    
  
  }); // document ready
