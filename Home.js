
document.getElementById("button1").addEventListener("click", mouseOver1);

function mouseOver1(){

   document.getElementById("button1").style.color = "red";

}


document.getElementById("button2").addEventListener("click", mouseOver); 


    function mouseOver(){ 

      document.getElementById("button2").style.color = "purple";
   }



$("#button1").hover(function() {
    $(this).css('cursor','pointer');
}); 

$("#button2").hover(function() {
    $(this).css('cursor','pointer');
}); 
 

 $('#button1').on('click', function () {
   var error = 0; 
   var usernameError = document.getElementById("username_error1");
   var passwordError = document.getElementById("password_error2");

   if ($(".existingUsername").get(0).value != "S0104675") {
   usernameError.innerHTML = "Please enter an existing valid username";
    error = 1; 
    } else {
    usernameError.innerHTML = '';
   } 
   if ($(".existingPassword").get(0).value != "honor433") {
    passwordError.innerHTML = "Please enter an existing valid password";
     error = 1;

   } else {
    passwordError.innerHTML = '';
  }
  if(error == 0)
  {  
     $("#para1").animate({ left: "-100%" });
     $(".username-label").animate({ left: "-105%" });
     $(".existingUsername").animate({ left: "-105%" });
     $(".password-label").animate({ left: "-105%" });
     $(".existingPassword").animate({ left: "-105%" });
     $("#button1").animate({ left: "-105%" });
     $(".content2").show("slide", { direction: "right" }, 1000); 
  }

});

$('#button2').on('click', function () {

var newUsernameError = $("#New_Username_error").html('');
var newPasswordError = $("#New_Password_error").html('');
var newEmailAddressError = $("#New_Email_error").html('');
var newRepeatEmailAddressError = $("#Repeat_Email_error").html('');

var newUsername = $('.newUsername').val();
var newPassword = $('.newPassword').val();
var newEmail = $('.newEmail').val();
var repeatEmail = $('.repeatEmail').val();

var errorsFound = 0; 

if (newUsername === "") {
  errorsFound = 1;
  newUsernameError.html("The username must not be empty.");
} else if (newUsername.length < 6) {
  errorsFound = 1;
  newUsernameError.html("The username must be at least 6 characters.");
}

if (newPassword.length < 6) {
  errorsFound = 1;
  newPasswordError.html("The password must be at least 6 characters.");
}

if (newEmail === "") {
  errorsFound = 1;
  newEmailAddressError.html("The email must not be left empty.");
} else if (!/@/.test(newEmail)) {
  errorsFound = 1;
  newEmailAddressError.html("The email must contain an @ symbol.");
}

if (repeatEmail !== newEmail) {
  errorsFound = 1;
  newRepeatEmailAddressError.html("This repeat email doesn't equal first.");
}

if(errorsFound == 0) { 
  
     $("#para2").animate({ left: "-100%" });
     $(".Username-label1").animate({ left: "-105%" });
     $(".newUsername").animate({ left: "-105%" });
     $(".Password-label2").animate({ left: "-105%" });
     $(".newPassword").animate({ left: "-105%" });
     $(".Email-label3").animate({ left: "-105%" });
     $(".newEmail").animate({ left: "-105%" });
     $(".Repeat-Email-label4").animate({ left: "-105%" });
     $(".repeatEmail").animate({ left: "-105%" });
     $("#button2").animate({ left: "-105%" });

}
 
});