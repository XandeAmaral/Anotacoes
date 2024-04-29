#### Recipe
https://github.com/cypress-io/cypress-example-recipes#logging-in-recipes
https://glebbahmutov.com/cypress-examples/

Alguns exemplos de Comandos encadeados
https://www.tabnine.com/code/javascript/classes/cypress/Chainable
https://www.tabnine.com/code/javascript/functions/cypress/Chainable/get
Cypress testing library - https://testing-library.com/docs/cypress-testing-library/intro/
Como abrir o dev tools automaticamente  no cypress interativo- https://filiphric.com/lesser-known-cypress-tricks#bonus-tip-make-your-devtools-open-automatically-in-cypress-gui

---
#### Listas e Multiplos elementos
Usando each
https://glebbahmutov.com/blog/better-cy-each/
https://stackoverflow.com/questions/70857099/cypress-iterate-over-each-element-and-perform-some-action-before-moving-to-nex

Trabalhando com lista UL > LI
https://glebbahmutov.com/cypress-examples/recipes/each-example.html#collect-items-text
https://glebbahmutov.com/cypress-examples/recipes/get-text-list.html#print-each-list-item-text
https://stackoverflow.com/questions/62004904/how-to-check-that-element-has-either-of-classes-in-cypress
https://glebbahmutov.com/blog/cypress-todomvc-questions/ <-- muito bom

Trabalhando com table TR > TD
https://stackoverflow.com/questions/60055725/how-to-get-a-row-and-select-a-specific-td-in-cypress

---
#### Validações e encontrando elementos
Cypress.dom
https://docs.cypress.io/api/cypress-api/dom#Is-descendent

[](/Cypress/images/dom.png)

Should
https://github.com/cypress-io/cypress/issues/5996
https://github.com/cypress-io/cypress/issues/7603
https://www.chaijs.com/plugins/chai-jquery/#visible
base para usar Chai - https://medium.com/building-ibotta/understanding-chai-js-language-mechanics-cc28e4c9604b
Chai para arrays e objects - https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d
documentação Chai - https://www.chaijs.com/api/bdd/#method_a
validar atributos, valores e texto - https://filiphric.com/cypress-basics-check-attributes-value-and-text
assertions negativos cuidados - https://glebbahmutov.com/blog/negative-assertions/
repetir com should - https://glebbahmutov.com/blog/cypress-should-callback/

Trabalhando com atributos com jquery
https://spigandoeaprendendo.wordpress.com/2014/03/07/jquery-pegando-e-atribuindo-atributos-attr/

expect().to.match() e should('match','')
https://stackoverflow.com/questions/72390567/how-to-use-chai-jquerys-expect-to-match-assertion-in-cypress-the-bdd-asser

Get element
https://medium.com/@anshita.bhasin/how-to-get-element-text-in-cypress-71c68814d20#:~:text=In%20this%20approach%2C%20we%20will,aliasName.
https://dev.to/walmyrlimaesilv/a-simple-cypress-exercise-2lfe
https://filiphric.com/contains-an-overlooked-gem-in-cypress
https://stackoverflow.com/questions/50042670/cypress-test-is-contains-equivalent-to-shouldcontain

CSS vs XPath selectors
https://filiphric.com/cypress-basics-xpath-vs-css-selectors
https://stackoverflow.com/questions/56886556/cypress-click-element-by-id-xpath-name

have.text; contain.text; include.text difference
https://github.com/cypress-io/cypress/issues/1969

 Valida elemento existe na tela ou não
https://talkingabouttesting.com/2021/02/08/como-verificar-que-um-elemento-nao-existe-na-tela-com-cypress/

interagir com elementos
https://github.com/pedrohyvo/cypress-docs-pt-br/blob/master/pages/core-concepts/interacting-with-elements.md

para tirar o foco de um elemento comando BLUR
https://runebook.dev/pt/docs/cypress/api/commands/blur
https://docs.cypress.io/api/commands/blur

Algumas técnicas para esperar carregamento de tela
https://www.cypress.io/blog/2018/02/05/when-can-the-test-start/
https://glebbahmutov.com/blog/set-flag-to-start-tests/
https://stackoverflow.com/questions/44906775/how-do-i-mock-dom-elements-when-using-mocha-javascript

