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
  const [like, setLike] = useState(0)

  const curtida = () => {
    setLike(like + 1)
  }

  return(
    <>
    <h2>{cantor}</h2>
    <button onClick={mudarNome}>Mudar cantor</button>

    <div style={{background: cor}}>
      <p>Boa noite!!</p>
    </div>
    <button onClick={mudarCor}>Mudar Cor</button>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9Dr9VVgul03iSePNOPK3VWFouxOA4bu4Qw&s" alt="" />
    <h2>{like}</h2>
    <button onClick={curtida}>Like</button>
    </>
 
  )
}