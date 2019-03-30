
function submit(){
var url = "https://cors-anywhere.herokuapp.com/http://careerdev-teaching-lujason2015.c9users.io/api";
var data = {username: 'wah wah'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
}














// function handleSubmit(){
//     const xhttp = new XMLHttpRequest();
//     const data = {
//         "username": document.getElementById("username").value,
//         "password": document.getElementById("password").value,
//     }
//     xhttp.onload = function(){
//         console.log(this.responseText)
//     }
//     xhttp.open("POST", "http:homebaseapp.com/api/login", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send(JSON.stringify(data));
// }