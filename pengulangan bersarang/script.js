var y = '';

for ( var x = 10; x > 0; x--) {
	for ( var z = 0 ; z < x; z++){
		y += '*';
	}
	y += '\n';

}
console.log(y);
 
'\n';

var a = '';

for ( var b = 10; b > 0; b--) {
	for ( var c = 0 ; c < b; c++){
		for ( var d = 1; d > b; d++){
			a += '@';
		}
		a += '*';
	}
	a += '\n';

}
console.log(a);