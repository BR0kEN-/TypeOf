;(function() {
  'use strict';

  window.TypeOf = function(entity) {
    var subtype = false,
        type = function(_) {
          switch (_) {
            case null: return 'null';
            case undefined: return 'undefined';
          }

          switch (_.constructor) {
            case Function: return 'function';
            case Boolean: return 'bool';
            case String: return 'string';
            case Object:
              subtype = 'plain';
              return 'object';

            case Number:
              subtype = isNaN(_) ? 'NaN' : (
                _ % 1 !== 0 ? 'float' : false
              );

              return 'number';

            case Array: return 'array';

            default:
              subtype = 'node';
              return _.length >= 0 ? 'array' : 'object';
          }
        }(entity);

    return {
      type: type,
      subtype: subtype,
      is: function(check) {
        return (subtype || type) === check;
      }
    };
  };
})();
