let age = 22;

switch (true) {
  case age < 18:
    console.log("Sorry, we don't sell drinks to underage customers.");
    break;

  case age >= 18 && age < 21:
    console.log("You are welcome to look at the selection of beers at our bar");
    break;

  case age >= 21:
    console.log("Please look at our complete bar card");
    break;
}
