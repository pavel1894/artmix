//burger script
		(function() {

		  "use strict";
		 
		  var toggles = document.querySelectorAll(".c-hamburger");
		 
		  for (var i = toggles.length - 1; i >= 0; i--) {
		    var toggle = toggles[i];
		    toggleHandler(toggle);
		  };
		 
		  function toggleHandler(toggle) {
		    toggle.addEventListener( "click", function(e) {
		      e.preventDefault();
		      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
		    });
		  }
		 
		})();
			$(".menu_btn").click(function() {
			            $(".nav-second").toggleClass("open_menu");  
			});

			    $(document).mouseup(function(e) {
			        var $target = $(e.target);
			        if ($target.closest(".drop-menu").length == 0) {
			            $(".nav-second").removeClass("open_menu");
			        }
			    });
//
//slider offer

		var swiper = new Swiper('.swiper-container', {
			      slidesPerView: 1,
			      spaceBetween: 30,
			      loop: true,
			      pagination: {
			        el: '.swiper-pagination',
			        clickable: true,
			      },
			      navigation: {
			        nextEl: '.swiper-button-next',
			        prevEl: '.swiper-button-prev',
			      },
			    });
//
//slider awards
$(document).ready(function(){
			  $('.awards-slider').slick({
			    infinite:true,
			  	slidesToShow: 8,
			  	slidesToScroll: 3,
			  	arrows:false,
			  	responsive: [
			  		{
			  			breakpoint:1200,
			  			settings:{
			  				slidesToShow: 6,
			  				slidesToScroll: 2
			  			}
			  		},
			  		{
			  			breakpoint:900,
			  			settings:{
			  				slidesToShow: 4,
			  				slidesToScroll: 2
			  			}
			  		},
			  		{
			  			breakpoint:500,
			  			settings:{
			  				slidesToShow: 1,
			  				slidesToScroll: 1,
			  				arrows:true
			  			}
			  		}
			  	]
			  });
			});
//



		
        $(".navbar-toggle").click(
	function(){ $(".navbar").addClass("active")}
);
		   
	
	
	$(window).on("scroll", function() {
		    if($(window).scrollTop() > 250) {
		        $(".navbar").addClass("active");
		    } else {
		        //remove the background property so it comes transparent again (defined in your css)
		       $(".navbar").removeClass("active");
		    }
		});

		$(window).on("scroll", function() {
		    if($(window).scrollTop() > 250) {
		        $(".nav-second").addClass("nav-second-scroll");
		    } else {
		        //remove the background property so it comes transparent again (defined in your css)
		       $(".nav-second").removeClass("nav-second-scroll");
		    }
		});

		$(document).ready(function(){
    	$(".low-scroll").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);
    		});
		});

  function setEqualHeight(columns) { 
    var tallestcolumn = 0; 
    columns.each( function() { 
      currentHeight = $(this).height(); 
      console.log(currentHeight);
      if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } ); 
      columns.height(tallestcolumn); 
    } 
    
    $(document).ready(function() { setEqualHeight($(".test")); });

      function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 53.911173, lng: 27.542720},
          zoom: 15,
          disableDefaultUI:true,
          scrollwheel: false,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#000000'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#000000'},{weight: 0.1}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#9f9d9d'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#000000'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#71251a'},{weight: 0.2}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#71251a'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#666666'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#696363'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#000'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#000'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#000'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#000'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#030725'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#030725'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#030725'}]
            }
          ]
        });
        var marker = new google.maps.Marker({
                  position: {lat: 53.911173, lng: 27.542720},
                  map:map,
                  icon:'img/marker.svg'
              });

      }
	