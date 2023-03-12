// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.



var gest_list = ['Asjad javed', 'Ahmad Javed', 'Farooq'];
var message = ' Come for dinner at night';
gest_list[1] = 'Rizwan';

console.log(gest_list[1]  + ' Not avaible for dinner');  //Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(gest_list);
gest_list.splice(1, 1, 'Movia hassan');                 //Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log(gest_list);

for(i=0; i<gest_list.length; i++){
    console.log(gest_list[i] + message);                // Print a second set of invitation messages, one for each person who is still in your list.
}



