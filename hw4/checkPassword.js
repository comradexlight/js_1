function getPasswordChecker(password) {
	const truePassword = "truePassword";
	return function() {
		if (password === truePassword) {
			return true;
		}
		else if (password !== truePassword) {
			return false;
		};
	};
};


let check1 = getPasswordChecker("wrongPassword");
let check2 = getPasswordChecker("truePassword");
let check3 = getPasswordChecker("somePassword");

console.log(check1());
console.log(check2());
console.log(check3());