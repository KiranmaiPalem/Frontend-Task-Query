const note = (state = [], action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'DELETE_NOTE':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      case 'UPDATE_NOTE':
            return state.map(todo =>
              todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
  }
  
  export default note