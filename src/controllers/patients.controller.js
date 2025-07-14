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

// // Удаляем заметку
// async function removeNote(id, owner) {
// 	const result = await Note.deleteOne({ _id: id, owner });

// 	if (result.matchedCount === 0) {
// 		throw new Error('Note not found');
// 	}
// 	console.log(chalk.bgGreen('Note was deleted'));
// }

// // Редактируем заметку
// async function editNote(id, title, owner) {
// 	const result = await Note.updateOne({ _id: id, owner }, { title });

// 	if (result.matchedCount === 0) {
// 		throw new Error('Note not found');
// 	}

// 	console.log(chalk.bgGreen('Note was edited'));
// }


export { addPatient, getPatients };
