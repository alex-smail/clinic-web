export const hasValidPhoneDigits = (phone) => {
	const onlyDigits = phone.replace(/\D/g, ''); // удаляем всё, кроме цифр
	const isPhoneComplete = onlyDigits.length === 11; // проверям тел на длину ввода
	
	return isPhoneComplete;
};
