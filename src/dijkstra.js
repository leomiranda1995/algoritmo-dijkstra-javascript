const dijkstra = (grafo, matrizResultado, pontoInicial, pontoFinal, localEmFoco, buscaProximoDestino = true) => {

  Array.from(localEmFoco).map((localizacaoAtual) => {
    
    const [ localAtual ] = grafo.filter((grafo) => (grafo.nome === localizacaoAtual));
    const [ localAtualMatriz ] = matrizResultado.filter((local) => (local.chegarEm === localizacaoAtual));

    const destinosLocalAtual = localAtual.destinos.filter((destino) => (
      destino.custo > 0 && destino.nome !== localizacaoAtual && !destino.passou
    )).filter((destino) => (
      !localAtualMatriz.vindoDe.includes(destino.nome)
    )).sort((a, b) => {
      if (a.custo < b.custo) {
        return -1;
      } else {
        return true;
      }
    });

    destinosLocalAtual.map((destino) => {
      const [destinoChegada] = matrizResultado.filter((itemMatriz) => (itemMatriz.chegarEm === destino.nome));

      if (((localAtualMatriz.custoDe + destino.custo) < (destinoChegada.custoDe)) || (destinoChegada.custoDe === 0)) {
        destinoChegada.custoDe = (localAtualMatriz.custoDe + destino.custo);
        destinoChegada.vindoDe = [ ...localAtualMatriz.vindoDe, localAtualMatriz.chegarEm ];
      } else if (destinoChegada.custoDe === 0){
        destinoChegada.custoDe += destino.custo;
        destinoChegada.vindoDe.push(localizacaoAtual);
      }

      localAtualMatriz.passou = true;
      // console.log(`${localAtualMatriz.chegarEm} -> ${destinoChegada.chegarEm}`);
    });

    if (buscaProximoDestino) {
      let proximosDetinosLocalAtual = [];

      destinosLocalAtual.map((conexao) => {
        proximosDetinosLocalAtual.push(conexao.nome);
      });

      for(let i=0; i<proximosDetinosLocalAtual.length; i++) {
        let vaiParaProximo = (i === proximosDetinosLocalAtual.length-1);
        
        // console.log(matrizResultado);

        if (proximosDetinosLocalAtual[i] === pontoFinal) {
          return;
        }

        dijkstra(grafo, matrizResultado, pontoInicial, pontoFinal, proximosDetinosLocalAtual[i], vaiParaProximo);
      }
    }
  });
};

export { dijkstra };