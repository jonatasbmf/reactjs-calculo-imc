import { Nivel } from "../helpers/imc";
import styles from './gridItem.module.css';
import upImg from '../assets/img/up.png';
import downImg from '../assets/img/down.png';

type Props = {
    item: Nivel
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcone}>
                <img src={item.icone === 'up' ? upImg : downImg} alt="" width="30" />
            </div>
            <div className={styles.gridTitulo}>
                {item.titulo}
            </div>
            {item.seuImc && <div>
                    <div className={styles.seuImc}> Seu IMC é de: {item.seuImc} kg/m²</div>
                </div>}
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}