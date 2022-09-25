// event handler
// inline html
const p3 = document.querySelector('.p3');

function ubahwarnap3() {
	p3.style.backgroundColor = 'blue';
}

// event handler
// method

const p2 = document.querySelector('.p2');

function ubahwarnap2() {
	p2.style.backgroundColor = 'orange';
}

p2.onclick = ubahwarnap2;


// addEventListener();

const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function() {
	const ul = document.querySelector('section#b ul');
	const libaru = document.createElement('li');
	const textbaru = document.createTextNode('pake js borr');

	libaru.appendChild(textbaru);
	ul.appendChild(libaru);
});


// perbedaan eventhandler & eventlistener
// event handler
const p1 = document.querySelector('.p1');
// p1.onclick = function() {
// 	p1.style.backgroundColor = 'red';
// }
// p1.onclick = function() {
// 	p1.style.color = 'white';
// }
// event listener
// p1.addEventListener ('mouseenter', function() {
// 	p1.style.backgroundColor = 'red';
// });
// p1.addEventListener ('mouseleave', function() {
// 	p1.style.backgroundColor = 'blue';
// });







