// JavaScript Document

/******************************

[Table of Contents]

1. Vars and Inits
2. Initialize Sliders
3. Initialize Home Backgrounds
4. Initialize Stats Counter
5. Initialize Header
6. Initialize Magnific Popup
7. Initialize Shuffle
8. Initialize Buttons
9. Initialize Google Map
10. Initialize Twitter Fetcher
11. Initialize Menu
12. Initialize ScrollTo
13. Initialize YouTube Video Background


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var ctrl = new ScrollMagic.Controller();
	var map;
	var myLat = 52.35547676050195;
	var myLng = 4.938748185581985;

	initSlider();
	initHomeBackground();
	initHeader();
	initPopup();
	initShuffle();
	initStats();
	initBtns();
	initGoogleMap();
	initTwitterFetcher();
	initMenu();
	initScrolling();

	/* 

	2. Initialize Sliders

	*/

	function initSlider()
	{
		var ele = $(".owl-carousel-hero");
		ele.owlCarousel(
		{
			items:1,
			mouseDrag:false,
			touchDrag:false,
			loop:true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			navSpeed: 50,
			smartSpeed: 50,
			dotsSpeed: 50,
			autoplay:true,
			autoplaySpeed: 50,
			dots:true
		});

		var clientsSlider = $(".owl-carousel-clients");
		clientsSlider.owlCarousel(
		{
			items:6,
			loop:true,
			dots:false,
			navigation:false,
			autoplay:true,
			responsive:
			{
				0:{items:2},
				480:{items:3},
				640:{items:4},
				1024:{items:5},
				1240:{items:6}
			}
		});

		var testimonialSlider = $('.owl-carousel-testimonials');
		testimonialSlider.owlCarousel(
		{
			items:1,
			loop:true,
			dots:true,
			navigation:false,
			autoplay:true,
			autoplaySpeed:700
		});

		var left = $('.carousel_nav_left');
		var right = $('.carousel_nav_right');

		left.on('click', function()
		{
			ele.trigger('prev.owl.carousel');
		});

		right.on('click', function()
		{
			ele.trigger('next.owl.carousel');
		});
		
		ele.on('change.owl.carousel', function(e)
		{
			
		});
		ele.on('changed.owl.carousel', function(e)
		{
			
		});
	}

	/*

	3. Initialize Home Backgrounds

	*/
	
    function initHomeBackground()
    {
		var homeBcg = $('.owl_item');
		var homeOverlay = $('.owl_item_overlay');
	 	
	 	// parallax effect for the home background image
	    var homeBcgScene = new ScrollMagic.Scene({
	        triggerElement: homeBcg,
	        triggerHook: 1,
	        duration: "100%"
	    })
	    .setTween(TweenMax.to(homeBcg, 1, {y: '40%', ease:Power0.easeNone}))
	    .addTo(ctrl);

	    // changing home overlay opacity
	    var homeOverlayScene = new ScrollMagic.Scene(
	    {
	    	triggerElement: homeOverlay,
	    	triggerHook: 1,
	    	duration: "100%"
	    })
	    .setTween(TweenMax.to(homeOverlay, 1, {opacity: 0, ease:Power0.easeNone}))
	    .addTo(ctrl);

    }

    /*

	4. Initialize Stats Counter

    */

    function initStats()
    {
    	var statsItems = $('.stats_counter');

    	statsItems.each(function(i)
    	{
    		var ele = $(this);
    		var endValue = ele.data('end-value');
    		var eleValue = ele.text();

    		var statsScene = new ScrollMagic.Scene({
	    		triggerElement: this,
	    		triggerHook: 'onEnter',
	    		reverse:false
	    	})
	    	.on('start', function()
	    	{
	    		var counter = {value:eleValue};
	    		var counterTween = TweenMax.to(counter, 4,
	    		{
	    			value: endValue,
	    			roundProps:"value", 
					ease: Circ.easeOut, 
					onUpdate:function()
					{
						document.getElementsByClassName('stats_counter')[i].innerHTML = counter.value;
					}
	    		});
	    	})
		    .addTo(ctrl);
    	});
    }

    /*

	5. Initialize Header

    */

    function initHeader()
    {
    	// adjusting header when scrolled by 100px

    	var header = $('.header');
		var logoContainer = $('.logo_container');
		var logo = $('.logo');
		var navContainer = $('.nav_container');
		var navLinks = $('.nav_inner ul li a');
		var ctrl = new ScrollMagic.Controller();
		var menuTrigger = $('.menu_container');
		var lines = $('.hamburger_lines');
		var menuSpan = $('.menu_toggle span');

	    var headerTween = TweenMax.to(header, 0.3, {backgroundColor:"rgba(247, 247, 247, 1)", boxShadow: "0px 5px 8px rgba(124, 116, 118, 0.2)", height:"70px", ease:Power0.easeIn});
	    var logoContainerTween = TweenMax.to(logoContainer, 0.3, {top:"12px", color:"#212121", ease:Power0.easeIn});
	    var logoTween = TweenMax.to(logo, 0.3, {color:"#212121", ease:Power0.easeIn});
	    var navContainerTween = TweenMax.to(navContainer, 0.3, {height:"70px", paddingTop:"1px", ease:Power0.easeIn});
	    var navLinksTween = TweenMax.to(navLinks, 0.3, {color:"rgba(40, 39, 39, 1)", ease:Power0.easeIn});
	    var menuTriggerTween = TweenMax.to(menuTrigger, 0.3, {top:"15px",});
	    var logoLinesTween = TweenMax.to(lines, 0.3, {background:"#282727", ease:Power0.easeIn});
	    var menuSpanTween = TweenMax.to(menuSpan, 0.3, {color:"#282727", ease:Power0.easeIn});

	    var headerScene = new ScrollMagic.Scene(
	    {
	    	triggerElement: header,
	    	offset: 100
	    })
	    .setTween(headerTween)
	    .addTo(ctrl);

	    var logoContainerScene = new ScrollMagic.Scene(
	    {
	    	triggerElement: header,
	    	offset: 100
	    })
	    .setTween(logoContainerTween)
	    .addTo(ctrl);

	    var logoScene = new ScrollMagic.Scene(
	    {
	    	triggerElement: header,
	    	offset: 100
	    })
	    .setTween(logoTween)
	    .addTo(ctrl);

	    var navContainerScene = new ScrollMagic.Scene(
	    {
	    	triggerElement: header,
	    	offset:100
	    })
	    .setTween(navContainerTween)
	    .addTo(ctrl);

	    var navLinksScene = new ScrollMagic.Scene(
	    {
	    	triggerElement: header,
	    	offset:100
	    })
	    .setTween(navLinksTween)
	    .addTo(ctrl);

	    var menuTriggerScene = new ScrollMagic.Scene(
	    {
	    	triggerElement: header,
	    	offset:100
	    })
	    .setTween(menuTriggerTween)
	    .addTo(ctrl);

	    var logoLinesScene = new ScrollMagic.Scene(
	    {
	    	triggerElement: header,
	    	offset:100
	    })
	    .setTween(logoLinesTween)
	    .addTo(ctrl);

	    var menuSpanScene = new ScrollMagic.Scene(
	    {
	    	triggerElement: header,
	    	offset:100
	    })
	    .setTween(menuSpanTween)
	    .addTo(ctrl);
    }

    /*

	6. Initialize Magnific Popup

    */

    function initPopup()
    {
    	$('.project_zoom').magnificPopup(
		{
			type:'image',
			removalDelay: 500,
			callbacks:
			{
		    	beforeOpen: function()
		    	{
		       		this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
		       		this.st.mainClass = this.st.el.attr('data-effect');
		    	}
		  	},
			gallery:
			{
				enabled:true
			}
		});

		$('.video').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });
    }

    /*

	7. Initialize Shuffle

    */

    function initShuffle()
    {
    	var grid = $('#grid');
		var filterOptions = $('.projects_filter');
		var sizer = grid.find('.shuffle_sizer');

		setTimeout(function()
		{
			listen();
			setupFilters();
		}, 100);

		// instantiate the plugin
		grid.shuffle(
		{
			itemSelector: 'li',
			sizer: sizer,
			delimeter: ',', // If your group is not json, and is comma delimeted, you could set delimeter to ','. 
			speed:500
		});

		function setupFilters()
		{
			var $btns = filterOptions.children();
			$btns.on('click', function(e)
			{
				e.preventDefault();
				var $this = $(this),
				isActive = $this.hasClass( 'filter_active' ),
				group = isActive ? 'all' : $this.data('group');

				// Hide current label, show current label in title
				if ( !isActive )
				{
					$('.projects_filter li').removeClass('filter_active');
				}

				$this.toggleClass('filter_active');

				// Filter elements
				grid.shuffle( 'shuffle', group );
			});

			$btns = null;
		}

		function listen()
		{
			var debouncedLayout = $.throttle( 300, function()
			{
				grid.shuffle('update');
			});

			// Get all images inside shuffle
			grid.find('img').each(function()
			{
				var proxyImage;

				// Image already loaded
				if ( this.complete && this.naturalWidth !== undefined )
				{
					return;
				}

				// If none of the checks above matched, simulate loading on detached element.
				proxyImage = new Image();
				$( proxyImage ).on('load', function()
				{
					$(this).off('load');
					debouncedLayout();
				});

				proxyImage.src = this.src;
			});

			// Because this method doesn't seem to be perfect.
			setTimeout(function()
			{
				debouncedLayout();
			}, 500);
		}
    }

    /*

	8. Initialize Buttons

    */

    function initBtns()
    {
    	var btns = $('.service_btn');
    	btns.each(function()
    	{
    		var ele = $(this);
    		ele.on(
    		{
    			mouseenter: function()
    			{
    				var tweenEnter = TweenMax.to(ele, 0.2, {color:"#F7F7F7", background:"#cf1a77"});
    			},
    			mouseleave: function()
    			{
    				var tweenLeave = TweenMax.to(ele, 0.2, {color:"#cf1a77", background:"transparent"});
    			}
    		});
    	});

    	var serviceBcg = $('.service_item');
    	serviceBcg.each(function()
    	{
    		var ele = $(this);
    		ele.on(
    		{
    			mouseenter: function()
    			{
    				var tweenEnter = TweenMax.to(ele, 0.2, {background:"#262124"});
    			},
    			mouseleave: function()
    			{
    				var tweenLeave = TweenMax.to(ele, 0.2, {background:"transparent"});
    			}
    		});
    	});
    }

    /*

	9. Initialize Google Map

    */

    function initGoogleMap()
    {
    	var myLatlng = new google.maps.LatLng(52.35547676050195,4.938748185581985);
    	var mapOptions = 
    	{
    		center: myLatlng,
	       	zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			draggable: true,
			scrollwheel: false,
			zoomControl: true,
			zoomControlOptions:
			{
				position: google.maps.ControlPosition.RIGHT_CENTER
			},
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: true,
			styles:
			[
			  {
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#212121"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#212121"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.country",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.locality",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#bdbdbd"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#181818"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#1b1b1b"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry.fill",
			    "stylers": [
			      {
			        "color": "#2c2c2c"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#8a8a8a"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#373737"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#3c3c3c"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway.controlled_access",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#4e4e4e"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "featureType": "transit",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#000000"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#3d3d3d"
			      }
			    ]
			  }
			]
    	}

    	// Initialize a map with options
    	map = new google.maps.Map(document.getElementById('map'), mapOptions);

    	// Use an image for a marker
		// var image = 'images/marker.png';
		// var marker = new google.maps.Marker(
		// {
		// 	position: new google.maps.LatLng(52.35547676050195, 4.938748185581985),
		// 	map: map,
		// 	icon: image
		// });
		
		//Use an overlay div as a marker
		var overlay = new CustomMarker(
			myLatlng, 
			map,
			{marker_id: '123'}
		);

		// Re-center map after window resize
		google.maps.event.addDomListener(window, 'resize', function()
		{
			setTimeout(function()
			{
				google.maps.event.trigger(map, "resize");
				map.setCenter({lat:myLat, lng:myLng});
			}, 1400);
		});
    }

    /*

	10. Initialize Twitter Fetcher

    */

    function initTwitterFetcher()
    {
    	var tfObj = 
		{
			"profile": {"screenName": 'TSM_Leffen'},
			"domId":'twitter_fetcher',
			"maxTweets":3,
			"showImages":false
		};
		twitterFetcher.fetch(tfObj);
    }

    /*

	11. Initialize Menu

    */

    function initMenu()
    {
    	var menu = $('.menu_container');
    	var fsMenu = $('.fs_menu_container');
    	var fsMenuItems = $('.fs_menu li');

    	var lines = $('.hamburger_lines');
    	var menuSpan = $('.menu_toggle span');
    	var line1 = $('.line_1');
    	var line2 = $('.line_2');
    	var line3 = $('.line_3');
		
    	menu.on('click', function()
    	{
    		if(fsMenu.css("top") !== "0px")
    		{
    			openMenu();
    		}
    		else
    		{
    			closeMenu();
    		}
    	});

    	function openMenu()
    	{
    		if($(document).scrollTop() <= 100)
    		{
    			var logoLinesTween = TweenMax.to(lines, 0.3, {background:"#282727", ease:Power0.easeIn, delay:0.3});
	    		var menuSpanTween = TweenMax.to(menuSpan, 0.3, {color:"#282727", ease:Power0.easeIn, delay:0.3});
    		}
    		var hamburgerTween1 = TweenMax.to(line1, 0.2, {transform:"translateY(5px) rotate(45deg)", ease: Circ.easeOut});
    		var hamburgerTween2 = TweenMax.to(line3, 0.2, {transform:"translateY(-5px) rotate(-45deg)", ease: Circ.easeOut});
    		var hamburgerTween3 = TweenMax.to(line2, 0.2, {autoAlpha:0, ease: Circ.easeOut});
    		var menuOpenTween = TweenMax.to(fsMenu, 0.8, {top:"0px", ease: Power3.easeIn});
    		var itemsTween = TweenMax.staggerFromTo(fsMenuItems, 0.4, {y:-15, autoAlpha:0}, {y:0, autoAlpha:1, delay:0.8, ease: Power3.easeOut}, 0.05);
    	}

    	// Change color for the main navigation active item

    	var navItems = $('.nav_inner ul li a');

    	navItems.each(function()
    	{
    		var ele = $(this);
    		var linkEle = $($(this).data('scroll-to'));
    		var offsetValue = linkEle.height() - 70;
    		var navScene1 = new ScrollMagic.Scene(
    		{
    			triggerElement:$(this).data('scroll-to'),
    			triggerHook:'onLeave',
    			offset:offsetValue
    		})
    		.on('start', function()
    		{
    			if(ele.hasClass('nav_active'))
    			{
    				ele.removeClass('nav_active');
    			}
    			else
    			{
    				ele.addClass('nav_active');
    			}
    		})
    		.addTo(ctrl);
    	});

    	navItems.each(function()
    	{
    		var ele = $(this);
    		var linkEle = $($(this).data('scroll-to'));
    		var offsetValue = linkEle.height();
    		var navScene2 = new ScrollMagic.Scene(
    		{
    			triggerElement:$(this).data('scroll-to'),
    			triggerHook:'onLeave',
    			offset:-70
    		})
    		.on('start', function()
    		{
    			if(ele.hasClass('nav_active'))
    			{
    				ele.removeClass('nav_active');
    			}
    			else
    			{
    				ele.addClass('nav_active');
    			}
    		})
    		.addTo(ctrl);
    	});

    }

    function closeMenu()
	{
		var lines = $('.hamburger_lines');
		var line1 = $('.line_1');
    	var line2 = $('.line_2');
    	var line3 = $('.line_3');
    	var menuSpan = $('.menu_toggle span');
    	var fsMenu = $('.fs_menu_container');
    	var fsMenuItems = $('.fs_menu li');
			
		var hamburgerTween1 = TweenMax.to(line1, 0.2, {transform:"translateY(0px) rotate(0deg)", ease: Circ.easeOut});
		var hamburgerTween2 = TweenMax.to(line3, 0.2, {transform:"translateY(0px) rotate(0deg)", ease: Circ.easeOut});
		var hamburgerTween3 = TweenMax.to(line2, 0.2, {autoAlpha:1, ease: Circ.easeOut});
		var itemsTween = TweenMax.staggerTo(fsMenuItems, 0.4, {y:-15, autoAlpha:0, ease: Circ.easeOut, delay:0.2}, 0.05);
		var menuCloseTween = TweenMax.to(fsMenu, 0.6, {top:"-100vh", ease: Power3.easeIn, delay:0.5, onComplete:checkColor});

		function checkColor()
		{
			if($(document).scrollTop() <= 100)
			{
				var logoLinesTween1 = TweenMax.to(lines, 0.3, {background:"#F7F7F7", ease:Power0.easeIn});
	    		var menuSpanTween1 = TweenMax.to(menuSpan, 0.3, {color:"#F7F7F7", ease:Power0.easeIn});
			}
		}
	}

	/*

	12. Initialize ScrollTo

	*/

    function initScrolling()
    {
    	var links = $('.nav_inner ul li a');
    	links.each(function()
    	{
    		var ele = $(this);
    		var target = ele.data('scroll-to');
    		ele.on('click', function(e)
    		{
    			e.preventDefault();
    			$(window).scrollTo(target, 1500, {offset: -70, easing: 'easeInOutQuart'});
    		});
    	});

    	var fsMenuLinks = $('.fs_menu li a');
    	fsMenuLinks.each(function()
    	{
    		var ele = $(this);
    		var target = ele.data('scroll-to');
    		ele.on('click', function(e)
    		{
    			e.preventDefault();
    			closeMenu();
    			$(window).scrollTo(target, 1500, {offset: -70, easing: 'easeInOutQuart'});
    		});
    	});

    	// Hero services button

    	var btn = $('.scroll_button');
    	btn.each(function()
    	{
    		var ele = $(this);
    		ele.on('click', function()
	    	{
	    		$(window).scrollTo(ele.data('scroll-to'), 1500, {offset: -70, easing: 'easeInOutQuart'});
	    	});
    	});

    	// Get In Touch Link
    	var getInTouch = $('#get_in_touch div');
    	getInTouch.on('click', function()
    	{
    		$(window).scrollTo('#contact_form', 1500, {offset: -70, easing: 'easeInOutQuart'});
    	});
    }
});

$( window ).on("load", function()
{
	"use strict";
	
	initYTPlayer();

	/*

	13. Initialize YouTube Video Background

	*/

	function initYTPlayer()
	{
		window.focus();
		jQuery("#background_video").YTPlayer();
	}
});