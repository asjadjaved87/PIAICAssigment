// 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


import promptSync from 'prompt-sync'
var prompt = promptSync();
function make_shirt (){
    var size = prompt(" what is the size of t-shirt ");
    var message = (" I love Typecript ");
    if (size == "large"){
        console.log(" The " + size + " size t-shirt " + message);
    }
    else if (size == "medium"){
        console.log(" The " + size + " size t-shirt " + message);
    }
    else{
        console.log(" The " + size + " size t-shirt " + "i love iot programming");
    }
}
make_shirt();