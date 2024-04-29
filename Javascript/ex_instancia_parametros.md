
```
function f(exemplo) {
  if(exemplo) {
    console.log('existe valor');
  }
  else{
    console.log('não existe valor');
  };
};
f() // não existe valor
f(1) // existe valor
f('a') // existe valor
f([]) // existe valor
f({}) // existe valor
```


```
'use strict';
exemplo(); // ab
exemplo({ texto1: 'aa'}); // aab
exemplo({ texto2: 'aa'}); // aaa
exemplo({ texto3: 'aa'}); // ab
function exemplo(parameters = { }) {
  const {
    texto1 = 'a',
    texto2 = 'b',
  } = parameters;
  
  show({texto1, texto2});
};
function show({ texto1, texto2 }) {
  console.log(texto1 + texto2);
};
```

```
'use strict';
function x({ remover = false } = {}) {
  console.log('x: ' + remover);
  y({ remover });
  z({ desmarcado: remover });
};
function y({ remover = false } = {}) {
  console.log('y: ' + remover);
};
function z({ desmarcado = false } = {}) {
  console.log('z: ' + desmarcado);
};
x({ remover: true }); 
// x: true
// y: true
// z: true
```
