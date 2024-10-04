import { Pagina } from "../../componentes/Pagina"
import { useState } from "react"

export function ComEstado(){
    const [numero, setNumero] = useState(0)

    function incrementar(){
        setNumero(numero + 1)
        // console.log(numero)

    }

    

    return(
        <Pagina titulo="Com Estado" subtitulo="Conceito de Estado no React">
        <div className="flex flex-col gap-4">
  
          <span className="text-2xl">
            {numero}
          </span>
          <button 
            className="bg-purple-400 rounded-md p-2"
            onClick={incrementar}
          >
            Incrementar
          </button>
  
        </div>
      </Pagina>
        // <Pagina titulo="com estado" subtitulo="Conceitos de Estado 1">
        //  <div className="flex flex-col">
        //     <div>{numero}</div>
        //     <button className="w-28  p-2 bg-black text-purple-700" onClick={incrementar}>incrementar</button>
        //  </div>
        // </Pagina>
    )

}