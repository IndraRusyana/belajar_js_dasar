var a = ['bekasi','jakarta','bandung'];
console.log(a);

var b = [];
b[0] = 'bekasi';
b[1] = 'jakarta';
b[2] = 'bandung';
console.log(b);

var c = ['bekasi','jakarta','bandung'];
console.log(c);
c[2] = undefined;
console.log(c);

var d = ['bekasi','jakarta','bandung'];
for (var i = 0; i < d.length; i++) {
	console.log(d[i]); 
}

var e = ['bekasi','jakarta','bandung'];
console.log(e.join(' @ '));

e.push('jogja');
console.log(e);

e.pop();
console.log(e.join(' @ '));

e.unshift('eeee');
console.log(e.join(' @ '));

e.shift('eeee');
console.log(e.join(' @ '));

e.splice(1, 2, 'tokyo','LA');
console.log(e.join(' @ '));

var f = e.slice(0);
console.log(f.join(' '));