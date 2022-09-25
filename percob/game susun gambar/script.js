const Images1 = document.getElementById('satu');
const Images2 = document.getElementById('dua');
const Images3 = document.getElementById('tiga');
const Images4 = document.getElementById('empat');
const Images5 = document.getElementById('lima');
const Images6 = document.getElementById('enam');
const Images7 = document.getElementById('tujuh');
const Images8 = document.getElementById('delapan');

function Reset() {
	Images1.classList.replace('move1Act1','*');
	Images1.classList.replace('move1Act2','*');

	Images2.classList.replace('move2Act2','*');
	Images2.classList.replace('move2Act3','*');

	Images3.classList.replace('move3Act1','*');
	Images3.classList.replace('move3Act3','*');

	Images4.classList.replace('move4Act4','*');
	Images4.classList.replace('move4Act6','*');

	Images5.classList.replace('move5Act4','*');
	Images5.classList.replace('move5Act5','*');	

	Images6.classList.replace('move6Act5','*');
	Images6.classList.replace('move6Act6','*');

	Images7.classList.replace('move7Act7','*');
	Images7.classList.replace('move7Act8','*');

	Images8.classList.replace('move8Act7','*');
	Images8.classList.replace('move8Act8','*');

}

function Act1() {
	Images3.classList.replace('*','move3Act1');
	Images1.classList.replace('*','move1Act1');
}

function Act2() {
	Images2.classList.replace('*','move2Act2');
	Images1.classList.replace('*','move1Act2');
}

function Act3() {
	Images3.classList.replace('*','move3Act3');
	Images2.classList.replace('*','move2Act3');
}

function Act4() {
	Images5.classList.replace('*','move5Act4');
	Images4.classList.replace('*','move4Act4');
}

function Act5() {
	Images6.classList.replace('*','move6Act5');
	Images5.classList.replace('*','move5Act5');
}

function Act6() {
	Images6.classList.replace('*','move6Act6');
	Images4.classList.replace('*','move4Act6');
}

function Act7() {
	Images8.classList.replace('*','move8Act7');
	Images7.classList.replace('*','move7Act7');
}

function Act8() {
	Images8.classList.replace('*','move8Act8');
	Images7.classList.replace('*','move7Act8');
}

function Random() {
	const Mr = Math.random();

	function random1() {
		if ( Mr < 0.3 ) return Act1() ;
		if ( Mr >= 0.31 && Mr < 0.6 ) return Act2();
	 	return Act3();
	}

	function random2() {
		if ( Mr < 0.3 ) return Act4() ;
		if ( Mr >= 0.31 && Mr < 0.6 ) return Act5();
	 	return Act6();
	}

	function random3() {
		if ( Mr < 0.5 ) return Act7();
		if ( Mr > 0.5 ) return Act8();
	}

	random1();
	random2();
	random3();

}



