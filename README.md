# TypeOf

A very nice and simple type checker for the JavaScript entities.

## Usage

The `TypeOf` function returns an object, which contains following properties and methods.

Type | Name | Description
--- | --- | ---
String | type | Result of the type checking, represented as string.
Boolean or String | subtype | False or subtype of the checked entity.
Boolean | is(type) | Takes as argument the string, which implies the name of type or subtype of the checked entity.

The allowed parameters for usage: `NaN`, `null`, `bool`, `node`, `plain`, `float`, `array`, `string`, `number`, `object`, `function`, `undefined`. In cases, when you check for `NaN` or `float` and `node` or `plain`, the argument will be compared with a subtype. The first pair of subtypes relate to the type `number` and second - to `object`.

## Examples

#### Plain object
```javascript
var plain_object = TypeOf({});

// Strings comparison
plain_object.type === 'object' && plain_object.subtype === 'plain';

// Method usage
plain_object.is('object');
plain_object.is('plain');
```

***

#### Float number
```javascript
var float_number = TypeOf(1.1);

// Strings comparison
float_number.type === 'number' && float_number.subtype === 'float';

// Method usage
float_number.is('number');
float_number.is('float');
```
## Browser Compatibility

The library will be work in each browser, which support the JavaScript of any version.

## Try it yourself

[http://br0ken-.github.io/TypeOf/](http://br0ken-.github.io/TypeOf/)
