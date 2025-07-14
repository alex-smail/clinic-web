import { Button, Input } from '../../components';
import InputMask from 'react-input-mask';
import styles from './appointment-form.module.css';
import { useEffect, useState } from 'react';
import { hasValidPhoneDigits } from './utils';

export const AppointmentForm = () => {
	const [fullName, setFullName] = useState('');
	const [phone, setPhone] = useState('');
	const [complaint, setComplaint] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');

	useEffect(() => {
		const isValid = fullName.trim() !== '' && hasValidPhoneDigits(phone);
		setIsFormValid(isValid);
	}, [fullName, phone]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ fullName, phone, complaint }),
			});

			const data = await response.json();

			if (response.ok) {
				setSuccessMessage('Заявка успешно отправлена!');

				// Сброс формы
				setFullName('');
				setPhone('');
				setComplaint('');
			} else {
				console.error(data.message || 'Ошибка при отправке');
			}
		} catch (err) {
			console.error('Ошибка:', err);
		}
	};

	return (
		<div className={styles.formContainer}>
			<h1 className={styles.title}>Запись к врачу</h1>
			{successMessage && (
				<div className={styles.successMessage}>{successMessage}</div>
			)}
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input
					placeholder="ФИО"
					required
					value={fullName}
					onChange={({ target }) => setFullName(target.value)}
				/>
				<InputMask
					mask="+7 (999) 999-99-99"
					value={phone}
					onChange={({ target }) => setPhone(target.value)}
				>
					{(inputProps) => (
						<Input
							{...inputProps}
							type="tel"
							className={styles.input}
							placeholder="+7 (___) ___-__-__"
							required
						/>
					)}
				</InputMask>
				<textarea
					placeholder="Опишите вашу проблему"
					value={complaint}
					onChange={({ target }) => setComplaint(target.value)}
				/>
				<Button type="submit" disabled={!isFormValid}>
					Отправить
				</Button>
			</form>
		</div>
	);
};
