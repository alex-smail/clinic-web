import { Button, Input } from '../../components';
import styles from './authorization.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Authorization = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setIsFormValid(email.trim() !== '' && password.trim() !== '');
	}, [email, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			});

			if (response.redirected) {
				navigate('/patients'); // Перенаправляем на страницу заявок
			} else {
				const data = await response.text(); // Получаем текст ответа
				if (data.includes('error')) {
					setError('Неверный логин или пароль');
				}
			}
		} catch (err) {
			console.error(err);
			setError('Ошибка при авторизации');
		}
	};

	return (
		<div className={styles.formContainer}>
			<h2 className={styles.title}>Авторизация</h2>
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input
					placeholder="Email"
					type="email"
					value={email}
					onChange={({ target }) => setEmail(target.value)}
					required
				/>
				<Input
					type="password"
					placeholder="Пароль"
					value={password}
					onChange={({ target }) => setPassword(target.value)}
					required
				/>
				{error && <p className={styles.error}>{error}</p>}
				<Button type="submit" disabled={!isFormValid}>
					Авторизоваться
				</Button>
			</form>
		</div>
	);
};
