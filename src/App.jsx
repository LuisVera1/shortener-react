import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './Pages';

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />

			<Route path="/user/register" element={<p>Register</p>} />
			<Route path="/user/login" element={<p>Login</p>} />
			<Route path="/user/dashboard" element={<p>dashboard</p>} />

			<Route path="/*" element={<p>404</p>} />
		</Routes>
	);
}

export default App;
