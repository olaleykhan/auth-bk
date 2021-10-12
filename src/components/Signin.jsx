import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { signIn } from '../store/actions/auth-actions/authActions';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
		const { email, password, phone_number } = this.state;

		const formData = { email, password, phone_number };

		try {
			console.log(formData);
			this.props.signIn(formData);
		} catch (err) {
			console.log('[signup catch error] = ', err);
		}
	};
	render() {
		const { email, password } = this.state;

		return (
			<div className='sign-in'>
				<h2> I already have an account </h2>
				<span> fill in your details below </span>

				<Form onSubmit={this.handleSubmit}>
					<Input type='text' name='email' required onChange={this.handleChange} value={email} />

					<Input
						name='password'
						type='password'
						placeholder='input password'
						value={password}
						required
						onChange={this.handleChange}
						label='password'
					/>
					<div className='submit-btns'>
						<button type='submit'> Submit </button>
					</div>
				</Form>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	signIn: (value) => dispatch(signIn(value)),
});

export default connect(null, mapDispatchToProps)(SignIn);

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
