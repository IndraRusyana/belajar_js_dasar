var penumpang = [];

  var tambahpenumpang = function(namapenumpang, penumpang) {

 //** jika bus kosong **// 
 
 	if ( penumpang.length == 0 ) {
 		//** tambah penumpang di awal array **//
 		penumpang.push(namapenumpang);
 		//** kembalikan isi array & keluar dari function **//
 		return penumpang;
 	} else {
 		//** telusuri suluruh kursi dari awal **//
 		for (var i = 0; i < penumpang.length; i++) {
 			// jika ada kursi kosong //
 			if ( penumpang[i] == undefined ) {
 				// tambah penumpang di kursi tersebut //
 				penumpang[i] = namapenumpang;
 				// kembalikan isi array & keluar dari function //
 				return penumpang;
 			}
 			// jika ada penumpang yang sama //
 			else if ( penumpang[i] == namapenumpang ) {
 				// tampilkan pesan kesalahannya //
 				console.log( namapenumpang + ' sudah ada');
 				// kembalikan isi array & keluar dari fumction //
 				return penumpang;
 			} 
 			// jika kursi terisi //
 			else if ( i == penumpang.length - 1 ) {
 				// tambah penumpang di akhir array //
 				penumpang.push(namapenumpang); 
 				// kembalikan isi array & keluar dari function //
 				return penumpang;
 			}
 		}
 		
 	}

  };
 



var hapuspenumpang = function(namapenumpang, penumpang) {

 	// jika bus kosong //
 	if ( penumpang.length == 0) {
 		// tampilkan pesan bahwa bus masih kosong //
 		console.log( 'bus masih kosong' );
 		//kembalikan isi array & keluar dari function//
 		return penumpang; 
 	} else {
 		// telusuri seluruh kursi dari awal //
 		for (var i = 0; i < penumpang.length; i++) {
 			// jika nama penumpang sesuai //
 			if ( penumpang[i] == namapenumpang ) {
 				// hapus nama penumpang menjadi undefined //
 				penumpang[i] = undefined;
 				// kembalikan isi array & keluar dari function //
 				return penumpang;
 			} 
 			// jika tidak ada nama yang sesuai //
 			else if ( i == penumpang.length - 1) {
 				// tampilkan pesan kesalahannya //
 				console.log(namapenumpang + ' tidak ada');
 				// kembalikan isi array & keluar dari function //
 				return penumpang;
 			}
 		}
 	}


 };























