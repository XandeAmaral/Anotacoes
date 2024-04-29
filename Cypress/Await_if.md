
```
ypress.Commands.add('preencheAula',(aula, modulo, {log = true} = {}) => {
  let textoLog = {
    "modulo": modulo,
    "aula": aula.titulo,
    "tipo": aula.tipo,
  }
  const displayLog = Cypress.log({
    name: "Custom Commands preencheAula",
    displayName: "Preenche aula",
    message: `Aula ${aula.titulo}`,
    autoEnd: false,
  });
  cy.get('[formcontrolname="title"]',{log}).type(aula.titulo, {log})
  cy.get('[formcontrolname="type"]',{log}).click({log})
  cy.get('[formcontrolname="type"]',{log}).contains(aula.tipo,{log}).click({log})
  cy.get('[formcontrolname="moduleId"]',{log}).click({log})
  cy.get('[formcontrolname="moduleId"]',{log}).contains(modulo,{log})
  .click({scrollBehavior:false, log})
  if(aula.tipo = "Texto"){
    cy.get('editor',{log}).eq(segundo,{log}).within({log},() => {
      cy.enter('iframe',{log}).then(getBody => {
        getBody().type(aula.conteudo,{log})
      })
    })
  }
  else if(aula.tipo = "Vídeo") {
  }
  if(aula?.ordem){
    cy.get('[id="order"]',{log}).clear({log}).type(aula.ordem,{log})
    .then(() => {
      textoLog["Ordem"] = `alterado para ${aula.ordem}`;
    })
  }
  if(aula?.resumo){
    cy.get('editor',{log}).eq(primeiro,{log}).within({log},() => {
      cy.enter('iframe',{log}).then(getBody => {
        getBody().type(aula.resumo,{log})
      })
    })
    .then(() => {
      textoLog["resumo"] = " adicionado um resumo";
    })
  }
  if(aula?.publicado){
    cy.contains('label','Publicado',{log}).next({log})
    .click({log}).then(()=> {
      textoLog["publicado"] = "alterado para true";
    })
  }
  if(aula?.conteudoExtra){
    cy.contains('label','Conteúdo extra',{log}).next({log})
    .click({log}).then(() => {
      textoLog["Conteu Extra"] = "alterado para true";
    })
  }
  displayLog.set({
    consoleProps() {
      return textoLog;
    },
  });
  displayLog.end();
})
```
