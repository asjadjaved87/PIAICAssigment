// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. 
// Loop through the array, and print a greeting to each user:


var user_name = ["Admin", "Asjad", "Ahmed", "Talha", "Zubair"];
for (var i=0; i<user_name.length; i++){
    if(user_name[i] =="Admin"){
        console.log("Hello " + user_name[i] + " would you like to see a status report?");  //  If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
    }
    else{
        console.log("Hellow " + user_name[i] + " thank you for logging in again.");         // Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    }
}