sinon.js
https://sinonjs.org/releases/latest/assertions/
https://www.chaijs.com/plugins/sinon-chai/
https://stackoverflow.com/questions/52376460/cypress-how-do-i-assert-against-the-contents-of-a-window-fetch-post-request-bod
https://www.tabnine.com/code/javascript/functions/chai/Assertion/calledWithMatch

---
#### Funções, Custom Commands e Variaveis + Alias
https://www.tutorialspoint.com/cypress/cypress_custom_commands.htm
https://learn.cypress.io/advanced-cypress-concepts/building-the-right-cypress-commands
https://stackoverflow.com/questions/51821789/how-will-we-call-a-function-written-in-a-separate-file-from-a-cypress-test

custom commands with rety-ability - https://glebbahmutov.com/blog/writing-custom-cypress-command/#update-2-local-types <-- muito bom
documentação commands - https://www.youtube.com/watch?v=ju1e5x52qvA&t=2s
documentação commands - https://dev.to/xvier/documenting-cypress-custom-commands-2n13
documentação de commands arquivo jsdoc - https://dev.to/sumansarkar/how-to-use-jsdoc-annotations-with-vscode-for-intellisense-7co
como publicar um commands no npm para comunidade (plugin?)- https://glebbahmutov.com/blog/publishing-cypress-command/
erros na documentação  de commands- https://glebbahmutov.com/blog/common-documentation-mistakes-and-how-to-avoid-them/

assincronicidade dos comandos - https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Are-Asynchronous


Stub
https://dev.to/dawsoncodes/how-to-use-stub-with-cypress-24he
https://docs.cypress.io/api/commands/stub
impedir de abrir nova guia 
https://testersdock.com/cypress-new-window/
https://reflect.run/articles/accessing-a-new-window-in-cypress-tests/
https://glebbahmutov.com/blog/stub-navigator-api/
https://glebbahmutov.com/blog/stub-window-open/



Alias e variaveis
https://github.com/cypress-io/cypress/issues/582
https://ronvalstar.nl/updating-a-cypress-alias
https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Sharing-Context <--- muito bom
https://stackoverflow.com/questions/55298710/how-to-get-values-of-multiple-aliases-without-introducing-callback-hell-in-cypre <----- muito bom
https://stackoverflow.com/questions/73264410/turn-off-clearing-aliases-in-cypress-test (utilizar a abordagem de function(){} e this)

---
#### Escrita e valores
Tentar apagar e escrever em um type
https://stackoverflow.com/questions/70627070/cypress-overwrite-type-command-to-add-a-small-wait-throws-promise-error-if-cl

text suggestion box
https://mksiddhu2.medium.com/cypress-parsing-through-search-suggestion-text-box-with-jquery-11575a19a42b

Get text  and Check http request
https://www.browserstack.com/guide/cypress-get-text

Test autocomplete box
https://stackoverflow.com/questions/55831736/how-to-select-cypress-autocomplete-field
https://www.youtube.com/watch?v=Tn22eUnhZRQ

Dropdown trigger 
https://stackoverflow.com/questions/48362422/select-dropdownlist-item-using-cypress <------ muito bom
https://www.linkedin.com/pulse/multiple-ways-handling-dropdowns-cypress-thimmaraju-g/

Test Clickable button
https://stackoverflow.com/questions/68561966/cypress-click-on-an-element-only-if-it-is-clickable
https://github.com/cypress-io/cypress/discussions/21150
https://www.webtips.dev/webtips/cypress/check-if-buttons-are-disabled-in-cypress
https://stackoverflow.com/questions/52073331/assert-that-element-is-not-actionable-in-cypress

Teste com datas
https://www.youtube.com/watch?v=wiDOdfmuR2o

length greather then and less then
https://stackoverflow.com/questions/62072822/cypress-assertion-equal-and-greater-than

Enter
https://dev.to/walmyrlimaesilv/how-to-type-and-press-enter-with-cypress-2fl3
```
.trigger('keydown', {
    key: 'Enter',
  });
```

---
#### Network request, Intercept e url

LER: https://egghead.io/blog/intercepting-network-requests-in-cypress

Base de network - https://docs.cypress.io/guides/guides/network-requests
https://learn.cypress.io/advanced-cypress-concepts/intercepting-network-requests <-- time do cypress
https://nodejs.org/api/url.html#url_url_strings_and_url_objects <-- estrutura de path pelo node

