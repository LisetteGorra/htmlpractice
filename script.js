console.log("This script works");

function myApp(){
    const button = document.getElementById("button");
    button.addEventListener("click", logButtonClick);
}



function logButtonClick (){
    console.log("This button is clicked");
}