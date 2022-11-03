function myfunction(){
    var x =document.getElementById("password");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function validate(){
    {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="Saturn" && password=="Earth")
    {
        window.location="page1.html";

        return false;

    }
    else{
        alert("Please enter correct details!");
    }
    }
}

