//** penulisan array **//

var a = ['satu','dua','tiga'];
console.log(a[0]);


var b = [];
b[0] = 'empat';
b[1] = 'lima';
b[2] = 'enam';
console.log(b[1]);

//** menghapus isi array **//

var c = ['indra','rusyana'];
c[1] = undefined;
console.log(c[1]);

//** menampilkan isi array **//

var d = ['indra','rusyana','ededa','adadawdad','adaadw','awdawd'];

for (var i = 0;i < d.length;i++){
console.log('urutan ke-' + (i+1) + ' : ' + d[i]);
}

//** method join **//

var e = ['a','b','c','d','e','f'];
console.log(e.join(' - '));

//** method push **//

e.push('g','h');
console.log(e.join(' - '));

//** method pop **//

e.pop();
e.pop();
console.log(e.join(' - '));

//** method unshift **//

e.unshift('1');
console.log(e.join(' - '));

//** method shift **//

e.shift('1');
console.log(e.join(' - '));

//** method splice **//

e.splice(2, 1, 'sabeb', 'ndad');
console.log(e.join(' - '));

//** method slice **//

var f = e.slice(2,5);
console.log(f.join(' '));

//** method foreach **//

e.forEach(function(g, i) {
	console.log('urutan ke- ' + (i+1) + ' adalah ' + g);
});

//** method map **//

var y = [undefined,2,1,4,8,6,5,7,3];

var z = y.map(function(x) {
	return x;
});

console.log(z.join(' '));

//** method sort **//

y.sort();
console.log(y.join(' '));

//** method filter **//

var hasil = y.filter(function(j){
	return j <= 5;
});
console.log(hasil.join(' '));

//** method find **//

var hasil2 = y.find(function(k){
	return k > 5;
});
console.log(hasil2);

var hasil3 = y.filter(function(l){
	return l = undefined;
});
console.log(hasil3);