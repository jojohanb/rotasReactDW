import { Outlet } from "react-router-dom";
import { Menu } from "../componentes/Menu/Menu";

export function Layout(){

    return(
        <div className="flex bg-indigo-800 w-full">
            <Menu />
            <main className="flex flex-1">
            <Outlet/>
            </main>
        </div>

    )
}