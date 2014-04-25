# TypeOf

A very nice and simple type checker for the JavaScript entities.

## Usage

The `TypeOf` function returns an object, which contains following properties and methods.

Contents | Type | Name | Description
--- | --- | --- | ---
Property | String | type | Result of the type checking, represented as string.
Property | Boolean or String | subtype | False or subtype of the checked entity.
Method | Boolean | is(type) | Takes as argument the string, which implies the name of type or subtype of the checked entity.

The allowed parameters for usage: `NaN`, `null`, `bool`, `node`, `plain`, `float`, `array`, `string`, `number`, `object`, `function`, `undefined`. In cases, when you check for `NaN`, `node`, `float` or `plain`, the argument will be compared with a subtype. The subtypes relate to the following types (in order): `number`, `object`, `number`, `object`.

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
