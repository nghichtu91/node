import {ADD_USER,LOGIN_USER} from '../constants/UsersType';
import DataSam from '../data';
const initialState={
	'isLogin':false
};
export default function userReducer(state=initialState,action){
	switch(action.type){
		case LOGIN_USER:
		 var u = action.user.UserName;
		 console.log(DataSam[0][u]);
		if(DataSam[0][u]){
			return {
				'isLogin':true,
				'UserName':action.user.UserName,
				'PassWord':action.user.PassWord,
				'Data':DataSam[0][u],
			};
		}else{
			return state;
		}
		
		default:
		return state;

	}
}