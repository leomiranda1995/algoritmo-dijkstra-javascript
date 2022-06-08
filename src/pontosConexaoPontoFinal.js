const pontosConexaoPontoFinal = (grafo, matriz, pontoFinal) => {
  let pontosComConexaoPontoFinal = [];
  grafo.forEach((ponto) => {
    if (ponto.nome !== pontoFinal) {
      const [temConexao] = ponto.destinos.filter((item) => (item.nome === pontoFinal && item.custo > 0))
      if (temConexao) {
        pontosComConexaoPontoFinal.push(ponto.nome);
      }
    }
  });

  let sairPrograma = true;

  pontosComConexaoPontoFinal.forEach((item) => {
    const [result] = matriz.filter((local) => (local.chegarEm === item));

    if (!result.visitou){
      sairPrograma = result.visitou;
    }
  });

  return sairPrograma;
}

export { pontosConexaoPontoFinal }