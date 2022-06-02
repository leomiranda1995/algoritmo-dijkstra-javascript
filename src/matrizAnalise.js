const matrizAnalise = (pontosGrafo) => {
  let matrizAnalise = [];

  pontosGrafo.map((ponto) => {
    matrizAnalise = [
      ...matrizAnalise,
      {
        chegarEm: ponto,
        custoDe: 0,
        vindoDe: [],
        passou: false,
      },
    ]
  });

  return matrizAnalise;
}

module.exports = matrizAnalise;