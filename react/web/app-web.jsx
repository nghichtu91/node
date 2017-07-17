
// test file xem co chay ko
import React, { Component, PropTypes } from 'react';
import Configs from './configs';
import Menus from './components/menus';
import Footers from './components/footer';
import Login from './components/loginF';



import ReactDOM from 'react-dom';
// redux 

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducers';

import DevTools from './containers/DevTools';
import { persistState } from 'redux-devtools';
const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);



// initialState
const initialState = {}

// Create store
const store = createStore(rootReducer, initialState, enhancer);
//


class NTS91 extends Component{

	constructor(props){
		super(props);
		this.state={
			
			Islogin:false,
			IsKey:null,
		}
	}

	render(){
		return(
				<Provider store={store} >
				<div>
					<header>
						<Menus configs={Configs} />
					</header>
					<section >
						<Login configs={Configs} />
					</section>
					<Footers />
					
				</div>
				</Provider>
			)
	}
}

ReactDOM.render(<NTS91 />,document.getElementById('app') );