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
	have: true,
	notHave: false,
};
console.log('Buku Sudah dimiliki?', buy.notHave);

// Day 2
console.log('=== Day 2 ===');
// 1
// The comparison operator
let isHaveSameValue = firstBook === secondBook;
console.log('The books share the same title?', isHaveSameValue);

// 2
//create new variable
let bookList = [
	{
		title: 'Harry Potter and the Cursed Child',
		price: 220000,
	},
	{
		title: 'Harry Potter and the Philosopher',
		price: 205000,
	},
];

// bookList['key'] = "value3"
console.log(bookList);

//Compare variable use ternary
console.log('>> Book with the highest prices :', bookList[0].price > bookList[1].price ? bookList[0].title : bookList[1].title);

//Average price
let averagePrice = (bookList[0].price + bookList[1].price) / bookList.length;
console.log('>> Rata Rata Harga Buku Rp.', averagePrice, 'dari', bookList.length, 'buku');

// determine the value (ternary operator)
let averageValue = averagePrice >= 500000 ? 'Expensive' : 'Cheap';
console.log('>>', averageValue);

/*
** Form variable JavaScript day 1
- Use comparison operator with 2 variables from task number 1, display true if the name of books have same name otherwise display false
**  Create new 2 variables to contain price of your favourite books
- Compare the variables which one have the highest price
- Find the average price from those 2 variables using arithmetic operator
- Create new variable to use ternary operator to determine the value of variable, if the average price more than 500000 set value with string “Expensive” if less or equal set “Cheap”
*/
