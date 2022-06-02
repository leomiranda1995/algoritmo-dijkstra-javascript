import { grafoArray } from './src/grafo.js';
import { pontosGrafo } from './src/functions/pontosGrafo.js';
import { matrizAnalise } from './src/matrizAnalise.js';
import { dijkstra } from './src/dijkstra.js';

// console.log(JSON.stringify(grafoArray)); // grafo em json

// const [localizacao] = grafoArray.filter((destino) => (destino.local === 'a'));
// console.log(localizacao);

const pontos = pontosGrafo(grafoArray);
// console.log(pontos);

const matriz = matrizAnalise(pontos);
// console.log(matriz);

let pontoInicial = 'j';
let pontoFinal = 'e';

dijkstra(grafoArray, matriz, pontoInicial, pontoFinal, pontoInicial);
console.log(matriz.filter((local) => local.chegarEm === pontoFinal));

// const teste = resultado.filter((localizacao) => (localizacao.chegarEm === pontoFinal));
// console.log(resultado);