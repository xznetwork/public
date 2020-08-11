/* =========================================================
Comment Form
============================================================ */
jQuery(document).ready(function(){
    if(jQuery("#comments-form").length > 0){
    // Validate the contact form
      jQuery('#comments-form').validate({
    
        // Add requirements to each of the fields
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        
        // Specify what error messages to display
        // when the user does something horrid
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: jQuery.format("At least {0} characters required.")
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email."
            },
            url: {
                required: "Please enter your url.",
                url: "Please enter a valid url."
            },
            message: {
                required: "Please enter a message.",
                minlength: jQuery.format("At least {0} characters required.")
            }
        },
        
        // Use Ajax to send everything to processForm.php
        submitHandler: function(form) {
            jQuery("#submit-comment").attr("value", "Sending...");
            jQuery(form).ajaxSubmit({
                success: function(responseText, statusText, xhr, $form) {
                    jQuery("#response").html(responseText).hide().slideDown("fast");
                    jQuery("#submit-comment").attr("value", "Comment");
                }
            });
            return false;
        }
      });
    }
    
    if(jQuery("#contact-form").length > 0){
    // Validate the contact form
      jQuery('#contact-form').validate({
    
        // Add requirements to each of the fields
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        
        // Specify what error messages to display
        // when the user does something horrid
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: jQuery.format("At least {0} characters required.")
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email."
            },
            url: {
                required: "Please enter your url.",
                url: "Please enter a valid url."
            },
            message: {
                required: "Please enter a message.",
                minlength: jQuery.format("At least {0} characters required.")
            }
        },
        
        // Use Ajax to send everything to processForm.php
        submitHandler: function(form) {
            jQuery("#submit-contact").attr("value", "Sending...");
            jQuery(form).ajaxSubmit({
                success: function(responseText, statusText, xhr, $form) {
                    jQuery("#response").html(responseText).hide().slideDown("fast");
                    jQuery("#submit-contact").attr("value", "Submit");
                }
            });
            return false;
        }
      });
    }
});

/* =========================================================
Sub menu
==========================================================*/
(function($){ //create closure so we can safely use $ as alias for jQuery

    jQuery(document).ready(function(){

        // initialise plugin
        var example = jQuery('#main-menu').superfish({
            //add options here if required
            cssArrows: false
        });
    });

})(jQuery);

/* =========================================================
Mobile menu
============================================================ */
jQuery(document).ready(function () {
     
    jQuery('#mobile-menu > span').click(function () {
 
        var mobile_menu = jQuery('#toggle-view-menu');
 
        if (mobile_menu.is(':hidden')) {
            mobile_menu.slideDown('300');
            jQuery(this).children('span').html('-');    
        } else {
            mobile_menu.slideUp('300');
            jQuery(this).children('span').html('+');    
        }
        
        
         
    });
    
    jQuery('#toggle-view-menu li').click(function () {
 
        var text = jQuery(this).children('div.menu-panel');
 
        if (text.is(':hidden')) {
            text.slideDown('300');
            jQuery(this).children('span').html('-');    
        } else {
            text.slideUp('300');
            jQuery(this).children('span').html('+');    
        }
        
        jQuery(this).toggleClass('active');
         
    });
 
});

/* =========================================================
Create top mobile menu
============================================================ */
function createMobileMenu(menu_id, mobile_menu_id){
    // Create the dropdown base
    jQuery("<select />").appendTo(menu_id);
    jQuery(menu_id).find('select').first().attr("id",mobile_menu_id);
    
    // Populate dropdown with menu items
    jQuery(menu_id).find('a').each(function() {        
        var el = jQuery(this);       
        
        var selected = '';
        if (el.parent().hasClass('current-menu-item') == true){
            selected = "selected='selected'";
        }        
        
        var depth = el.parents("ul").size();
        var space = '';
        if(depth > 1){
            for(i=1; i<depth; i++){
                space += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            }
        }        
        
        jQuery("<option "+selected+" value='"+el.attr("href")+"'>"+space+el.text()+"</option>").appendTo(jQuery(menu_id).find('select').first());
    });
    jQuery(menu_id).find('select').first().change(function() {
        window.location = jQuery(this).find("option:selected").val();
    });    
}

