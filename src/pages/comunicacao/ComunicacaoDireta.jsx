import { Pagina } from "../../componentes/Pagina";
import { PaiDireta } from "../../componentes/comunicacao/direta/PaiDireta";

export function ComunicacaoDireta() {

    return (
        <Pagina 
            titulo="Comunicação Direta"
            subtitulo="Exemplo de comunicação DIRETA entre componentes"
        >
            
            <PaiDireta/>
            
        </Pagina>
    )
}