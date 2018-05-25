const initialState = {
  id: null,
  time: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_THING':
      return initialState
    case 'RECEIVE_THING':
      return {
        ...state,
        ...action.thing
      }
    default:
      return state
  }
}
