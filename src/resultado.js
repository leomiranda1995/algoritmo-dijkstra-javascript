const resultado = (matriz, [pontoInicial], pontoFinal) => {
  const [ ponto ] = matriz.filter((local) => local.chegarEm === pontoFinal);

  const pontoFinalMatriz = {
    incio: pontoInicial,
    fim: ponto.chegarEm,
    custo: ponto.custoDe,
    percurso: [...ponto.vindoDe, pontoFinal],
  }

  console.log('');
  console.log(pontoFinalMatriz);

}

export { resultado };