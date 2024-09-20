import { Pagina } from "../../componentes/Pagina";
import { useState } from "react";

export function Contador(){
    const [contar, setContar] = useState(0)

    function contando(){
        setContar(contar+ 1)
        console.log(contar)
    }

    function descontar(){
        setContar(contar-1)
        console.log(contar)
    }

    

    return(
        <Pagina titulo="contador ai" subtitulo="Contador do react">
         <div className="flex flex-col">
            <div>{contar}</div>
            <div className="felx flex-row">
                <button className="w-28  p-2 bg-black text-purple-700" onClick={contando}>Contar</button>
                <button className="w-28  p-2 bg-black text-purple-700" onClick={descontar}>Descontar</button>

            </div>
        
         </div>
        </Pagina>
    )
}