jQuery(document).ready(function(){
    if(jQuery('#footer-nav').length > 0){
        createMobileMenu('#footer-nav','responsive-menu');    
    }
});

/* =========================================================
HeadLine Scroller
============================================================ */

jQuery(function() {
    var _scroll = {
        delay: 1000,
        easing: 'linear',
        items: 1,
        duration: 0.07,
        timeoutDuration: 0,
        pauseOnHover: 'immediate'
    };
    if( jQuery(".ticker-1").length > 0){
        jQuery('.ticker-1').carouFredSel({
            width: 1000,
            align: false,
            items: {
                width: 'variable',
                height: 50,
                visible: 1
            },
            scroll: _scroll
        });
    }

    //  set carousels to be 100% wide
    jQuery('.caroufredsel_wrapper').css('width', '100%');
});

/* =========================================================
Flex slider
============================================================ */
jQuery(window).load(function(){
  
  if( jQuery(".kp-featured-slider").length > 0){
      jQuery('.kp-featured-slider').flexslider({
        animation: "slide",
        slideshow: true,
        smoothHeight: true,
        start: function(slider){
          jQuery('body').removeClass('loading');
        }
      });
  }

  if( jQuery(".kp-gallery-slider").length > 0){
      jQuery('.kp-gallery-slider').flexslider({
        animation: "slide",
        controlNav: false,
        slideshow: true,
        start: function(slider){
          jQuery('body').removeClass('loading');
        }
      });
  }

  if( jQuery(".kp-blogpost-slider").length > 0){
      jQuery('.kp-blogpost-slider').flexslider({
        animation: "slide",
        controlNav: false,
        slideshow: true,
        start: function(slider){
          jQuery('body').removeClass('loading');
        }
      });
  }

  if( jQuery(".kp-topping-slider").length > 0){
      jQuery('.kp-topping-slider').flexslider({
        animation: "slide",
        directionNav: false,
        slideshow: false,
        start: function(slider){
          jQuery('body').removeClass('loading');
        }
      });
  }

  if( jQuery(".kp-testimonials-slider").length > 0){
      jQuery('.kp-testimonials-slider').flexslider({
        animation: "slide",
        controlNav: false,
        slideshow: false,
        start: function(slider){
          jQuery('body').removeClass('loading');
        }
      });
  }

  if( jQuery(".kp-blogpost-thumb-slider").length > 0){
      jQuery('.kp-blogpost-thumb-slider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        slideshow: true,
        start: function(slider){
          jQuery('body').removeClass('loading');
        }
      });
  }

  if( jQuery(".kp-product-detail-slider").length > 0){
      jQuery('.kp-product-detail-slider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        slideshow: false,
        start: function(slider){
          jQuery('body').removeClass('loading');
        }
      });
  }

});

/* =========================================================
prettyPhoto
============================================================ */
jQuery(document).ready(function(){
    init_image_effect();
});

jQuery(window).resize(function(){
    init_image_effect();
});

function init_image_effect(){    

    var view_p_w = jQuery(window).width();
    var pp_w = 500;
    var pp_h = 344;
    
    if(view_p_w <= 479){
        pp_w = '120%';
        pp_h = '100%';
    }
    else if(view_p_w >= 480 && view_p_w <= 599){
        pp_w = '100%';
        pp_h = '170%';
    }
            
    jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
        show_title: false,
        deeplinking:false,
        social_tools:false,
        default_width: pp_w,
        default_height: pp_h
    });    
}

/* =========================================================
Accordion
========================================================= */
jQuery(document).ready(function() {
        var acc_wrapper=jQuery('.acc-wrapper');
        if (acc_wrapper.length >0) 
        {
            
            jQuery('.acc-wrapper .accordion-container').hide();
            jQuery.each(acc_wrapper, function(index, item){
                jQuery(this).find(jQuery('.accordion-title')).first().addClass('active').next().show();
                
            });
            
            jQuery('.accordion-title').on('click', function(e) {
                kopa_accordion_click(jQuery(this));
                e.preventDefault();
            });
            
            var titles = jQuery('.accordion-title');
            
            jQuery.each(titles,function(){
                kopa_accordion_click(jQuery(this));
            });
        }
        
});

