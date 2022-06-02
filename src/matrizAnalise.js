import { locaisGrafo } from "./functions/locaisGrafo.js";

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
        passou: false,
      },
    ]
  });

  return matrizAnalise;
}

export { matrizAnalise };