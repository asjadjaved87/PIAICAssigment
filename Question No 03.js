// 03. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


var FirstName = "Asjad";
var SecondName = " Javed";
console.log(FirstName.toLowerCase() + SecondName.toLowerCase());
console.log(FirstName.toUpperCase() + SecondName.toUpperCase());
console.log(FirstName.charAt(0).toUpperCase()  + FirstName.slice(1).toLowerCase() + SecondName.charAt(0).toUpperCase()  + SecondName.slice(1).toLowerCase());