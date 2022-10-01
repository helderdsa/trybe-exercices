const Redux = require('redux');

const actionNext = () => {
  store.dispatch({type: "NEXT_COLOR"})
}

const actionPrevious = () => {
  store.dispatch({type: "PREVIOUS_COLOR"})
}

const store = Redux.createStore(reducer);