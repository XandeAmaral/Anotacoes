const moduleAlias = require('module-alias')
const path = require('path');

const aliases = {
  '@support': path.resolve(__dirname, './support'),
  '@action-sequences': path.resolve(__dirname, './support/action sequences'),
  '@utility': path.resolve(__dirname, './support/utility'),
  '@scripts': path.resolve(__dirname, './scripts'),
  '@models': path.resolve(__dirname, './models'),
};

moduleAlias.addAliases(aliases);

https://medium.com/@ygor.tgaleno/adicionando-aliases-apelidos-para-seus-m%C3%B3dulos-no-nodejs-ebfa57c3237
https://stackoverflow.com/questions/74488552/cypress-import-modules-via-alias
https://www.youtube.com/watch?v=uHCJY1KJ_40
https://www.youtube.com/watch?v=7ZBnJEa6-no

---

Webpack-preprocessor


customPath.js
```
const webpack = require('@cypress/webpack-preprocessor');
exports.customPath = function (on, aliases) {
  // opcoes do webpack-preprocessor
  const options = {
    webpackOptions: {
      resolve: {
        alias: aliases
      }
    },
    watchOptions: {},
  };
  // metodo do setupNodeEvents para configurar o processamento de arquivos com base no webpack
  on('file:preprocessor', webpack(options));
}
```

local.config.js

```
// carrega no contexto do node os alias de diretorios
const path = require('path');
const aliases = {
  '@root': path.resolve(__dirname, '../..'),
  '@support': path.resolve(__dirname, '../support'),
  '@action-sequences': path.resolve(__dirname, '../support/action sequences'),
  '@utility': path.resolve(__dirname, '../support/utility'),
  '@scripts': path.resolve(__dirname, '../scripts'),
  '@models': path.resolve(__dirname, '../models'),
  '@fixtures': path.resolve(__dirname, '../fixtures'),
};
require('module-alias').addAliases(aliases);
require('module-alias/register');
// funcao do cypress para configurar
const { defineConfig } = require("cypress");
// funcoes customizadas
const { setBrowsers, configureBrowsers } = require("@scripts/controlBrowsers.js");
const { tokenMap, textoLog } = require('@scripts/tasks.js');
const { loadDotenv } = require("@scripts/loadDotenv.js");
const { verificarNg } = require("@scripts/verificarNg.js");
const { customPath } = require("@scripts/customPath.js");
module.exports = defineConfig({
  // retries: {
  //   experimentalStrategy: 'detect-flake-and-pass-on-threshold',
  //   experimentalOptions: {
  //     maxRetries: 2,
  //     passesRequired: 1,
  //   },
  //   openMode: true,
  //   runMode: true,
  // },
  e2e: {
    viewportWidth: 1400,
    viewportHeight: 1050,
    numTestsKeptInMemory: 1,
    experimentalMemoryManagement: true,
    responseTimeout: 55000,
    requestTimeout: 10000,
    defaultCommandTimeout: 10000,
    video: false,
    record: false,
    async setupNodeEvents(on, config) {
      // carrega as variaveis de ambiente do arquivo .env
      await loadDotenv(config);
      // substitui a baseUrl pela que esta no .env
      config.baseUrl = config.env.baseUrl;
      // carrega os browsers extras
      await setBrowsers(config);
      // carrega configurações dos browsers
      configureBrowsers(on, config);
      // carrega as tasks utilizadas no processo de login
      tokenMap(on, config);
      // carrega as tasks de log
      textoLog(on, config);
      // carrega o valor do ng caso exista
      const valorNg = await verificarNg(config);
      if (valorNg != undefined) {
        config.env.versaoFront = valorNg.trim();
      };
      // configura os alias de diretorios no contexto do cypress com o webpack-preprocessor
      customPath(on, aliases);
      return config;
    },
  },
});
```

