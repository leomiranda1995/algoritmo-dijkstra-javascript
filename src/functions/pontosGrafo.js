const pontosGrafo = (grafoArray) => {
  let pontos = [];

  grafoArray.map((localizacao) => {
    pontos.push(localizacao.local);
  });

  return pontos;
}

export { pontosGrafo };