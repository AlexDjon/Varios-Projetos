/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import contarNotas from './utils/contarNotas'
import NotasIMG from './NotasIMG'
import './global.css'

function App() {
  const [valor, setValor] = useState('')
  const [notas, setNotas] = useState([])
  const listaDeNotas = [100, 50, 20, 10, 5, 2]

  function criarElementos(listaDeNotas, contagem, sobra) {
    let elementos = listaDeNotas.map((v, i) => {
      if(contagem[i] > 0) {
        return (
          <div key={i} className="elemento">
            <h3>{contagem[i]}x</h3>
            <img src={NotasIMG[i]} alt=""/>
          </div>
        )
      }
      else {
        return ''
      }
    })

    if(sobra > 0) elementos = [<label key="sobra">Sobrando R$ {sobra}!</label>, ...elementos]

    return elementos
  }

  useEffect(() => {
    const contagem = contarNotas(valor, listaDeNotas)
    const notasElem = criarElementos(listaDeNotas, contagem[0], contagem[1])

    setNotas(notasElem)
  }, [valor])

  return (
    <main>
      <div className="valor">
        <h3>VALOR</h3>
        <label>R$</label>
        <input type="number" onChange={e => setValor(e.target.value)} placeholder="0"/>
      </div>
      <div className="notas">
        {notas}
      </div>
    </main>
  );
}

export default App;
