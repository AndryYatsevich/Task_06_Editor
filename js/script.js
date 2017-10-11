
console.log(list);

function addLi() {
	var list = 	document.getElementById("list");
	var li = document.createElement('li');
	var textValue = document.getElementById("text").value;
	var color = document.getElementById("color").value;
	var marker = document.getElementById("marker").value;
	console.log(marker);
	var textValueNode = document.createTextNode(textValue);
		li.appendChild(textValueNode);
		list.appendChild(li).style.color = color;
		list.appendChild(li).style.listStyleType = marker; 
		list.appendChild(li).setAttribute('onclick', 'activLi()');
	
}

function deleteLi(){
	console.log('kek');
}

function activLi(){
	list.appendChild(li).css({border: '2px solid red'});
        
}