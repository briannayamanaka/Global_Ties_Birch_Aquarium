// This function will get called when the button is clicked
function update() {
  //Get values from the text boxes
  var rfidText = document.getElementById("rfidInput").value;
  var nameText = document.getElementById("nameInput").value;
  var ageGroupText = document.getElementById("ageGroupInput").value;
  // For debugging: Set the paragraph element with the id "testTextDisplay" to contain the text that was inputted
  document.getElementById("testTextDisplay").innerHTML = "RFID: " + rfidText + ", Name: " + nameText + ", Age group: " + ageGroupText;
}
