// latihan

function Bus (nama1, trayek1, penumpang1, kas1) {
	this.nama = nama1;
	this.trayek = trayek1;
	this.penumpang = penumpang1;
	this.kas = kas1;

	this.penumpangNaik = function(namapenumpang) {
		this.penumpang.push(namapenumpang);
		return this.penumpang;
	}

	this.penumpangTurun = function(namapenumpang, bayar) {
		if(this.penumpang.length === 0) {
			alert('bus masih kosong');
			return false;
		}

		for (var i = 0; i < this.penumpang.length; i++) {
			if( this.penumpang[i] == namapenumpang ) {
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}
	}	
}

var bus1 = new Bus('indra', ['jogja','paris'], [], 0);
var bus2 = new Bus('budi', ['belanda','jonggol'], [], 0);

