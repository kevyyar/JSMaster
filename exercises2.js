function isValidPassword(pass, user) {
	if (pass.length < 8) {
		return false;
	}
	if (pass.indexOf(" ") !== -1) {
		return false;
	}
	if (pass.indexOf(user) !== -1) {
		return false;
	}

	return true;
}
