import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer/authReducer';
import { reducer as formReducer } from 'redux-form';
// import { userReducer } from './user-reducer/userReducer';
// import { cartReducer } from './cart-reducer/cartReducer';

const rootReducer = combineReducers({
	authReducer: authReducer,
	formReducer: formReducer,
	// userReducer: userReducer,
	// cartReducer: cartReducer,
});

export default rootReducer;
