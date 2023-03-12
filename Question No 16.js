// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.





var gest_list = ['Asjad javed', 'Ahmad Javed', 'Farooq'];
var message = ' Come for dinner at night';
gest_list[1] = 'Rizwan';
console.log(gest_list[1]  + ' Not avaible for dinner');  //Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(gest_list);
gest_list.splice(1, 1, 'Movia hassan');                 //Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log(gest_list);

for(i=0; i<gest_list.length; i++){
    console.log(gest_list[i] + message + "\nwe got a bigger dinner table");                // Print a second set of invitation messages, one for each person who is still in your list.
}                                                       // Add a print statement to the end of your program informing people that you found a bigger dinner table.

gest_list.unshift('Talha tahir');                       // Add one new guest to the beginning of your array.
gest_list.splice(2, 0, "hassan");
// Add one new guest to the middle of your array
gest_list.push('Mohsin');
console.log(gest_list);
for(i=0; i<gest_list.length; i++){
    console.log(gest_list[i] + message);
}

