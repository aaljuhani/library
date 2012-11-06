// JavaScript Document

Parse.$ = jQuery;

Parse.initialize("67LqpjS8Yc0XXOP7CJnOOo9cyy5RzJWsjs6NCqNm", "LAr7wmvZWJcXykD6jxE57yNkhYVDfxG2CfblenU0");
    
	var TestObject = Parse.Object.extend("TestObject", {
    // Default attributes for the todo.
    defaults: {
      foo: "bar"
    },

    // Ensure that each todo created has `content`.
    initialize: function() {
      this.save({foo: "bar"}, {
  success: function(object) {
    alert("yay! it worked");
  }
});
	  
      }
    });

    // Toggle the `done` state of this todo item.
    var testObject = new TestObject();



	
/*var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
  success: function(object) {
    alert("yay! it worked");
  }
});*/
	
