import { useState } from "react"

export function UseRef(){

    const [estado, setEstado] = useState(0)
    const referencia = useRef(0)

    function incrementaEstado(){
        setEstado(estado + 1)

    }

    function incrementaReferencia(){
        referencia.current +=1
    }

    return(
        <Pagina titulo="useRef" subtitulo="Hooks basicos">
            <div> { `Ref: ${referencia.current} |  State: ${estado} `}
            <div>
                 <button className="bg-purple-900" onClick={incrementaReferencia}> Ref+</button>
                 <button className="bg-purple-900" onClick={incrementaEstado}>Estado+</button>
            </div>
     
            </div>

        </Pagina>
    )
}