let abc = 15;
let outText = "Right";
let isRight = (abc > 10 || abc == 10) && (abc < 20 || abc == 20);

if (isRight) {
  console.log(outText);
} else {
  console.log("Wrong");
}
