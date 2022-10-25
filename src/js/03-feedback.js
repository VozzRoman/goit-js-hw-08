
import throttle from 'lodash.throttle';
const formRefs = document.querySelector('.feedback-form');


formRefs.addEventListener('submit',onSubmit);
function onSubmit(e) {
	e.preventDefault();
	localStorage.removeItem(STOREG__KEY);
	formRefs.reset();
}

formRefs.addEventListener('input', throttle(onFormType, 500));

let dataStorage = {}; 
const STOREG__KEY = "feedback-form-state";

backData();
function onFormType(e) {
	dataStorage[e.target.name] = e.target.value;
	console.log(dataStorage);
	const objectString = JSON.stringify(dataStorage);
	localStorage.setItem(STOREG__KEY,objectString);
}


function backData() {
	const savedDate = localStorage.getItem(STOREG__KEY);
	const stringObject = JSON.parse(savedDate);

// для того что бы внести данные в форму нужно получить ссылку к каждому импуту
	const email = document.querySelector('input'); 
	const message = document.querySelector('textarea');
	if (stringObject) {
		email.value = stringObject.email;
		message.value = stringObject.message;

	}
	
}