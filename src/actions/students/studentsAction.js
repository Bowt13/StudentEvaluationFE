//Dependencies
import * as request from 'superagent'
import {baseUrl} from '../../constants'

//Constants
export const UPDATE_STUDENTS = 'UPDATE_STUDENTS'
export const UPDATE_STUDENT = 'UPDATE_STUDENT'
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS'
export const ADD_STUDENT = 'ADD_STUDENT'

export const getStudents = (batchId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentTeacher.jwt

  request
    .get(`${baseUrl}/students`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: UPDATE_STUDENTS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const getStudent = (studentId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentTeacher.jwt
  console.log('test')
  request
    .get(`${baseUrl}/students/${studentId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: UPDATE_STUDENT,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const createStudent = (student) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentTeacher.jwt

  request
    .post(`${baseUrl}/students`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(student)
    .then(result => {
      dispatch({
        type: ADD_STUDENT,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const connectStudent = (studentId, batchId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/students/${studentId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({batchId})
    .then(result => {
      dispatch({
        type: UPDATE_STUDENT_SUCCESS
      })
    })
    .catch(err => console.error(err))
}
