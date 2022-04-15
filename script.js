var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addRemoveButton(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

function removeListItem(btn) {
	console.log("Removing",btn.parentElement.textContent);
	btn.parentElement.remove();
}

function listItemOnClick(listItem){
	listItem.classList.toggle("done");
}

function addRemoveButton(listElement){
	btn = document.createElement("button");	
	btn.textContent="X";
	btn.setAttribute("onclick","removeListItem(this)");
	listElement.appendChild(btn);
	listElement.setAttribute("onclick","listItemOnClick(this)");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//Add remove buttons to already existing list elements
for (var i=0; i < ul.childElementCount; i++) 
{
	addRemoveButton(ul.children[i]);
}
