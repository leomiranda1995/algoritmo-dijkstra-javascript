import { locaisGrafo } from "./locaisGrafo.js";

const matrizAnalise = (grafo) => {
  let locaisDoGrafo = locaisGrafo(grafo);

  let matrizAnalise = [];

  locaisDoGrafo.map((local) => {
    matrizAnalise = [
      ...matrizAnalise,
      {
        chegarEm: local,
        custoDe: 0,
        vindoDe: [],
        visitou: false,
      },
    ]
  });

  return matrizAnalise;
}

export { matrizAnalise };