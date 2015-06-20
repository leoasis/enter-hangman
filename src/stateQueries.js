import difference from 'lodash/array/difference';

export function wordSoFar(word, usedLetters) {
  const notGuessedLetters = difference(word.split(''), usedLetters);
  return notGuessedLetters.reduce((wordSoFar, notGuessedLetter) => {
    return wordSoFar.replace(new RegExp(notGuessedLetter, 'g'), '_');
  }, word);
}

export function isGameWon(state) {
  return wordSoFar(state.word, state.usedLetters) === state.word;
}

export function isGameLost(state) {
  return state.errors >= 7;
}
