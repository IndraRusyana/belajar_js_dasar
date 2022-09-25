alert('Wellcome To Game Suit Cina')
var a = prompt('HARAP MASUKAN NAMA ANDA?');

var z = true;

while( z ) {

var x = prompt('silahkan pilih \n ( gunting, batu, kertas )');

var y = Math.random();

if ( y < 0.3 ) {
	y = 'gunting';
} else if ( y >= 0.31 && y < 0.6 ) {
	y = 'batu';
} else {
	y= 'kertas';
}

var hasil = '';

if ( x == 'gunting' ) {
	if ( y == 'batu' ) {
		hasil =' ANDA KALAH!' ;
	} else if ( y == 'kertas' ){
		hasil = ' ANDA MENANG';
	} else {
		hasil = ' ANDA SERI!';
	}
} else if ( x == 'batu' ) {
	if ( y == 'gunting' ) {
		hasil = ' ANDA MENANG!';
	} else if ( y == 'kertas' ) {
		hasil = ' ANDA KALAH!';
	} else {
		hasil = ' ANDA SERI!';
	}
} else if ( x == 'kertas' ) {
	if ( y = 'gunting' ) {
		hasil = ' ANDA KALAH!';
	} else if ( y == 'batu' ) {
		hasil = ' ANDA MENANG!';
	} else {
		hasil = ' ANDA SERI!';
	}
} else {
	hasil = 'ANDA MEMASUKAN KARAKTER YANG SALAH!';
}


alert( x + ' vs ' + y + hasil + ' \n ' + a + ' = ' + scorex(x,y) + ' comp = ' + scorey(x,y) );

var z = confirm( 'Tanding Ulang ?');

}

alert( 'TERIMA KASIH ' + a + ' TELAH BERMAIN');