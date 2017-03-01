class BankAccount {
  constructor(money) {
    this.money = money;
  }

  getTotal() {
    return this.money;
  }

  makeDeposit(deposit) {
    this.money += deposit;
  }

  makeWithdraw(withdraw) {
    this.money -= withdraw;
  }
}

class UserAccount {
  constructor(email, username, password, confirmPassword) {
    this.email = email;
    this.money = 0;
    this.username = username;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

  // Getters
  getEmail() {
    return this.email;
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  getConfirmPassword() {
    return this.password;
  }

  // setters
  setEmail(email) {
    this.email = email;
  }

  setUsername(username) {
    this.username = username;
  }

  setPassword(password) {
    this.password = password;
  }

  checkPasswordsMatch(password1, password2) {
    if(password1 === password2) {
      return true;
    } else {
      return false;
    }
  }
}


$(document).ready(function() {

  // global objects for local storage

  var newUser;

  $("#registerBtn").click(function(event) {

    var inputEmail = $("#inputEmail").val();
    var inputUsername = $("#inputUsername").val();
    var inputPass1 = $("#inputPass1").val();
    var inputPass2 = $("#inputPass2").val();

    newUser = new UserAccount(inputEmail, inputUsername, inputPass1, inputPass2);

    var userInputs = {
      'email': inputEmail,
      'username': inputUsername,
      'password1': inputPass1,
      'password2': inputPass2
    }

    localStorage.setItem("userInput", JSON.stringify(userInputs));

    console.log(newUser.email);

    event.preventDefault();
  });



  $("#submitBtn").click(function(event) {

    event.preventDefault();
    window.location.href='dashboard.html';
  });

  var currentWindow = window.location.href;

  if (currentWindow.includes("index.html")) {
    console.log("on the index.html page");
  } else if (currentWindow.includes("dashboard.html")) {
    console.log("on the dashboard.html page");
    var userInputFields = localStorage.getItem("userInput");
    console.log(userInputFields);
    $("#accountEmail").text(userInputFields[1]);
  }

});
