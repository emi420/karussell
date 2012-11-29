/**
 * Karussell, another jQuery carousel
 * 
 * https://github.com/emi420/karussell
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
        this.$wrapper = $("#" + options.wrapper);
        this.wrapper = {
            width: this.$wrapper[0].offsetWidth
        }
        this.maxdist = 0;
        this.width = 0;
        
        this.init();
    },
    
    DISTANCE = 100;
    
    Karussell.prototype = {

        init: function() {
            var fn = this;
            this.$items = this.$container.find("li");
            this.$prev.click(function(e) {
                fn.left();
            });
            this.$next.click(function(e) {
                fn.right();
            });
            this.$items.each(function(index, obj) {
                fn.width += obj.offsetWidth;
            });
            this.maxdist = this.wrapper.width - this.width - 5;
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

            if ((sum = this.x - DISTANCE) >= this.maxdist) {
                this.x = sum;
            } else {
                if (this.wrapper.width < this.width)  {                  
                    this.x = this.maxdist;
                } 
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