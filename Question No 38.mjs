// 38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. 
// Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


import PromptSync from "prompt-sync";
var prompt = PromptSync();
function describe_city (cites, country){
    console.log(cites + " is in " + country);
}
describe_city("sargodha", "pakistan");
describe_city("lahore", "pakistan");
describe_city("sahiwal", "pakistan");
