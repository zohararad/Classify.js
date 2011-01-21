#Classify.js - Vanilla Javascript Object-Oriented Implementation

Classify is an implementation of the Module programming paradigm in a MooTools-esque syntax.

Instead of creating a function with public and private methods and attributes that can then be instantiated, we use
MooTools' Class syntax to pass an object with class definitions to a constructure.

##Usage:

To define a new class, simply call "new Class()" passing an object with class definitions as an argument:

    var MyClass = new Class({
      init:function(){
        // this is the initializer, which is called automatically if found
      },
      doSomething:function(){
        // this is a public method
      },
      _doSomethingElse:function(){
        // this is a private method
      }
    });
    
    // now lets create an instance of our class
    var myInstance = new MyClass();
    myInstance.doSomething();

###Extending a class

We can extend a class with public methods by calling the "implement" methods on our class definition.

Calling "implement" will mix-in the new methods to our class prototype, thus making the new methods available to all instances.


####Usage:

    MyClass.implement({
      somethingNew:function(){
        //available to all instances 
      }    
    });
