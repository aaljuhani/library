// JavaScript Document
var globalUser;
function load() {
Parse.initialize("67LqpjS8Yc0XXOP7CJnOOo9cyy5RzJWsjs6NCqNm", "LAr7wmvZWJcXykD6jxE57yNkhYVDfxG2CfblenU0");
//var user = new Parse.User();
}
function logout() {
var user = new Parse.User();
Parse.User.logOut();
}
function login() {
//logout();
var i;
//problem retreiving user, needs to be done twice, need to first refresh page.
alert("clicked login");
var user = new Parse.User();
var username = document.getElementById("login-username").value;
var password = document.getElementById("login-password").value;
Parse.User.logIn(username, password, {
  success: function(user) {
    // Do stuff after successful login.
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});
globalUser = Parse.User.current();
alert("success");
alert(globalUser.getUsername());
}



function signup() {
var username = document.getElementById("signup-username").value;
var password = document.getElementById("signup-password").value;
var user = new Parse.User();
user.set("username", username);
user.set("password", password);

user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
    alert("Signup complete");
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});
}
