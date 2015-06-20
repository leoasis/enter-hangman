export function newLetter(letter) {
  return { type: 'NEW_LETTER', letter };
}

export function resetGame() {
  return {type: 'RESET_GAME', word: pickWord()};
}

const words = [
  'JAVASCRIPT',
  'MEETUPJS',
  'REACTJS'
];

function pickWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