API
https://mksiddhu2.medium.com/getting-started-with-api-using-cypress-2658f4cf10d6
https://www.youtube.com/watch?v=kdXmNTjYVUo
https://www.youtube.com/watch?v=0rxtucfd7i8

intercept
https://talkingabouttesting.com/tag/cy-intercept/
https://dev.to/walmyrlimaesilv/cy-request-vs-cy-intercept-cmi
https://egghead.io/blog/intercepting-network-requests-in-cypress
https://www.programsbuzz.com/article/cypress-intercept-matching-routematcher
https://glebbahmutov.com/blog/cypress-intercept-problems/
https://www.lambdatest.com/blog/cypress-intercept/
https://glebbahmutov.com/blog/network-requests-with-cypress/
https://noriste.github.io/reactjsday-2019-testing-course/book/payload-assertions.html
https://stackoverflow.com/questions/61818346/cypress-how-to-access-the-body-of-a-post-request
como pausar o intercept ou limpar os que já foram executados?
O intercept caso guarde 3 eu consigo acessar os 3? 

Ações condicionais
https://talkingabouttesting.com/2021/02/23/como-realizar-uma-acao-condicionalmente-com-cypress/

BaseURL variadas
https://talkingabouttesting.com/2021/03/26/como-mudar-a-baseurl-via-linha-de-comando-com-cypress/

URL change
https://stackoverflow.com/questions/61531828/visit-new-url-cypress
https://docs.cypress.io/api/commands/url
https://github.com/cypress-io/cypress/issues/5577
https://cursos.alura.com.br/forum/topico-nao-sei-o-que-faz-o-codigo-cy-on-241663

Query String em cypress
https://stackoverflow.com/questions/72376343/how-to-add-query-param-in-cypress-js
https://github.com/cypress-io/cypress/issues/17921
https://github.com/cypress-io/cypress/issues/25745
https://github.com/cypress-io/cypress/pull/20302

wait a intercept
https://filiphric.com/waiting-in-cypress-and-how-to-avoid-it
https://stackoverflow.com/questions/73882116/cypress-cy-wait-only-waits-for-the-first-networkcall-need-to-wait-for-all-cal
https://glebbahmutov.com/cypress-examples/commands/waiting.html
https://docs.cypress.io/guides/guides/network-requests#Waiting
---
#### Esperar por um elemento ou estado
Cuidado com testes condicionais!
https://copyprogramming.com/howto/how-to-wait-for-element-to-disappear-in-cypress
https://copyprogramming.com/howto/cypress-wait-for-element-to-disappear
https://copyprogramming.com/howto/cypress-how-to-wait-for-second-of-two-elements-to-appear
https://copyprogramming.com/howto/cypress-wait-until-element-is-visible
https://www.youtube.com/watch?v=NO6Joky4hHE <-- clear input flake test
---
#### Fixture e variaveis de ambiente (.env)
https://talkingabouttesting.com/2022/12/23/como-definir-as-fixtures-para-testes-de-frontend-com-cypress/
https://www.youtube.com/watch?v=2RK3f0tGOIs&ab_channel=TalkingAboutTesting
https://runebook.dev/pt/docs/cypress/api/commands/fixture
https://pt.lambdageeks.com/cypress-fixtures/
load fixture in custom commands - https://glebbahmutov.com/blog/fixtures-in-custom-commands/ <-- muito bom, trabalhar com fixture

Usando o pacóte .env (dotenv) - variaveis de ambiente
https://dev.to/m4rri4nne/cypress-dotenv-como-utilizar-arquivos-env-em-seus-testes-automatizados-49bl#:~:text=Ap%C3%B3s%20instalar%20o%20pacote%2C%20basta,(Voc%C3%AA%20pode%20ler%20aqui)
https://docs.cypress.io/api/cypress-api/env
https://docs.cypress.io/guides/guides/environment-variables
https://runebook.dev/pt/docs/cypress/api/cypress-api/env <-- plugin com .env p/ buscar dados antes dos testes
run with specfic browser version - https://stackoverflow.com/questions/70984900/cypress-open-run-with-specific-browser-version
user process.env in cypress - https://stackoverflow.com/questions/57818181/how-to-use-process-env-variables-in-browser-running-by-cypress?rq=4




JSON com cypress
https://filiphric.com/reading-and-testing-json-object-in-cypress

---
#### Iframe
https://www.npmjs.com/package/cypress-iframe#installation
https://gitlab.com/kgroat/cypress-iframe

