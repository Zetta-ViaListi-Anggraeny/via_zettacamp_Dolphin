/*
* Try create a book purchasing function that has parameters detail of a book, percentage of the discount, percentage of tax. Then display all the parameters with additional data:
- Amount of discount
- Price after discount
- Amount of tax
- Price after tax

Note:
* The function must have at least:
- Constant variable
- Boolean, number, string variable
- Assignment, addition, addition, subtraction, multiplication, division operator
*/

const afterTax = (price, tax) => {
	let afterTax;
	afterTax = price + (tax / 100) * price;

	return afterTax;
};

const afterDiscount = (price, discount) => {
	let afterDiscount;
	afterDiscount = price - (discount / 100) * price;

	return afterDiscount;
};

function showBookPurchasing(title, price, discount, tax, isAvailable) {
	console.log('Judul Buku :', title);
	console.log('Harga :', price);
	console.log('Diskon :', discount, '%');
	console.log('Harga Setelah Diskon :', afterDiscount(price, discount));
	console.log('Pajak :', tax, '%');
	console.log('Harga Setelah Pajak :', afterTax(price, tax));
	console.log('Ketersedian Buku :', isAvailable === true ? 'Ada' : 'Kosong');
}

console.log('==== Book List ====');

showBookPurchasing('Harry Potter', 200000, 40, 10, true);
console.log();
showBookPurchasing('Harry Potter', 150000, 40, 10, false);