function kopa_accordion_click (obj) {
    if( obj.next().is(':hidden') ) {
        obj.parent().find(jQuery('.active')).removeClass('active').next().slideUp(300);
        obj.toggleClass('active').next().slideDown(300);
                            
    }
jQuery('.accordion-title span').html('+');
    if (obj.hasClass('active')) {
        obj.find('span').first().html('-');              
    } 
}

/* =========================================================
Masonry
============================================================ */
jQuery(document).ready(function() {

if (jQuery('.masonry-container').length > 0) {
    var $container = jQuery('.masonry-container');
    // initialize
    
    imagesLoaded($container,function(){
        $container.masonry({
          gutterWidth:20,
          itemSelector: '.masonry-box'
        });
        $container.masonry('bindResize')
    });
};

if (jQuery('#container').length > 0) {
	var $container_filter = jQuery('#container');

	$container_filter.multipleFilterMasonry({
		gutterWidth:5,
		columnWidth: 1,
		itemSelector: '.element',
		filtersGroupSelector:'.filters'
	});
	jQuery('#options li label').click(function(){
		jQuery('#options li label').removeClass('active');
		jQuery(this).addClass('active');
	});
};

});

/* =========================================================
Tabs
============================================================ */
jQuery(document).ready(function() { 
    
    if( jQuery(".tab-content-1").length > 0){   
        //Default Action Product Tab
        jQuery(".tab-content-1").hide(); //Hide all content
        jQuery("ul.tabs-1 li:first").addClass("active").show(); //Activate first tab
        jQuery(".tab-content-1:first").show(); //Show first tab content
        //On Click Event Product Tab
        jQuery("ul.tabs-1 li").click(function() {
            jQuery("ul.tabs-1 li").removeClass("active"); //Remove any "active" class
            jQuery(this).addClass("active"); //Add "active" class to selected tab
            jQuery(".tab-content-1").hide(); //Hide all tab content
            var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
            jQuery(activeTab).fadeIn(); //Fade in the active content
            return false;
        
        });
    }

    if( jQuery(".tab-content-2").length > 0){   
        //Default Action Product Tab
        jQuery(".tab-content-2").hide(); //Hide all content
        jQuery("ul.tabs-2 li:first").addClass("active").show(); //Activate first tab
        jQuery(".tab-content-2:first").show(); //Show first tab content
        //On Click Event Product Tab
        jQuery("ul.tabs-2 li").click(function() {
            jQuery("ul.tabs-2 li").removeClass("active"); //Remove any "active" class
            jQuery(this).addClass("active"); //Add "active" class to selected tab
            jQuery(".tab-content-2").hide(); //Hide all tab content
            var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
            jQuery(activeTab).fadeIn(); //Fade in the active content
            return false;
        
        });
    }

    if( jQuery(".tab-content-3").length > 0){   
        //Default Action Product Tab
        jQuery(".tab-content-3").hide(); //Hide all content
        jQuery("ul.tabs-3 li:first").addClass("active").show(); //Activate first tab
        jQuery(".tab-content-3:first").show(); //Show first tab content
        //On Click Event Product Tab
        jQuery("ul.tabs-3 li").click(function() {
            var CurrentPosition = jQuery(this).position();
            var NewTop = CurrentPosition.top;
            jQuery(".tab-highlight").animate({
                "top":NewTop
            },"normal");
            jQuery("ul.tabs-3 li").removeClass("active"); //Remove any "active" class
            jQuery(this).addClass("active"); //Add "active" class to selected tab
            jQuery(".tab-content-3").hide(); //Hide all tab content
            var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
            jQuery(activeTab).fadeIn(); //Fade in the active content
            return false;
        
        });
    }
    
});

/* =========================================================
Toggle Boxes
============================================================ */
jQuery(document).ready(function () {
     
    jQuery('#toggle-view li').click(function (event) {
        
        var text = jQuery(this).children('div.panel');
 
        if (text.is(':hidden')) {
            jQuery(this).addClass('active');
            text.slideDown('300');
            jQuery(this).children('span').html('-');                 
        } else {
            jQuery(this).removeClass('active');
            text.slideUp('300');
            jQuery(this).children('span').html('+');               
        }
         
    });
 
});

