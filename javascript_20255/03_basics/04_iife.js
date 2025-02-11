// Immediately Invoked Function Expression (IIFE)
// used to solve pollution due to global scope

(function chai(){
    // named IIFE
   console.log(`DB CONNECTED`)
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('Kartik')
