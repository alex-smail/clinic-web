import React from 'react';
import { useEffect, useState } from 'react';
import { formatDate } from '../../utils';
import styles from './patients-list.module.css';
import { fetchPatientsData } from '../../api';

export const PatientsList = () => {
	const [patients, setPatients] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const loadPatients = async () => {
		try {
			setIsLoading(true);
			const data = await fetchPatientsData();
			setPatients(data);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		loadPatients();
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
					{patients.map(
						({ id, fullName, phone, complaint, createdAt }) => (
							<tr key={id}>
								<td>{formatDate(createdAt)}</td>
								<td>{fullName}</td>
								<td>{phone}</td>
								<td>{complaint || '—'}</td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</div>
	);
};
