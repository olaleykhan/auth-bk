import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
	return (
		<>
			<Nav>
				<NavItem to='/'> Home</NavItem>
				<NavItem to='/login'> Sign in</NavItem>
				<NavItem to='/sign-up'> Sign Up</NavItem>
			</Nav>
		</>
	);
};

export default Header;

const NavItem = styled(Link)`
	text-decoration: none;
	padding: 5px 20px;
	color: orange;
	border: 1px solid orange;
	border-radius: 5px;
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-evenly;
	width: 40%;
	margin: 10px auto;
`;
