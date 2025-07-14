import User from '../model/user.js';

export async function loginUser(email, password) {
	const user = await User.findOne({ email }); // находим пользователя по email
	// если пользователь не найден
	if (!user) {
		throw new Error('Пользователь не найден');
	}

	const isPasswordCorrect = password === user.password; // проверяем пароль

	// если пользователь  не найден
	if (!isPasswordCorrect) {
		throw new Error('Неверный пароль');
	}

	return user;
}
