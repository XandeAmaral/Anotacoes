

tasks
```
const log = false;
it('', () => {
  cy.task('addTextoLog',({ key: 'Nome Universidade', value: 'b'}));
  cy.task('showTextoLog').then((val) => {
    cy.log(val)
  });
  cy.task('clearTextoLog');
  cy.task('addTextoLog',({ key: 'teste', value:  'a4551234123'}));
  cy.task('showTextoLog').then((val) => {
    cy.log(val)
  });
  cy.task('clearTextoLog');
});
it.only('', () => {
  cy.novoTeste();
});
Cypress.Commands.add('novoTeste', () => {
  const displayLog = Cypress.log({
    name: "Custom Commands criaUniversidade",
    displayName: "criaUniversidade",
    message: `Cria a universidade`,
    autoEnd: false,
  });
  cy.task('clearTextoLog');
  cy.task('addTextoLog', ({ key: 'bfada', value: 'b' }));
  cy.task('showTextoLog').then((val)=>{
    cy.log(val);
    displayLog.set({
      consoleProps() {
        return val;
      },
    });
    displayLog.end();
  });
})
```

```
const tokenMap = new Map();
const textoLog = new Map();
let auxIndice = 0;
exports.defineTasks = (on, config) => {
  on('task', {
    // manipulacao do tokenMap
    addToken: (token) => {
      auxIndice += 1;
      tokenMap.set(auxIndice, token);
      return 0;
    },
    rmvToken: (indice) => {
      if(tokenMap.has(indice)) {
        tokenMap.delete(indice);
        return 0;
      }
      else {
        return -1;
      };
    },
    getToken: (indice) => {
      return tokenMap.get(indice);
    },
    getAllTokens: () => {
      const obj = Object.fromEntries(tokenMap.entries());
      return obj;
    },
    clearToken: () => {
      tokenMap.clear();
      auxIndice = 0;
      return 0;
    },
    resetIndice: () => {
      auxIndice = 0;
      return 0;
    },
    // manipulacao do textoLog
    addTextoLog ({ key, value }) {
      if(key && value) {
        textoLog.set(key, value);
        return 0;
      } else {
        throw new Error('Faltando um dos parâmetros na task addTextoLog');
      };
    },
    clearTextoLog () {
      textoLog.clear();
      return 0;
    },
    showTextoLog () {
      const obj = Object.fromEntries(textoLog.entries());
      textoLog.clear();
      return obj;
    },
  });
};
```
