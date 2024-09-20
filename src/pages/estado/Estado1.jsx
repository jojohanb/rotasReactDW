import { useState } from "react";
import { Pagina } from "../../componentes/Pagina";

export function Estado1(){
    // const [num, setNum] = useState(0);
    // const estado= useState(0)
    // const num = estado[0]
    // const setNum = estado[1]

    // const [texto, setTexto] = useState("olá, seja bem vindo");

    // function incrementar() {
    //     setNum(num + 1);
    //   }
    
  


    let numero=0

    function incrementar(){
        numero +=1
        console.log(numero)

    }

    
    

    return(
        <Pagina titulo="sem estado" subtitulo="Conceitos de Estado no react">
         <div className="flex flex-col">
            <div>{numero}</div>
            <button className="w-28  p-2 bg-black text-purple-700" onClick={incrementar}>incrementar</button>
         </div>
         

         {/* <div>
        <div>{num}</div>
        <button onClick={incrementar}>Incrementar</button>
      </div>
      <div>
        <input
          className="bg-zinc-400"
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button
          className="bg-zinc-600 p-4 rounded-md"
          onClick={() => setTexto("")}
        >
          ok
        </button>
        <span>{texto}</span>
      </div> */}
        </Pagina>

        
    )

}