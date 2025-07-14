import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';

import { addPatient, getPatients } from './src/controllers/patients.controller.js';
import { PORT } from './src/config/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json()); // Для обработки JSON-запросов

// API для отправки заявки
app.post('/', async (req, res) => {
  try {
    const { fullName, phone, complaint } = req.body;
    await addPatient(fullName, phone, complaint);
    res.status(201).json({ message: 'Пациент успешно добавлен' });
  } catch (e) {
    console.error('Ошибка при добавлении пациента', e);
    res.status(500).json({ message: 'Ошибка сервера при добавлении пациента' });
  }
});


// Отдаём статику
app.use(express.static(path.join(__dirname, 'dist')));

// Подключение к Mongo и старт сервера
mongoose.connect(process.env.MONGODB_URI).then(() => {
	app.listen(PORT, () => {
		console.log(chalk.green(`Сервер работает: http://localhost:${PORT}`));
	});
});
