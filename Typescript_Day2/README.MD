*Task*
Create a new project, and install typescript. Do not use the project that was given by the courses.There will be 3 functions needs to be created in this task
==========================================
1. *1st function*: Create a function that accepts an array of union type number and string as parameter and return a string of combination of elements in parameters.
**Case 1 :**
Parameter : [1, ‘data’, ‘3’, ‘result’]
Return : ‘1 data 3 result’
**Case 2 :**
Parameter: [‘Bejo’, ‘has’, ‘4’, ‘sport’, ‘car’]
Return : ‘Bejo has 4 sport car’
==========================================
2. *2nd function*: Create a function that accepts a parameter of a union type. Sum all the items if the input is an array of numbers or concatenate the items if the input is an array of strings. The function should return the result of the operation.
**Case 1 :**
Parameter : [1, 2, 3, 4]
Return : 10
**Case 2 :**
Parameter : [‘the’, ‘dolphins’, ‘of’, ‘zettacamp’]
Return : ‘the dolphins of zettacamp’
**Case 3 :**
Parameter : [‘Bejo’, ‘has’, 4, ‘sport’, ‘car’]
Return : ‘invalid input’
==========================================
3. *3rd function:* Create a TypeScript function that transforms objects of a custom type, Product, into a simplified custom type, SimplifiedProduct. The properties of the product are up to you but make sure the simplified product has at least 1 optional property in its definition. The transformation should retain specific properties and, under certain conditions, include an optional property.
**Case 1:**
Parameter :
    Name : Coca Cola
    Vendor : Coca Cola Company
    Quantity : 5
    In Stock : 100
    Price : 5000
Return
    Name : Coca Cola
    Buyable : True
    Total Price : 25000
**Case 2:**
Parameter :
    Name : Sari Roti
    Vendor : Toko Kue Sebelah
    Quantity : 2
    In Stock : 0
    Price : 10000
Return :
    Name : Sari Roti
    Buyable : False
==========================================
*Criteria*
**Implementation Function Typescript**
- The function accepts a parameter of a union array type
- The function correctly combines the elements of the array into a single string
- The code is clear, well-structured, easy to read, and type annotations are used appropriately to describe function parameters and return types

**Implementation of Union Type Function**
- The function accepts a parameter of a union type
- The function processes the input based on its type and provides correct output
- The function handles edge cases, such as empty arrays or arrays with a mix of string and number elements
- The code is clear, well-structured, easy to read, and type annotations are used appropriately to describe function parameters and return types

**Implementation of Custom Type Handling Function**
- The function accepts a parameter of a custom type
- The function successfully transforms the custom type data according to the task's requirements
- The code is clear, well-structured, easy to read, and type annotations are used appropriately to describe function parameters and return types
