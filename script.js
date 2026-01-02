function forma() {
    
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message").value;


    document.getElementById("error-name").style.display="none";
    document.getElementById("error-email").style.display="none";
    document.getElementById("error-message-empty").style.display="none";
    document.getElementById("error-message-limit").style.display="none";


    let error =false; 
    if (name.trim()=="") {
        document.getElementById("error-name").style.display="block";
        error=true;
    }

    if (email.trim()=="") {
        document.getElementById("error-email").style.display="block";
        error=true;
    }

    if (message.trim()=="") {
        document.getElementById("error-message-empty").style.display ="block";
        error =true;
    }

    if (message.length>100) {
        document.getElementById("error-message-limit").style.display="block";
        error=true;
    }


    if (error==false) {
        document.getElementById("form-container").style.display="none";
        document.getElementById("success-message").style.display="block";
    }

}