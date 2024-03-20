let firstBook = 'Laskar Pelangi';
const secondBook = 'Harry Potter and the Cursed Child';

console.log('=== Book List ===');
console.log('> First Favorite Book', firstBook);
console.log('> Second Favorite Book', secondBook);

firstBook = 'Harry Potter and the Philosopher';
console.log('> Least Favorite Book', firstBook);

// secondBook = 'Laskar Pelangi';
// console.log(secondBook);

console.log('=== Best Combo ===');
let favBook = firstBook.concat(' & ', secondBook);
console.log(favBook);
console.log('==================');

// Task Note
let buy = {
    have : true,
    notHave : false
}

console.log('Buku Sudah dimiliki?', buy.notHave);

let arr = [1, 2, 3, 4, 5];
let obj = {
	nama: 'via',
	gender: 'P',
    buy: true
};

console.log(arr[2]);
console.log(obj);


/* 
1.  Declare two variable with name of your favourite books
    - Update value of first with name your least favourite book
    - Define second variable as constant and try update the value
2.  Concat value from variables task number 1 into new variable

Note:
Try declare more variable using other data type with dynamic value and primitive value
 */
