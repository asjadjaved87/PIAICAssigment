// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.





var gest_list = ['Talha tahir', 'Asjad javed', 'Ahmad Javed', 'Movia hassan', 'Farooq', 'Mohsin'];
var message = ' Soory no table for dinner at night';
console.log('Soory: we can invite only two people for dinner');
var Ist_gest_for_dinner = gest_list.splice(1, 1);
var second_gest_for_dinner = gest_list.splice(3, 1);
var update_gest_list  = Ist_gest_for_dinner.concat(second_gest_for_dinner);
for(i=0; i<update_gest_list.length; i++){
    console.log(update_gest_list[i]  + ' Come for dinner');
}
console.log('Only ' + update_gest_list.length + ' no of people come for dinner');
