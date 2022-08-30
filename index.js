let name = document.querySelector('#name');
let tel = document.querySelector('#tel');
let button = document.querySelector('button');
let table = document.querySelector('table');
let edit = document.querySelector('#edit');
let x = document.querySelector('#x');

tel.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      button.click();
    }
});

button.addEventListener('click', function() {
    if (name.value != "" && tel.value != "") {
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerText = name.value;
        cell2.innerText = tel.value;
        cell3.innerHTML = `<i class="fas fa-edit" id="edit"></i>
        <i class="fas fa-window-close" id="x"></i>`
        name.value = "";
        tel.value = "";
    }
});

table.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const td1 = clickedElement.parentNode.parentNode.firstChild;
    if (clickedElement.id == 'x') {
		clickedElement.parentNode.parentNode.remove();
	} else if (clickedElement.id == 'edit') {
		name.value = td1.innerText;
        tel.value = td1.nextSibling.innerText;
        clickedElement.parentNode.parentNode.remove();
	}
});