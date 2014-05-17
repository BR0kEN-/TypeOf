;(function() {
  'use strict';

  window.TypeOf = function(_) {
    var subtype = false;

    return {
      type: function(prop) {
        if ((null || undefined) == _) {
          return _ + '';
        }

        if (_[prop] === Boolean) {
          return 'bool';
        }

        if (_.length >= 0 && _.item) {
          return 'array';
        }

        subtype = 'object';

        if (_ instanceof Node) {
          return 'node';
        }

        if (_ instanceof Date) {
          return 'date';
        }

        subtype = _[prop] === Number ? (
          isNaN(_) ? 'NaN' : (_ % 1 !== 0 ? 'float' : false)
        ) : (
          _[prop] === Object ? 'plain' : false
        );

        for (var k in _[prop]) {
          subtype = 'object';
          break;
        }

        return _[prop].prototype[prop].name.toLowerCase();
      }('constructor'),
      subtype: subtype,
      is: function(check) {
        return check === this.subtype || check === this.type;
      }
    };
  };
})();
