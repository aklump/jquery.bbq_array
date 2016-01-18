/**
 * BBQ for Arrays jQuery Plugin v1.0.4
 * http://www.intheloftstudios.com/packages/js/bbq_array
 *
 * Extends jQuery BBQ so that you can push states onto arrays.
 *
 * Copyright 2016, Aaron Klump <sourcecode@intheloftstudios.com>
 * @license Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date: Mon Jan 18 13:54:38 PST 2016
 *
 * @see http://benalman.com/projects/jquery-bbq-plugin/
 */

/**
 * This is an example of how to use, give the following url:
 *    index.php#foo[]=bar&foo[]=baz
 *
 * To remove baz do this:
 *    $.bbq.removeArrayState('foo', 'baz');
 *
 * To set qux as a value in foo:
 *    $.bbq.setArrayState('foo', 'qux');*
 */
;(function ($,window) {
  "use strict";

  /**
   * Does the heavy lifting of reading the array and mergin our value.
   * @param op One of: push or remove.
   * @param key The string of the array name, if the url is foo[0]=bar, the key is 'foo'.
   * @param value The value of the element of the array.  From above it would be 'bar'.
   */
  function setStateOfArray(op, key, value) {
    // First get the state of the current array.
    var state = $.bbq.getState(key) || [];

    // Determine if the value is already present in the array.
    var pos = $.inArray(value, state);

    // If it's not present then we'll add it and push the entire array as the new state.
    var update = {};
    if (op === 'push' && pos === -1) {
      state.push(value);
      update[key] = state;
    }
    else if (op === 'remove' && pos !== -1) {
      state.splice(pos, 1);
      update[key] = state;
    }
    if (update !== {}) {
      $.bbq.pushState(update);
    }
  }

  $.bbq = $.bbq || {};
  $.bbq.pushArrayState = function (key, value) {
    setStateOfArray('push', key, value);
  };
  $.bbq.removeArrayState = function (key, value) {
    setStateOfArray('remove', key, value);
  };

})(jQuery,this);
