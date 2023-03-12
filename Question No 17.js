// 17. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.




var gest_list = ['Talha tahir', 'Asjad javed', 'Ahmad Javed', 'Movia hassan', 'Farooq', 'Mohsin'];
var message = ' Soory no table for dinner at night';
console.log('Soory: we can invite only two people for dinner');
var Ist_gest_for_dinner = gest_list.splice(1, 1);
var second_gest_for_dinner = gest_list.splice(3, 1);
var update_gest_list  = Ist_gest_for_dinner.concat(second_gest_for_dinner);
for(i=0; i<update_gest_list.length; i++){
    console.log(update_gest_list[i]  + ' Come for dinner');
}
for(i = 0; i<gest_list.length; i++){
    console.log(gest_list[i] + message);
}
console.log(gest_list);
var empty_list = gest_list.splice();
console.log(empty_list);
