import { Pagina } from "../../componentes/Pagina";
import { useState } from "react";

export function Tradutor(){

    const [texto, setTexto] = useState("");

    return (
        <Pagina titulo="Tradutor" subtitulo="Tradutor Português-Inglês">
            <div className="flex space-x-8">
                <div className="flex flex-col">
                    <h3>Português</h3>
                    <textarea name="portugues" id="portugues" placeholder="Escreva algo..." className="border border-gray-300 rounded-lg w-44 h-24" maxLength={250} value={texto} onChange={(e)=> setTexto(e.target.value)}></textarea>
                    <p className="text-white text-xs" >{texto.length}/250</p>
                    <button className="mt-2 bg-blue-800 text-white border border-blue-950 rounded-lg px-2 py-2">Traduzir</button>
                </div>
  
                <div className="flex flex-col">
                    <h3>Inglês</h3>
                    <div className="w-44 h-24 bg-white border border-gray-300 rounded-lg"></div>
                </div>
            </div>

            

       </Pagina>
    )
}