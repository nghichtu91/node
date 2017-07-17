import React,{Component,PropTypes} from 'react';
import { Button,Navbar,NavItem,Nav,NavDropdown,MenuItem } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions  from '../actions/UserActions';


class MENUS extends Component{


	constructor(props){

		super(props);


	}

	render(){
    const { Users, Useractions } = this.props;
    var mesager='';
    if(Users.isLogin){

      mesager=<div className='nts91-user-login pull-right'><p>Chào {Users.UserName}</p><a>Thoát</a></div>
    }
		return(

				<Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">NTS91 ID</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    
      {mesager}
    
  </Navbar>

			);
	}
}



function mapStateToProps(state){

  return{

    Users:state.userReducers
  };

}

function mapDispatchToProps(dispatch){

  return{

    Useractions:bindActionCreators(UserActions,dispatch)
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(MENUS);