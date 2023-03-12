// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


import promptSync from 'prompt-sync'
var prompt = promptSync();
function make_shirt (){
    var size = prompt(" what is the size of t-shirt ");
    var message = prompt(" Write message print on shirt ");
    console.log(" The " + size + " size t-shirt \n " + message);
}
make_shirt();