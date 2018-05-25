import shortid from 'shortid'
import moment from 'moment'

export const fetchThing = () => async (dispatch) => {
  dispatch({ type: 'FETCH_THING' })
  // here is where you fetch thing. Nice place for an http request dontcha think

  // random placeholder thing
  const thing = {
    id: shortid.generate(),
    time: moment().format('MMMM Do YYYY, h:mm:ss a')
  }

  return dispatch(receiveThing(thing, 'RECEIVE_THING'))
}

export const receiveThing = (thing, type) => {
  return {
    type: 'RECEIVE_THING',
    thing
  }
}
