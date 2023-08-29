/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * SEE EXAMPLE BELLOW!
 * 
 * 
Example
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

 * Determines if the array contains any duplicate value.
*/
//  @param {number[]} nums - The input array of integers.
//  @return {boolean} Returns true if the array contains any duplicate value, false otherwise.

function containDuplicate(nums) {
	// Your logic here
	// nums.sort();
	// for (let i = 0; i < nums.length; i++) {
	// 	if (nums[i] === nums[i + 1]) {
	// 		return true;
	// 	}
	// }
	for (let i = 0; i < nums.length; i++) {
		for (let y = i + 1; y < nums.length; y++) {
			// console.log(nums[i], nums[y]);
			if (nums[i] === nums[y]) {
				return true;
			}
		}
	}
	return false;
}

console.log(containDuplicate([1, 2, 3, 1])); // Output: true
console.log(containDuplicate([-1, '1', 1, 4])); // Output: false
console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true
