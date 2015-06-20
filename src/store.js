import initialState from './initialState';

export default function store(state, action) {
  switch (action.type) {
    case 'RESET_GAME':
      return { ...initialState, word: action.word };
    case 'NEW_LETTER':
      return newLetter(state, action.letter);
    default:
      return state;
  }
}

function newLetter(state, letter) {
  if (state.usedLetters.indexOf(letter) !== -1) {
    return state;
  }

  const usedLetters = state.usedLetters.concat(letter);
  let errors = state.errors;
  if (state.word.indexOf(letter) === -1) {
    errors++;
  }
  return {...state, usedLetters, errors};
}
