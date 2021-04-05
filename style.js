
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
    emailInput.style.border = "1px solid hsl(0, 36%, 70%)";
    emailInput.value=""; 
  }else
  {  
    errorText.classList.add("show");
    errorIcon.classList.add("show");
    sucessText.classList.remove("show");
    emailInput.style.border="3px solid hsl(0, 93%, 68%)";
    emailInput.value="";
  }
}

