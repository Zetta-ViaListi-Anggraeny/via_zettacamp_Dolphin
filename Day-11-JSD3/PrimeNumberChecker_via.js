/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {
	// Your logic here
	let a = 0;
	for (i = 1; i <= n; i++) {
		if (n % i == 0) {
			a++;
		}
	}

	if (a == 2) {
		return true;
	} else {
		return false;
	}
}

console.log(isPrime(10));
console.log(isPrime(43));
