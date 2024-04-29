hash tables https://www.freecodecamp.org/portuguese/news/hash-tables-em-javascript-array-associativo-de-hashing-em-js/
object vs map - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps
object manipulation - https://medium.com/infancyit/javascript-object-manipulation-5d1145cf06ef
representation of hashmap in js - https://stackoverflow.com/questions/368280/javascript-hashmap-equivalent
convert map to an object - https://bobbyhadz.com/blog/javascript-convert-map-to-object
merge two map - https://bobbyhadz.com/blog/javascript-merge-maps
converte array para objeto - https://stackoverflow.com/questions/54789406/convert-array-to-object-keys


está com erro - tenta resolver de novo
```
const tokenMap = new Map();
let auxNumerico = 0;
addToken('teste1');
addToken('teste2');
addToken('teste3');
console.log(getAllTokens);
const addToken = (token) => {
  auxNumerico += 1;
  tokenMap.set(auxNumerico, token);
  return tokenMap;
};
const getAllTokens = () => {
  return tokenMap;
};
```


```
const novoMap = new Map();
function add(nome, valor) {
  novoMap.set(nome, valor);
};
function procura(nome, base) {
  const keyBusca = nome + base;
  const link = novoMap.get(keyBusca);
  console.log(link);
  return link;
};
add('loginMariza','h?ql=20503');
procura('login', 'Mariza');
add('loginMariza','h?ql=156');
const val = procura('login', 'Mariza');
console.log('~~~~~~~~~~~');
console.log(val.length);
```

Mapeando opções:
```
'use strict'
function teste( opcoesParaSelecionar = {}) 
{
  const opcoesPossiveis = {
    visualizar: 1,
    categoria: 2,
  };
  const opcaoSelecionado = opcoesPossiveis[Object.keys(opcoesParaSelecionar).find(opcao => opcoesParaSelecionar[opcao])];
  
  if (opcaoSelecionado === undefined) {
    throw new Error('Nenhuma opção válida fornecida.');
  };
  console.log(opcaoSelecionado);
};
function teste2(opcoes = {}) {
    const opcoesMapeadas = {
        chkAcesso: 1,
        chkManutencao: 2,
    };
    const { salvar = false, remover = false, click = false } = opcoes;
    const posicaoDoChkboxSelecionado = opcoesMapeadas[Object.keys(opcoes).find(opcao => opcoes[opcao])];
    if (posicaoDoChkboxSelecionado === undefined) {
      throw new Error('Nenhuma opção válida fornecida.');
    };
  
    console.log(posicaoDoChkboxSelecionado)
};
teste({ visualizar: true });
teste2({ chkAcesso: true }); // 1

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

'use strict'

function teste2(opcoesParametros = {}) {
  const opcoesMapeadas = {
      chkAcesso: 1,
      chkManutencao: 2,
  };

  const posicaoDoChkboxSelecionado = opcoesMapeadas[Object.keys(opcoesParametros).find(opcao => opcoesParametros[opcao])];
  
  console.log('1: ' + posicaoDoChkboxSelecionado)
  console.log('2: ' + Object.keys(opcoesParametros));
  console.log('3: ' + Object.keys(opcoesParametros).find(opcao => opcoesParametros[opcao]));
  console.log('4: ' + opcoesParametros["chkAcesso"]);
  console.log('5: ' + opcoesParametros["chkAcesso"] == true);
 	console.log('6: ' + Object.keys(opcoesParametros).find(opcao => opcoesParametros[opcao] == true));
  
};

teste2({ chkAcesso: true, testes: true });
// 1: 1
// 2: chkAcesso,testes
// 3: chkAcesso
// 4: true
// false
// 6: chkAcesso

teste2({ chkAcesso: false, testes: true });
// 1: undefined
// 2: chkAcesso,testes
// 3: testes
// 4: false
// false
// 6: testes
```
