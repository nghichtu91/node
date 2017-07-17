import React,{Component, PropTypes} from 'react';
import {Form ,Button,FormGroup,ControlLabel,FormControl,HelpBlock,Col,Row,Clearfix} from 'react-bootstrap';

export default class ChangePass extends Component{

	constructor(props){

		super(props);
		this.state = this.props;
	}
	render(){


		return(

      <div className="n91-change-pass-group">
			<div id="ChangePass" className="ChangePass">
				<p>Mật Khẩu:</p>
				<div className="fchange">
					<Form id="change-pass-f" bsClass="change-pass-f" horizontal>
					<FormGroup controlId="pass-curent">
      					<Col componentClass={ControlLabel} sm={5}>Mật khẩu hiện tại:</Col>
      					<Col sm={7}>
        					<FormControl type="password" placeholder="" />
      					</Col>
    				</FormGroup>
    				<FormGroup controlId="pass-new">
      					<Col componentClass={ControlLabel} sm={5}>Mật khẩu mới:</Col>
      					<Col sm={7}>
        					<FormControl type="password" placeholder="" />
      					</Col>
    				</FormGroup>
    				<FormGroup controlId="pass-reply">
      					<Col componentClass={ControlLabel} sm={5}>Xác nhận mật khẩu:</Col>
      					<Col sm={7}>
        					<FormControl type="password" placeholder="" />
      					</Col>
    				</FormGroup>
    				<FormGroup controlId="sVerifyCode">
      					<Col componentClass={ControlLabel} sm={5}>Nhập mã kiểm tra:</Col>
      					<Col sm={7}>
        					<FormControl type="password" placeholder="" />
      					</Col>
    				</FormGroup>
					</Form>
				</div>
				
			</div>
      </div>
		);
	}

}