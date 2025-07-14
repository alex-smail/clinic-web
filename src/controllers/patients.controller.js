import chalk from 'chalk'; // Для стилизации консольных сообщений
import Patient from '../model/patient.js';

// Добавляем новую запись к врачу
async function addPatient(fullName, phone, complaint) {
	await Patient.create({ fullName, phone, complaint });
	console.log(chalk.bgGreen('Patient was added'));
}

// Получаем массив всех пациентов
async function getPatients() {
	const patients = await Patient.find();
	return patients;
}

export { addPatient, getPatients };
