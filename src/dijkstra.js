import { pontosConexaoPontoFinal } from "./pontosConexaoPontoFinal.js";

const dijkstra = (grafo, matrizResultado, pontoInicial, pontoFinal, destinosAnalise) => {
  const proximosDestinos = [];

  destinosAnalise.map((posicaoAnalise) => {
    const [ localAtual ] = grafo.filter((grafo) => (grafo.nome === posicaoAnalise));
    const [ localAtualMatriz ] = matrizResultado.filter((local) => (local.chegarEm === posicaoAnalise));
    localAtualMatriz.visitou = true;

    const destinosLocalAtual = localAtual.destinos.filter((destino) => (destino.custo > 0 && destino.nome !== posicaoAnalise && !destino.visitou))
                                                  .filter((destino) => (!localAtualMatriz.vindoDe.includes(destino.nome)))
                                                  .sort((a, b) => (a.custo < b.custo ? -1 : true));

    destinosLocalAtual.map((destino) => {
      const [destinoChegada] = matrizResultado.filter((itemMatriz) => (itemMatriz.chegarEm === destino.nome));
      
      
      if (((localAtualMatriz.custoDe + destino.custo) < (destinoChegada.custoDe)) || (destinoChegada.custoDe === 0)) {
        destinoChegada.custoDe = (localAtualMatriz.custoDe + destino.custo);
        destinoChegada.vindoDe = [ ...localAtualMatriz.vindoDe, localAtualMatriz.chegarEm ];
        destinoChegada.visitou = false;
        
        if (!proximosDestinos.find((local) => local === destino.nome)){
          proximosDestinos.push(destino.nome);
        }
      }
      
      console.log('');
      console.log(`${localAtualMatriz.chegarEm} (${localAtualMatriz.custoDe} + ${destino.custo})  =  ${localAtualMatriz.custoDe + destino.custo}  <  ${destinoChegada.chegarEm} (${destinoChegada.custoDe})`);
      console.table(matrizResultado);      
    });
  });
  

  if (pontosConexaoPontoFinal(grafo, matrizResultado, pontoFinal)){
    return;
  }

  dijkstra(grafo, matrizResultado, pontoInicial, pontoFinal, proximosDestinos);
};

export { dijkstra };