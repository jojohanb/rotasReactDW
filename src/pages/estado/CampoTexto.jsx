import { useState } from "react";
import { Pagina } from "../../componentes/Pagina";

export function CampoTexto(){
    const [texto, setTexto] =useState("")

    return(
        <Pagina titulo="campo texto" subtitulo="conceito de texto em react">
            <div className="flex flex-col gap-4">
                <input className="bg-black text-purple-700 w-28" type="text" value={texto}  onChange={(e)=> setTexto(e.target.value)}/>
                <button onClick={()=> setTexto("")}>Limpar</button>
                <span className="text-2xl">{texto}</span>
            </div>
        </Pagina>
    )
}