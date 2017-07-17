import React,{Component,PropTypes} from 'react';

export default class Footers extends Component{

	constructor(props){

		super(props);
		
	}

	render(){

		return(
			<footer className="nts91footer">
				<div className='container'>
					<div className="pull-left">
						<p>Copyright © 2013 NTS91</p>
						<p>Trang web đang chạy thử nhiệm</p>
					</div>
					<div className="pull-right">
						<ul className="nav navbar-nav">
							<li>Hỏi đáp</li>
							<li>Hướng dẫn</li>
							<li>Hỗ trợ</li>
							<li>Liên Hệ</li>
						</ul>
					</div>	
				</div>
			</footer>
			
		);
	}
}