import { pontosConexaoPontoFinal } from "./pontosConexaoPontoFinal.js";

const dijkstra = (grafo, matrizResultado, pontoInicial, pontoFinal, posicaoAnalise, buscaProximosDestino = true) => {

  const [ localAtual ] = grafo.filter((grafo) => (grafo.nome === posicaoAnalise));
  const [ localAtualMatriz ] = matrizResultado.filter((local) => (local.chegarEm === posicaoAnalise));

  const destinosLocalAtual = localAtual.destinos.filter((destino) => (destino.custo > 0 && destino.nome !== posicaoAnalise && !destino.visitou))
                                                .filter((destino) => (!localAtualMatriz.vindoDe.includes(destino.nome)))
                                                .sort((a, b) => (a.custo < b.custo ? -1 : true));

  destinosLocalAtual.map((destino) => {
    const [destinoChegada] = matrizResultado.filter((itemMatriz) => (itemMatriz.chegarEm === destino.nome));
    // console.log('antes: ', destino);
    
    
    if (((localAtualMatriz.custoDe + destino.custo) < (destinoChegada.custoDe)) || (destinoChegada.custoDe === 0)) {
      destinoChegada.custoDe = (localAtualMatriz.custoDe + destino.custo);
      destinoChegada.vindoDe = [ ...localAtualMatriz.vindoDe, localAtualMatriz.chegarEm ];
    }
    
    console.log('');
    console.log(`${localAtualMatriz.chegarEm} -> ${destinoChegada.chegarEm}`);
    console.log(matrizResultado);
    console.log('');
    console.log('------------------');

    localAtualMatriz.visitou = true;
    // console.log('depois: ', destino);
    
  });
  
  if (buscaProximosDestino) {
    let proximosDetinosLocalAtual = [];

    destinosLocalAtual.map((destino) => {
      proximosDetinosLocalAtual.push(destino.nome);
    });

    for(let i=0; i<proximosDetinosLocalAtual.length; i++) {
      let vaiParaProximo = (i === proximosDetinosLocalAtual.length-1);
      
      if (pontosConexaoPontoFinal(grafo, matrizResultado, pontoFinal)) {
        return;
      }

      if (proximosDetinosLocalAtual[i] !== pontoFinal) {
        dijkstra(grafo, matrizResultado, pontoInicial, pontoFinal, proximosDetinosLocalAtual[i], vaiParaProximo);
      }
    }
  }
};

export { dijkstra };