// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.


var user_name = [];
var user_name_1 = user_name.slice();
if (user_name.length != 0){
    if (user_name.length >= user_name_1.length){
        for (var i=0; i<user_name_1.length; i++){
            if(user_name[i] =="Admin"){
                console.log("Hello " + user_name[i] + " would you like to see a status report?");
            }
            else{
                console.log("Hellow " + user_name[i] + " thank you for logging in again.");
            }
        }
    }
}
else{
    console.log("We need to find some users!");
}


// corrct code

var user_name = ["Admin", "Asjad", "Ahmed", "Talha", "Zubair"];
var user_name_1 = user_name.slice();
if (user_name.length != 0){
    if (user_name.length >= user_name_1.length){
        for (var i=0; i<user_name_1.length; i++){
            if(user_name[i] =="Admin"){
                console.log("Hello " + user_name[i] + " would you like to see a status report?");
            }
            else{
                console.log("Hellow " + user_name[i] + " thank you for logging in again.");
            }
        }
    }
}
else{
    console.log("We need to find some users!");
}
