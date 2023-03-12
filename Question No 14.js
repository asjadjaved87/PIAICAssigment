// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.





var gest_list = ['Asjad javed', 'Ahmad Javed', 'Farooq'];
var message = ' Come for dinner at night';
gest_list[1] = 'Rizwan';
for (i=0; i<gest_list.length; i++){
    console.log(gest_list[i] + message)
}
