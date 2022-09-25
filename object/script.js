// membuat object literal 

var mhs1 = {
	nama : 'indra',
	umur : 18,
	asal : 'ciamis',
	nilai : [8.5 , 8.6 , 9.0 , 8.8],
	alamat : {
		kota : 'bekasi',
		provinsi : 'jawa barat',
		negara : 'indonesia'
	}
};

var mhs2 = {
	nama : 'jancok',
	umur : 18,
	asal : 'apaja',
	nilai : [8.5 , 8.6 , 9.0 , 8.8],
	alamat : {
		kota : 'bekasi',
		provinsi : 'jawa barat',
		negara : 'indonesia'
	}
};

// function declaration

function buatobjectmhs(nama1, umur1, asal1, nilai1) {
	var mhs ={};
	mhs.nama = nama1;
	mhs.umur = umur1;
	mhs.asal = asal1;
	mhs.nilai = nilai1;
	return mhs;
} 

var mhs3 = buatobjectmhs('jjjj', 20, 'jogja', 80);
var mhs4 = buatobjectmhs('jojo', 21, 'bandung', 90);

// constructor

function Mahasiswa(nama2, umur2, asal2, nilai2) {
	// var this = {};
	this.nama = nama2;
	this.umur = umur2;
	this.asal = asal2;
	this.nilai = nilai2;
	// return this;
}

var mhs5 = new Mahasiswa('budi', 17, 'bekasi', 80);














