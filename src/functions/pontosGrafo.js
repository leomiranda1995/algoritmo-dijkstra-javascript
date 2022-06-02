const pontosGrafo = (grafoArray) => {
  let pontos = [];

  grafoArray.map((localizacao) => {
    pontos.push(localizacao.local);
  });

  return pontos;
}

module.exports = pontosGrafo;