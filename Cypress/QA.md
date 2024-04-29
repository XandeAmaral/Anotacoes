As três fases padrões (3A)
Arrange - Setup
Act - execução
Assert - conferência

Alguns tipos de testes
Testes unitários (unit test case)
Testes funcionais
E2E (end-to-end) test case
Integration test case
API testing
Classe de equivalências
tipos de teste automatizados - https://perdidonoteste.wordpress.com/2017/07/20/tipos-de-testes-automatizados/

---
Métodos
BDD - https://medium.com/@ronilsonribeiro/escrita-do-bdd-no-processo-de-desenvolvimento-469ea46540db
https://www.brunafonseca.pro.br/post/vem-entender-as-est%C3%B3rias-bdd-comigo

TDD
CI/CD
---
Técnicas
Somke test
São testes básicas que verificam as funcionaldiades básicas da aplicação, deve ser de rápida execução para determinar se o build ou a compilação da aplicação realizada está estável ou não. É um conjunto mínimo de testes para validar as principais funcionalidades, ou seja um mínimo e rápido teste de aceitação.
Também pode ser conhecido como "teste de coniança",  a ideia é garantir de forma simples que o produto está pronto para novos testes, ajudando a determinar se a compilação é falha para tornar qualquer outro teste uma perda de tempo, recursos e dinheiros.  Não é indicado ficar realizando vários tipos de fluxo para tentar encontrar erros, isso é responsabilidade do teste de regressão.
Os testes podem ser executados de forma automatizada, mas também podem ser manuais.

Quando executar?
Sempre que novas funcionalidades da aplicação são desenvolvidas e integradas com a compilação existente que é implantada no ambiente de staging (Ambiente criado com as alterações desenvolvidas, cada empresa adota um nome).

Por que executar?
Testes fáceis de serem executados.
Defeitos são identificados em estágios iniciais.
Simplifica a detecção e correção de defeitos graves.
Melhora a qualidade do sistema.
Encontrar defeitos na funcionalidade do aplicativo que podem ter surgido pelo novo código

Teste manuais
Uma vez que a compilação é liberada, os casos de teste das funcionalidades de alta prioridade devem ser retomados e testados para encontrar os defeitos críticos no sistema. Se o teste passar, podemos executar os teste funcionais. Se o teste falhar a compilação será rejeitada e enviada de volta à equipe para correção. Após a correção, novamente começa o teste de fumaça com uma nova versão da compilação e assim por diante até os testes passarem.

Teste automatizado
Com testes automatizados, os desenvolvedores podem verificar a construção imediatamente, sempre que houver uma nova compilação pronta para implantação.  Em vez de ter que ficar repetindo os testes manualmente sempre que a nova compilação de software é implantada, os casos de teste de fumaça são executados a cada compilação. Verifica se as principais funcionalidades a compilação e reimplantar a compilação imediatamente. Economizando tempo e garantindo uma construção de qualidade.

link 1

teste de API, testes de frontend applications, teste de componentes de frontend, testes de gressão visual e testes de acessibilidade (todos possíveis com cypress, artigo postado por Talking About Test 10 motivos para usar cypress)

User interface (testes web)
a
Application action (testes web)
a

ddd (Domain-driven Design)

edge-cases como lidar - https://uxplanet.org/how-to-find-and-deal-with-edge-cases-in-ux-design-6852ab508205

---
Design Patterns

POM - https://www.guru99.com/page-object-model-pom-page-factory-in-selenium-ultimate-guide.html
---
Técnologias
Cypress
Cucumber - https://cucumber.io/docs/guides/10-minute-tutorial/?lang=java
TeamCity
Jenkins
Zabbix ??

Cypres + Cucumber - https://cwi.com.br/blog/testes-automatizados-cypress-e-cucumber/

Base sobre pattern e testes - https://pt.linkedin.com/pulse/design-paterns-e-testes-automatizados-uma-abordagem-sobre-mariano
Pattern interessante - https://blog.onedaytesting.com.br/screenplay-pattern/
O que é pattern - https://www.devmedia.com.br/conheca-os-padroes-de-projeto/957


assertions 
https://stackoverflow.com/questions/71096636/is-there-an-assert-deepequal-that-uses-non-strict-equality-for-javascript
