import { combineReducers  } from 'redux';
import userReducers  from './userReducers';
import siteReducers  from './siteReducers';

const rootReducers = combineReducers({

	userReducers,siteReducers

});

export default rootReducers;