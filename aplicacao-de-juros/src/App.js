import React, { useState } from 'react';
import './styles.css'

function App() {
  const [capital, setCapital] = useState(0)
  const [taxa, setTaxa] = useState(0)
  const [tempo, setTempo] = useState(0)
  const [tipoDeJuros, setTipoDeJuros] = useState("composto")
  const [resultado, setResultado] = useState(0)

  function calcularJuros() {
    if(tipoDeJuros === "simples") {
      const juros = capital * (taxa/100) * tempo
      setResultado(juros)
      return
    }
    else if(tipoDeJuros === "composto") {
      const juros = capital * ((1 + (taxa/100)) ** tempo)
      setResultado(juros)
      return
    }
  }

  return (
    <div className="aplicador">
      <h1>Aplicar Juros</h1>
      <input 
        type="number"
        placeholder="Capital"
        onChange={ ({target}) => setCapital(target.value) }
        />
      <input 
        type="number"
        placeholder="Taxa (%)"
        onChange={ ({target}) => setTaxa(target.value) }
        />
      <input 
        type="number"
        placeholder="Tempo"
        onChange={ ({target}) => setTempo(target.value) }
        />

      {/* <select onChange={ ({target}) => setMedidaTempo(target.value) }>
        <option value={1}>Mês(es)</option>
        <option value={2}>Bimestre(s)</option>
        <option value={3}>Trimestre(s)</option>
        <option value={6}>Semestre(s)</option>
        <option value={12}>Ano(s)</option>
      </select> */}

      <select onChange={ ({target}) => setTipoDeJuros(target.value) }>
        <option value="composto">Juros Composto</option>
        <option value="simples">Juros Simples</option>
      </select>

      <button onClick={() => calcularJuros()}>Calcular</button>

      <h3>{parseInt(resultado).toFixed(2)}</h3>
      
      
    </div>
  );
}

export default App;
