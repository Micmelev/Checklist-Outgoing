let form
let resetButton = document.getElementById("reset")
let list = document.getElementById("ulel")

function generateList() {
  let listItems = ""
  for (let i = 0; i < form.length; i++) {
    listItems += "<li>" + '<input class = "checkbox1" type="checkbox" id="checkbox1">' + form[i]
  }
  list.innerHTML = listItems
}
// function selectedSubjectName() 
document.getElementById('subjectName').onchange = function(){
  let name = document.getElementById("subjectName")
  let name1 = name.value
  if (name1 === "Investment Authorization") {
    form = ["Recent notes related to outgoing money", "Recent incoming money in correct account",
      "Notes in form tab", "Fees match", "Signed/Dated Form", "Do we have the asset", "For PP does investment amount match what's being invested", "Are there wiring wiring instructions in the asset and does is match", "Beneficiary name matches", "If sending check does address match", "Check if Multi Member", "Is amount under 800K (if not needs a verbal)"]
  }
  else if (name1 === "Distribution") {
    form = ["Recent notes related to outgoing money", "Recent incoming money in correct account", "Notes in form tab", "Fees match", "Signed/Dated Form", "Beneficiary name matches", "If sending check does address match", "Is amount under 800K", "Is there a task for account closure"]
  }
  else if (name1 === "EPR") {
    form = ["Recent notes related to outgoing money", "Recent incoming money in correct account", "Notes in form tab", "Fees match", "Signed/Dated Form", "Do we have the asset", "Beneficiary name matches", "If sending check does address match", "Is amount under 800K(if not needs a verbal)", "Does the invoice have the correct titling and asset"]
  }
  else if (name1 === "Broad EPR") {
    form = ["Recent notes related to outgoing money", "Recent incoming money in correct account", "Notes in form tab", "Fees match", "Signed/Dated Form"]
  }
  else if (name1 === "Outgoing Transfer") {
    form = ["Recent notes related to outgoing money", "Recent incoming money in correct account", "Notes in form tab", "Fees match", "Signed/Dated Form", "Beneficiary name matches", "If sending check does address match", "Is amount under 800K", "Is there a task for account closure"]
  }
  else form = []
  generateList()
}
resetButton.addEventListener("click", function() {
  // checkbox1.checked = false
  // check.checked = false
  let inputs = document.querySelectorAll('.checkbox1');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
})
