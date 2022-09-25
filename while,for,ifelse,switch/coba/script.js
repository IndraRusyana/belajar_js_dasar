x = true;

while(x){
var a = prompt('Masukkan Nilai Pertama');	
var b = prompt('Masukkan Nilai Kedua');	
var c = prompt('Masukkan Nilai Ketiga');
var d = prompt('Masukkan Nilai Keempat');
var hasil = pembagian();


function penjumlahan(a, b, c, d) { 
	return parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);
}

function pembagian() {
	return penjumlahan(a,b,c,d) / 4 ;
}

if(hasil < 75) {
	alert('Anda Remedial ' + pembagian());
}else{
	alert('Anda Lulus ' + pembagian());
}

x = confirm( ' Ulangi ?');

}	

