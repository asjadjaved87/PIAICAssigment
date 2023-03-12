//  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//  Tests for equality and inequality with strings
//  Tests using the lower case function


var name_1 = "asjad";
var name_2 = "asjad";
console.log(name_1 == name_2);
console.log(name_1 != name_2);
console.log(name_1 == name_2.toLowerCase());


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to


var age_1 = 22;
var age_2 = 22;
console.log(age_1 == age_2);
console.log(age_1 != age_2);
console.log(age_1 <= age_2);
console.log(age_1 >= age_2); 


//  Tests using "and" and "or" operators


console.log(age_1 == age_1 || name_1 == name_2);
console.log(age_1 == age_1 && name_1 == name_2);


//  Test whether an item is in a array


var a = ["asjad", "ahmed", "rizwan"];
console.log(a.includes("ahmed"));

// Test whether an item is not in a array

 console.log(a.includes("faroqq"));
