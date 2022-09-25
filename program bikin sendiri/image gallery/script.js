const getContainer = document.querySelector('.container');
const getJumbo = document.querySelector('.jumbo');
const getThumb = document.querySelectorAll('.thumb');

getContainer.addEventListener('click', function(e) {

	if ( e.target.className == 'thumb' ) {
		getJumbo.src = e.target.src;
		getJumbo.classList.add('fade');

		setTimeout(function() {
			getJumbo.classList.remove('fade');
		}, 500);

		getThumb.forEach(function (thumb) {
			// if ( getThumb.classList.contains('active') ) {
			// 	getThumb.classList.remove('active');
			// }
			thumb.className = 'thumb';
		})

		e.target.classList.add('active');

	}

});