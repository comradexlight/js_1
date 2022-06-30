'use strict';

function getPasswordChecker(password) {
	return function checkPassword(anotherPassword) {
		if (anotherPassword === password) {
			return true;
		}
		else if (anotherPassword !== password) {
			return false;
		};
	};
};

const pass1 = getPasswordChecker("somePassword")("wrongPassword");
const pass2 = getPasswordChecker("somePassword")("Password")
const pass3 = getPasswordChecker("somePassword")("somePassword")

console.log(pass1);
console.log(pass2);
console.log(pass3);

