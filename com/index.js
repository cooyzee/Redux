import { createStore, combineReducers } from 'redux'

/**
 * Single source of truth
 * State is read-only
 * Changes are made with pure functions
 **/

// This is a reducer
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}

let store = createStore(counter)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({type: 'INCREMENT'})

/**
 * Core Concepts
 **/
// we describe our app's state as a plain object
let todoState = {
  todos: [
    {text: 'Eat food', complete: true},
    {text: 'Exercise', complete: false}
  ],
  visibilityFilter: 'SHOW_COMPLETE'
}

// we write smaller functions managing parts of the state
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  }
  return state
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{text: action.text, compelte: false}])
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        action.index === index ? {text: todo.text, completed: !todo.completed} : todo
      )
    default:
      return state
  }
}
 // And we write anther reducer that manages the complete state of our app by calling those two reducers
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}

const reducer = combineReducers({todos, visibilityFilter})
todoState = createStore(reducer)