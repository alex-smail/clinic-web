import { useEffect, useState } from 'react';
import { formatDate } from '../../utils';
import styles from './patients-list.module.css';

export const PatientsList = () => {
	const [patients, setPatients] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPatients = async () => {
			try {
				setIsLoading(true);
				const response = await fetch('/patients');
				if (!response.ok) {
					throw new Error('Ошибка при загрузке данных');
				}
				const data = await response.json();
				setPatients(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPatients();
	}, []);

	if (isLoading) return <p>Загрузка данных...</p>;
	if (error) return <p>Ошибка: {error}</p>;

	return (
		<div>
			<h2>Список пациентов</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Дата отправки</th>
						<th>ФИО</th>
						<th>Телефон</th>
						<th>Проблема</th>
					</tr>
				</thead>
				<tbody>
					{patients.map(({ id, fullName, phone, complaint, createdAt }) => (
						<tr key={id}>
							<td>{formatDate(createdAt)}</td>
							<td>{fullName}</td>
							<td>{phone}</td>
							<td>{complaint || '—'}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
