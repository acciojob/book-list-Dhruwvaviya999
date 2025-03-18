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

	cell1.innerHTML = title;
	cell2.innerHTML = author;
	cell3.innerHTML = isbn;

	let deleteRow = tbody.insertRow(-1);
	let deleteCell = deleteRow.insertCell(0);
	deleteCell.colSpan = "3"; // This will make the delete button span all 3 columns
	deleteCell.appendChild(deleteBtn);
	
}


