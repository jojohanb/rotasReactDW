// import { useEffect } from "react"

import { useEffect, useState } from "react";
import { Pagina } from "../../componentes/Pagina";

export function UseEffect (){

    const [url, setUrl ]=useState("")

    function trocarImagem() {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resposta) => resposta.json())
        .then((objeto) => setUrl(objeto.message));
      }

    useEffect(trocarImagem, [])
    // trocarImagem()

    // useEffect(()=>{})
    // fetch ("https://dog.ceo/api/breeds/image/random")
    // .then(resposta=>resposta.json())
    // .then(objeto=>{
    //     console.log(objeto)
    //     setUrl(objeto.message)
    // })



    return (
        <Pagina titulo="useEffect" subtitulo="Hooks basicos">
           <div className="flex flex-col">
                <button className="bg-purple-400 px-3 py-2 rounded-md mr-2" onClick={trocarImagem}>Trocar
                </button>
                <img src= {url} alt=""/>
           </div>
        </Pagina>

    )
}