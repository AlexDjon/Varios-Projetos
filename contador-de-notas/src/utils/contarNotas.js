export default function contarNotas(valor, lista) {
  const total = []

  let sobra = valor

  for(let i in lista) {
    const nota = lista[i]
    if(sobra >= nota) {
      const contadas = parseInt((sobra / nota).toString().split('.')[0])
      sobra -= nota * contadas

      total[i] = contadas
    }
    else {
      total[i] = 0
    }
  }
  sobra = parseInt(sobra)
  return [total, sobra.toFixed(2)]
}