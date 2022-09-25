function pComputer() {
	
	const comp = Math.random();

	if ( comp < 0.3 ) return 'gunting';
	if ( comp >= 0.31 && comp < 0.6 ) return 'batu';
 	return 'kertas';
}


function gethasil(pComputer, pPlayer) {
	if ( pPlayer == pComputer ) return 'Anda Seri!';
	if ( pPlayer == 'gunting') return ( pComputer == 'kertas' ) ? ' MENANG' : ' KALAH';
	if ( pPlayer == 'batu') return ( pComputer == 'gunting' ) ? ' MENANG' : ' KALAH';
	if ( pPlayer == 'kertas') return ( pComputer == 'batu') ? ' MENANG' : ' KALAH';
}

const pGunting = document.querySelector('.gunting');

pGunting.addEventListener('click', function() {
	const pilihanComputer = pComputer();
	const piilihanPlayer = pGunting.className;
	const hasil = gethasil(pilihanComputer, piilihanPlayer);

	const imgComputer = document.querySelector('.computer');
	imgComputer.setAttribute('src','images/' + pilihanComputer + '.png');

	const info = document.getElementById('vs');

	info.innerHTML = '<p>' + hasil + '</p>';

});

const pBatu = document.querySelector('.batu');

pBatu.addEventListener('click', function() {
	const pilihanComputer = pComputer();
	const piilihanPlayer = pBatu.className;
	const hasil = gethasil(pilihanComputer, piilihanPlayer);

	const imgComputer = document.querySelector('.computer');
	imgComputer.setAttribute('src','images/' + pilihanComputer + '.png');

	const info = document.getElementById('vs');

	info.innerHTML = '<p>' + hasil + '</p>';

});

const pKertas = document.querySelector('.kertas');

pKertas.addEventListener('click', function() {
	const pilihanComputer = pComputer();
	const piilihanPlayer = pKertas.className;
	const hasil = gethasil(pilihanComputer, piilihanPlayer);

	const imgComputer = document.querySelector('.computer');
	imgComputer.setAttribute('src','images/' + pilihanComputer + '.png');

	const info = document.getElementById('vs');

	info.innerHTML = '<p>' + hasil + '</p>';

});



