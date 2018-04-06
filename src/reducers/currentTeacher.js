//Actions
import {USER_LOGIN_SUCCESS, USER_LOGOUT} from '../actions/login/loginAction'

//Constants
import {localStorageJwtKey} from '../constants'

let initialState = null
try {
  const jwt = localStorage.getItem(localStorageJwtKey)
  if (jwt) {
    initialState = { jwt }
  }
}
catch (e) {
  console.log(`Error retrieving data from local storage`, e)
}

export default function (state = initialState, {type, payload}) {
	switch (type) {
		case USER_LOGIN_SUCCESS:
      localStorage.setItem(localStorageJwtKey, payload.jwt)
			return payload

    case USER_LOGOUT:
      localStorage.removeItem(localStorageJwtKey)
      return null

		default:
      return state
	}
}
