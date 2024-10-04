import { IconAddressBook, IconHome, IconInfoCircle, IconRouteAltLeft, IconSquareRoundedNumber1, IconSquareRoundedNumber2, IconSquareRoundedNumber3, IconSquareRoundedNumber4, IconSquareRoundedNumber5, IconSquareRoundedNumber6 } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export function Menu(){

    const getEstilo= (props)=> {
        let estiloInicial= "flex gap-1 px-3 py-5 hover:bg-violet-500 hover:text-white items-center "
        let estiloAtivo="border-solid border-r-4 border-white-600 text-violet-600 bg-black" 
        let estiloFinal

        estiloFinal= props.isActive ?estiloFinal=estiloInicial+estiloAtivo: estiloFinal = estiloInicial

        return estiloFinal;
    }

    return (
        <div className={`flex bg-indigo-900 w-60 h-screen flex-col`}>
           <header className="flex justify-center p-3 border-b border-violet-950 gap-1">
           <IconRouteAltLeft/> 
            <span className="font-bold">React Rotas</span>

           </header>
           <nav className="flex flex-col ">
                <NavLink to="/home" className={getEstilo}>
                    <IconHome/>Home
                </NavLink>
                <NavLink to="/contato" className={getEstilo}>
                    <IconAddressBook/>
                    Contato
                </NavLink>
                <NavLink to="/sobre" className={getEstilo}>
                    <IconInfoCircle/>
                    Sobre
                </NavLink>
                <NavLink to="/estado1" className={getEstilo}>
                    <IconSquareRoundedNumber1/>
                    Estado 1
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
<<<<<<< HEAD
                <NavLink to="comunicacao-direta" className={getEstilo}>
                    <IconMessageDown />
                    Comunicação Direta
                </NavLink>
        
                 <NavLink to="comunicacao-indireta" className={getEstilo}>
                    <IconMessageUp />
                    Comunicação Indireta
                 </NavLink>
                 <NavLink to="useRef" className={getEstilo}>
                    <IconMessageUp />
                    UseRef
                 </NavLink>
                 <NavLink to="useEffect" className={getEstilo}>
                    <IconMessageUp />
                    UseEffect
                 </NavLink>


=======
                <NavLink to="/direta" className={getEstilo}>
                    <IconSquareRoundedNumber5/>
                     Comunicação Direta
                </NavLink>
                <NavLink to="/indireta" className={getEstilo}>
                    <IconSquareRoundedNumber6/>
                     Comunicação Indireta
                </NavLink>
>>>>>>> eb28893d436da57a6dc491eae9ed3bb33fe598c1
           </nav>
           <footer className="absolute bottom-0 p-3 text-sm">
            <span>Desenvolvimento Web 2</span>
           </footer>
        </div>
    )
}