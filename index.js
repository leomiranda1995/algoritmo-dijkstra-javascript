import { grafo } from './src/grafo.js';
import { matrizAnalise } from './src/matrizAnalise.js';
import { dijkstra } from './src/dijkstra.js';

const matriz = matrizAnalise(grafo);

let pontoInicial = 'j';
let pontoFinal = 'e';

dijkstra(grafo, matriz, pontoInicial, pontoFinal, pontoInicial);

const [ resultado ] = matriz.filter((local) => local.chegarEm === pontoFinal);
console.log(resultado);