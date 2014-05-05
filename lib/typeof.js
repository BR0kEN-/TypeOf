;(function() {
  'use strict';

  window.TypeOf = function(entity) {
    var subtype = false,
        type = function(_) {
          if ((null || undefined) == _) {
            return _ + '';
          }

          switch (_.constructor) {
            case Boolean: return 'bool';

            case Object:
              subtype = 'plain';
              return 'object';

            case Number:
              subtype = isNaN(_) ? 'NaN' : (
                _ % 1 !== 0 ? 'float' : false
              );

              return 'number';

            default:
              /**
               * @todo Subtype "object" can be only for nodes
               *       and objects, created by operator "new".
               */
              subtype = 'object';

              if (_ instanceof Node) {
                return 'node';
              }

              try {
                return _.constructor.prototype.constructor.name.toLowerCase();
              } catch (e) {
                if (_.length >= 0) {
                  return 'array';
                }

                return {}.toString.call(_).slice(8, -1).toLowerCase();
              }
          }
        }(entity);

    return {
      type: type,
      subtype: subtype,
      is: function(check) {
        return check === subtype || check === type;
      }
    };
  };
})();
