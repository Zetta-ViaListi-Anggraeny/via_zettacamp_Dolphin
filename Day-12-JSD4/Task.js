/*
* Update your book purchasing function to have parameter amount of stock & amount of purchased book. Then calculate total price & display the result.

* Note:
The function must have at least:
- for loop iteration
- break when amount of book is already out of stock
- Display text if amount of book after purchasing can be purchased again or not

*/
const bookList = [
	{
		title: 'Harry Potter and the Cursed Child',
		price: 220000,
		stock: 20,
	},
	{
		title: 'Harry Potter and the Philosopher',
		price: 205000,
		stock: 10,
	},
];

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

const bookStock = (stock, purchased) => {
	let sisa = 0;
	for (let i = 1; i <= purchased; i++) {
		// console.log(i);
		if (i >= stock) {
			sisa = stock - purchased;
			break;
		} else if (i == purchased) {
			sisa = stock - i;
		}
	}
	return sisa;
};

function showBookPurchasing(title, price, discount, tax, stock, purchased) {
	let totalPrice = price * purchased;
	let isAvailable = bookStock(stock, purchased);

	console.log();
	console.log('Judul Buku :', title);
	console.log('Harga :', price);
	console.log('Stok Tersedia:', stock);

	console.log('===================================');
	console.log('Jumlah Buku yang dibeli :', purchased);
	console.log('Diskon :', discount, '%');
	console.log('Pajak :', tax, '%');

	console.log('===================================');
	console.log('Total Harga Pembelian :', totalPrice);
	console.log('Harga Setelah Diskon :', afterDiscount(totalPrice, discount));
	console.log('Harga Setelah Pajak :', afterTax(afterDiscount(totalPrice,discount), tax));
	console.log('Ketersedian Buku :', isAvailable > 0 ? 'Available' : 'Out Of Stock');
	console.log('Sisa Buku :', isAvailable);
	console.log(isAvailable > 0 ? 'Dapat Membeli Buku Lagi.' : 'Tidak Dapat Membeli Buku Lagi.');
}


console.log('==== Book List ====');
showBookPurchasing(bookList[0].title, bookList[0].price, 40, 10, 0, 0);
