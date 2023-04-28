const $ = (query) => document.querySelector(query);

$("button").addEventListener("click", () => {
  if ($("#name").value !== "" && $("#tel").value !== "") {
    let row = $("table").insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.textContent = $("#name").value;
    cell2.textContent = $("#tel").value;
    cell3.innerHTML = `<i class="fas fa-edit"></i>
        <i class="fas fa-window-close"></i>`;
    $("#name").value = "";
    $("#tel").value = "";
  }
});

$("table").addEventListener("click", (e) => {
  const td1 = e.target.parentNode.parentNode.firstChild;
  if (e.target.classList.contains("fa-window-close")) {
    e.target.parentNode.parentNode.remove();
  } else if (e.target.classList.contains("fa-edit")) {
    $("#name").value = td1.textContent;
    $("#tel").value = td1.nextSibling.textContent;
    e.target.parentNode.parentNode.remove();
  }
});
