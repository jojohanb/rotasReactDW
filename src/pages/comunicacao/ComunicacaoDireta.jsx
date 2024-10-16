import {Pagina} from "../../componentes/Pagina"
import { PaiDireta } from "../../componentes/comunicacao/direta/PaiDireta";

export function ComunicacaoDireta(){

    return(
        <Pagina titulo="Comunicacao" subtitulo="Direta">
           <PaiDireta/>
        </Pagina> 
    )
}