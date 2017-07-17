import React,{Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button,Navbar,Tab,Row,Col,NavItem,TabPane,Nav,NavDropdown,MenuItem,TabContainer,TabContent } from 'react-bootstrap';

import ChangePass from './changes/password';

class UserLogin extends Component{


	constructor(props){

		super(props);
		this.state = {
			'onChangPass':false,
			'Tab':this.props.Tab,
			'User':this.props.Users.Data,

		}
	}
	handleChangePass=(event)=>{

		event.preventDefault();

		if(!this.state.onChangPass){
			ReactDOM.render(<ChangePass />,document.getElementById('nts-change-pass'));
			this.setState({'onChangPass':true});
		}else{

			this.setState({'onChangPass':false});
			ReactDOM.unmountComponentAtNode(document.getElementById('nts-change-pass'));
			console.log('change pass hide');
		}
		

	};
	render(){


		switch(this.state.Tab.id){

			case 'user-login':
			return(

				<div id={this.state.Tab.id} className='user-account user-account-login'>
						<h2>{this.state.Tab.Name}</h2>
						<div className='inforow'>
							<label>
								Tên đăng nhập:
							</label>	
							<div className='infotext'>
								<strong>{this.state.User.UserAccount}</strong>
							</div>
						</div>
						<div className='inforow'>
							<label>
								Email đăng nhập:
							</label>
							<p className='lk_update' >
								<a >
								Cập nhập
							</a>

							</p>
							<span>
								{this.state.User.EmailAccount==''?<i>(Chưa có thông tin)</i>:<p>{this.state.User.EmailAccount}</p>}

							</span>
							
							
						</div>
						<div className='inforow'>
							<label>
								SĐT đăng nhập:
							</label>	
							<p className='lk_update' >
								<a >
								Cập nhập
							</a>

							</p>
							<span>
								{
									this.state.User.PhoneAccount==''?<i>(Chưa có thông tin)</i>:<p>{this.state.User.PhoneAccount}</p>
								}
							</span>
						</div>
						<div className='inforow'>
							<label>
								Mật khẩu:
							</label>	
							<p className='lk_update' >
								<a onClick={this.handleChangePass} >
									Đổi mật khẩu
								</a>
							</p>
							<span>
								*********
							</span>
						</div>

						<div id='nts-change-pass' className="nts-change-pass">

						</div>
				</div>
			);
			case 'user-login-info':
			return(

				<div id={this.state.Tab.id} className='user-account user-account-login'>
						<h2>{this.state.Tab.Name}</h2>
						<div className='inforow'>
							<label>
								Họ tên:
							</label>
							<p className='lk_update' >
								<a >
								Cập nhập
							</a>

							</p>

							<span className=''>
								{this.state.User.FullNamel}
							</span>
						</div>
						<div className='inforow'>
							<label>
								Giới tính:
							</label>
							<div className='infotext'>
								
									{this.state.User.Gender==1?'Nam':'Nữ'}
								
							</div>
				
						</div>
						<div className='inforow'>
							<label>
								Ngày sinh:
							</label>	
							<div className='infotext'>
								
									{this.state.User.Birthday}
								
							</div>
						</div>
						<div className='inforow'>
							<label>
								Địa chỉ:
							</label>	
							<div className='infotext'>
								
									{this.state.User.Address}
								
							</div>
						</div>
						<div className='inforow'>
							<label>
								Tỉnh/Thành phố:
							</label>	
							<div className='infotext'>
								
									{this.state.User.City}
								
							</div>
						</div>

				</div>
			);

			case 'user-login-social':

			return(

					<div id={this.state.Tab.id} className='user-account user-account-login user-login-social '>
						<h2>{this.state.Tab.Name}</h2>
						{
							
							this.state.User.Social.map((item,index)=>(

							<div key={index} className={ item.Status==true?'inforow active':'inforow' }>
							<label>
							 	<p className="img-circle icon icon-google">
							 		<i className={ item.Type=='google'?'fa fa-google-plus':'fa fa-facebook' }></i></p> 
							</label>
							{
								item.Status==true?<p className="lk_update" ><a >Bỏ kết nối</a></p>:''
							}
							<span className='infotext'>{item.Email}</span>
						</div>

							))
						}
						
						


						
						
						

				</div>

				);
			case 'user-login-security':
			return(

					<div id={this.state.Tab.id} className='user-account user-account-login'>
						<h2>{this.state.Tab.Name}</h2>
						<div className='inforow'>
							<label>
								CMND:
							</label>
							<p className='lk_update' >
								<a >
								Bỏ kết nối
							</a>

							</p>

							<span className='infotext'>
									<Button >Kết nối</Button>
							</span>
						</div>
						<div className='inforow'>
							<label>
								Email bảo vệ:
							</label>
							<p className='lk_update' >
								<a >
								Bỏ kết nối
							</a>

							</p>
							<span className='infotext'>
								
									<Button >Kết nối</Button>
								
							</span>
							
						</div>
						<div className='inforow'>
							<label>
								SĐT bảo vệ:
							</label>
							<p className='lk_update' >
								<a >
								Bỏ kết nối
							</a>

							</p>
							<span className='infotext'>
								
									<Button >Kết nối</Button>
								
							</span>
							
						</div>
						<div className='inforow'>
							<label>
								Mã Game bảo vệ:
							</label>
							<p className='lk_update' >
								<a >
								Bỏ kết nối
							</a>

							</p>
							<span className='infotext'>
								
									<Button >Kết nối</Button>
								
							</span>
							
						</div>

						<div className='inforow'>
							<label>
								Câu Hỏi bảo vệ:
							</label>
							<p className='lk_update' >
								<a >
								Bỏ kết nối
							</a>

							</p>
							<span className='infotext'>
								
									<Button >Kết nối</Button>
								
							</span>
							
						</div>
						

				</div>

				);
			default:
			return(

				<div className='user-account user-account-login'>{this.state.Tab.Name}</div>

			);
		}
	}
}


