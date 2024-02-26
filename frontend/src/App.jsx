import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import SendMoney from './pages/SendMoney';
import Dashboard from './pages/Deshboard';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/signup" />} />
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
