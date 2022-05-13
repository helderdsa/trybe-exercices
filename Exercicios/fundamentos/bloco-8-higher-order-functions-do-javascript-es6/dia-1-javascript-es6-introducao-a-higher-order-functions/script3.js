const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparador = (x, y) => {
  let pontuação = 0
  for (let i = 0; i < x.length; i += 1) {
    if (x[i] === y[i]) {
      pontuação += 1;
    } else if (x[i] === 'N.A') {
      pontuação += 0.5
    }
  }
  return pontuação
}

const corrigeProva = (gabarito, respostas, avaliador) => {
  const resultadoProva = avaliador(gabarito, respostas);
  return resultadoProva
}

console.log(corrigeProva(STUDENT_ANSWERS, RIGHT_ANSWERS, comparador));