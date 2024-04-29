validacoesExec.cy.js
```
// docker exec -it $BD_INSTANCIA_DOCKER /opt/mssql-tools/bin/sqlcmd -S $BD_SERVIDOR -U $BD_LOGIN -P $BD_SENHA -i $BD_CAMINHO_ARQUIVO_GERADO -d $BD_NOME_BANCO
Cypress.Commands.add('resetBdJoin',() => {
  const nomeBanco = 'JoinRH_Alexandre';
  const arquivo = 'restore_JoinRH.sql';
  cy.exec(`chmod +x cypress/execFiles/resetDb.sh && cypress/execFiles/resetDb.sh ${arquivo} ${nomeBanco}`,
        { failOnNonZeroExit: false })
    .its('stdout')
    .should('contain',arquivo)
    .and('contain',nomeBanco)
});
Cypress.Commands.add('resetBdDemo',() => {
  const arquivo = 'restore_JoinRH_Demo.sql';
  const nomeBanco = 'JoinRH_Demo_Alexandre';
  cy.exec(`chmod +x cypress/execFiles/resetDb.sh && cypress/execFiles/resetDb.sh ${arquivo} ${nomeBanco}`,
        { failOnNonZeroExit: false })
    .its('stdout')
    .should('contain',arquivo)
    .and('contain',nomeBanco)
});
Cypress.Commands.add('resetBdJoinRH',() => {
  const nomeBanco = 'JoinRH_LinkedRH_Alexandre';
  const arquivo = 'restore_JoinRH_LinkedRH.sql';
  cy.exec(`chmod +x cypress/execFiles/resetDb.sh && cypress/execFiles/resetDb.sh ${arquivo} ${nomeBanco}`,
        { failOnNonZeroExit: false })
    .its('stdout')
    .should('contain',arquivo)
    .and('contain',nomeBanco)
});
Cypress.Commands.add('execResetBd', (nomeBanco, arquivo) => {
  cy.exec(`docker exec -it $BD_INSTANCIA_DOCKER /opt/mssql-tools/bin/sqlcmd `+
          `-S $BD_SERVIDOR -U $BD_LOGIN -P $BD_SENHA -i $BD_CAMINHO_ARQUIVO_SQL/${arquivo} `+
          `-d ${nomeBanco}`);
});
Cypress.Commands.add('criaArquivo',() => {
  const nomeArquivo = 'cyTeste.txt';
  cy.exec(`touch ~/${nomeArquivo}`, { failOnNonZeroExit: false });
  cy.exec(`echo $BD_LOGIN >> ~/${nomeArquivo}`, { failOnNonZeroExit: false });
});
it('Teste com a chamada de exec por custom command', () => {
  cy.criaArquivo();
});
it('Teste com variaveis de ambiente', () => {
  cy.exec('echo $TESTE', { env: { TESTE: 'ABC' } })
  .its('stdout')
  .should('contain', 'ABC');
});
it('Teste com a pasta execFiles', () => {
  cy.exec('chmod +x cypress/execFiles/teste.sh && cypress/execFiles/teste.sh Ale',
          { failOnNonZeroExit: false })
    .its('stdout')
    .should('contain','hello')
});
it.only('Teste com a saida de nomes', () => {
  cy.resetBdJoin();
  cy.resetBdDemo();
  cy.resetBdJoinRH();
});
```


cypress/execFiles/teste.sh
```
#!/bin/bash
nome=$1
echo "hello $nome"
return 0
```


https://stackoverflow.com/questions/70684607/looking-for-a-way-to-excute-a-command-line-from-cypress
https://www.youtube.com/watch?v=z-Smm13bJQY
