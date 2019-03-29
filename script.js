function handleSubmit(){
    const xhttp = new XMLHttpRequest();
    const data = {
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value,
    }
    xhttp.onload = function(){
        console.log(this.responseText)
    }
    xhttp.open("POST", "http:homebaseapp.com/api/login", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
}