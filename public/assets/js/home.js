const $setLogin = $('#login');
const $setSignUp = $('#signup');
const $submitButton = $('#submit');

let authSetting = 'login';

function setAuth(setting) {
	authSetting = setting;

	if (authSetting === 'login') {
		$setLogin.addClass('active');
		$setSignUp.removeClass('active');
		$submitButton.text('Log In');
	} else {
		$setSignUp.addClass('active');
		$setLogin.removeClass('active');
		$submitButton.text('Sign Up');
	}
}