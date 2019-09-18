
/*
Closures cannot access the arguments object of the parent, 
but, because functions are first class objects, we can pass a function as a parameter. 
The closure can now access the arguments object of the function that is passesd as a parameter.
So, there is no confusion as to which arguments object we want the closure to access. 
We're basically taking advantage of its limitations
*/

function demoMemo(func){
//we must return a function in order to keep state
//this will be more apparant in a recursive example

    //Knowing that we have access to whatever 
    //the user inputs into our function expression, we then write...   
    return function(){     
       var key = JSON.stringify(arguments);
       if (cache[key]){
        return cache[key];
     }
    
    else{
      //apply() comes in handy here and will simply 
      //return the value of the function it calls
      val = func.apply(this, arguments);
      
      //then we set the value of the function to the key(argument).
      //The next time the function runs, 
      //if the argument is the same, we simply return 
      //the value without having to have the function execute.
      
      cache[key] = val;
      return val;
    }
}

// see: https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19
