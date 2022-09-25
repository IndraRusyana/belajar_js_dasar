const ubahbg = document.getElementById('tombol1');

ubahbg.addEventListener('click', function() {
	document.body.style.backgroundColor = 'red';
	// document.body.setAttribute('class', 'biru-muda');
	// document.body.classList.toggle('biru-muda');

});

const tombol2 = document.createElement('button');
const texttombol2 = document.createTextNode('ubahrandom');
 tombol2.appendChild(texttombol2);
 tombol2.setAttribute('type', 'button');

 ubahbg.after(tombol2);

 tombol2.onclick = function () {
 	const r = Math.round(Math.random() * 255 + 2);
 	const g = Math.round(Math.random() * 255 + 2);
	const b = Math.round(Math.random() * 255 + 2);

 	document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
 }



const smerah = document.querySelector('input[name=merah');
const shijau = document.querySelector('input[name=hijau');
const sbiru = document.querySelector('input[name=biru');


smerah.addEventListener('input', function() {
	const red = smerah.value;
	const green = shijau.value;
	const blue = sbiru.value;

	document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
});

shijau.addEventListener('input', function() {
	const red = smerah.value;
	const green = shijau.value;
	const blue = sbiru.value;

	document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
});

sbiru.addEventListener('input', function() {
	const red = smerah.value;
	const green = shijau.value;
	const blue = sbiru.value;

	document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
});



document.body.addEventListener('mousemove', function (event) {
	const xpos = Math.round((event.clientX / window.innerWidth) * 255);
	const ypos = Math.round((event.clientY / window.innerWidth) * 255);
	
	document.body.style.backgroundColor = ('rgb(' + xpos + ',' + ypos + ',100)');
})





















