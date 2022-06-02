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

export { grafoArray };