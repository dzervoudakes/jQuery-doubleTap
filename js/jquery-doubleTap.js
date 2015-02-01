/**
 * jQuery doubleTap plugin
 * 
 * Custom jQuery event method for double-tapping and double-clicking
 * 
 * Copyright (c) 2014, 2015 Dan Zervoudakes
 * Released under the MIT license
 */

	(function($){
		$.fn.doubleTap = function(_callback){
			
			var active = false;
			var interaction = ("createTouch" in document) ? "touchend" : "click";
			
			if (_callback){
				$(this).on(interaction,function(){
					if (active){
						_callback();
						active = false;
					}
					active = true;
					setTimeout(function(){
						active = false;
					},360);
				});
				
			} else {
				throw new Error("Double-tap/double-click callback is undefined.");
			}
			
			return this;
		};
	}(jQuery));