    //网页鼠标移入
    $('.last-bottom ul li a').mouseenter(function(){
    	$(this).css('color','#ff6700') 
    })
	
	 $('.last-bottom ul li a').mouseleave(function(){
    	$(this).css('color','#757575') 
    })
	 
	 
	$('.last-top ul li a').mouseenter(function(){
    	$(this).css('color','#ff6700') 
    })
	
	 $('.last-top ul li a').mouseleave(function(){
    	$(this).css('color','#757575') 
    })
	 
	 
	$('.page-top ul a').mouseenter(function(){
    	$(this).css('color','#ff6700') 
    })
	
	 $('.page-top ul a').mouseleave(function(){
    	$(this).css('color','#757575') 
    })
	 
	 
	
	$('.footer-right p a').mouseenter(function(){
    	$(this).css('color','#ff6700') 
    })
	
	 $('.footer-right p a').mouseleave(function(){
    	$(this).css('color','#333') 
    })
	 
 	 	
	$('.footer-right ul li a').mouseenter(function(){
    	$(this).css('color','#ff6700') 
    })
	
	 $('.footer-right ul li a').mouseleave(function(){
    	$(this).css('color','#b0b0b0') 
    })
	 
  	
	$('.last-bottom ol li a').mouseenter(function(){
     	$(this).css('background','#ff6700');
    	$(this).css('color','#fff') 
    })
	
	 $('.last-bottom ol li a').mouseleave(function(){
    	$(this).css('background','#fff');
    	$(this).css('color','#ff6700')
    })
	 
  	  
	$('.myvideo-bottom ul li h4').mouseenter(function(){
      	$(this).css('color','#ff6700')
    })
	
	$('.myvideo-bottom ul li h4').mouseleave(function(){
         $(this).css('color','#333') 
    })
	 
   
   
	 

	
	//input 下拉菜单显示隐藏
 
    $('#cn').click(function(){
    	$('.tet-b').css('display','block');
    })
   
   $('#cn').blur(function(){
    	$('.tet-b').css('display','none');
    })
   



  
  

  $('.page-right ul').hover(function(){
 	$(this).children("li").last().show();
   },function(){
  	$(this).children("li").last().hide();
  });
 

 $('.yuyu').click(function(){
 	$('.deo').css('display','block');
//	 },function(){
//	    $('.deo').css('display','none');
  });


	$('#cas').click(function(){
		alert();
		 
	});



  