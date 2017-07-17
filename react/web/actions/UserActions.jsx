import * as types from '../constants/UsersType';

export function addUser(user){

	return {

		type:types.ADD_USER,
		user
	}

}
export function LoginUser(user){
		return {
		type:types.LOGIN_USER,
		user
	}

}
