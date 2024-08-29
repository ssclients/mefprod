/*
 Plugin: jQuery Parallax
 Version 1.1.3
 Author: Ian Lunn
 Twitter: @IanLunn
 Author URL: http://www.ianlunn.co.uk/
 Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

 Dual licensed under the MIT and GPL licenses:
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html
 */
(function( $ ){"use strict"; var $window = $(window); var windowHeight = $window.height(); $window.resize(function () {windowHeight = $window.height(); }); $.fn.parallax = function(xpos, speedFactor, outerHeight) {var $this = $(this); var getHeight; var firstTop; var paddingTop = 0; $this.each(function(){firstTop = $this.offset().top; }); if (outerHeight) {getHeight = function(jqo) {return jqo.outerHeight(true); }; } else {getHeight = function(jqo) {return jqo.height(); }; } if (arguments.length < 1 || xpos === null) xpos = "50%"; if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1; if (arguments.length < 3 || outerHeight === null) outerHeight = true; function update(){var pos = $window.scrollTop(); $this.each(function(){var $element = $(this); var top = $element.offset().top; var height = getHeight($element); if (top + height < pos || top > pos + windowHeight) {return; } $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px"); }); } $window.bind('scroll', update).resize(update); update(); };
    $.fn.verticalParallax=function(o,e,n){var i,l,r=$(this);function t(){var t=$window.scrollLeft();r.each(function(){var n=$(this);n.offset().left,i(n);r.css("backgroundPosition",Math.round((l-t)*e)+"px "+o)})}r.each(function(){l=r.offset().top}),i=n?function(n){return n.outerHeight(!0)}:function(n){return n.height()},(arguments.length<1||null===o)&&(o="50%"),(arguments.length<2||null===e)&&(e=.1),(arguments.length<3||null===n)&&(n=!0),$window.bind("scroll",t).resize(t),t()};
})(jQuery);