/*
Update your book purchasing function to add parameter for the total duration of credit (indicating the credit term length in months) and calculate the due date for each month Starting from the next month when you work on this code using array function in javascript and display the results as an array of strings.
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
	let bunga = (2 / 100) * price;
	// let payment = (bunga + price) / totalDurationCredit;
	let payment = Math.round((bunga + price) / totalDurationCredit);
	let jangkaPeminjaman = 30;
	let paymentDetails = [];
	let dueDateArr = [];

	const currentDate = new Date();

	for (let i = 1; i <= totalDurationCredit; i++) {
		const term = i; // Urutan Peminjaman misal pinjaman ke-1 dst.
		//Duedate
		const dueDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + jangkaPeminjaman * i);
		//Mengubah format Date nya
		const dueDateFormat = dueDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
		paymentDetails.push({ term, payment, dueDateFormat });
		dueDateArr.push(dueDateFormat);
	}
	return dueDateArr;
	// return paymentDetails;
};

function bookPurchasing(purchased, discount, tax, totalPrice, isAvailable, totalDurationCredit = 0) {
	let priceAfterTax = afterTax(afterDiscount(totalPrice, discount), tax);
	const credit = termCredit(totalDurationCredit, totalPrice, discount);

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
		//Pake Map untuk menampilkan data array dari Paymentdetails
		// credit.map((value) => {
		// 	totalPaymentCredit = value.payment * totalDurationCredit;
		// 	console.log('>> Term :', value.term, '|| Payment : Rp', value.payment, '|| Due Date :', value.dueDateFormat);
		// });
		// credit.map((value, index) => console.log('Term :', index + 1, '|| Due Date :', value));
		for (let i = 0 ; i < totalDurationCredit; i++){
			console.log(credit[i]);
		}
		console.log(credit);
		//
		// console.log('Total Credit Payment + Bunga 2% : Rp', totalPaymentCredit);
		console.log('===================================');
		// console.log('Total Yang Dibayarkan Rp.', totalPaymentCredit);
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
// showBookPurchasing(title, price, discount,tax, stock, purchased, creditduration:0)
showBookPurchasing(bookList[0].title, bookList[0].price, 40, 10, 10, 5, 3);
