import React,{Component,PropTypes} from 'react';

// bootstrap

import { Button,Navbar,NavItem,Nav,NavDropdown,MenuItem } from 'react-bootstrap';

// component 

import DashboarhNote from './note';
import UserTabs from './userTabs';

export default class ClientU extends Component{


	constructor(props){

		super(props);
		this.state = this.props;
	}

	render(){
		return(
			<div>
					<DashboarhNote {...this.props} />


					<UserTabs  {...this.props} />
			</div> 
			
		);
	}

}








