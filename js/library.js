// JavaScript Document

function libamongfriends () {
Parse.initialize("67LqpjS8Yc0XXOP7CJnOOo9cyy5RzJWsjs6NCqNm", "LAr7wmvZWJcXykD6jxE57yNkhYVDfxG2CfblenU0");


/*
$( '#login' ).live( 'pagebeforecreate',function(event){
  alert( 'This page was just inserted into the dom!' );
});


$( '#login' ).live( 'pageshow',function(event, ui){
  alert( 'This page was just hidden: '+ ui.prevPage);
});
$( '#login' ).live( 'pageinit',function(event){
  alert( 'This page was just enhanced by jQuery Mobile!' );
});
*/
/*$( '#login' ).live( 'pageinit',function(event){
  //( ":jqmData(role='sweet-plugin')" ).sweetPlugin();
  
  //
  
});
*/

$( '#mylib' ).live( 'pagebeforecreate',function(event){
//alert("my lib"); 
 alert((Parse.User.current()).getUsername());
});



//bind add product
$( '#addproductbutton').bind("click", function(event){
Products = Parse.Object.extend("Products");
var product = new Products();
var pName = document.getElementById("productName").value;
var pType = document.getElementById("productType").value;
var username = (Parse.User.current()).getUsername();

product.set({type: pType, name: pName, owner: username});
product.save(null, {
	success: function(product) {
		alert("successful in adding product");
	},
	error: function(product, error) {
		alert("error adding new product");
	}
	}); 
});


//loading new page reloads from database, gets new current. 
//if on same page, it'll pull old current
$( '#loginbutton').bind("click", function(event){
//var state = true;
var user = new Parse.User();
var username = document.getElementById("login-username").value;
var password = document.getElementById("login-password").value;
Parse.User.logIn(username, password, {
  success: function(user) {
  // Do stuff after successful login.
  //state = true;
  $.mobile.changePage("#mylib");
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
    //state = false;
	alert("Error on login, please restart");
  }
});
alert("Clicked login");
//if(state == true) {
//	alert("You're logged in!");
//	$.mobile.changePage("#mylib");
//}

//else {
//	alert("Wrong login information");
//	$.mobile.changePage("#login");
//}
});



$( '#signupbutton').bind("click", function(event){
var username = document.getElementById("signup-username").value;
var password = document.getElementById("signup-password").value;
var user = new Parse.User();
user.set("username", username);
user.set("password", password);
//var state;
user.signUp(null, {

  success: function(user) {
    // Hooray! Let them use the app now.
	//state = true;
	alert("Success, created username, you're logged in!");
    $.mobile.changePage("#mylib");
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
	//state = false;
    alert("Error: " + error.code + " " + error.message);
  }
});
//if(state == true) {
//	alert("You've created an username!");
//}
//else {
//	alert("There was an error with signup");
//}
alert("Clicked Signup");
});
}
