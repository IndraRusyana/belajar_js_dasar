// dom seletion

// ####document.getElementById()

const judul1 = document.getElementById('judul');
judul1.style.color = 'red';
judul1.style.backgroundColor = '#ccc';
judul1.innerHTML = 'ina';



// ####document.getElementsByTagName() 
// html collection

// const paragraf = document.getElementsByTagName('p');
// paragraf[0].style.color = 'blue';

// for (let i = 0; i < paragraf.length; i++) {
// 	paragraf[i].style.backgroundColor = 'red';
// }
//  const h1 = document.getElementsByTagName('h1')[0];
//  h1.style.fontSize = '60px';



// ####document.getElementsByClassName()
// html collection

// const p2 = document.getElementsByClassName('p2');
// p2[0].innerHTML = 'dari js';



// ####document.querySelector()
// menghasilkan element

// const p4 = document.querySelector('#b p');
// p4.style.color = 'yellow'
// p4.style.fontSize = '50px'

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.innerHTML = 'pake javascript';
// li2.style.backgroundColor = 'lightblue';



// ####document.querySelectorAll()

// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
// 	p[i].style.color = 'salmon';
// }
// p[2].style.backgroundColor = 'blue';





// ####node root(other)

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';

















