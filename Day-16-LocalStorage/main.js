// const bookList = [
// 	{
// 		id: '1',
// 		title: 'Harry Potter and the Cursed Child',
// 		totalCount: 5,
// 		author: 'Jack Thorne',
// 		description:
// 			'The story is set nineteen years after the events of Harry Potter and the Deathly Hallows. It follows Harry Potter, now Head of the Department of Magical Law Enforcement at the Ministry of Magic, and his son, Albus Severus Potter, who is about to attend his first year at Hogwarts School of Witchcraft and Wizardry.',
// 	},
// 	{
// 		id: '2',
// 		title: 'Harry Potter and the Sorcerers Stone',
// 		totalCount: 10,
// 		author: 'J.K Rowling',
// 		description:
// 			'Follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry',
// 	},
// ];

const tableBody = document.getElementById('tableBody');

showBooks();

function showBooks() {
	const bookData = JSON.parse(localStorage.getItem('books'));
	tableBody.innerHTML = '';

	bookData.forEach((value, index) => {
		const tableRow = `
                    <tr id="${value.id}">
                        <td>${index + 1}</td>
                        <td>${value.title}</td>
                        <td>${value.totalCount}</td>
                        <td>${value.author}</td>
                        <td>${value.description}</td>
                        <td>
                            <button class='editBtn' onclick='editBook(${value.id})'>Edit</button>
                            <button class='delBtn' onclick='deleteBook(${value.id})'>Delete</button>
                        </td>
                    </tr>`;
		tableBody.innerHTML += tableRow;
	});

	const createNewRowForm = `
                <tr>
                    <td></td>
                    <td><input type="text" id="newTitle" placeholder="Title" /></td>
                    <td><input type="number" id="newCount" placeholder="Total Count" /></td>
                    <td><input type="text" id="newAuthor" placeholder="Author" /></td>
                    <td><textarea id="newDesc" placeholder="Description"></textarea></td>
                    <td><button class='saveBtn' onclick='addBook()'>Save</button></td>
                </tr>`;

	tableBody.innerHTML += createNewRowForm;
}

// const addBookBtn = document.getElementById('addBookBtn');
// addBookBtn.addEventListener('click', addBook);

function addBook() {
	const newId = Date.now();
	const newTitle = document.getElementById('newTitle').value;
	const newCount = parseInt(document.getElementById('newCount').value);
	const newAuthor = document.getElementById('newAuthor').value;
	const newDesc = document.getElementById('newDesc').value;

	const newBook = {
		id: newId,
		title: newTitle,
		totalCount: newCount,
		author: newAuthor,
		description: newDesc,
	};

	let books = JSON.parse(localStorage.getItem('books'));
	books.push(newBook);
	localStorage.setItem('books', JSON.stringify(books));

	showBooks();
}

function editBook(bookId) {
	const row = document.getElementById(bookId);
	const rowData = row.querySelectorAll('td');

	const title = rowData[1].innerText;
	const totalCount = rowData[2].innerText;
	const author = rowData[3].innerText;
	const desc = rowData[4].innerText;

	rowData[1].innerHTML = `<input type="text" value="${title}">`;
	rowData[2].innerHTML = `<input type="number" value="${totalCount}">`;
	rowData[3].innerHTML = `<input type="text" value="${author}">`;
	rowData[4].innerHTML = `<textarea>${desc}</textarea>`;

	const actionsCell = row.querySelector('td:last-child');
	actionsCell.innerHTML = `<button class='saveBtn' onclick="saveEditedBook(${bookId})">Save</button>`;
}

function saveEditedBook(bookId) {
	const row = document.getElementById(bookId);
	const rowData = row.querySelectorAll('td');

	const updatedTitle = rowData[1].querySelector('input').value;
	const updatedTotalCount = rowData[2].querySelector('input').value;
	const updatedAuthor = rowData[3].querySelector('input').value;
	const updatedDesc = rowData[4].querySelector('textarea').value;

	const books = JSON.parse(localStorage.getItem('books'));
	const bookIndex = books.findIndex((book) => book.id === bookId);
	if (bookIndex !== -1) {
		books[bookIndex].title = updatedTitle;
		books[bookIndex].totalCount = parseInt(updatedTotalCount);
		books[bookIndex].author = updatedAuthor;
		books[bookIndex].description = updatedDesc;
		localStorage.setItem('books', JSON.stringify(books));
	}

	rowData[1].innerHTML = updatedTitle;
	rowData[2].innerHTML = updatedTotalCount;
	rowData[3].innerHTML = updatedAuthor;
	rowData[4].innerHTML = updatedDesc;

	const actionsCell = row.querySelector('td:last-child');
	actionsCell.innerHTML = `
					<button class='editBtn' onclick="editBook(${bookId})">Edit</button>
					<button class='delBtn' onclick="deleteBook(${bookId})">Delete</button>`;
}

function deleteBook(bookId) {
	let books = JSON.parse(localStorage.getItem('books'));
	// make new setlocalStorage from books filter. if book.i not same with params then not included in books variable
	books = books.filter((book) => book.id !== bookId);
	localStorage.setItem('books', JSON.stringify(books));

	showBooks();
}

// Create
// localStorage.setItem('listBook', JSON.stringify(bookList));

// delete
// localStorage.removeItem(`listBook`)

// Update
// const a = localStorage.getItem('listBook');
// console.log(a);

// clear data
// localStorage.clear()
