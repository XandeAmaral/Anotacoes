
Issue still waiting to connect to firefox
https://github.com/cypress-io/cypress/issues/22086#issuecomment-1156782138
https://github.com/cypress-io/cypress/issues/18919
https://docs.cypress.io/guides/references/troubleshooting#To-clear-App-Data

código antigo
```
const execa = require("execa");
exports.setBrowsers = async function (config) {
  let browsers = [];
  browsers.push(await findFirefox());
  browsers.push(await findFirefoxDev());
  config.browsers.push(...browsers);
};
exports.configureBrowsers = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if(browser.name === 'chrome'){
      config.chromeWebSecurity = false;
    }
  });
}
const findFirefox = async () => {
  const browserPath =
    '/snap/firefox/current/usr/lib/firefox/firefox'
  const result = await execa(browserPath, ['--version']);
  const [, version] = /Mozilla Firefox (\d+\.\d+)/.exec(result.stdout);
  const majorVersion = parseInt(version.split('.')[0]);
  return {
    name: 'firefox',
    channel: 'stable',
    family: 'firefox',
    displayName: 'Firefox',
    version,
    path: browserPath,
    majorVersion,
  };
};
const findFirefoxDev = async () => {
  const browserPath =
    '/opt/firefox/firefox';
  const result = await execa(browserPath, ['--version']);
  const [, version] = /Mozilla Firefox (\d+\.\d+)/.exec(result.stdout);
  const majorVersion = parseInt(version.split('.')[0]);
  return {
    name: 'firefox-dev',
    channel: 'stable',
    family: 'firefox',
    displayName: 'Firefox Dev',
    version,
    path: browserPath,
    majorVersion,
  };
};
```

código atual
```
const execa = require("execa");
exports.setBrowsers = async function (config) {
  let browsers = [];
  // o config.env já recebeu as configurações do .env por causa da função loadDotenv.js que é executado antes
  const enderecoFirefox = config.env.CAMINHO_LOCAL_FIREFOX;
  const enderecoFirefoxDev = config.env.CAMINHO_LOCAL_FIREFOX_DEV;
  if (enderecoFirefox != undefined && enderecoFirefox.length > 0) {
    browsers.push(await findFirefox(enderecoFirefox));
  };
  if (enderecoFirefoxDev != undefined && enderecoFirefoxDev.length > 0) {
    browsers.push(await findFirefoxDev(enderecoFirefoxDev));
  };
  config.browsers.push(...browsers);
};
exports.configureBrowsers = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if(browser.name === 'chrome'){
      config.chromeWebSecurity = false;
    }
  });
};
const findFirefox = async (endereco) => {
  return findBrowser(endereco, 'firefox', 'firefox','Firefox');
};
const findFirefoxDev = async (endereco) => {
  return findBrowser(endereco, 'firefox-dev', 'firefox','Firefox Dev');
};
const findBrowser = async (endereco, name, family, displayName) => {
  const browserPath = endereco.trim();
  try {
    const result = await execa(browserPath, ['--version']);
    const [, version] = /Mozilla Firefox (\d+\.\d+)/.exec(result.stdout);
    const majorVersion = parseInt(version.split('.')[0]);
    return {
      name,
      channel: 'stable',
      family,
      displayName,
      version,
      path: browserPath,
      majorVersion,
    };
  } catch (error) {
    // Se houver algum erro na execução do comando, retorna {}
    console.log(`Falha ao executar o comando \`version\` no caminho do browser ${browserPath}`)
    return {};
  };
};
```

---

LoadDotenv


```
const dotenv = require("dotenv");
dotenv.config({ path: "../../.env" });
exports.loadDotenv = async function (config) {
  const cypressVariables = {};
  Object.keys(process.env).forEach((key) => {
    if(key.startsWith('CYPRESS')) {
      let keyFormatada = key.substring('CYPRESS_'.length);
      cypressVariables[keyFormatada]= process.env[key];
    };
  });
  config.env = cypressVariables;
};
```

---


a
---
