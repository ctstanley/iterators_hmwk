// THIS IS YOUR CUSTOM JAVASCRIPT UTILITY LIBRARY
// This file is already included in you project!
// Make use of your utility functions, and create some new ones!

(function(){

    this.myUtils = {}

    myUtils = {}

    myUtils.myEach = function myEach(arr, cb){
        var len = arr.length;
        for(var i=0; i<len; i++){
            cb(arr[i], i, arr);
        }
    }

///

    myUtils.myMap = function myMap(arr, cb){
      var len = arr.length;
      var newArr = [];
      for(var i=0; i<len; i++){
         newArr[i] = cb(arr[i], i, arr);
      }
      return newArr;
    }


    myUtils.myReduce = function myReduce(arr){
      var len = arr.length;
      var val = val || 0;
      for(var i=0; i< len - 1; i++){
         val = arr[i] + arr[i + 1];
      }
      return val;
  }

    
    myUtils.buildElement = function buildElement(tag, string){
        return "<" + tag + ">" + string + "</" + tag + ">";
    }
    
    myUtils.toDollarAmount = function toDollarAmount(cash){
        return (Math.round(cash*100))/100;
    }
    
    myUtils.toCurrencyString = function toCurrencyString(cash, curr){
        return curr + myUtils.toDollarAmount(cash)
    }
    
}.call(this))














