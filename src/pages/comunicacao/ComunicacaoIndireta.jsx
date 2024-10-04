import { Pagina } from "../../componentes/Pagina";
import { PaiIndireta } from "../../componentes/comunicacao/indireta/PaiIndireta";

export function ComunicacaoIndireta() {

    return (
        <Pagina 
            titulo="Comunicação Indireta"
            subtitulo="Exemplo de comunicação INDIRETA entre componentes"
        >
            <PaiIndireta />
        </Pagina>
    )
}