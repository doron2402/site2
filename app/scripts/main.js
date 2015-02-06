/* jshint devel:true */
/*
  Smooth Scrolling
*/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/*
  Contact Form
*/
$(function() {
  $( "form#contact" ).on( "submit", function( event ) {
    event.preventDefault();
    var data = $(this).serializeArray();
    var dataJson = {};
    data.forEach(function(obj){
      dataJson[obj.name] = obj.value;
    });
    console.log(dataJson);
  });
});