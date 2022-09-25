var again = true;

while(again) {
var x = prompt('Masukkan Angka Pertama ?');
var z = prompt('1).Tambah 2).Kurang 3).Kali 4).Bagi 5).pangkat');
var y = prompt('Masukkan Angka Kedua ?');

var hasilT = tambah(x,y);
	hasilKu = Kurang(x,y);
	hasilKa = kali(x,y);
	hasilB = bagi(x,y);
	hasilP = pangkat(x,y);

function tambah(x, y) {
	return parseInt(x) + parseInt(y) ;
}

function Kurang(x, y) {
	return x - y ;
}

function kali(x, y) {
	return x * y ;
}

function bagi(x, y) {
	return x / y ;
}

function pangkat(x, y) {
	return  Math.pow(x,y)
}

if (z == 1) {
	alert(x + ' + ' + y + ' = ' + tambah(x,y));
} else if (z == 2) {
	alert(x + ' - ' + y + ' = ' + Kurang(x,y));
} else if (z == 3) {
	alert(x + ' X ' + y + ' = ' + kali(x,y));
} else if (z == 4) {
	alert(x + ' / ' + y + ' = ' + bagi(x,y));
} else{
	alert(x + ' pangkat ' + y + ' = ' + pangkat(x,y));
}

again = confirm('Ulangi ?');

}
