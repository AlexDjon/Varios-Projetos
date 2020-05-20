export default function criarTriangulo(num) {
  // Cria uma array com a casa inicial(0) com valor pra servir de base para as outras
  let combinacoes = [ [1] ]

  for(let linha = 1; linha <= num; linha++) {

    // define a linha atual como array (i)
    // define o primeiro valor da array como 1 para servir de base para as próximas
    combinacoes[linha] = []
    combinacoes[linha][0] = 1
    
    // linha anterior
    const linhaAnterior = linha-1
    
    // Criar os valores a partir da linha anterior, adicionando 1 de tamanho
    for(let posicao = 1; posicao <= combinacoes[linhaAnterior].length; posicao++) {

      // Pega o valor no mesmo indice e de trás, da array anterior
      // Cria uma verificação pra ver se é número, se não for transforma em zero

      let num1 = combinacoes[linhaAnterior][posicao]
          num1 = isNaN(num1) ? 0 : num1
      let num2 = combinacoes[linhaAnterior][posicao-1]
          num2 = isNaN(num2) ? 0 : num2
          
      // define o indice atual dentro da array como a soma de num1 + num2
      combinacoes[linha][posicao] = num1+num2
    }
  }

  return combinacoes
}