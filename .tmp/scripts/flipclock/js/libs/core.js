'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*jshint smarttabs:true */

var _FlipClock;

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @license   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

	"use strict";

	/**
  * FlipFlock Helper
  *
  * @param  object  A jQuery object or CSS select
  * @param  int     An integer used to start the clock (no. seconds)
  * @param  object  An object of properties to override the default	
  */

	_FlipClock = function FlipClock(obj, digit, options) {
		if (digit instanceof Object && digit instanceof Date === false) {
			options = digit;
			digit = 0;
		}

		return new _FlipClock.Factory(obj, digit, options);
	};

	/**
  * The global FlipClock.Lang object
  */

	_FlipClock.Lang = {};

	/**
  * The Base FlipClock class is used to extend all other FlipFlock
  * classes. It handles the callbacks and the basic setters/getters
  *	
  * @param 	object  An object of the default properties
  * @param 	object  An object of properties to override the default	
  */

	_FlipClock.Base = Base.extend({

		/**
   * Build Date
   */

		buildDate: '2014-12-12',

		/**
   * Version
   */

		version: '0.7.7',

		/**
   * Sets the default options
   *
   * @param	object 	The default options
   * @param	object 	The override options
   */

		constructor: function constructor(_default, options) {
			if ((typeof _default === 'undefined' ? 'undefined' : _typeof(_default)) !== "object") {
				_default = {};
			}
			if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== "object") {
				options = {};
			}
			this.setOptions($.extend(true, {}, _default, options));
		},

		/**
   * Delegates the callback to the defined method
   *
   * @param	object 	The default options
   * @param	object 	The override options
   */

		callback: function callback(method) {
			if (typeof method === "function") {
				var args = [];

				for (var x = 1; x <= arguments.length; x++) {
					if (arguments[x]) {
						args.push(arguments[x]);
					}
				}

				method.apply(this, args);
			}
		},

		/**
   * Log a string into the console if it exists
   *
   * @param 	string 	The name of the option
   * @return	mixed
   */

		log: function log(str) {
			if (window.console && console.log) {
				console.log(str);
			}
		},

		/**
   * Get an single option value. Returns false if option does not exist
   *
   * @param 	string 	The name of the option
   * @return	mixed
   */

		getOption: function getOption(index) {
			if (this[index]) {
				return this[index];
			}
			return false;
		},

		/**
   * Get all options
   *
   * @return	bool
   */

		getOptions: function getOptions() {
			return this;
		},

		/**
   * Set a single option value
   *
   * @param 	string 	The name of the option
   * @param 	mixed 	The value of the option
   */

		setOption: function setOption(index, value) {
			this[index] = value;
		},

		/**
   * Set a multiple options by passing a JSON object
   *
   * @param 	object 	The object with the options
   * @param 	mixed 	The value of the option
   */

		setOptions: function setOptions(options) {
			for (var key in options) {
				if (typeof options[key] !== "undefined") {
					this.setOption(key, options[key]);
				}
			}
		}

	});
})(jQuery);
//# sourceMappingURL=core.js.map
