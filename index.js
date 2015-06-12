window.addEventListener("load", function() {
   	var last=$(window).scrollTop();
   	// var height=$(window).height();
   	var height = window.innerHeight;
   	var offset=100;
   	var menu = null;

   	window.addEventListener("scroll", function () {
		if(menu){
			menu.classList.remove("active");
		}   		
   		var top=$(window).scrollTop();
   		if(top>height-offset/2){
   			$('header').addClass('small');
   		}else{
   			$('header').removeClass('small');
   		}
   		if(top>height){
   			$('header').addClass('backitup');
   			if(last>top){
   				$('header').removeClass('hideme');
   			}else if(last<top && top>height+offset*3){
   				$('header').addClass('hideme');
   			}
   		}else{
   			$('header').removeClass('backitup');
   		}
   		last = top;
   	})
   	
   	window.addEventListener("scroll", function () {
   		var top=$(window).scrollTop();
   		if(top<=height){
   			var transY=(top/3).toFixed(2);
   			{
   				$('#banner img').css('transform','translate3d(0, '+transY+'px, 0)');
   			}
   		}
   	})
   	
   	$('#menu-tab').click(function (e) {
   		if(menu){
   			menu.classList.remove("active");
   		}
   		e.target.classList.add("active");
   		menu = e.target;
   	})

})