/* =========================================================
Twitter
============================================================ */
jQuery(function(){

    jQuery('.kp-twitter-widget .tweets').tweetable({
        username: 'philipbeel',
        time: true,
        rotate: false,
        speed: 4000,
        limit: 2,
        replies: false,
        position: 'append',
        failed: "Sorry, twitter is currently unavailable for this user.",
        html5: true,
        onComplete:function($ul){
            jQuery('time').timeago();
        }
    });

});

/* =========================================================
Flickr Feed
============================================================ */
jQuery(document).ready(function(){ 
    jQuery('#flickr-feed-1').jflickrfeed({
        limit: 6,
        qstrings: {
            id: '78715597@N07'
        },
        itemTemplate:
            '<li class="flickr-badge-image">' +
            '<a data-gal="prettyPhoto[kopa-flickr]" href="{{image}}" title="{{title}}">' +
            '<img src="{{image_s}}" alt="{{title}}" width="95px" height="95px" />' +
            '</a>' +
            '</li>'
    }, function(data) {
            jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
            show_title: false,
            deeplinking:false
        }).mouseenter(function(){
            //jQuery(this).find('img').fadeTo(500, 0.6);
        }).mouseleave(function(){
            //jQuery(this).find('img').fadeTo(400, 1);
        });
    });
});


/* =========================================================
Gallery slideshow
============================================================ */
$(function(){
    var gallery = $('#images');
    gallery.exposure({controlsTarget : '#controls',
        controls : { prevNext : true, pageNumbers : true, firstLast : false },
        visiblePages : 1,
        slideshowControlsTarget : '#slideshow',
        onThumb : function(thumb) {
            var li = thumb.parents('li');               
            var fadeTo = li.hasClass($.exposure.activeThumbClass) ? 1 : 0.3;
            
            thumb.css({display : 'none', opacity : fadeTo}).stop().fadeIn(200);
            
            thumb.hover(function() { 
                thumb.fadeTo('fast',1); 
            }, function() { 
                li.not('.' + $.exposure.activeThumbClass).children('img').fadeTo('fast', 0.3); 
            });
        },
        onImage : function(image, imageData, thumb) {
            // Fade out the previous image.
            image.siblings('.' + $.exposure.lastImageClass).stop().fadeOut(500, function() {
                $(this).remove();
            });
            
            // Fade in the current image.
            image.hide().stop().fadeIn(1000);

            // Fade in selected thumbnail (and fade out others).
            if (gallery.showThumbs && thumb && thumb.length) {
                thumb.parents('li').siblings().children('img.' + $.exposure.selectedImageClass).stop().fadeTo(200, 0.3, function() { $(this).removeClass($.exposure.selectedImageClass); });            
                thumb.fadeTo('fast', 1).addClass($.exposure.selectedImageClass);
            }
        },
        onPageChanged : function() {
            // Fade in thumbnails on current page.
            gallery.find('li.' + $.exposure.currentThumbClass).hide().stop().fadeIn('fast');
        }
    });
});

