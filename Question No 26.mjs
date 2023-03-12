// 26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.


// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

var Alien_Color_1 = "green";
if (Alien_Color_1 == "green"){
    console.log("Player just earned 5 points.");
}
else if (Alien_Color_1 != "green"){
    consol.log("Player just earned 10 points.")
}

// If the alien’s color isn’t green, print a statement that the player just earned 10 points.

var Alien_Color_2 = "red";
if (Alien_Color_2 == "green"){
    console.log("Player just earned 5 points.");
}
else if (Alien_Color_2 != "green"){
    console.log("Player just earned 10 points.")
}

// Write one version of this program that runs the if block and another that runs the else block.


var Alien_Color_3 = "yellow";
if (Alien_Color_3 == "green"){
    console.log("Player just earned 5 points.");
}
else if (Alien_Color_3 == "green"){
    console.log("Player just earned 10 points.")
}
else{
    console.log("No matching")
}