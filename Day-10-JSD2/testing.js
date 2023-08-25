let bookList = [
	{
		title: 'Harry Potter and the Cursed Child',
		price: 100000,
	},
	{
		title: 'Harry Potter and the Philosopher',
		price: 200000,
	},
];

// array.push()
bookList.push({
	title: 'Laskar Pelangi',
	price: 87000
},{
    title: 'Mocking Jay',
    price: 230000
});
console.log(bookList);

// console.log(bookList.pop());

// console.log(bookList);


let sum = 0;

for (let i = 0; i < bookList.length; i++) {
	sum += bookList[i].price;
}

let a = 0;
for (let x = 0; x < bookList.length; x++){
    if (bookList[x].price > a){
        a = bookList[x].price
    }
}

console.log('Harga Tertinggi',a);

let avg = sum / bookList.length;
console.log('Total',sum);
console.log('Rata-rata',avg);

let z= 1;
let hasil = z++;
console.log(hasil);

