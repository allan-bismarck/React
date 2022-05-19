import React, {useState} from 'react'
import Peso from './componentes/Peso'
import Altura from './componentes/Altura'
import Calcular from './componentes/Calcular'
import Tabela from './componentes/Tabela'
import Resultado from './componentes/Resultado'

function App() {
  const [peso, setPeso]=useState(0)
  const [altura, setAltura]=useState(0)
  const [resultado, setResultado]=useState(0)

  return (
    <>
      <Peso p={peso} sp={setPeso}/>
      <Altura a={altura} sa={setAltura}/>
      <Calcular p={peso} a={altura} sr={setResultado}/>
      <Resultado r={resultado}/>
      <Tabela/>
    </>
  );
}

export default App;
