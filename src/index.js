import { grafo } from './grafo.js';
import { matrizAnalise } from './matrizAnalise.js';
import { dijkstra } from './dijkstra.js';
import { resultado } from './resultado.js';

const matriz = matrizAnalise(grafo);

let pontoInicial = ['seattle'];
let pontoFinal = 'new york';

dijkstra(grafo, matriz, pontoInicial, pontoFinal, pontoInicial);
resultado(matriz, pontoInicial, pontoFinal);