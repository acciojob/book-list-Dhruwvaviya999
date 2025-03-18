//your JS code here. If required.

function addBook(){
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let isbn = document.getElementById("isbn").value;

	let deleteBtn = document.createElement("button");
	deleteBtn.textContent = "X";
	deleteBtn.classList.add("delete");


	let tbody = document.getElementById("book-list");

	let newRow = tbody.insertRow(-1);
	
	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);
	let cell3 = newRow.insertCell(2);
	let cell4 = newRow.insertCell(3);

	cell1.innerHTML = title;
	cell2.innerHTML = author;
	cell3.innerHTML = isbn;
	cell3.appendChild(deleteBtn);
}


