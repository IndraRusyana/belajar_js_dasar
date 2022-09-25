const getContainer = document.querySelector('#table')

getContainer.addEventListener('click', function (e) {
	if ( e.target.className == 'close' ) {
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
	}

});