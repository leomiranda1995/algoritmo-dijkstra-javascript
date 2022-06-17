import { grafo } from './grafo.js';
import { matrizAnalise } from './matrizAnalise.js';
import { dijkstra } from './dijkstra.js';

const matriz = matrizAnalise(grafo);

let pontoInicial = ['seattle'];
let pontoFinal = 'new york';

dijkstra(grafo, matriz, pontoInicial, pontoFinal, pontoInicial);
const [ resultado ] = matriz.filter((local) => local.chegarEm === pontoFinal);

console.log('');
console.log('');
console.log('Resultado final:');
console.log(resultado);