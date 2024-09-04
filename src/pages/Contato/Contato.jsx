import styles from './Contato.module.css'
import {Menu} from '../../componentes/Menu/Menu'

export function Contato(){

    return (
        <div className={styles.Contato}>
            <Menu />
            <h1>Contato</h1>
        </div>
    )
}