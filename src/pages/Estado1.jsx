import { useState } from "react";
import { Pagina } from "../componentes/Pagina";

export function Estado1(){

    let numero=10

    const estado= useState(500)
    // console.log(estado)

    const setNum=estado[0]
    const alteraNum=estado[1]

    console.log(setNum)

    function Incrementar(){
        numero= numero + 1 
        console.log(numero)

        alteraNum()
    }

    return(
        <Pagina titulo="Estado 1" subtitulo="Conceitos de Estado 1">
            <div>{setNum}</div>
            <button className="bg-violet-950 text-violet-200 w-40 ">Incrementar</button>
        </Pagina>
    )

}