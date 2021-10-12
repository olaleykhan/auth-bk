// import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';
import { signUp } from '../store/actions/auth-actions/authActions';

//  "first_name": "string",
//   "last_name": "string",
//   "email": "user@example.com",
//   "phone_number": "string",
//   "password": "string"

export class Signup extends Component {
	constructor() {
		super();

		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			phone_number: '',
		};
	}
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { first_name, last_name, email, password, phone_number } = this.state;

		const formData = { first_name, last_name, email, password, phone_number };

		try {
			console.log(formData);
			this.props.signUp(formData);
		} catch (err) {
			console.log('[signup catch error] = ', err);
		}
	};
	render() {
		const { first_name, last_name, email, password, phone_number } = this.state;

		return (
			<div>
				<Form onSubmit={(e) => this.handleSubmit(e)}>
					<div>
						<label> First Name</label>
						<Input type='text' name='first_name' required onChange={this.handleChange} value={first_name}></Input>
					</div>
					<div>
						<label> Last Name</label>
						<Input type='text' name='last_name' required onChange={this.handleChange} value={last_name}></Input>
					</div>
					<div>
						<label> Email </label>
						<Input type='text' name='email' required onChange={this.handleChange} value={email}></Input>
					</div>
					<div>
						<label>Phone Number</label>
						<Input type='text' name='phone_number' required onChange={this.handleChange} value={phone_number}></Input>
					</div>
					<div>
						<label> Password</label>
						<Input type='password' name='password' required onChange={this.handleChange} value={password}></Input>
					</div>

					<button>Submit</button>
				</Form>

				<h2>Sign up here</h2>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	signUp: (value) => dispatch(signUp(value)),
});

export default connect(null, mapDispatchToProps)(Signup);

const Input = styled.input`
	padding: 10px;
	width: 100%;
	font-size: 16px;
	border-radius: 5px;
	border: 1px solid rgba(48, 48, 48, 0.13);
	margin-bottom: 20px;
	margin-top: 10px;
`;
const Form = styled.form`
	width: 50vw;
	min-width: 500px;
	margin: 20px auto;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0px 0px 3px 2px rgba(245, 147, 19, 0.308);
	-webkit-box-shadow: 0px 0px 3px 2px rgba(245, 147, 19, 0.274);
	-moz-box-shadow: 0px 0px 3px 2px rgba(245, 147, 19, 0.397);
`;

// const Signup = () => {
// 	return (
// 		<div>
// 			<form>
// 				<fieldset>
// 					<label> Email</label>
// 					<Field name='email' type='text' component='input' autoComplete='none' />
// 				</fieldset>
// 				<fieldset>
// 					<label> password</label>
// 					<Field name='password' type='password' component='input' />
// 				</fieldset>
// 			</form>

// 			<h2>Sign up here</h2>
// 		</div>
// 	);
// };

// export default reduxForm({ form: 'signup' })(Signup);
