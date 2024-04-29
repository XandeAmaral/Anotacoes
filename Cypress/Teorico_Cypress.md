DIscord - https://on.cypress.io/chat.

Começando
https://github.com/wlsf82/cypress-basico-v2
https://medium.com/@faelbercam/um-overview-sobre-cypress-io-framework-de-automa%C3%A7%C3%A3o-de-testes-end-to-end-dc438b9ee7a1
https://www.youtube.com/watch?v=1XHGJcBZI_0&t=281s
https://medium.com/assertqualityassurance/why-you-should-not-use-cypress-for-api-tests-562aca637563
https://sobreiranat.medium.com/cypress-a-jogada-de-mestre-bec6d844ef80
https://example.cypress.io/commands/querying

Configurar cypress
https://github.com/cypress-io/cypress-example-todomvc#cypress-intellisense
https://docs.cypress.io/guides/tooling/IDE-integration

LER: https://talkingabouttesting.com/2016/08/09/seriam-os-testes-de-ui-flaky-por-natureza/
LER: https://github.com/pedrohyvo/cypress-docs-pt-br/blob/master/pages/getting-started/testing-your-app.md
LRE: https://www.cypress.io/blog/2019/06/26/testing-with-cypress-theres-a-course-for-that/
VER curso do TLK: https://www.youtube.com/playlist?list=PL-eblSNRj0QEKzWdkIYc8mh3DmCe8IFUV
LER: https://medium.com/stonetech/10-boas-pr%C3%A1ticas-essenciais-para-o-seu-dia-a-dia-com-o-cypress-7f6e8d87e55
LER:https://glebbahmutov.com/blog/two-cypress-tricks/
LER:https://glebbahmutov.com/blog/better-cypress-log/
LER:https://glebbahmutov.com/blog/good-logging/
LER:https://glebbahmutov.com/blog/network-requests-with-cypress/
LER: https://github.com/cypress-io/cypress-realworld-testing-blog <-- ambiente de ensino do RWA
LER: https://glebbahmutov.com/blog/upgrade-cypress-v9-to-v12/ diferenças cypress 9 e 12
LER https://glebbahmutov.com/blog/better-cypress-log/ Cypress Log
LER: https://glebbahmutov.com/blog/cypress-slash-command/
LER: https://glebbahmutov.com/blog/test-plain-or-markdown-file/
LER: https://glebbahmutov.com/blog/cypress-v10-tips/
LER: https://glebbahmutov.com/blog/fix-for-cypress-plugin-events/
LER: https://github.com/pedrohyvo/cypress-docs-pt-br/blob/master/pages/guides/debugging.md mesmo que https://docs.cypress.io/guides/guides/debugging
LER: https://www.cypress.io/blog/2020/07/22/do-not-get-too-detached/
LER: cypress tips and tricks (Gleb Bahmutov) - https://glebbahmutov.com/blog/cypress-tips-and-tricks/#pass-the-environment-variables-correctly
LER: https://www.cypress.io/blog/2020/04/23/guest-post-testing-lists-of-items
LER: https://www.chrislucian.com/2017/11/how-much-time-should-we-spend-on.html

ESlint para cypress - https://github.com/cypress-io/eslint-plugin-cypress

CURSO NETWORK - https://cypress.tips/courses/network-testing
Curso cypress - https://learn.cypress.io/
Curso - https://www.youtube.com/watch?v=69SFwgWHUig&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU
contribuindo com cypress - https://github.com/cypress-io/cypress/blob/develop/CONTRIBUTING.md

Como mandar perguntas em um fórum - http://sscce.org/

Comandos iniciais
1. Download e instalar nodejs
2. Download e instalar vscode
3. Criar pasta e abrir no vscode
4. npm -i init (terminal)
5. npm install cypress --save -dev
6. start cypress & npx cypress open
7. npm install -D cypress-iframe
8. import 'cypress-iframe' (e2e.js)

