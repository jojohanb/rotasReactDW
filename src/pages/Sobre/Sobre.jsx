import styles from './Sobre.module.css'
import {Menu} from '../../componentes/Menu/Menu'

export function Sobre(){

    return (
        <div className={styles.Sobre}>
            <Menu />
            <h1>Sobre</h1>
        </div>
    )
}