/* =========================================================
Carousel
============================================================ */
jQuery(window).load(function() {

    if( jQuery(".kp-latest-product-carousel").length > 0){
        jQuery('.kp-latest-product-carousel').carouFredSel({
            responsive: true,
            prev: '#prev-1',
            next: '#next-1',
            width: '100%',
            scroll: 1,
            auto: false,
            items: {
                width: 256,
                height: 'auto',
                visible: {
                    min: 1,
                    max: 3
                }
            }
        });
    }

    jQuery('.kp-latest-product-widget .carousel-nav a').html('');

    if( jQuery(".kp-onsale-carousel").length > 0){
        jQuery('.kp-onsale-carousel').carouFredSel({
            responsive: true,
            prev: '#prev-2',
            next: '#next-2',
            width: '100%',
            scroll: 1,
            auto: false,
            items: {
                width: 256,
                height: 'auto',
                visible: {
                    min: 1,
                    max: 3
                }
            }
        });
    }

    jQuery('.kp-onsale-widget .carousel-nav a').html('');

    if( jQuery(".kp-logos-carousel").length > 0){
        jQuery('.kp-logos-carousel').carouFredSel({
            responsive: true,
            prev: '#prev-3',
            next: '#next-3',
            width: '100%',
            scroll: 1,
            auto: false,
            items: {
                width: 164,
                height: 'auto',
                visible: {
                    min: 1,
                    max: 4
                }
            }
        });
    }

    jQuery('.kp-onsale-widget .carousel-nav a').html('');

    if( jQuery(".kp-clients-carousel").length > 0){
        jQuery('.kp-clients-carousel').carouFredSel({
            responsive: true,
            prev: '#prev-4',
            next: '#next-4',
            width: '100%',
            scroll: 1,
            auto: true,
            items: {
                width: 180,
                height: 'auto',
                visible: {
                    min: 1,
                    max: 6
                }
            }
        });
    }

    jQuery('.kp-logos-widget .carousel-nav a').html('');


    if( jQuery(".related-post-carousel").length > 0){
        jQuery('.related-post-carousel').carouFredSel({
            responsive: true,
            pagination: "#pager2",
            width: '100%',
            scroll: 1,
            auto: false,
            items: {
                width: 256,
                height: 'auto',
                visible: {
                    min: 1,
                    max: 3
                }
            }
        });
    }
});

/* =========================================================
Zoom Image
============================================================ */


function kp_zoom(){
    var window_width = jQuery(window).width();
    if (window_width > 1120) {
        jQuery('.kp-zoom-1').elevateZoom({
            borderColour: "#ff5b4d",
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 750
        });
    };
}

jQuery(document).ready(function(){
    kp_zoom();  
});
jQuery(window).resize(function() {
    kp_zoom(); 
});



/* =========================================================
Scroll bar
============================================================ */
jQuery(window).load(function() {
    mCustomScrollbars();
});

function mCustomScrollbars(){
    /* 
    malihu custom scrollbar function parameters: 
    1) scroll type (values: "vertical" or "horizontal")
    2) scroll easing amount (0 for no easing) 
    3) scroll easing type 
    4) extra bottom scrolling space for vertical scroll type only (minimum value: 1)
    5) scrollbar height/width adjustment (values: "auto" or "fixed")
    6) mouse-wheel support (values: "yes" or "no")
    7) scrolling via buttons support (values: "yes" or "no")
    8) buttons scrolling speed (values: 1-20, 1 being the slowest)
    */
    if(jQuery("#mcs5_container").length > 0){
        jQuery("#mcs5_container").mCustomScrollbar("horizontal",500,"easeOutCirc",1,"fixed","yes","yes",20);
    }
}

/* function to fix the -10000 pixel limit of jquery.animate */
jQuery.fx.prototype.cur = function(){
    if ( this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null) ) {
      return this.elem[ this.prop ];
    }
    var r = parseFloat( jQuery.css( this.elem, this.prop ) );
    return typeof r == 'undefined' ? 0 : r;
}

/* function to load new content dynamically */
function LoadNewContent(id,file){
    jQuery("#"+id+" .customScrollBox .horWrapper-content").load(file,function(){
        mCustomScrollbars();
    });
}

/* =========================================================
Search
============================================================ */
jQuery(document).ready(function () {

  if (jQuery('.search-box').length > 0) {
      jQuery('.search-box').hover(function () {
              jQuery('.search-box').find('input[type="text"]').stop(true).animate({
                  width: '225px',
                  padding: '6px 12px'
              }, 600);
      },function(){
              jQuery('.search-box').find('input[type="text"]').stop(true).animate({
                  width: 0,
                  padding: 0
              }, 600);
      });
  };

});

/* =========================================================
Product Filter
============================================================ */
jQuery(document).ready(function () {
     
    jQuery('.isotop-header').click(function () {
 
        var portfolio_filter = jQuery('#options');
 
        if (portfolio_filter.is(':hidden')) {
            portfolio_filter.slideDown('300');
        } else {
            portfolio_filter.slideUp('300');
        }
        
        jQuery(this).toggleClass('active');
         
    });
    
    jQuery('#options li label').click(function () {
        
        jQuery('.isotop-header span').text(jQuery(this).text());
    
    });
 
});

/* =========================================================
Boostrap Select
============================================================ */
jQuery('.selectpicker').selectpicker();