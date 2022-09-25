// function Penjumlahan(a, b) {
// 	var total = 0;

// 	for ( var i = 0; i < arguments.length; i++) {
// 		total += arguments[i];
// 	}
// 	return total;
// }

// var a = prompt('masukan bilangan pertama');
// var	b = prompt('masukan bilangan kedua');


function VolumeKubus(a) {
	var volumeA;

	volumeA = a * a * a;

	return volumeA; 
}

var a = prompt('masukan bilangan pertama');

alert(VolumeKubus(a));