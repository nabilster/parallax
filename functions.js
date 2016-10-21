$(window).scroll
    (function(){
        var wScroll =$(this).scrollTop();
        
        $('.logo').css({
            
            'transform': 'translate(0px,'+wScroll/2+'%)'
        });
       
        $('.iphonefor').css({
            
            'transform': 'translate(0px,-'+wScroll/6+'%)'
        });
        
        $('.pencil-back').css({
            
            'transform': 'translate(0px,'+wScroll/3+'%)'
        });
    
    });