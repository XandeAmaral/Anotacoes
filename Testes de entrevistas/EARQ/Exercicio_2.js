// Instância as variáveis que serão usadas
let v = [5, 1, 4, 2, 7, 8, 3, 6];
let aux = 0;
// let cont = 1;

// Executa a função fornecida no exercício
calculo();

// Exibe na tela o resultado
console.log('\n\nResposta');
console.log(v);

// Função fornecida no exercício
function calculo() {
  for (let i = 7; i >= 4; i--) {
    // console.log(`\n\nExecução n°${cont}:`);
    // console.log(v);

    aux = v[i];
    v[i] = v[7 - i + 1];
    v[7 - i + 1] = aux;

    // console.log(`Valor do i: ${i}`);
    // console.log(`Valor da auxiliar: ${aux}`);
    // console.log(`Valor do v[i]: ${v[i]}`);
    // console.log(`Valor do v[7 - i + 1]:  ${v[7 - i + 1]}`);
    // console.log(v);
    // cont++;
  };

  v[2] = v[0];
  v[v[2]] = v[v[1]];
}