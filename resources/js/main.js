$(document).ready(function(){
    
    //sticy menu
    $(".js--services-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky")
            } else {
                $("nav").removeClass("sticky")
            }
    });

    
    //mixit up
    var mixer = mixitup('.container');
    
    // smooth scroll edg/safari
$("a").on('click', function(event){
    
    if (this.hash !== "") {
        event.preventDefault();
        
        var hash = this.hash;
        
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        
        });
    }
});
    
});

$.fatNav();

