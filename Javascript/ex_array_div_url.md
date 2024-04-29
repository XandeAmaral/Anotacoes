https://www.brainstormcreative.co.uk/javascript/how-to-search-for-a-string-or-object-in-array-in-javascript/

```
## versao 2.0 - sem for

cy.wrap(resp.redirectedToUrl).then((urlLogin) => {
      // http://localhost/ng23_9_1_1/pt-BR/sub/5000
      const urlSeparada = urlLogin.split('/');
      const valorNg = urlSeparada.find((parte) => parte.startsWith('ng'));
      Cypress.env('versaoFront', valorNg);
    });


## versao 1.0

cy.wrap(resp.redirectedToUrl).then((urlLogin) => {
      const partes = urlLogin.split('/');
      for (const parte of partes) {
        if(parte.startsWith('ng')) {
          const valorNg = parte;
          cy.log(valorNg);
          Cypress.env('versaoFront', valorNg);
        };
      };
    });
```

