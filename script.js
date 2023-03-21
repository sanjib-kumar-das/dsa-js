function rangeOfNumbers(startNum, endNum) {
  if (endNum === startNum) {
    return "Both numbers are equal";
    
  } else if (endNum < startNum) {
      return startNum+" is bigger";
      
  } else {
  return endNum+" is bigger  ";
  
}
};

rangeOfNumbers(8,5)