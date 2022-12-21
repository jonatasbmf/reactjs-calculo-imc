export type Nivel = {
    titulo: string,
    color: string,
    icone: 'down' | 'up';
    imc: number[];
    seuImc?: number;
}
export const niveis: Nivel[] = [
    { titulo: 'Magreza', color: '#96A3AB', icone: 'down', imc: [0, 18.5] },
    { titulo: 'Normal', color: '#0EAD69', icone: 'up', imc: [18.6, 24.9] },
    { titulo: 'Sobrepeso', color: '#E2B036', icone: 'down', imc: [25, 30] },
    { titulo: 'Obesidade', color: '#C3423F', icone: 'down', imc: [30.1, 99] }
];

export const calculoImc = (altura: number, peso: number) => {
    const imc = peso / (altura * altura);

    for (let i in niveis) {
        if (imc >= niveis[i].imc[0] && imc < niveis[i].imc[1]) {
            niveis[i].seuImc = imc;
            return niveis[i];
        }
    }
    return null;
}