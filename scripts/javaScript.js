
document.getElementById("form1").addEventListener("submit", function (event) {
  var password = document.getElementById("password").value;
  var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!pattern.test(password)) {
    console.log("password not valid");
    event.preventDefault();
    alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.");
  }

  var fullName = document.getElementById("fullName").value;
  var fullNamePattern = /^[A-Za-z]+\s[A-Za-z]+$/;
  if (!fullNamePattern.test(fullName)) {
    event.preventDefault();
    alert("Full name must contain only letters and at least one space.");
  }


  

  //validate that the user choosed at least three interests
  var interests = document.getElementsByClassName("form-check-input");
  var count = 0;
  for (var i = 0; i < interests.length; i++) {
    if (interests[i].checked) {
      count++;
    }
  }
  if (count < 3) {
    event.preventDefault();
    alert("You must choose at least three interests.");
  }

});

