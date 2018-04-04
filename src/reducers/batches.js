import {UPDATE_BATCHES} from '../actions/batches/batchesAction'


export default (state = null, {type, payload}) => {
  switch (type) {
    // case ADD_GAME:
    //   return {
    //     ...state,
    //     [payload.id]: payload
    //   }
    //
    // case UPDATE_GAME:
    //   return {
    //     ...state,
    //     [payload.id]: payload
    //   }

    case UPDATE_BATCHES:
      return payload.reduce((batches, batch) => {
        batches[batch.id] = batch
        return batches
      }, {})

    default:
      return state
  }
}
