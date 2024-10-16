import { IconMinus, IconPlus } from "@tabler/icons-react";
import { Pagina } from "../../componentes/Pagina";
import { useState } from "react";

export function Contador(){
    // const [contar, setContar] = useState(0)

    // function contando(){
    //     setContar(contar+ 1)
    //     console.log(contar)
    // }

    // function descontar(){
    //     setContar(contar-1)
    //     console.log(contar)
    // }
    const [contador, setContador] = useState(0);
    const [step, setStep] = useState(1);


    // ARRUMANDOO
     return(
      <Pagina titulo="Contador" subtitulo="Conceito de Estado no React">
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <div className="text-6xl font-black">{contador}</div>
        <div className="flex gap-5">
          <button
            className="rounded-full p-4 bg-blue-600"
            onClick={() => setContador(contador - step)}
          >
            <IconMinus size={30} />
          </button>
          <button
            className="rounded-full p-4 bg-blue-800"
            onClick={() => setContador(contador + step)}
          >
            <IconPlus size={30} />
          </button>
        </div>

        <div className="flex items-center gap-5">
          <button
            className="rounded-full p-2 bg-purple-600"
            onClick={() => setStep(step - 1)}
          >
            <IconMinus />
          </button>

          <span>{step}</span>

          <button
            className="rounded-full p-2 bg-purple-800"
            onClick={() => setStep(step + 1)}
          >
            <IconPlus />
          </button>
        </div>
      </div>
    </Pagina>


    //     <Pagina titulo="contador ai" subtitulo="Contador do react">
    //      <div className="flex flex-col">
    //         <div>{contar}</div>
    //         <div className="felx flex-row">
    //             <button className="w-28  p-2 bg-black text-purple-700" onClick={contando}>Contar</button>
    //             <button className="w-28  p-2 bg-black text-purple-700" onClick={descontar}>Descontar</button>

    //         </div>
        
    //      </div>
    //     </Pagina>


    // <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        
    // <div className="text-6xl font-black">0</div>
    // <div className="flex gap-5">
    //   <button className="rounded-full p-4 bg-blue-600"><IconMinus size={30}/></button>
    //   <button className="rounded-full p-4 bg-blue-800"><IconPlus size={30}/></button>
    // </div>
    
    // <div className="flex items-center gap-5">
    //   <button className="rounded-full p-2 bg-purple-600"><IconMinus /></button>
    //   <span>0</span>
    //   <button className="rounded-full p-2 bg-purple-800"><IconPlus /></button>
    // </div>
    // </div>
    )
}