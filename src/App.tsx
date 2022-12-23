import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/img/powered.png';
import leftarrowImage from './assets/img/leftarrow.png';
import { calculoImc, niveis, Nivel } from './helpers/imc';
import { GridItem } from './components/GridItem'

function App() {
  const [altura, definirAltura] = useState<number>(0);
  const [peso, definirPeso] = useState<number>(0);
  const [resultado, definirResultado] = useState<Nivel | null>(null);

  const manipularCalculoButtun = () => {
    if (altura && peso) {
      definirResultado(calculoImc(altura, peso));
    } else {
      alert("Digite todos os campos.");
    }
  }
  const botaoVoltar = () => {
    definirResultado(null);
    definirAltura(0);
    definirPeso(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt='Powered' width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>

          <h1>Calcule seu IMC.</h1>
          <p>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de saúde para calcular o peso ideal de cada pessoa.</p>

          <input type='number'
            placeholder="Digite a sua altura. Ex.: 1,5 (em metros)"
            value={altura > 0 ? altura : ''}
            onChange={e => definirAltura(parseFloat(e.target.value))}
            disabled={resultado ? true : false}
          />

          <input type='number'
            placeholder="Digite o seu peso. Ex. 82,5 (em kg)"
            value={peso > 0 ? peso : ''}
            onChange={e => definirPeso(parseFloat(e.target.value))}
            disabled={resultado ? true : false}
          />

          <button onClick={manipularCalculoButtun}
            disabled={resultado ? true : false} > Calcular </button>
        </div>
        <div className={styles.rightSide}>
          {!resultado &&
            <div className={styles.grid}>
              {niveis.map((item, key) =>
                (<GridItem key={key} item={item} />)
              )}
            </div>
          }
          {resultado &&
            <div className={styles.resultadoBig}>
              <div className={styles.setaDireita} onClick={botaoVoltar}>
                <img src={leftarrowImage} alt="" width={25} />
              </div>
              <GridItem item={resultado} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
