var button = document.getElementById("enter");
var input = document.getElementById("user input");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function taskComplete() {
	this.classList.toggle("done");
}

// creating new list item
function createListItem() {
	var li = document.createElement("li");
	li.setAttribute("class", "list-group-item");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", taskComplete);
	ul.appendChild(li);
	input.value = '';
	// create a delete button
	var btnDel = document.createElement("button");
	btnDel.classList.add("deleteBtn");
	btnDel.appendChild(document.createTextNode("X"));
	li.appendChild(btnDel);
	btnDel.addEventListener("click", deleteListItem);

	function deleteListItem() {
		li.classList.add("remove");
	}
} // end create list function

//create list by press button
function addListAfterClick() {
	if (inputLength() > 0) {
		createListItem();
	}
}

// create list by press enter key
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListItem();
	}
}

//events
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);