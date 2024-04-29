
'use strict'

const args = ['a', 'b', 'c'];

function f(array){
 array.forEach((element, index) => {
   console.log(index + ' - ' + element);
 });
};

f(['d', ...args]);
console.log('diference');
f(['d', args]);

---

'use strict'

const args   = ['a', 'b', 'c'];
const single = 'd';

function printElements(array){
  if(array.isArray){
 		array.forEach((element, index) => {
  		console.log(index + ' - ' + element);
 		});   
  }
  else {
    console.log(array);
  };
};

printElements(['d', ...args]);
console.log('diference in use ... or no');
printElements(['d', args]);
console.log('diference with array and string');
printElements(single);

---
'use strict'

const args   = ['a', 'b', 'c'];
const single = 'd';

console.log('Validação com chamada direta do array com foreach')
[single, args].forEach((item, index) => {
  console.log(index + ' - ' + item);
});

[single, ...args].forEach((item, index) => {
  console.log(index + ' - ' + item);
});