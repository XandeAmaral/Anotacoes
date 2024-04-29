Refatorar o modo que está a pasta config, atualmente a estrutura está nesse formato:

cypress
 -   config
     -  local.config.js
     -  producao.config.js
     -  mobile.config.js
     -  lento.config.js
 -   scripts

Não existe default do cypress.config.js, está sendo apontado diretamente o arquivo de config na pasta do cypress/config.

Problema
Essa abordagem gera um código de dificil leitura nos scripts do package.json.

```
"scripts": {
    "cy:open local e2e": "npx cypress open --e2e --config-file './cypress/config/local.config.js'",
    "cy:run arquivoAtual": "npx cypress run --config-file './cypress/config/local.config.js' -s 'cypress/e2e/11-EAD/04-Universidade/cadastroRealizacaoCurso.cy.js' ",
    "cy:run arquivoAtual firefox": "npx cypress run --config-file './cypress/config/local.config.js' -b 'firefox' -s 'cypress/e2e/11-EAD/04-Universidade/cadastroRealizacaoCurso.cy.js'",
    "cy:run arquivoAtual chrome": "npx cypress run --config-file './cypress/config/local.config.js' -b 'chrome' -s 'cypress/e2e/11-EAD/04-Universidade/cadastroRealizacaoCurso.cy.js'",
    "cy:run arquivoAtual record": "npx cypress run --config-file './cypress/config/local.config.js' --record -s 'cypress/e2e/11-EAD/04-Universidade/cadastroRealizacaoCurso.cy.js'",
    "cy:run smokeTestes": "npx cypress run --config-file './cypress/config/local.config.js' -s 'cypress/e2e/smokeTestes/smokeURL.cy.js'",
    "cy:run smokeTestes firefox": "npx cypress run --config-file './cypress/config/local.config.js' -b 'firefox' -s 'cypress/e2e/smokeTestes/smokeURL.cy.js'",
    "cy:run smokeTestes firefox-dev": "npx cypress run --config-file './cypress/config/local.config.js' -b 'firefox-dev' -s 'cypress/e2e/smokeTestes/smokeURL.cy.js'",
    "cy:run smokeTestes chrome": "npx cypress run --config-file './cypress/config/local.config.js' -b 'chrome' -s 'cypress/e2e/smokeTestes/smokeURL.cy.js'",
    "cy:run smokeTestes chrome headed": "npx cypress run --config-file './cypress/config/local.config.js' -b 'chrome' -s 'cypress/e2e/smokeTestes/smokeURL.cy.js' --headed --no-exit",
    "cy:run testesLentos": "npx cypress run --config-file './cypress/config/local.config.js' -s 'cypress/e2e/testesLentos.cy.js'",
    "cy:run testesRapidos": "npx cypress run --config-file './cypress/config/local.config.js' -s 'cypress/e2e/testesRapidos.cy.js'",
    "cy:run todosTestes": "npx cypress run --config-file './cypress/config/local.config.js' -s 'cypress/e2e/todosTestes.cy.js'",
    "cy:run:record testesRapidos": "npx cypress run --config-file './cypress/config/local.config.js' --record -s 'cypress/e2e/testesRapidos.cy.js'"
  },
```

Solução
utilizar um arquivo default de config do cypress, porém ele apenas serve como uma interface de controle para nossos arquivos de config do cypress na pasta cypress/config. Alguns detalhes que tem que tomar cuidado é validar se o setupNodeEvents continuará funcionando, pq cada arquivo config precisa ter seus próprios scripts Node.
Como referência tem alguns links abaixo, eles utilizam o '--env' para selecionar qual arquivo será o cypress.config.js, talvez tenha q ter um leve ajuste, mas acredito que não será necessário, apenas precisa da implementação da lógica.

https://www.youtube.com/watch?v=dlj-BJqQwE4
https://docs.cypress.io/api/plugins/configuration-api#Switch-between-multiple-configuration-files
https://docs.cypress.io/guides/references/configuration
https://filiphric.com/how-to-structure-a-big-project-in-cypress#documentation

