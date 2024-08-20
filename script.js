const addButton = document.getElementById("Add");
const li = document.getElementById("Content");
const listTable = document.getElementsByClassName("list-table");
const inputDetails = document.getElementById("input-details");
const ol = document.getElementById("ordered-list");


function addItem() {
  addButton.addEventListener("click", () => {
    console.log("Button is clicked");
    const listItem = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const deleteButton = document.createElement("button");
    deleteButton.innerText= "Delete";


    listItem.appendChild(checkBox);
    listItem.appendChild(document.createTextNode(inputDetails.value));
    listItem.appendChild(deleteButton);
    // listItem.innerText = inputDetails.value;
    ol.appendChild(listItem);
    inputDetails.value = "";

    deleteButton.addEventListener('click',()=>{
        ol.removeChild(listItem);
    })

    checkBox.addEventListener('change',()=>{
        if(checkBox.checked){
            listItem.style.textDecoration = "line-through";
            console.log("Checked")
        }
        else {
            listItem.style.textDecoration = "none";
        }
    })
  });
}
addItem();

