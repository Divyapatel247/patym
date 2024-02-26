import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import SendMoney from './pages/SendMoney';
import Dashboard from './pages/Deshboard';
import Cookies from 'js-cookie'
import { useLayoutEffect, useState } from 'react';

function App() {
	const [LoggedIn,setLoggedIn] = useState(false);

	useLayoutEffect(() => {
		const access = Cookies.get('access_token')
		if ( access) {
		  setLoggedIn(true);
		}
	  }, []);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={LoggedIn ? <Navigate to="/dashboard"/> :<Navigate to="/signup" />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<Signin />} />
					<Route element={<PrivateRoutes />}>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/send" element={<SendMoney />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

const PrivateRoutes = () => {
	const token = localStorage.getItem('token');
	let auth = { token: token };
	return auth.token ? <Outlet /> : <Navigate to="/signin" />;
};

export default App;
