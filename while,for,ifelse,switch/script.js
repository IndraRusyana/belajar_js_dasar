//** while for **//

var jmlmobil = 10;
var mobilbagus = 6;
var nomobil = 1;

while(nomobil <= mobilbagus){
	console.log('mobil no. ' + nomobil + ' berangkat dengan baik.');
nomobil++;
}

for(nomobil = mobilbagus + 1;nomobil <= jmlmobil;nomobil++){
	console.log('mobil no. ' + nomobil + ' rusak')
}

//** if else **//

var jmlbus = 10,
	busbagus = 6,
	nobus = 1;



for(nobus; nobus <= jmlbus; nobus++){
 	if (nobus <= busbagus && nobus !== 5) {
 		console.log('bus ' + nobus + ' keadaaan bagus');
 	} else if (nobus == 5 || nobus == 8 || nobus == 10){
 		console.log('bus ' + nobus + ' keadaaan mogok');
 	} else {
 		console.log('bus ' + nobus + ' keadaaan jelek');
 	}
}

//** switch*//




var x = prompt( 'masukan abjad / angka : \n cth : ( a,b,c/1,2,3 ) ');

switch( x ) {
	case 'a' :
	case 'b' :
	case 'c' :
	case 'd' :
		alert ('anda memasukan abjad');
		break;

	case '1' :
	case '2' :
	case '3' :
		alert ('anda memasukan angka');
		break;
	default :
		alert ('anda memasukan abjad yang salah');
		break;
}



alert('terima kasih ');