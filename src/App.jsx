//        useState  - hooks      \\

import { useState } from "react"

export default function App(){


  const [cantor, setcantor] = useState("Belo") //Primeiro passo
  const mudarNome = ()=>{
    setcantor("Roberto Carlos")   //Segundo passo
  }

  //-----------------------------------------------\\
  const [cor, setcor] = useState("red")
  const mudarCor = () => {
    setcor("yellow")
  }

  return(
    <>
    <h2>{cantor}</h2>
    <button onClick={mudarNome}>Mudar cantor</button>

    <div style={{background: cor}}>
      <p>Boa noite!!</p>
    </div>
    <button onClick={mudarCor}>Mudar Cor</button>

    </>
  )
}