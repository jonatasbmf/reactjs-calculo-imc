import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/img/powered.png';
import { niveis, Nivel } from './helpers/imc';
import { GridItem } from './components/GridItem'

function App() {
  const [altura, definirAltura] = useState<number>(0);
  const [peso, definirPeso] = useState<number>(0);

  const manipularCalculoButtun = () => {
    if (altura && peso) {

    } else {
      alert("Digite todos os campos.");
    }
  }

  return (
    <div className={styles.main}>
      <header className={styles.headerContainer}>
        <img src={poweredImage} alt='Powered' width={150} />
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>

          <h1>Calcule seu IMC.</h1>
          <p>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de saúde para calcular o peso ideal de cada pessoa.</p>

          <input type='number'
            placeholder="Digite a sua altura. Ex.: 1,5 (em metros)"
            value={altura > 0 ? altura : ''}
            onChange={e => definirAltura(parseFloat(e.target.value))}
          />

          <input type='number'
            placeholder="Digite o seu peso. Ex. 82,5 (em kg)"
            value={peso > 0 ? peso : ''}
            onChange={e => definirPeso(parseFloat(e.target.value))}
          />

          <button onClick={manipularCalculoButtun} > Calcular </button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {niveis.map((item, key) =>
              (<GridItem key={key} item={item} />)
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
