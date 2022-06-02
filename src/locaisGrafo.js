const locaisGrafo = (grafo) => {
  let locais = [];

  grafo.map((localizacao) => {
    locais.push(localizacao.nome);
  });

  return locais;
}

export { locaisGrafo };