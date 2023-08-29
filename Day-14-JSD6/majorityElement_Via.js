/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
	// Your logic here
	let count = 0;
	let major;

	nums.sort();
	for (let i = 0; i < nums.length; i++) {
		if (count == 0) {
			major = nums[i];
			count = 1;
		} else if (nums[i] === major) {
			count++;
		} else {
			count--;
		}
	}
	return major;
}

console.log(majorityElement([3, 4, 5, 2, 3])); // Output: 3 
console.log(majorityElement([-3, 4, 2, -3, 'b','b','b'])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2

// 3 = 0
// 3
// 2
// 2
// 3
