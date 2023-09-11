/*
* Create a new project, and install typescript. Do not use the project that was given by the courses. 
* Create a function to get the combination of characters with 3 arguments and 1 return.
* Input for arguments case 1 : 
    - “Learning Typescript is different than Javascript”
    - 9
    - 19
* Function should return case 1 : 
    - “Typescript”
* The function should have clear types for argument and type for return

** Criteria **
Typescript Knowledge & Setup
- Understanding of Typescript & Differences with Javascript
- Create a new project, and install typescript
- Create functionality on typescript

Implementation functionality in Typescript
- Understanding of Core Types in Typescript
- Implement function to get the combination of characters with 3 arguments and 1 return
- Function have types for argument and type for result
*/

function combinationCharacters(text: string, indexStart: number, indexEnd: number): string {
	return text.substring(indexStart, indexEnd);
}

const result = combinationCharacters('Learning Typescript is different than Javascript', 9, 19);

console.log(result);
