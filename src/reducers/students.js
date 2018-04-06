import {UPDATE_STUDENTS, UPDATE_STUDENT, ADD_STUDENT, UPDATE_STUDENT_SUCCESS} from '../actions/students/studentsAction'


export default (state = null, {type, payload}) => {
  switch (type) {
    case ADD_STUDENT:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_STUDENT:
      const student = {[payload.id]: payload}
      return student

    case UPDATE_STUDENTS:
      return payload.reduce((students, student) => {
        students[student.id] = student
        return students
      }, {})

    default:
      return state
  }
}
