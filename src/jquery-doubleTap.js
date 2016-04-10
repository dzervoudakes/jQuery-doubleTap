/**
 * jQuery doubleTap() plugin
 * https://github.com/dzervoudakes/jQuery-doubleTap
 * 
 * Custom jQuery event method that triggers a callback after double-tapping/double-clicking on the selected DOM element
 * 
 * Copyright (c) 2015, 2016 Dan Zervoudakes
 * Released under the MIT license
 * https://github.com/dzervoudakes/jQuery-doubleTap/blob/master/LICENSE
 */

(function($) {
	
	$.fn.doubleTap = function(callback) {
		
		var active, interaction;
		
		active = false;
		interaction = ("ontouchend" in document) ? "touchend" : "click";
			
		$(this).on(interaction, function() {
			
			if (active) {
				callback();
				return active = false;
			}
			
			active = true;
			
			setTimeout(function() {
				active = false;
			}, 350);
			
		});
		
		return this;
	};
	
}(jQuery));