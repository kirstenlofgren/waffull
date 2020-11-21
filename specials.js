var newWindow;

function openWin() {
  newWindow = window.open("specials.html");
}

function closeWin() {
  newWindow = window.close("specials.html");
}

window.onload = generateTable;

var itemImage = ['images/cherry-chocolate-waffle.jpg', 'images/lingonberry-waffle.jpg', 'images/chicken-and-waffle.jpg', 'images/chocolate-fig-waffle.jpg', 'images/strawberry-and-creme-fraiche.jpg'];
var itemName = ['Chocolate Cherry Waffle', 'Lingonberry Waffle', 'Chicken & Waffle', 'Chocolate Waffle with Figs', 'Strawberries & Creme Fraiche'];
var itemPrice = [8.00, 6.00, 12.00, 6.00, 6.00];

// creates a <table> element and a <tbody> element
function generateTable() {
	
	// get the reference for the body
	var menuTable = document.getElementById("specials-menu");

	var table = document.createElement("table");
	var tableBody = document.createElement("tbody");

	// creating all cells
	for (var i = 0; i < itemName.length; i++) {

		// creates a table row
	    var row = document.createElement("tr");
		
		//create table cells
		var cell = document.createElement("td");
		var imageCell = document.createElement("img");
		imageCell.src = itemImage[i];
		cell.appendChild(imageCell);
		row.appendChild(cell);

		var cell = document.createElement("td");
		var cellName = document.createTextNode(itemName[i]);
		cell.appendChild(cellName);
		row.appendChild(cell);

		var cell = document.createElement("td");
		var cellPrice = document.createTextNode("$" + itemPrice[i]);
		cell.appendChild(cellPrice);
		row.appendChild(cell);

		// add the row to the end of the table body
		tableBody.appendChild(row);
	}

	// put the <tbody> in the <table>
	table.appendChild(tableBody);

	// appends <table> into <body>
	menuTable.appendChild(table);
}
