import './App.css';
import Header from './layout/Header';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import SignIn from './components/Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact component={Welcome} />
					<Route path='/sign-up' exact component={Signup} />
					<Route path='/login' exact component={SignIn} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
