
// Testing Objects for Properties

function checkObj(Obj, checkProp) {
  // Only change code below this line
  if (Obj.hasOwnProperty(checkProp)) 
  {return Obj[checkProp]; // If true return the prop
  }
  return "Not Found";
  // Only change code above this line
}