Na teoria os scripts ficariam conforme a imagem abaixo, afinal como nenhum valor está sendo passado para o '--env' a condição if() retornaria para acessar o arquivo de local.config.js.

```
  "scripts": {
    "cy:open local e2e": "npx cypress open --e2e ",
    "cy:run arquivoAtual": "npx cypress run  -s 'cypress/e2e/11-EAD/04-Universidade/cadastroRealizacaoCurso.cy.js' ",
    "cy:run arquivoAtual firefox": "npx cypress run  -b 'firefox' -s 'cypress/e2e/11-EAD/04-Universidade/cadastroRealizacaoCurso.cy.js'",
    "cy:run arquivoAtual chrome": "npx cypress run  -b 'chrome' -s 'cypress/e2e/11-EAD/04-Universidade/cadastroRealizacaoCurso.cy.js'",
    "cy:run arquivoAtual record": "npx cypress run  --record -s 'cypress/e2e/11-EAD/04-Universidade/cadastroRealizacaoCurso.cy.js'",
    "cy:run smokeTestes": "npx cypress run  -s 'cypress/e2e/smokeTestes/smokeURL.cy.js'",
    "cy:run smokeTestes firefox": "npx cypress run  -b 'firefox' -s 'cypress/e2e/smokeTestes/smokeURL.cy.js'",
    "cy:run smokeTestes firefox-dev": "npx cypress run  -b 'firefox-dev' -s 'cypress/e2e/smokeTestes/smokeURL.cy.js'",
    "cy:run smokeTestes chrome": "npx cypress run  -b 'chrome' -s 'cypress/e2e/smokeTestes/smokeURL.cy.js'",
    "cy:run smokeTestes chrome headed": "npx cypress run  -b 'chrome' -s 'cypress/e2e/smokeTestes/smokeURL.cy.js' --headed --no-exit",
    "cy:run testesLentos": "npx cypress run  -s 'cypress/e2e/testesLentos.cy.js'",
    "cy:run testesRapidos": "npx cypress run  -s 'cypress/e2e/testesRapidos.cy.js'",
    "cy:run todosTestes": "npx cypress run  -s 'cypress/e2e/todosTestes.cy.js'",
    "cy:run:record testesRapidos": "npx cypress run  --record -s 'cypress/e2e/testesRapidos.cy.js'"
  },
```





---
cypress.config.js - Configurações
geral de como mexer com o Cypress.config() - https://www.toolsqa.com/cypress/configurations-in-cypress/

Como importar módulos js nas configurações - https://github.com/cypress-io/cypress/issues/23540
https://docs.cypress.io/api/cypress-api/require#Why-not-require-or-import
https://docs.cypress.io/api/commands/origin#Dependencies--Sharing-Code
https://stackoverflow.com/questions/75556490/how-to-import-js-function-inside-cypress-config-js
https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import
https://blog.matheuscastiglioni.com.br/utilizando-modulos-javascript-de-forma-nativa/

plugin bahmutov - https://www.cypress.io/blog/2020/06/18/extending-the-cypress-config-file/

Configurando ambientes diferentes
https://stackoverflow.com/questions/74849225/setting-up-cypress-for-different-env-when-i-have-different-baseurl-and-apiurl-on

como passar uma variavel verificando pelo node e por cli - https://filiphric.com/how-to-structure-a-big-project-in-cypress#configuration-switching

ótimas referências para pensar no cypress.config.js 
abordagem geral de 3 possibilidades - https://filiphric.com/switch-between-environments-in-cypress
passando por cli - https://filiphric.com/create-a-configuration-plugin-in-cypress
como usar o node para controlar ambiente e passar um json ou prefix ou plugin - https://glebbahmutov.com/blog/cypress-v10-env/
conteudo do gleb sobre - https://glebbahmutov.com/blog/load-cypress-env-settings/


