

function Create() {
	name = document.getElementById('get_name').value
	password = document.getElementById('get_password').value

	var Akun = {};
	Akun.name1 = name;
	Akun.password1 = password;
	return Akun;
}

function Reset() {
	name = document.getElementById('get_name').value
	password = document.getElementById('get_password').value

	name.removeAttribute('value');
	password.removeAttribute('value');
	
}

