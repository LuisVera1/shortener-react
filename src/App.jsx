import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path="/" element={<p>home</p>} />

			<Route path="/user/register" element={<p>Register</p>} />
			<Route path="/user/login" element={<p>Login</p>} />
			<Route path="/user/dashboard" element={<p>dashboard</p>} />

			<Route path="/*" element={<p>404</p>} />
		</Routes>
	);
}

export default App;
