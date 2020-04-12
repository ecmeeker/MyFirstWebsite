
//Add input to List
function addItem(event){
  if (event.keyCode ===13){
    var item = event.target.value;

    var table = document.getElementById("list");
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = "<td><input type='checkbox' onclick='completeItem(this)' /></td>"
    cell2.innerHTML = item;
    cell3.innerHTML = "<td><input type='button' value='Delete' onclick='deleteItem(this)'/></td>";
  }
}

//Remove item from list
function completeItem(btn){
  var row = btn.parentNode.parentNode;
  row.cells[1].classList.toggle("completed");
}

//Remove item from list
function deleteItem(btn){
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
