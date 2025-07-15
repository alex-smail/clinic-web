export async function fetchPatientsData() {
	const response = await fetch('/api/patients');
	if (!response.ok) {
		throw new Error('Ошибка при загрузке данных');
	}
	return await response.json();
}