export default class UserTabs extends Component {


	constructor(props){

		super(props);

		this.state = {
			'User':this.props.Users,
			'Configs':this.props.configs,
			'Tabs':[
				{
					'id':'user-login',
					'Name':'Thông tin đăng nhập',
					'status':true,
					'Des':'Quản lý thông tin dùng để đăng nhập',
					'Icon':'user-circle'
				},
				{
					'id':'user-login-info',
					'Name':'Thông tin chung',
					'status':true,
					'Des':'Xem và cập nhật thông tin cá nhân',
					'Icon':'bars'
				},
				{
					'id':'user-login-social',
					'Name':'Thông tin kết nối',
					'status':true,
					'Des':"Kết nối tài khoản "+this.props.configs.nameSite+" id với tài khoản Facebook, Google, Yahoo",
					'Icon':'share-alt-square'
				},
				{
					'id':'user-login-security',
					'Name':'Bảo vệ tài khoản',
					'status':true,
					'Des':'Chức năng hỗ trợ bảo vệ tài khoản',
					'Icon':'shield'
				},
			]
		}

	}

	render(){

		return(

				<Tab.Container className="id-page" id="left-tabs-nts91" defaultActiveKey={this.state.Tabs[0]['id']}>
    <Row className="">
      <Col sm={4}>
        <Nav bsStyle="pills" stacked>
        	{
        		this.state.Tabs.map((item,key)=>(

        			 <NavItem key={key} eventKey={item.id}>
        			 	 <em>
           				 		<i className={"fa fa-"+item.Icon} ></i>
           				 	</em>
           				 <span>

           				 {item.Name}
           				 <span>{item.Des}</span>
           				 </span>
           				 <p className='clearfix'></p>
         			 </NavItem>


        		))
        	}
         
    
        </Nav>
      </Col>
      <Col sm={8}>
        <Tab.Content animation>
          
          {
        		this.state.Tabs.map((item,key)=>(

        			<Tab.Pane key={key} eventKey={item.id}>
        			
        			    <UserLogin Tab={item} {...this.props} />
        			
           				 
          		    </Tab.Pane>


        		))
        	}
         

        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>



			);
	}

}