npx cypress run  (executa todos os comandos do cypress)
npx cypress run --headed (roda abrindo o navegador
npx cypress run --spec caminhocy.js
npx cypress run --browser chrome

extensão do vscode - https://medium.com/@filiphric/my-favourite-vs-code-extensions-for-writing-tests-in-cypress-1aa1021dbe44
---
Boas práticas com cypress
(https://dev.to/walmyrlimaesilv/best-practices-in-test-automation-with-cypress-49ee)
(https://www.youtube.com/watch?t=106&v=iXFVV76YnRQ&feature=youtu.be)
(https://docs.cypress.io/guides/references/best-practices#Web-Servers)

(Cypress no mundo real - https://github.com/cypress-io/cypress-realworld-app)
1. Testes independetes
Automatizar testes isoladamente, a falha de um teste não pode impactar no resulto de outros testes.
2. Autenticação programática
3. Não testar aplicações externas


Escrevendo um teste organizado- https://www.w3resource.com/cypress/writing-and-organizing-tests.php
Escrevendo um teste organizado- https://github.com/pedrohyvo/cypress-docs-pt-br/blob/master/pages/core-concepts/writing-and-organizing-tests.md
Identificando cheiro ruins em código - https://refactoring.guru/refactoring/smells
Série Qualidade de código em teste de software - https://talkingabouttesting.com/2019/07/29/escreva-codigo-limpo-%f0%9f%a7%b9/
Arquitetura de componentes equilibradas - https://talkingabouttesting.com/2019/06/10/mantenha-a-arquitetura-de-componentes-equilibrada/
Código limpo - classes - https://talkingabouttesting.com/2016/01/28/insights-de-codigo-limpo-classes/
Definindo Fixture - https://talkingabouttesting.com/2022/12/23/como-definir-as-fixtures-para-testes-de-frontend-com-cypress/
write tests. not too many. mostly integration - https://www.cypress.io/blog/2020/12/10/testing-the-anchor-links/
writing tests progress - https://glebbahmutov.com/blog/writing-tests-progress/
---
Fundamentos do Cypress
(https://docs.cypress.io/examples/recipes#Fundamentals)

JEST - https://jestjs.io/docs/api#testonlyname-fn-timeout, para entender melhor o it e os outros
caminhos - https://globster.xyz/

---
Page objects em cypress
Uma breve introdução - https://medium.com/reactbrasil/deep-diving-pageobject-pattern-and-using-it-with-cypress-e60b9d7d0d91
Uma explanação mais introdutória, com mais explicações -  https://www.browserstack.com/guide/cypress-page-object-model?
Curso Grátis - https://testautomationu.applitools.com/cypress-tutorial/chapter7.html
Curso Grátis - https://testautomationu.applitools.com/advanced-cypress-tutorial/
Bem detalhado de como implementar - https://www.qed42.com/insights/coe/quality-assurance/page-object-model-cypress
---
Como trabalhar com Cypress e Docker
https://github.com/cypress-io/cypress-example-docker-circle
---
User Interface vs Application Action em cypress
https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/
https://applitools.com/blog/page-objects-app-actions-cypress/?ref=cypress.io
---
Code smells em cypress
https://codingitwrong.com/2020/10/09/identifying-code-smells-in-cypress.html

---
Extras
Conferencias de teste de software - https://talkingabouttesting.com/2015/01/26/ha-beneficios-em-atenderconferencias-de-testes-de-software/
type detect - https://github.com/chaijs/type-detect

uso de region em javascript é uma boa prática?

Testes com condicionais
https://docs.cypress.io/guides/core-concepts/conditional-testing
https://talkingabouttesting.com/2021/02/23/como-realizar-uma-acao-condicionalmente-com-cypress/

Relatórios dos teste com allure
---
Smoke Test no cypress
https://www.cypress.io/blog/2019/12/06/use-meaningful-smoke-tests/
---
Code Covarage
1- https://medium.com/engineering-semantics3/understanding-code-coverage-1074e8fccce0
2- https://medium.com/engineering-semantics3/understanding-javascript-code-coverage-part-2-9aedaa5119e5
3- https://docs.cypress.io/guides/tooling/code-coverage?ref=cypress.io
---
Alguns dados importantes para configurar CI

Module API - https://docs.cypress.io/guides/guides/module-api
live sobre ci - https://www.youtube.com/watch?v=saYovXS9Llk&ab_channel=Cypress.io

---
Debug Cypress

https://docs.cypress.io/guides/guides/command-line#Debugging-commands
https://docs.cypress.io/guides/references/troubleshooting#Print-DEBUG-logs
plugin failed log -  https://github.com/bahmutov/cypress-failed-log

---
Mocha

https://www.lambdatest.com/mocha-js
https://www.browserstack.com/guide/jest-vs-mocha-vs-jasmine?utm_source=google&utm_medium=cpc&utm_platform=paidads&utm_content=645400465181&utm_campaign=Search-DSA-NB-T2Geo-Exp&utm_campaigncode=Guide-Page+9100441&utm_term=+&gclid=EAIaIQobChMI-Zv-noHm_wIV0kFIAB0DEQ_oEAAYASAAEgK5cfD_BwE

---
Plugins bons

cypress-localstorage-commands