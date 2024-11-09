// Carrega os valores da tabela
let valoresExercicio = {
  valores_1: {
    x: 3,
    y: 2,
  },
  valores_2: {
    x: 150,
    y: 3,
  },
  valores_3: {
    x: 7,
    y: -1,
  },
  valores_4: {
    x: -2,
    y: 5,
  },
  valores_5: {
    x: 50,
    y: 3,
  },
};

// Instância a tabela
let tabelaVerdade;

// Cria o cabeçalho da tabela
tabelaVerdade = ` x  |  y  |  z  |  resposta \n`;

// Percorre os valores fornecidos para preencher a talbea
for (let valores of Object.values(valoresExercicio)) {
  // Chama a função para preencher a tabela
  tabelaVerdade += montaTabela(valores.x, valores.y);
};

// Exibe a tabela preenchida
console.log(tabelaVerdade);

// Função que executa os cálculos com os valores
function calcula(x, y) {
  let z = (x * y) + 5;
  let resposta;

  if (z <= 0) {
    resposta = 'A';
  } else {
    if (z <= 100) {
      resposta = 'B';
    } else {
      resposta = 'C';
    };
  };

  return { z, resposta };
};

// Função que formata os valores para o padrão da tabela
function montaTabela(x, y) {
  let auxTabela;
  let resultadoCalculo = calcula(x, y);

  auxTabela = ` ${x} | ${y} | ${resultadoCalculo.z} | ${resultadoCalculo.resposta}\n`;

  return auxTabela;
};