import {
    IconAddressBook,
    IconBrandReact,
    IconDeviceSpeaker,
    IconHome,
    IconInfoCircle,
    IconLanguage,
    IconMessageDown,
    IconMessageUp,
    IconRouteAltLeft,
    IconSquareRoundedNumber1,
    IconSquareRoundedNumber2,
    IconSquareRoundedNumber3,
    IconSquareRoundedNumber4,
  } from "@tabler/icons-react";
  import { NavLink } from "react-router-dom";
  
// import { IconAddressBook, IconHome, IconInfoCircle, IconRouteAltLeft, IconSquareRoundedNumber1, IconSquareRoundedNumber2, IconSquareRoundedNumber3, IconSquareRoundedNumber4, IconSquareRoundedNumber5, IconSquareRoundedNumber6 } from "@tabler/icons-react";
// import { NavLink } from "react-router-dom";

export function Menu(){

    const getEstilo= (props)=> {
        let estilo = `flex items-center gap-3 px-3 py-2 w-full text-sm text-white hover:bg-zinc-900 `;
        let ativo = "border-r-4 border-solid border-slate-800 ";

    // let final
    // if (props.isActive){
    //     final = estilo + ativo
    // } else {
    //     final = estilo
    // }
        let final = props.isActive ? estilo + ativo : estilo;

        return final;
        // let estiloInicial= "flex gap-1 px-3 py-5 hover:bg-violet-500 hover:text-white items-center "
        // let estiloAtivo="border-solid border-r-4 border-white-600 text-violet-600 bg-black" 
        // let estiloFinal

        // estiloFinal= props.isActive ?estiloFinal=estiloInicial+estiloAtivo: estiloFinal = estiloInicial

        // return estiloFinal;
    }

    return (
        <div className={`flex bg-indigo-900 w-60 h-screen flex-col`}>
           <header className="flex justify-center p-3 border-b border-violet-950 gap-1">
           <IconBrandReact className="text-white"/> 
            <span className="font-bold text-white">React Rotas</span>
           </header>

           <nav className="flex flex-col ">
                <NavLink to="home" className={getEstilo}>
                    <IconHome/>Home
                </NavLink>

                <NavLink to="contato" className={getEstilo}>
                    <IconAddressBook/>
                    Contato
                </NavLink>

                <NavLink to="sobre" className={getEstilo}>
                    <IconInfoCircle/>
                    Sobre
                </NavLink>

                <span className="pt-4 pl-3 text-xs text-blue-500">Estado</span>

                <NavLink to="semEstado" className={getEstilo}>
                    <IconSquareRoundedNumber1/>
                    Sem Estado 
                </NavLink>

                <NavLink to="/comEstado" className={getEstilo}>
                    <IconSquareRoundedNumber2/>
                    Com Estado
                </NavLink>

                <NavLink to="/campoTexto" className={getEstilo}>
                    <IconSquareRoundedNumber3/>
                    Campo Texto
                </NavLink>

                <NavLink to="/contador" className={getEstilo}>
                    <IconSquareRoundedNumber4/>
                    Contador
                </NavLink>

                <span className="pt-4 pl-3 text-xs text-blue-500">Comunicação</span>

                <NavLink to="comunicacao-direta" className={getEstilo}>
                    <IconMessageDown />
                    Comunicação Direta
                </NavLink>
        
                 <NavLink to="comunicacao-indireta" className={getEstilo}>
                    <IconMessageUp />
                    Comunicação Indireta
                 </NavLink>

                 <span className="pt-4 pl-3 text-xs  text-blue-500">Hooks Básicos</span>

                 <NavLink to="useRef" className={getEstilo}>
                    <IconMessageUp />
                    UseRef
                 </NavLink>

                 <NavLink to="useEffect" className={getEstilo}>
                    <IconMessageUp />
                    UseEffect
                 </NavLink>

                 <span className="pt-4 pl-3 text-xs text-blue-500">Tradutor</span>

                 <NavLink to="tradutor" className={getEstilo}>
                    <IconLanguage/>
                    Tradutor
                 </NavLink>
           </nav>
           <footer className="absolute bottom-0 p-3 text-sm">
                <span className="text-white">Desenvolvimento Web 2</span>
           </footer>
        </div>
    )
}