import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';

import {
  addPatient,
  getPatients,
} from './controllers/patients.controller.js';

import { loginUser } from './controllers/users.controller.js';
import { PORT } from './config/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json()); // Для обработки JSON-запросов

// 🔹 API: добавление пациента
app.post('/api/patients', async (req, res) => {
	try {
		const { fullName, phone, complaint } = req.body;
		await addPatient(fullName, phone, complaint);
		res.status(201).json({ message: 'Пациент успешно добавлен' });
	} catch (e) {
		console.error('Ошибка при добавлении пациента', e);
		res.status(500).json({
			message: 'Ошибка сервера при добавлении пациента',
		});
	}
});

// 🔹 API: авторизация
app.post('/api/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		await loginUser(email, password);
		res.status(200).json({ message: 'Успешный вход' });
	} catch (e) {
		res.status(401).json({ message: e.message });
	}
});

// 🔹 API: получение всех пациентов
app.get('/api/patients', async (req, res) => {
	try {
		const patients = await getPatients();
		res.status(200).json(patients);
	} catch (e) {
		res.status(500).json({ message: 'Ошибка при получении пациентов' });
	}
});

app.use(express.static(path.join(__dirname, 'dist')));

// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

mongoose.connect(process.env.MONGODB_URI).then(() => {
	app.listen(PORT, () => {
		console.log(chalk.green(`Сервер работает: http://localhost:${PORT}`));
	});
});
