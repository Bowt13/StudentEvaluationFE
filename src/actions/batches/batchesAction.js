//Dependencies
import * as request from 'superagent'
import {baseUrl} from '../../constants'

//Constants
export const UPDATE_BATCHES = 'UPDATE_BATCHES'
export const ADD_BATCH = 'UPDATE_BATCH'

export const getBatches = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentTeacher.jwt

  request
    .get(`${baseUrl}/batches`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: UPDATE_BATCHES,
        payload: result.body
      })
    })
    .catch(err => console.error(err))

}

export const createBatch = (batch) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentTeacher.jwt

  request
    .post(`${baseUrl}/batches`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(batch)
    .then(result => {
      dispatch({
        type: ADD_BATCH,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
