let contactName = document.querySelector('#contactName');
let tel = document.querySelector('#tel');
let button = document.querySelector('button');
let table = document.querySelector('table');

tel.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      button.click();
    }
});

button.addEventListener('click', function() {
    if (contactName.value != "" && tel.value != "") {
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerText = contactName.value;
        cell2.innerText = tel.value;
        cell3.innerHTML = `<i class="fas fa-edit"></i>
        <i class="fas fa-window-close"></i>`;
        contactName.value = "";
        tel.value = "";
    }
});

table.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const td1 = clickedElement.parentNode.parentNode.firstChild;
    if (clickedElement.classList.contains('fa-window-close')) {
		clickedElement.parentNode.parentNode.remove();
	} else if (clickedElement.classList.contains('fa-edit')) {
		contactName.value = td1.innerText;
        tel.value = td1.nextSibling.innerText;
        clickedElement.parentNode.parentNode.remove();
	}
});