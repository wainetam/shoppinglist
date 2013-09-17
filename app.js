var list = document.getElementById("list"); //refers to list in html
var response = document.getElementById("response"); 
var item = document.getElementById("item");

function removeFirst() {
	var first_item = list.firstChild.innerHTML;
	response.innerHTML = "You last removed: " + first_item;
	list.removeChild(list.childNodes[0]); //removes first node in list
}

function removeByIndex() {
	var item_num_to_remove = item.value; //stores # of list submitted by user
	console.log(typeof(item_num_to_remove));
	var item_count = document.getElementsByTagName("li").length; //returns length of list
	if (item_num_to_remove > item_count) {
		response.innerHTML = "This item does not exist!";
	} else if (item_num_to_remove == 0) {
		response.innerHTML = "You need to enter a number!";	
	} else if (isNaN(item_num_to_remove)) {
	 	response.innerHTML = "You need to enter a number!";		
	} else {
		response.innerHTML = "You last removed: " + list.childNodes[item_num_to_remove-1].textContent;
		list.removeChild(list.childNodes[item_num_to_remove-1]); //removes index in list
		}
}

function clearAll() {
	list.innerHTML = "";
	response.innerHTML = "You cleared the shopping list!";
}

function addItem() {
	var item_value = item.value; //stores value submitted by user	
	if (item_value == "") {
		response.innerHTML = "You didn't add anything!";
	} else {
		response.innerHTML = "You last added: " + item_value; //reminds user what they added
		var li = document.createElement("li"); //creates li node
		li.innerHTML = "<input type='checkbox' name='checkbox' "+ "id="+item_value+" />" + item_value;
		list.insertBefore(li,list.childNodes[0]); //insert li node before first child node in list
		}
}

function clearField() {
	item.innerHTML = "";
}

function removeByCheck() { //returns state of checkbox
	var checkbox = document.getElementsByName("checkbox");
	var item_count = document.getElementsByTagName("li").length; //returns length of list
	var checked_count = 0;
	for (var i = 0; i < checkbox.length; i++) {
		if (checkbox[i].checked) {
			checked_count++;
		}
	}
 	if (checked_count == 0) {
		response.innerHTML = "You haven't selected anything!";
 	} else {
 		var removed_text = "";
	 	for (var i = item_count-1; i>=0; i--) {
	 		if (checkbox[i].checked == true) {
	 			temp_contents = list.childNodes[i].textContent;
	 			list.removeChild(list.childNodes[i]); //removes index in list
	 			removed_text = temp_contents + " " + removed_text;
	 		}
	 	}
	 	response.innerHTML = "You last removed: " + removed_text;
	}
 }