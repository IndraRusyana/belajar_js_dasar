var player = [],
	computer = [],
	x = 'gunting',
	y = 'batu';

		if ( x == 'gunting') {
			scorex(x);
		} else if ( y == 'batu') {
			player(scorex(x));
		} else {
			player(scorex(x));
			computer(scorex(x));
		}

function scorex(x) {

	return player.push(x);	
};

console.log(scorex(1));


//function scorey(y) {
//	var computer = 0;
//	for ( var i = 0; i < y.length; i++) {
//		computer += y[i];
//			if ( x == 'gunting' && y == 'batu' || x == 'batu' && y == 'kertas') {
//				y = 1;
//			} else if ( x == 'gunting' && y == 'kertas' || x == 'batu' && y == 'gunting') {
//				y = 0;
//			} else {
//				y = 0;
//			}
//	}
//	return computer;
//	};
//	alert(scorex('gunting','kertas'));