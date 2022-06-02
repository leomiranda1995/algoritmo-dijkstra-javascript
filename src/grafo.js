const grafoArray = [
  {
    local: 'j',
    conexao: [
      { ponto: 'j', custo: 0, },
      { ponto: 'a', custo: 5, },
      { ponto: 'p', custo: 6, },
      { ponto: 'q', custo: 10, },
      { ponto: 'b', custo: 0, },
      { ponto: 'c', custo: 0, },
      { ponto: 'e', custo: 0, },
    ],
  },
  {
    local: 'a',
    conexao: [
      { ponto: 'j', custo: 5, },
      { ponto: 'a', custo: 0, },
      { ponto: 'p', custo: 0, },
      { ponto: 'q', custo: 0, },
      { ponto: 'b', custo: 13, },
      { ponto: 'c', custo: 0, },
      { ponto: 'e', custo: 0, },
    ],
  },
  {
    local: 'p',
    conexao: [
      { ponto: 'j', custo: 6, },
      { ponto: 'a', custo: 0, },
      { ponto: 'p', custo: 0, },
      { ponto: 'q', custo: 3, },
      { ponto: 'b', custo: 11, },
      { ponto: 'c', custo: 6, },
      { ponto: 'e', custo: 0, },
    ],
  },
  {
    local: 'q',
    conexao: [
      { ponto: 'j', custo: 10, },
      { ponto: 'a', custo: 0, },
      { ponto: 'p', custo: 3, },
      { ponto: 'q', custo: 0, },
      { ponto: 'b', custo: 6, },
      { ponto: 'c', custo: 4, },
      { ponto: 'e', custo: 0, },
    ],
  },
  {
    local: 'b',
    conexao: [
      { ponto: 'j', custo: 0, },
      { ponto: 'a', custo: 13, },
      { ponto: 'p', custo: 11, },
      { ponto: 'q', custo: 6, },
      { ponto: 'b', custo: 0, },
      { ponto: 'c', custo: 0, },
      { ponto: 'e', custo: 3, },
    ],
  },
  {
    local: 'c',
    conexao: [
      { ponto: 'j', custo: 0, },
      { ponto: 'a', custo: 0, },
      { ponto: 'p', custo: 6, },
      { ponto: 'q', custo: 4, },
      { ponto: 'b', custo: 0, },
      { ponto: 'c', custo: 0, },
      { ponto: 'e', custo: 8, },
    ],
  },
  {
    local: 'e',
    conexao: [
      { ponto: 'j', custo: 0, },
      { ponto: 'a', custo: 0, },
      { ponto: 'p', custo: 0, },
      { ponto: 'q', custo: 0, },
      { ponto: 'b', custo: 3, },
      { ponto: 'c', custo: 8, },
      { ponto: 'e', custo: 0, },
    ],
  },
];

module.exports = grafoArray;

// const distancias = [
//   {j: { j: 0, a: 5, p: 6, q: 10, b: 0, c: 0, e: 0, }},
//   {a: { j: 5, a: 0, p: 0, q: 0, b: 13, c: 0, e: 0, }},
//   {p: { j: 6, a: 0, p: 0, q: 3, b: 11, c: 6, e: 0, }},
//   {q: { j: 10, a: 0, p: 3, q: 0, b: 6, c: 4, e: 0, }},
//   {b: { j: 0, a: 13, p: 11, q: 6, b: 0, c: 0, e: 3, }},
//   {c: { j: 0, a: 0, p: 6, q: 4, b: 0, c: 0, e: 8, }},
//   {e: { j: 0, a: 0, p: 0, q: 0, b: 3, c: 8, e: 0, }},
// ];