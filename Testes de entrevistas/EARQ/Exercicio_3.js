// Instância as variáveis que serão usadas
let x = 60;
let y = 10;
let tela;

// Preenche a tela com os valores
tela = posiciona(x, y);

// Exibe a tela
console.log(tela);

// Declaração da funciona que preenche a tela
function posiciona(x, y) {
  let colunaMax = x;
  let linhaMax = y;
  let auxiliarTela = '';

  // Percorre as linhas e colunas
  for (let linha = 1; linha <= linhaMax; linha++) {
    for (let coluna = 1; coluna <= colunaMax; coluna++) {

      // Caso seja a primeira ou a última linha, preencha completamente
      if ((linha == 1) || (linha == linhaMax)) {
        auxiliarTela += '+';
        // Caso seja a primeira ou a última coluna, preencha
      } else if ((coluna == 1) || (coluna == colunaMax)) {
        auxiliarTela += '+';
        // Caso não seja, deixe vazio
      } else {
        auxiliarTela += ' ';
      };
    };

    // Depois de percorrer uma linha, pula para a próxima linha
    auxiliarTela += '\n';
  };

  // Retorna a tela preenchida
  return auxiliarTela;
};