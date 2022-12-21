import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/img/powered.png';

function App() {
  const [altura, definirAltura] = useState<number>(0);
  const [peso, definirPeso] = useState<number>(0);


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
        </div>
        <div className={styles.rightSide}>
          aqui
        </div>
      </div>

    </div>
  );
}

export default App;
