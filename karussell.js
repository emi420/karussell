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
        this.width = this.$container[0].offsetWidth;
        this.$wrapper = $("#" + options.wrapper);
        this.maxdist = 0;
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
            this.$prev.click(function(e) {
                fn.left();
            });
            this.$next.click(function(e) {
                fn.right();
            });
            this.$items.each(function(index, obj) {
                fn.maxdist += obj.offsetWidth;
            });

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
