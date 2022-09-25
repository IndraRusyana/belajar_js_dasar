// const getCard = document.querySelector('.card');
// const getX = document.querySelector('.close');

// getX.addEventListener('click', function() {
// 	getCard.style.display = 'none';

// });

	
// DOM traversal //
// contoh 1 //

// const getX = document.querySelectorAll('.close');

// for( let i = 0;i < getX.length;i++ ) {
// 	getX[i].addEventListener('click', function(e) {
// 		// getX[i].parentElement.style.display = 'none';
// 		e.target.parentElement.style.display = 'none';
// 	});
// };

// contoh 2 //

// const getX = document.querySelectorAll('.close');

// getX.forEach(function(el) {
// 	el.addEventListener('click', function(e) {
// 		e.target.parentElement.style.display = 'none';
// 		// e.preventDefault(); menghentikan aksi default element
// 		// e.stopPropagation(); untuk menghentikan event
// 	});
// });

// contoh 3 //

const getContainer = document.querySelector('.container')

getContainer.addEventListener('click', function (e) {
	if ( e.target.className == 'close' ) {
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
	}

});



// DOM traversal method

// parentNode mengembalikan node
// parentElement mengembalikan element
// nextSibling mengembalikan node
// nextElementSibling mengembalikan element
// previousSibling mengembalikan node
// previousElementSibling mengembalikan element

const coba = document.querySelector('.nama');
console.log(coba.parentElement);
console.log(coba.nextElementSibling);
console.log(coba.previousElementSibling);
console.log(coba.parentElement.parentElement);
console.log(coba.nextElementSibling.nextElementSibling);



















