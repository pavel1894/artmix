$(document).ready(function(){
			  $('.fade-slick').slick({
			  infinite: true,
			  speed: 700,
			  fade: true,
			  arrows:true,
			  cssEase: 'linear'
			});
			});
$(document).ready(function(){
			  $('.slider-for').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  
			  fade: true,
			  asNavFor: '.slider-nav'
			});
			$('.slider-nav').slick({
			  slidesToShow: 9,
			  infinite: true,
			  slidesToScroll: 2,
			  arrows: false,
			  asNavFor: '.slider-for',
			  dots: false,
			  centerMode: true,
			  focusOnSelect: true,
			  responsive: [
			  		{
			  		breakpoint:1200,
			  		settings:{
			  			slidesToShow: 5,
			  			
			  		}
			  	},
			  	{
			  		breakpoint:800,
			  		settings:{
			  			slidesToShow: 3,
			  			
			  		}
			  	},
			  	{
			  		breakpoint:500,
			  		settings:{
			  			slidesToShow: 2,
			  			dots:true
			  		}
			  	},
			  	{
			  		breakpoint:350,
			  		settings:{
			  			slidesToShow: 1,
			  			dots:true
			  		}
			  	}
			  ]
			});
			});			  

			