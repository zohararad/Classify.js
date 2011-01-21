/**
 * Classify.js
 * A simple implementation of a Class native in Javascript with support for private and public methods and properties.
 * Inspired by MooTools Class.js and by the Module Javascript design pattern (for private and public methods and properties)
 * 
 * Zohar Arad. February 2011
 * 
 * Usage:
 * 
 * var MyClass = new Class({
 *   init:function(){
 *      console.log('Initializing class instance');
 *   },
 *   _name:'Zohar Arad',
 *   speak:function(){
 *      console.log(this._name); //outputs the value of private property this._name
 *   }
 * });
 * 
 * var c = new MyClass();
 * c.speak(); //will output 'Zohar Arad'
 * console.log(c._name); //will outout nothing....
 */
(function(){
  
  var Function = this.Function;
  
  if(typeof Function.bind !== 'function'){
    Function.prototype.bind = function(scope){
      var _self = this;
      return function(){
        return _self.apply(scope,arguments)
      };
    }
  }
  
  var Class = this.Class = function(defs){
    return function callee(){
      var self = this;
      
      for(var def in defs){
        if(defs.hasOwnProperty(def)){
          var d = defs[def];
          if(def.indexOf('_') !== 0){
            if (typeof(d) == 'function') self[def] = d.bind(defs);
            else self[def] = d;
          }
        }
      }
      return this.init ? this.init.apply(self,arguments) : this;
    }
  }
  
  Function.prototype.implement = function(defs){
    for(var def in defs){
      if(defs.hasOwnProperty(def)){
        this.prototype[def] = defs[def];
      }
    }
    return this;
  }
  
  Function.prototype.extend = function(defs){
    for(var def in defs){
      if(defs.hasOwnProperty(def)){
        this[def] = defs[def];
      }
    }
    return this;
  }
})();