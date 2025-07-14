import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { AppointmentForm } from './pages';
const App = () => {
	return (
		<>
			<Header />
			<div>
				<Routes>
					<Route path="/" element={<AppointmentForm />} />
					{/* <Route path="/login" element={<Authorization />} />
					<Route path="*" element={<Error />} /> */}
				</Routes>
			</div>
		</>
	);
};

export default App;
