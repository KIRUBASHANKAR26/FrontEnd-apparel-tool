var mailForm = document.getElementById('mail-form');
mailForm.onclick = function(e) {
    e.preventDefault();
}
function check()
{
  var emailInput=document.getElementById("email-input").value;
  var errorIcon=document.getElementById("error-img");
  var errorText=document.getElementById("text-error");
  var sucessText=document.getElementById("text-success");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  if(emailInput.match(pattern))
  { 

    errorText.classList.remove("show");
    sucessText.classList.add("show");
    errorIcon.classList.remove("show");
    document.getElementById("email-input").value = "";
    document.getElementById("email-input").style.border = "1px solid hsl(0, 36%, 70%)";
    
    
  }else
  {  
    
    errorText.classList.add("show");
    errorIcon.classList.add("show");
    sucessText.classList.remove("show");
    document.getElementById("email-input").style.border = "3px solid hsl(0, 93%, 68%)";
  }
}



