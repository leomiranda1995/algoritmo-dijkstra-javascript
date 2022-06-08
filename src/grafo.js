// teste: j -> e

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


// https://www.educative.io/edpresso/how-to-implement-dijkstras-algorithm-in-cpp
// teste: a -> d

// const grafo = [
//   {
//     nome: 'a',
//     destinos: [
//       { nome: 'b', custo: 10, },
//       { nome: 'c', custo: 20, },
//     ],
//   },
//   {
//     nome: 'b',
//     destinos: [
//       { nome: 'a', custo: 10, },
//       { nome: 'd', custo: 50, },
//       { nome: 'e', custo: 10, },
//     ],
//   },
//   {
//     nome: 'c',
//     destinos: [
//       { nome: 'a', custo: 20, },
//       { nome: 'd', custo: 20, },
//       { nome: 'e', custo: 33, },
//     ],
//   },
//   {
//     nome: 'd',
//     destinos: [
//       { nome: 'b', custo: 50, },
//       { nome: 'c', custo: 20, },
//       { nome: 'e', custo: 20, },
//       { nome: 'f', custo: 2, },
//     ],
//   },
//   {
//     nome: 'e',
//     destinos: [
//       { nome: 'b', custo: 10, },
//       { nome: 'c', custo: 33, },
//       { nome: 'd', custo: 20, },
//       { nome: 'f', custo: 1, },
//     ],
//   },
//   {
//     nome: 'f',
//     destinos: [
//       { nome: 'd', custo: 2, },
//       { nome: 'e', custo: 1, },
//     ],
//   },
// ];



// https://medium.com/@jpena91/dijkstras-algorithm-finding-the-shortest-path-in-javascript-a7247afe93b2
// teste: s -> f

// const grafo = [
//   {
//     nome: 's',
//     destinos: [
//       { nome: 'a', custo: 5, },
//       { nome: 'b', custo: 2, },
//     ],
//   },
//   {
//     nome: 'a',
//     destinos: [
//       { nome: 's', custo: 5, },
//       { nome: 'b', custo: 8, },
//       { nome: 'c', custo: 4, },
//       { nome: 'd', custo: 2, },
//     ],
//   },
//   {
//     nome: 'b',
//     destinos: [
//       { nome: 's', custo: 2, },
//       { nome: 'a', custo: 8, },
//       { nome: 'd', custo: 7, },
//     ],
//   },
//   {
//     nome: 'c',
//     destinos: [
//       { nome: 'a', custo: 4, },
//       { nome: 'd', custo: 6, },
//       { nome: 'f', custo: 3, },
//     ],
//   },
//   {
//     nome: 'd',
//     destinos: [
//       { nome: 'a', custo: 2, },
//       { nome: 'b', custo: 7, },
//       { nome: 'c', custo: 6, },
//       { nome: 'f', custo: 1, },
//     ],
//   },
//   {
//     nome: 'f',
//     destinos: [
//       { nome: 'c', custo: 3, },
//       { nome: 'd', custo: 1, },
//     ],
//   },
// ];


// 0 -> 5
// const grafo = [
//   {
//     nome: '0',
//     destinos: [
//       { nome: '1', custo: 3, },
//       { nome: '2', custo: 1, },
//     ],
//   },
//   {
//     nome: '1',
//     destinos: [
//       { nome: '3', custo: 2, },
//       { nome: '4', custo: 1, },
//     ],
//   },
//   {
//     nome: '2',
//     destinos: [
//       { nome: '4', custo: 4, },
//     ],
//   },
//   {
//     nome: '3',
//     destinos: [
//       { nome: '4', custo: 3, },
//       { nome: '5', custo: 2, },
//     ],
//   },
//   {
//     nome: '4',
//     destinos: [
//       { nome: '5', custo: 1, },
//     ],
//   },
//   {
//     nome: '5',
//     destinos: [
//     ],
//   },
// ];

export { grafo };