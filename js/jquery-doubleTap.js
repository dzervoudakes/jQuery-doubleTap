/**
 * jQuery doubleTap() plugin
 * https://github.com/DanZiti/jQuery-doubleTap
 * 
 * Custom jQuery event method that triggers a callback after double-tapping/double-clicking on the selected DOM element
 * 
 * Copyright (c) 2015 Dan Zervoudakes
 * Released under the MIT license
 * https://github.com/DanZiti/jQuery-doubleTap/blob/master/LICENSE
 */

	(function($){
		
		$.fn.doubleTap = function(_callback){
			
			var active, interaction;
			
			active = false;
			interaction = ("createTouch" in document) ? "touchend" : "click";
			
			if (_callback){
				
				$(this).on(interaction, function(){
					
					if (active){
						_callback();
						return active = false;
					}
					
					active = true;
					
					setTimeout(function(){
						active = false;
					}, 350);
					
				});
				
			} else {
				throw new Error("jQuery double-tap/double-click callback is undefined.");
			}
			
			return this;
		};
	}(jQuery));