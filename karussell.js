/**
 * Karussell, another jQuery carousel
 * 
 * Karussell is licensed under the terms of either the MIT License or the GNU General Public License (GPL) Version 3.
 * 
 * (c) 2012 Emilio Mariscal
 * 
 */

(function($){
    "use strict";
    
    var Karussell = function(options) {
        
        this.options = options;
        this.x = 0;
        this.$prev = $("#" + options.prev);
        this.$next = $("#" + options.next);
        this.$container = $("#" + options.id);
        this.$items = {};
        this.width = this.$container[0].offsetWidth;
        this.$wrapper = $("#" + options.wrapper);
        this.wrapper = {
            width: this.$wrapper[0].offsetWidth
        }
        
        this.init();
    },
    
    DISTANCE = 100;
    
    Karussell.prototype = {

        init: function() {
            var fn = this;
            this.$items = this.$container.find("li");
            this.$items.each(function(index, item) {
               console.log(index); 
            });            
            this.$prev.click(function(e) {
                fn.left();
            });
            this.$next.click(function(e) {
                fn.right();
            });
            this.maxdist = this.width - this.wrapper.width;
        },

        left: function() {
            var sum;
            if ((sum = this.x + DISTANCE) < 0) {
                this.x = sum;
            } else {
                this.x = 0;
            }
            this.$container.css("marginLeft",this.x + "px");
        },

        right: function() {
            var sum;
            if ((sum = this.x - DISTANCE) > -this.maxdist) {
                this.x = sum;
            } else {
                this.x = -this.maxdist;          
            }
            this.$container.css("marginLeft",this.x + "px");
        },
    }

    $.extend({
        karussell: function(options) {
            return new Karussell(options);
        },
    });

}(jQuery));

/* 

// Example CSS

.carousel-wrapper {
    width: 450px;
    overflow: hidden;
}
.carousel {
    overflow: hidden;
    width: 1000px;
    height: 79px;

	-webkit-transition-property: margin;
    -webkit-transition-duration: 0.4s;
	-moz-transition-property: margin;
    -moz-transition-duration: 0.4s;
	-opera-transition-property: margin;
    -opera-transition-duration: 0.4s;
	transition-property: left, margin;
    transition-duration: 0.4s;

}
.carousel img {
   	float: left ;
   	margin-right: 0.45em;
}

.carousel-wrapper {
	margin-top: 1em;
	position: relative;
}

.carousel-prev,
.carousel-next {
    	position: absolute;
    	background: url(img/next.png) no-repeat 50% 50% ;
	height: 56px;
	width: 56px;
	text-indent: -9999em;
	visibility: hidden;
}

.carousel-wrapper:hover
    .carousel-prev,
    .carousel-next {
    	visibility: visible;
    }

.carousel-wrapper:hover
    .carousel-prev,
    .carousel-next {
        visibility: visible;
    }

.carousel-prev {
    background: url(img/prev.png) no-repeat 50% 50% ;
    top: 54px;
    left: 11px;
}

.carousel-next {
    top: 54px;
    right: 11px;
}

*/
