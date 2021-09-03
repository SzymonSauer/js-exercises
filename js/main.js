const btnZoom = document.querySelector('.sizeUp');
const btnReduce = document.querySelector('.sizeDown');
const btnColor = document.querySelector('.color');
const text = document.querySelector('p');

let $size = 36;

const increase = () => {
	$size += 5;
	text.style.fontSize = $size + 'px';
};

const decrease = () => {
	$size -= 5;
	text.style.fontSize = $size + 'px';
};

const randomColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	text.style.color = `rgb(${r},${g},${b})`;
};

btnZoom.addEventListener('click', increase);
btnReduce.addEventListener('click', decrease);
btnColor.addEventListener('click', randomColor);
