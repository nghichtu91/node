import * as types from '../constants/SiteTypes';


export function addOption(opt){

	return {

		type:types.ADD_OPTION,
		opt
	}

}

export function ExitOption(id,opt){

	return {

		type:types.ADD_OPTION,
		id,
		opt
	}

}


export function DelOption(id){

	return {

		type:types.ADD_OPTION,
		id
	}

}