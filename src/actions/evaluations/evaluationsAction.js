//Dependencies
import * as request from 'superagent'
import {baseUrl} from '../../constants'

//Constants
export const ADD_EVALUATION = 'ADD_EVALUATION'

export const createEvaluation = (evaluation) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentTeacher.jwt

  request
    .post(`${baseUrl}/evaluations`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(evaluation)
    .then(result => {
      dispatch({
        type: ADD_EVALUATION,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
