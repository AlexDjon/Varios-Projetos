import React, { useState, useEffect } from 'react'
import criarTriangulo from './utils/criarTriangulo'
import './global.css'

function App() {
  const [ total, setTotal ] = useState(0)
  const [ triangulo, setTriangulo ] = useState([])

  function renderizarTriangulo(pascal) {
    const tempTriangulo = pascal.map((linha, i) => {
      return (
        <div className="linha" key={linha}>
          {linha.map((num, iNum) => (
            <b key={linha+"_"+iNum}>{num}</b>
          ))}
        </div>
      )
    })
    setTriangulo(tempTriangulo)
  }

  useEffect(() => {
    const novoTriangulo = criarTriangulo(total)

    renderizarTriangulo(novoTriangulo)
  }, [total])

  return (
    <div className="triangulo">
      <div className="change">
        <h3>Número de Linhas</h3>
        <h4>obs. não recomendo números muito grandes</h4>
        <input type="number" onChange={e => setTotal(e.target.value)} placeholder="0"/>
      </div>
      <div className="show">
        {triangulo}
      </div>
    </div>
  )
}

export default App
