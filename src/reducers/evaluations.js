import {UPDATE_EVALUATIONS, ADD_EVALUATION} from '../actions/evaluations/evaluationsAction'


export default (state = null, {type, payload}) => {
  switch (type) {
    case ADD_EVALUATION:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_BATCHES:
      return payload.reduce((batches, batch) => {
        batches[batch.id] = batch
        return batches
      }, {})

    default:
      return state
  }
}