https://www.lambdatest.com/blog/how-to-handle-iframes-in-cypress/
https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
https://www.youtube.com/watch?v=sjiLhjPxYvs&ab_channel=TalkingAboutTesting
https://www.npmjs.com/package/cypress-iframe#installation
talvez usar wrap() ou its()?
https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/blogs__iframes

iframe support #136 - https://github.com/cypress-io/cypress/issues/136


Métodos Wrap(), Then(), This e Within()
- within(): método usado para acessar elementos DOM aninhados dentro de um elemento DOM já selecionado com o cy.get(). O within() permite limitar a busca de elementos a partir do elemento DOM pai, tornando o código mais legível e conciso.
- this(): método usado para se referir ao próprio objeto Cypress atual em um comando anterior. O this() permite evitar a necessidade de selecionar o mesmo elemento DOM duas vezes em comandos subsequentes, tornando o código mais legível e conciso.
- wrap(): método usado para "embrulhar" um objeto, como um elemento DOM ou um valor, em um objeto Cypress. O wrap() permite encadear comandos adicionais no objeto embrulhado, tornando mais fácil manipular e trabalhar com valores ou elementos DOM específicos em uma cadeia de comandos Cypress.
- then(): método usado para executar comandos adicionais após a conclusão de um comando Cypress anterior. O then() permite acessar e manipular o resultado de um comando anterior ou realizar outras ações adicionais em um objeto Cypress antes de encadear comandos subsequentes.
https://medium.com/tech-learn-share/where-do-we-use-cy-wrap-command-in-cypress-test-de8b87285877
https://runebook.dev/pt/docs/cypress/api/commands/then
---
#### selectFile
 https://www.cypress.io/blog/2022/01/19/uploading-files-with-selectfile/
https://github.com/cypress-io/cypress/pull/19820
https://www.youtube.com/watch?v=xwltoOnmfVE&t=5s
fazer download - https://www.youtube.com/watch?v=ZHhVSRxYfkU

---
#### Repetir funções
https://talkingabouttesting.com/2021/02/06/como-rodar-um-teste-varias-vezes-com-cypress-para-provar-que-ele-e-estavel/
```
Cypress._.times(5, function() {
    it.only('teste', function(){
        cy.section('teste')
        cy.visit(this.linkAdministracaoTreinamento)
        cy.criacaoPlanoOuTreinamento('Criar treinamento','Alemão')
    })
})
```

---
#### Task (Npm)
Uma função poderosa que consegue rodar funções pelo NPM, ou seja, ocorrem antes do cypress, podendo acrescentar/usar plugins, alterar padrões de before:run e after:run, alterar padrões de ambiente, configuração e até armazenar variáveis no npm.
Pode ser uma opção para manipulação do database
https://docs.cypress.io/guides/tooling/plugins-guide#Real-World-Example
https://docs.cypress.io/plugins
https://docs.cypress.io/api/commands/task#Save-a-variable-across-non-same-origin-URL-visits

task plugins same name  - https://github.com/cypress-io/cypress/issues/2284
task plugins same name  - https://github.com/cypress-io/cypress/issues/3198

---
#### Banco (BD)
Mongo - https://glebbahmutov.com/blog/testing-mongo-with-cypress/
Mysql - https://sqa.stackexchange.com/questions/51256/how-to-connect-with-mysql-db-using-cypress-12
Mysql - https://gist.github.com/fityanos/0a345e9e9de498b6c629f78e6b2835f5
exemplo pokemon - https://medium.com/omnius/test-state-management-in-cypress-part-7-6a0390eaddc5
time do cypress sobre formas de criar dados para os testes - https://learn.cypress.io/advanced-cypress-concepts/database-initialization-and-seeding <-- muito bom

---
#### Browsers

https://stackoverflow.com/questions/65842785/i-dont-have-an-acess-to-other-browsers-except-chrome-and-electron
https://github.com/cypress-io/cypress/issues/15258
https://github.com/cypress-io/cypress/issues/6355
path linux - https://docs.cypress.io/guides/references/troubleshooting#Launching-browsers
https://docs.cypress.io/guides/guides/launching-browsers

lembre do "npx cypress info"

Problemas do cypress encontrar o firefox como snap no ubunto
https://github.com/cypress-io/cypress/issues/19793 <-- issue
https://github.com/cypress-io/cypress/pull/21328 <-- fixed
https://github.com/cypress-io/cypress/issues/8174 <-- issue

