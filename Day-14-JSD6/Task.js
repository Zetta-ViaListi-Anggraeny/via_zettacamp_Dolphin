/*
Based on the due date that was generated on JS Day 5, update the function to calculate the amount of payment for each month using array function. Then display the data as an array of objects that have values due date of payment and amount of payment, be careful the total amount of payment must be the same as total price of books purchased.

* Today's assessment score:
* Understand and create function with object in JavaScript
- Calculate the amount of payment for each month - Ok
- Display the result as array of object - Ok
* Implementation conditional statement and array function
- Calculate term using array function - Ok
- Total amount of payment must be the same as total price of books purchased - Ok
* Completing the logic test
- Result for the logic test as expected -> able to define majority data in array
- Explain line by line of code on the logic test
- Define majority data value that specified (Number Based on Logic Test or from Mentor)
*/

const bookList = [
	{
		title: 'Harry Potter and the Cursed Child',
		price: 220000,
	},
	{
		title: 'Harry Potter and the Philosopher',
		price: 205000,
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

const termCredit = (totalDurationCredit, price) => {
	let jangkaPeminjaman = 30;
	let paymentDetails = [];
	// Calculate the amount of payment for each month
	let payment = Math.round(price / totalDurationCredit);

	const currentDate = new Date();

	for (let i = 1; i <= totalDurationCredit; i++) {
		const term = i; // Urutan Peminjaman misal pinjaman ke-1 dst.
		//Duedate
		const dueDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + jangkaPeminjaman * i);
		//Mengubah format Date nya
		const dueDateFormat = dueDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
		// Hitung jumlah pembayaran tiap bulan - ArrayObject
		paymentDetails.push({ term, payment, dueDateFormat });
	}
	return paymentDetails;
};

function bookPurchasing(purchased, discount, tax, totalPrice, isAvailable, totalDurationCredit = 0) {
	let priceAfterTax = afterTax(afterDiscount(totalPrice, discount), tax);
	const credit = termCredit(totalDurationCredit, totalPrice, discount);
	let totalPaymentCredit = 0;

	console.log('Jumlah Buku yang dibeli :', purchased);
	console.log('Diskon :', discount, '%');
	console.log('Pajak :', tax, '%');

	console.log('===================================');
	console.log('Total Harga Pembelian :', totalPrice);
	console.log('Harga Setelah Diskon :', afterDiscount(totalPrice, discount));
	console.log('Harga Setelah Pajak :', priceAfterTax);
	console.log('===================================');

	//Credit
	if (totalDurationCredit !== 0) {
		console.log('Credit Duration :', totalDurationCredit);
		// Display the result as array of object
		console.log(credit);
		//Calculate term using array function
		credit.forEach((total) => {
			totalPaymentCredit += total.payment;
		});
		//
		console.log('Total Credit Payment (', totalDurationCredit, 'Month ): Rp', totalPaymentCredit);
		console.log('===================================');
		console.log('Total Yang Dibayarkan Rp.', totalPaymentCredit);
	} else {
		console.log('Total Yang Dibayarkan Rp.', priceAfterTax);
	}
	//

	console.log('Ketersedian Buku :', isAvailable > 0 ? 'Available' : 'Out Of Stock');
	console.log('Sisa Buku :', isAvailable);
	console.log(isAvailable > 0 ? 'Dapat Membeli Buku Lagi.' : 'Tidak Dapat Membeli Buku Lagi.');
}

function showBookPurchasing(title, price, discount, tax, stock, purchased, totalDurationCredit) {
	let totalPrice = price * purchased;
	let isAvailable = bookStock(stock, purchased);

	console.log();
	console.log('Judul Buku :', title);
	console.log('Harga :', price);
	console.log('Stok Tersedia:', stock);
	console.log('===================================');

	isAvailable >= 0 && totalDurationCredit >= 0
		? bookPurchasing(purchased, discount, tax, totalPrice, isAvailable, totalDurationCredit)
		: console.log('Maaf tidak dapat membeli buku - Stok Habis / Salah menginputkan data mohon dicek kembali');
}

console.log('==== Book List ====');
// Input Guide : title, price, discount,tax, stock, purchased, creditduration
showBookPurchasing(bookList[0].title, bookList[0].price, 40, 10, 10, 3, 3);
