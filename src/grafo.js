const grafo = [
  {
    nome: 'j',
    destinos: [
      { nome: 'j', custo: 0, },
      { nome: 'a', custo: 5, },
      { nome: 'p', custo: 6, },
      { nome: 'q', custo: 10, },
      { nome: 'b', custo: 0, },
      { nome: 'c', custo: 0, },
      { nome: 'e', custo: 0, },
    ],
  },
  {
    nome: 'a',
    destinos: [
      { nome: 'j', custo: 5, },
      { nome: 'a', custo: 0, },
      { nome: 'p', custo: 0, },
      { nome: 'q', custo: 0, },
      { nome: 'b', custo: 13, },
      { nome: 'c', custo: 0, },
      { nome: 'e', custo: 0, },
    ],
  },
  {
    nome: 'p',
    destinos: [
      { nome: 'j', custo: 6, },
      { nome: 'a', custo: 0, },
      { nome: 'p', custo: 0, },
      { nome: 'q', custo: 3, },
      { nome: 'b', custo: 11, },
      { nome: 'c', custo: 6, },
      { nome: 'e', custo: 0, },
    ],
  },
  {
    nome: 'q',
    destinos: [
      { nome: 'j', custo: 10, },
      { nome: 'a', custo: 0, },
      { nome: 'p', custo: 3, },
      { nome: 'q', custo: 0, },
      { nome: 'b', custo: 6, },
      { nome: 'c', custo: 4, },
      { nome: 'e', custo: 0, },
    ],
  },
  {
    nome: 'b',
    destinos: [
      { nome: 'j', custo: 0, },
      { nome: 'a', custo: 13, },
      { nome: 'p', custo: 11, },
      { nome: 'q', custo: 6, },
      { nome: 'b', custo: 0, },
      { nome: 'c', custo: 0, },
      { nome: 'e', custo: 3, },
    ],
  },
  {
    nome: 'c',
    destinos: [
      { nome: 'j', custo: 0, },
      { nome: 'a', custo: 0, },
      { nome: 'p', custo: 6, },
      { nome: 'q', custo: 4, },
      { nome: 'b', custo: 0, },
      { nome: 'c', custo: 0, },
      { nome: 'e', custo: 8, },
    ],
  },
  {
    nome: 'e',
    destinos: [
      { nome: 'j', custo: 0, },
      { nome: 'a', custo: 0, },
      { nome: 'p', custo: 0, },
      { nome: 'q', custo: 0, },
      { nome: 'b', custo: 3, },
      { nome: 'c', custo: 8, },
      { nome: 'e', custo: 0, },
    ],
  },
];

export { grafo };