import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components';
import { AppointmentForm, Authorization, PatientsList } from './pages';

const App = () => {
	const location = useLocation(); // для определения текущего маршрута
	const hideHeader = location.pathname === '/login' || location.pathname === '/patients'; // если текущий маршрут равен '/login', то скрыть заголовок

	return (
		<>
			{!hideHeader && <Header />}
			<div>
				<Routes>
					<Route path="/" element={<AppointmentForm />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/patients" element={<PatientsList />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
