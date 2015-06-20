export default function createDispatcher(store, initialState) {
  let actions = [];
  let state = initialState;
  const listeners = [];

  function dispatch(action) {
    actions.push(action);
    state = store(state, action);
    emitChange();
  }

  function subscribe(listener) {
    listeners.push(listener);
    listener(state);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    }
  }

  function emitChange() {
    listeners.forEach(listener => listener(state));
  }

  function replay(newActions) {
    actions = newActions;
    state = actions.reduce(store, initialState);
    emitChange();
  }

  window.copyActions = () => {
    return JSON.stringify(actions);
  }

  window.replayActions = (actionsStr) => {
    replay(JSON.parse(actionsStr));
  }

  let undoneActions = [];

  window.undo = () => {
    undoneActions.push(actions[actions.length - 1]);
    replay(actions.slice(0, -1));
  }

  window.redo = () => {
    const actionToRedo = undoneActions.pop();
    if (actionToRedo) {
      replay(actions.concat(actionToRedo));
    }
  }

  return {
    dispatch,
    subscribe
  };
}
