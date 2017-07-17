import React,{ Component,PropTypes } from 'react';

export default class DashboarhNote extends Component{


	constructor(props){

		super(props);
		this.state = this.props;
		console.log(this.state);
	}

	render(){

			return(

				<div className='acccount'> 
					<div className="account_inner">
						Tài khoản({this.state.configs.nameSite} id ):<strong>{this.state.Users.Data.UserAccount}</strong> | Tài khoản id: {this.state.Users.Data.ID} 
					</div>
					
				</div>

			);
	};
}
