//Создаем метод перемешивания массивов

Array.prototype.shuffle = function () {

	if (this.length == 1) return this;

	for (var i = j = x = this.length; i;) {

		j = Math.floor(Math.random() * i);

		x = this[--i];

		this[i] = this[j];

		this[j] = x;

	}

	return this;

}



//Создаем вводные переменные

var wordList = ['МАНГО', 'СОРГО', 'ТАНГО', 'РОТОР', 'ВЫХУХОЛЬ'];

var title = document.querySelector('#title');

var currentWord = "";
var numWin = 0;
var numLose = 0;
var TTL = 10;
var secondsLeft = 0;
var timer = null;
var strTimer = null;
var txtResult = null;
var btnStart = null;

// Функция получения нового слова и начала игры
function getNewWord() {
	if (!wordList.length) {
		title.innerHTML = 'Игра закончена!';
		if (numWin > numLose) {
			document.querySelector('h3').innerHTML = 'Победа,' + 'ты угадал: ' + numWin.toString();
		} else {
			document.querySelector('h3').innerHTML = 'Печалька,' + 'ты угадал всего лишь: ' + numWin.toString();
		}
		// document.querySelector('h3').innerHTML = 'Игра закончена!';
		return;
	}
	currentWord = wordList.shuffle().shift();
	document.querySelector('#word').innerHTML = currentWord.split("").shuffle().join("");
	secondsLeft = TTL;
	strTimer.innerHTML = secondsLeft;


	txtResult.value = "";
	txtResult.focus();
	btnStart.disabled = "disabled";
	title.innerHTML = 'Игра началась';
	timer = setInterval(getTime, 1000);
}


// Функция проверки ввода и учета правильных ответов
function checkInput() {
	if (txtResult.value.toUpperCase() === currentWord) {

		//debugger;
		numWin++;
		document.querySelector('#win').innerHTML = numWin.toString();

		clearInterval(timer);
		btnStart.disabled = "";
		title.innerHTML = 'Умничка!';
	}
}
// Функция обработки таймера и учета неудачных попыток
function getTime() {
	secondsLeft--;

	strTimer.innerHTML = secondsLeft;

	if (secondsLeft <= 0) {

		numLose++;
		document.querySelector('#lose').innerHTML = numLose;

		clearInterval(timer);
		btnStart.disabled = "";
		title.innerHTML = 'Ты не успел';

	}



}

// Функция инициализации
window.onload = function () {

	txtResult = document.querySelector('#input1');
	txtResult.addEventListener('keyup', checkInput);
	btnStart = document.querySelector("#btn");
	btnStart.addEventListener('click', getNewWord);
	strTimer = document.querySelector('#time1');
	strTimer.innerHTML = secondsLeft;
	document.querySelector('#time2').innerHTML = TTL;
	title.innerHTML = 'Начни игру';


};