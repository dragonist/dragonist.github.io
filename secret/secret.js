$(document).ready(function() {
    $('#fullpage').fullpage({
		// sectionsColor: ['#31355c', '#1BBC9B', '#7E8F7C', '#C63D0F', '#1BBC9B', '#7E8F7C', '#C63D0F'],
		// sectionsColor: ['#7E8F7C', '#1BBC9B', '#7E8F7C', '#C63D0F', '#1BBC9B', '#7E8F7C', '#C63D0F'],
		verticalCentered : false,
		resize : true,
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['First page', 'Second page', 'Third page', 'Fourth page', 'Fifth page', 'Sixth page', 'Last page'],
		afterRender: function(){
			$.fn.fullpage.reBuild();
			$('video').get(0).play();
			$('video').get(1).play();	
			console.log("video start");		
			console.log("afterRender");	
		},
		afterResize: function(){
			console.log("afterResize");
		},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
        	console.log("onSlideLeave");
        },
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			console.log("afterSlideLoad");
			console.log(anchorLink);
			console.log(index);
			console.log(slideAnchor);
			console.log(slideindex);
		}
    });	
});

// window.addEventListener("load", function() {

// })

// 9b85cf