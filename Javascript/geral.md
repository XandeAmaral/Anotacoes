
Curso gratuito - https://www.codecademy.com/learn/introduction-to-javascript
Curso indicado pelo cypress - https://docs.cypress.io/faq/questions/general-questions-faq#What-resources-do-you-recommend-to-learn-JavaScript-before-writing-Cypress-tests

Desenvolvida pelo Oracle.
O ECMASript é a prórpia linguagem JavaScript e sua padronização - https://kenzie.com.br/blog/ecmascript/#:~:text=O%20ECMAScript%20%C3%A9%20a%20pr%C3%B3pria,vamos%20explorar%20as%20principais%20novidades.
É um linguagem tipidamente dinâmica diferente de C# e JAVA, ou seja, uma variável não precisa ser só o atributo em que foi definida, possui uma orientação de objetos baseado em protótipos, protótipos são objetos que tem suas instâncias como outros objetos e podemos herdar propriedades de objetos ao invés de classe, como é na orientação de classe (exemplo Java), uma linguagem single thread e possui uma natureza assincrona, são consideradas funções de primeira classe (first calsse function), ou seja, podemos passar uma função como argumento ou pode ter um returno como função, são as funções de ordem superior (high ordem function) e a propriedade de um objeto pode ser uma função, o que quer dizer que a função pode ser armazenada em um objeto. 
Uma Linguagem multiparadgma, podendo escrever em paradgmas voltadas a eventos (arquitetura voltada a eventos) como por exemplo a ação de um usuário como o clique na tela, ou podendo ser um sensor de saida. Um paradigma imperativo, parecido com um paradigma procedural diz  como o programa deve operar em contraste com o programa declarativo de como o programa de agir. O paradigma funcional que utiliza a composição de funções, como o estilo declarativo que se preocupa mais com o que quer que seja feito do que como a aplicação vai fazer.
O js tem uma API para trabalhar com diferentes atributos, textos, datas, DOM (Document-Object-Model).
DOM seria uma definição da estrutura html de uma página de uma forma de que tudo seria um objeto, o html seria um objeto e todos os seus nós, conseguindo acessar esses objetos com js.
O js em si não tem facilidade em lidar com IO (in-put/out-put), redes, armazenamento e gráficos, mas atualmente existem diversas APIs que facilitam o trabalho.

Atualmente há SPA (single page application), transpirapiladores para auxiliar no desenvolvimento, como por exemplo o Babel, em que ajuda na transpilação de uma versão mais nova do JS para o ECMAScript 5 (ainda um padrão para muitos navegadores).

Podemos fazer uma aplicação utilizando uma biblioteca (JQuery ) ou um framework  (REACT, Angular, Lambda) de JS que trás varias facilidades que depois os códigos são transpilados para js que rodam no browser. Pensando no lado do servidor existe o NODEJS. Existe ainda outras ferramentas como o Cordova que permite escrever uma aplicação hibrida, escrevendo uma aplicação em js e conseguindo fazer ela parecer uma aplicação nos dispositivos móveis, o Electron que permite aplicação desktop com js e o REACTnative que permite desenvolver uma aplicação em js e que posteriormente é compilada em uma versão para IOS, uma versão para Android e web. Existindo para sistemas embarcados também.
VanilaJS se refere a sites que não utilizam qualquer biblioteca ou framework, apenas JS puro

JQuery é uma biblioteca para facilitação de seleção e manipulação de eventos com DOM e gestão de eventos, como animações em css, e a própria implementação de Ajax.

Mais sobre a história: https://www.mozilla.org/pt-BR/firefox/browsers/browser-history/

CommonJS - This loading paradigm was designed with server-side JavaScript in mind and is not suitable for client-side applications. Modules are loaded synchronously and are accessed in the same order that JavaScript locates them. Tendo como seu concorrente o ES module (ESM) em que se difere em alguns detalhes, como um dos mais importante ele funcionar assincronamente.
https://en.wikipedia.org/wiki/CommonJS

CommonJS vs ESM - Olhar as notas de Node

Isophormic JavaScript
https://dev.to/arobu/why-is-isomorphic-javascript-not-longer-talked-about-3mlp
https://medium.com/airbnb-engineering/isomorphic-javascript-the-future-of-web-apps-10882b7a2ebc


---
Lambda - https://www.vinta.com.br/blog/2015/javascript-lambda-and-arrow-functions/
Arrow functions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Funções
https://horadecodar.com.br/2021/08/27/passar-funcao-como-parametro-em-javascript/

Chamadas de funções em referências
https://pt.stackoverflow.com/questions/3924/como-passar-par%C3%A2metros-em-chamadas-de-fun%C3%A7%C3%B5es-por-refer%C3%AAncia-em-javascript

Polimorfismo
https://maxroecker.github.io/blog/javascript-orientado-a-objetos-2/#:~:text=Polimorfismo,fazem%20o%20Teste%20do%20Pato.

Entrada de parametro opcional
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters

Diferença JSON x JS
Como fazer o parsing de um objeto json com js - https://www.freecodecamp.org/portuguese/news/exemplo-de-stringify-em-json-como-fazer-o-parsing-de-um-objeto-json-com-js/
Criar e percorrer objetos - https://www.freecodecamp.org/portuguese/news/tutorial-de-arrays-de-objetos-em-javascript-como-criar-atualizar-e-percorrer-objetos-em-lacos-usando-metodos-de-array-do-js/
json - https://medium.com/@thiagogrespi/manipulando-massa-de-dados-para-testes-automatizados-com-json-fd6cd05ed30
json org - https://www.json.org/json-en.html
json array vs json object - https://stackoverflow.com/questions/2544119/how-do-i-create-a-json-array


Desestruturação javascript
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
functions parameters with destructuring assignment - https://medium.com/swlh/javascript-use-destructuring-assignment-over-function-parameters-7d22b9f9b851

Template literals javascript

Check if all Object Properties are Null in JavaScript (object, array)
https://bobbyhadz.com/blog/javascript-check-if-all-object-properties-are-null
https://www.freecodecamp.org/news/check-if-an-object-is-empty-in-javascript/
https://techsolutionstuff.com/post/how-to-check-array-is-empty-or-null-in-javascript -jquery
https://stackoverflow.com/questions/34031690/check-if-an-array-contains-something-other-than-null-in-javascript - function

spread syntax (...)
https://bobbyhadz.com/blog/javascript-append-one-array-to-another-array

what is object prototype in javascript

cognitive complexity in programming - https://www.sonarsource.com/docs/CognitiveComplexity.pdf

eval() -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#description
lexical grammar - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar
modules - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
the dangers of square bracket notation - https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md

bezier curve - https://developer.mozilla.org/en-US/docs/Glossary/Bezier_curve

this javascript - https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
---
Bibliotecas

lodash - https://blog.betrybe.com/desenvolvimento-web/lodash-o-que-e-como-usar/
https://medium.com/@martin.crabtree/javascript-tracking-key-value-pairs-using-hashmaps-7de6df598257
---
how use variable in js - https://medium.com/dailyjs/use-const-and-make-your-javascript-code-better-aac4f3786ca1
lint in js - https://medium.com/dailyjs/why-you-should-always-use-a-linter-and-or-pretty-formatter-bb5471115a76



