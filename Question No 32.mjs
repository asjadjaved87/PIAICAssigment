// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.



var user_name = ["Asjad", "Ahmed", "Talha", "Zubair", "Mohsin"];
var new_user_name = ["Javed", "Asjad", "Hassan", "Talha", "Movia"];
for (var i=0; i < user_name.length; i++){
    if (user_name.includes(new_user_name[i])){
        console.log("The " + new_user_name[i] + " will need to enter a new username.");
    }
    else{
        console.log("The " + new_user_name[i] + " user name is available");
    }
}