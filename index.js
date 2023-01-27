
$("button").click(function(){
  validateEmail(email);
})

$("form").submit(function(e){
  e.preventDefault();
})



function validateEmail(name){
  var validFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(name.value.match(validFormat)){
    successMsg();
    returnState();
  } else {
    errorMsg();
  }
}

function successMsg(){
  $("h2").text("Thank you! We have received your email. Look forward to our exciting collection in your inbox XOXO");
}

function errorMsg(){
  $("img.error").removeClass("hidden");
  $("p").removeClass("hidden");
  $("form").css("border-color", "var(--clr-red)");
}

function returnState(){
  $("img.error").addClass("hidden");
  $("p").addClass("hidden");
  $("form").css("border-color", "var(--clr-grey)");
  email.value="";
}
