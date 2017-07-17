import React, { Component, PropTypes } from 'react';
import { Button,FormGroup,ControlLabel,FormControl,HelpBlock,Col,Row,Clearfix} from 'react-bootstrap';



// component 

import ClientDashboard from './user/dashboard/dashboard';
// redux

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions  from '../actions/UserActions';
import * as SiteActions  from '../actions/SiteActions';

 class Login extends Component{


	constructor(props){

		super(props);
		this.state ={

			'configs':this.props.configs,
			'UserName':'',
			'PassWD':'',
		};
		
		
	}

	handleLogin=(event)=>{

		var data ={UserName:this.state.UserName,PassWord:this.state.PassWD};
		this.props.Useractions.LoginUser(data);
		
	};
	handleUsername=(event)=>{

		this.setState(

			{ 
				UserName: event.target.value,
				PassWD:this.state.PassWD
			}

			);
	
	};
	handleUsernameonBlur=(event)=>{

		//console.log(event.target.value);

		//this.setState({ UserName: event.target.value });


	};

	handlePasswd=(event)=>{

			this.setState(

				{ 	UserName: this.state.UserName,
					PassWD: event.target.value
				}

				);

	}


	handlePasswdonBlur=(event)=>{

			//this.setState({ PassWD: event.target.value });

	}
	// check 
	validate =()=>{

		 // const lengthU = this.state.UserName.length;
   //  	 if (lengthU < 6) return 'error';
   //  	 else return 'success';
	}
	render(){
		const { Users, Useractions } = this.props;
				if(Users.isLogin==false){
			return(	<div className="row id-page">

					<Row>
					<Col sm={12} xs={12} md={6} lg={6}>
						<p className="note"> Chỉ với một tài khoản {this.state.configs.nameSite} ID,sử dụng được tất cả các sản phẩm của {this.state.configs.nameSite}.</p>
						<Button className="nts91-btn nts91-btn-reg" bsStyle="primary">Đăng ký</Button>
						<h3  className="other-login">Hoặc đăng nhập với tài khoản khác</h3>
							<a className="btn btn-primary nts91-btn btn-login-other nts91-btn-fb">
							<i className="fa fa-facebook"></i>
							Facebook
							</a>
							<a className="btn btn-primary nts91-btn btn-login-other nts91-btn-gg">
							<i className="fa fa-google-plus" ></i>
							Google+
							</a>
					</Col>
					<Col sm={12} xs={12} md={6} lg={6} >
						<form  className="flogin" autoComplete="off">
							<h2>Đăng nhập</h2>
							<FormGroup validationState={this.validate()} >
								<FormControl autoComplete="off" value={this.state.UserName}  type="text" placeholder="Tên, email hoặc số điện thoại" onChange={this.handleUsername} ></FormControl>
								<FormControl.Feedback />
							</FormGroup>
							<FormGroup>
								<FormControl autoComplete="off" value={this.state.PassWD}  type="password" placeholder="Mật khẩu" onChange={this.handlePasswd} onBlur={this.handleUsernameonBlur} ></FormControl>
								<FormControl.Feedback />
							</FormGroup>
							<FormGroup>
								<HelpBlock></HelpBlock>
								<a>Quyên mật khẩu </a>
								<Button onClick={this.handleLogin} className="nts91-btn nts91-btn-login" bsStyle="success">Đăng nhập</Button>
								<p>{Users.UserName}</p>
							</FormGroup>
						</form>

					</Col>
					</Row>
				</div>);


				}else{


					
					return(<div className="user-page">

							<ClientDashboard {...this.props} />

						</div>);
				}

			
	}

}

function mapStateToProps(state){

	return{

		Users:state.userReducers,
		Sites:state.siteReducers,
	};

}

function mapDispatchToProps(dispatch){

	return{

		Useractions:bindActionCreators(UserActions,dispatch),
		Siteactions:bindActionCreators(SiteActions,dispatch)
	};

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);