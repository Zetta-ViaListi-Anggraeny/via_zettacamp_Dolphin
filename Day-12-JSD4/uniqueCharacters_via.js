/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
	// Your logic here
	// let unik = str.split('');
	// unik.sort();
	// for (let i = 0; i < unik.length; i++) {
	// 	if (unik[i] == unik[i + 1]) {
	// 		return false;
	// 	}
	// }
	for (let i = 0; i < str.length; i++) {
		for (let y = i + 1; y < str.length; y++) {
			// console.log(str[i], str[y]);
			if (str[i] == str[y]) {
				return false;
			}
		}
	}
	return true;
}

// hasUniqueCharacters('abc');
console.log(hasUniqueCharacters('abcdefgh')); // Output: true
console.log(hasUniqueCharacters('hello')); // Output: false
