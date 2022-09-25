//** function declaration **//

function perkalian(a, b) {
	return a * b;
}
alert('perkalian');
var a = prompt('masukan angka pertama :');
var b = prompt('masukan angka kedua :');

alert('hasilnya ' + perkalian(a, b));

//** function expression **//

var pembagian = function(x, y) {
	return x / y;
}
alert('pembagian');
var x = prompt('masukan angka pertama :');
var y = prompt('masukan angka kedua :');

alert('hasilnya ' + pembagian(x, y));

