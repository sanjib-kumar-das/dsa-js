const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1){
  // return  names[0];
  console.log("test");
} else if(strokes <= par-2){
//   return names[1];
  console.log("test1");
} else if(strokes == par-1){
  // return names[2];
  console.log("test2");
} else if(strokes == par){
  // return names[3];
  console.log("test3");
} else if(strokes == par+1){
  // return names[4];
  console.log("test4");
} else if(strokes == par+2){
  // return names[5];
  console.log("test5");
} else {
  // return names[6];
  console.log("test0");
}


  // Only change code above this line
}

golfScore(5, 4);