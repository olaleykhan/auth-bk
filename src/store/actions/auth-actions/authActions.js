import { AUTH_USER, SIGN_UP } from './authActionTypes';
import { api } from '../../../api/axios';

export const signUp = (signupData) => async (dispatch, state) => {
	console.log(signupData);
	// api.post()
	const response = await api.post(`/authentication-service/auth/signup`, signupData);
	console.log(response);
	// dispatch({
	// 	type: SIGN_UP,
	// 	payload: signupData,
	// });
};

export const signIn = (loginData) => async (dispatch, state) => {
	console.log(loginData);
	// api.post()
	const response = await api.post(`/authentication-service/auth/login`, loginData);
	console.log(response);
	// dispatch({
	// 	type: SIGN_UP,
	// 	payload: signupData,
	// });
};
