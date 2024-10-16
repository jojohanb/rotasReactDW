import {Pagina} from "../../componentes/Pagina"
import { PaiIndireta } from "../../componentes/comunicacao/indireta/PaiIndireta";

export function ComunicacaoIndireta(){

    return(
        <Pagina titulo="Comunicacao" subtitulo="Indireta">
           <PaiIndireta/>
        </Pagina> 
    )
}