Problemas do cypress encontrar o chrome como snap no ubunto
https://github.com/cypress-io/cypress/issues/7020 <-- issue
https://github.com/cypress-io/cypress/pull/7039 <-- fixed
chrome path note reconized - ://github.com/cypress-io/cypress/issues/7569
https://github.com/cypress-io/cypress/issues/6389 <-- issue
https://github.com/cypress-io/cypress/issues/3645 <-- issue




chrome canary - https://blog.bitsrc.io/chrome-canary-nightly-build-for-web-developers-abaaec873384
chrome developer mode - https://www.androidpolice.com/how-to-enter-chromeos-developer-mode/
run cypress with chrome extension - https://medium.com/coinmonks/how-to-load-cypress-chrome-extension-c3296493fae

test across different browsers browserStack- https://www.browserstack.com/guide/cross-browser-testing-with-cypress-tutorial

LER https://github.com/cypress-io/browser-launcher2
LER https://www.npmjs.com/package/browser-launcher

---
#### Scroll the page
https://www.youtube.com/shorts/rCZPf5_DZdw
https://stackoverflow.com/questions/61654424/cypress-scrolling-behaviour-on-get-and-relative-positionning
https://medium.com/@gurudatt.sa26/cypress-default-scroll-behaviour-fcc5203b5d38
https://github.com/cypress-io/cypress/issues/2302
https://docs.cypress.io/api/commands/scrollIntoView
---
#### Docker
https://www.lambdatest.com/learning-hub/cypress-docker
https://www.testingwithmarie.com/post/using-docker-to-run-your-cypress-tests
https://github.com/cypress-io/cypress-docker-images
---
#### Tag tests
https://glebbahmutov.com/blog/tag-tests/
https://dev.to/r0nunes/cypress-executando-testes-com-multiplas-tags-4e89
https://www.browserstack.com/guide/cypress-tag-tests?utm_source=google&utm_medium=cpc&utm_platform=paidads&utm_content=645400465181&utm_campaign=Search-DSA-NB-T2Geo-Exp&utm_campaigncode=Guide-Page+9100441&utm_term=+&gclid=EAIaIQobChMIvOnh9Z2HgAMVET6RCh29TQAFEAAYASAAEgIQqfD_BwE
https://www.npmjs.com/package/cypress-tags

---
#### Extras

Uncaught sintax error
https://github.com/cypress-io/cypress/issues/3830
https://cursos.alura.com.br/forum/topico-uncaught-syntaxerror-unexpected-token-socorro-46920
https://api.jquery.com/jQuery.ajax/#jqXHR
https://stackoverflow.com/questions/3143698/uncaught-syntaxerror-unexpected-token

Focus() e Focusable element
https://html.spec.whatwg.org/multipage/interaction.html#focusable

Typescript com cypress
https://filiphric.com/starting-with-typescript-in-cypress
https://glebbahmutov.com/blog/use-typescript-with-cypress/
https://filiphric.com/how-to-structure-a-big-project-in-cypress

Run tests from markdown - https://glebbahmutov.com/blog/cypress-fiddle/

como parar testes no meio da execução - https://stackoverflow.com/questions/74888379/how-to-programmatically-stop-a-cypress-test

cy.now () e cy.state() do gleb - https://cypresstips.substack.com/p/cypress-secrets-cynow-and-cystate

testes com emails - https://docs.cypress.io/guides/references/best-practices#Verifying-sent-emails

como validar se o cypress está em execução - https://docs.cypress.io/faq/questions/using-cypress-faq#Is-there-any-way-to-detect-if-my-app-is-running-under-Cypress

overwrite o comando type para sempre que for usado esconder o que está sendo escrito - https://github.com/cypress-io/cypress/discussions/16936
também é possível utilizar a linha abaixo para esconder os logs de todos os comandos:
```
CYPRESS_NO_COMMAND_LOG=1 cypress run
```


 adding custom commands with typescript definitions lead to error #1065 https://github.com/cypress-io/cypress/issues/1065

---
#### Dúvidas

O que é um bom teste?
O que é um bom relatório?
Como testar clique em botões?
Gerar funções apenas com commands.add()?
	Até que ponto ir gerando funções?
Como montar uma fixture no cypress? Com sessão e dados
Alterar viewport no package.json
Trabalhar com a espera de resultado de funções?
