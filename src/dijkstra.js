const dijkstra = (grafoArray, matrizAnalise, pontoInicial, pontoFinal, nextPontos, proximosItens = true) => {
  // let finalizaPrograma = false;

  Array.from(nextPontos).map((localizacaoFoco) => {
    const [pontoFocoGrafo] = grafoArray.filter((grafo) => (grafo.local === localizacaoFoco)); // pega do grafo o objeto do ponto que está em foco
    const [pontoFocoMatriz] = matrizAnalise.filter((nicho) => (nicho.chegarEm === localizacaoFoco)); // pega da matrizAnalise o objeto do ponto que está em foco

    // Busca as conexões que o ponto no grafo tem, filtrando as que possuem custo > 0 e não seja o próprio ponto
    // Segundo filtro exclui os pontos de que que esse grafo veio, para voltar um caminho
    // Terceiro ordena o array pelo custo do menor para o maior
    const pontosConexao = pontoFocoGrafo.conexao.filter((localizacao) => (
      localizacao.custo > 0 && localizacao.ponto !== localizacaoFoco && !localizacao.passou
    )).filter((localizacao) => (
      !pontoFocoMatriz.vindoDe.includes(localizacao.ponto)
    )).sort((a, b) => {
      if (a.custo < b.custo) {
        return -1;
      } else {
        return true
      }
    });

    pontosConexao.map((conexao) => {
      const [updatedMatrizAnalise] = matrizAnalise.filter((item) => (item.chegarEm === conexao.ponto));

      // console.log(`
      //   pontoFoco: ${pontoFocoMatriz.chegarEm}, custo até então: ${pontoFocoMatriz.custoDe}
      //   pontoDestino: ${updatedMatrizAnalise.chegarEm}, custo até então : ${updatedMatrizAnalise.custoDe}
      //   custo Conexão: ${conexao.custo}
      // `);

      // console.log(`${pontoFocoMatriz.chegarEm} -> ${updatedMatrizAnalise.chegarEm}`);
      if (((pontoFocoMatriz.custoDe + conexao.custo) < (updatedMatrizAnalise.custoDe)) || (updatedMatrizAnalise.custoDe === 0)) {
        updatedMatrizAnalise.custoDe = (pontoFocoMatriz.custoDe + conexao.custo);
        updatedMatrizAnalise.vindoDe = [ ...pontoFocoMatriz.vindoDe, pontoFocoMatriz.chegarEm ];
      } else {
        if (updatedMatrizAnalise.custoDe === 0){
          updatedMatrizAnalise.custoDe += conexao.custo;
          updatedMatrizAnalise.vindoDe.push(localizacaoFoco);
        }
      }

    });

    pontoFocoMatriz.passou = true;

    if (proximosItens){
      let proximosPontosPontoEmFoco = [];
      pontosConexao.map((conexao) => {
        proximosPontosPontoEmFoco.push(conexao.ponto);
      });

      for(let i=0; i<proximosPontosPontoEmFoco.length; i++) {
        let vaiParaProximo = (i===proximosPontosPontoEmFoco.length-1);
        
        if (proximosPontosPontoEmFoco[i] === pontoFinal) {
          return;
        }
        
        dijkstra(grafoArray, matrizAnalise, pontoInicial, pontoFinal, proximosPontosPontoEmFoco[i], vaiParaProximo);
      }
    }
  });
};

export { dijkstra };