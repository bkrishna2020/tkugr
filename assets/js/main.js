var map;
$(document).ready(function() {

    /* ======= Flexslider ======= */
    $('.flexslider').flexslider({
        animation: "fade"
    });

    /* ======= jQuery Placeholder ======= */
    $('input, textarea').placeholder();
    
    
    /* ======= Carousels ======= */
    $('#news-carousel').carousel({interval: false});
    $('#videos-carousel').carousel({interval: false});
    $('#testimonials-carousel').carousel({interval: 6000, pause: "hover"});
    $('#awards-carousel').carousel({interval: false});
    
    
    /* ======= Flickr PhotoStream ======= */
    $('#flickr-photos').jflickrfeed({
        limit: 12,
        qstrings: {
        id: '32104790@N02' /* Use idGettr.com to find the flickr user id */
        },
        itemTemplate:
            '<li>' +
            '<a rel="prettyPhoto[flickr]" href="{{image}}" title="{{title}}">' +
            	'<img src="{{image_s}}" alt="{{title}}" />' +
            '</a>' +
            '</li>'
			
    }, function(data) {
    	$('#flickr-photos a').prettyPhoto();
    });
    
    /* ======= Pretty Photo ======= */
    // http://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/ 
    $('a.prettyphoto').prettyPhoto();
    
    /* ======= Twitter Bootstrap hover dropdown ======= */
    
    // apply dropdownHover to all elements with the data-hover="dropdown" attribute
    $('[data-hover="dropdown"]').dropdownHover();
    
    /* Nested Sub-Menus mobile fix */
    
    $('li.dropdown-submenu > a.trigger').on('click', function(e) {
        var current=$(this).next();
		current.toggle();
		e.stopPropagation(); 
		e.preventDefault(); 
		if (current.is(':visible')) {
    		$(this).closest('li.dropdown-submenu').siblings().find('ul.dropdown-menu').hide();
		}
    });

});
