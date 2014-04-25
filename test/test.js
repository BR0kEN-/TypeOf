(function(D) {
  if (!window.console) {
    return;
  }

  var entities = {
        '{}': {},
        '[]': [],
        1: 1,
        "'1.2'": '1.2',
        '1.3': 1.3,
        "parseInt('string')": parseInt('string'),
        "document.querySelectorAll('body')": document.querySelectorAll('body'),
        "document.querySelector('body')": document.querySelector('body'),
        'null': null,
        'false': false,
        'undefined': undefined,
        'function() {}': function() {}
      },
      fragment = D.createDocumentFragment().appendChild(D.createElement('div')),
      createElement = function(string) {
        fragment.innerHTML = string;
        return fragment.children[0];
      },
      output = createElement('<div>'),
      body = D.body,
      entity;

  for (entity in entities) {
    var button = createElement('<button>' + entity + '</button>');

    button.addEventListener('click', function(e) {
      var type = TypeOf(entities[this.innerHTML]),
          insert = createElement('<pre>');

      insert.innerHTML = this.innerHTML + ' = ' + JSON.stringify(type, '', 1);
      output.innerHTML += insert.outerHTML;

      console.log(type);
      console.debug(entities[this.innerHTML]);

      this.setAttribute('disabled', '');
      this.removeEventListener(e.type, arguments.callee);
    });

    body.appendChild(button);
  }

  body.appendChild(output);
})(document);
