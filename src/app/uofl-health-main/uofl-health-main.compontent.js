var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var json = XLSX.utils.sheet_to_json(worksheet);

$('#resultplaceholder').reomve();

for(var key in json){
  var date1 = json[key]["10/6/2022"];
  var date2 = json[key]["10/7/2022"];
  var date3 = json[key]["10/8/2022"];

  // var text = <p>${date1}, $(date2), ${date3}</p>
}