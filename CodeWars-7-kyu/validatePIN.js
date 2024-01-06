/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */

function validatePIN(pin) {
	if (pin.length !== 4 && pin.length !== 6) {
		return false;
	}

	for (const char of pin) {
		// best practice to parseInt (failed test without is '123':)
		if (isNaN(parseInt(char))) {
			return false;
		}
	}

	return true;
}

// Test Case
console.log(validatePIN("12f2"));
console.log(validatePIN("12f324232"));

// Execute in terminal  => node validatePIN.js
