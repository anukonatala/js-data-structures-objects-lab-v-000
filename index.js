// Write your solution in this file!
const driver = {name: "Sam"};

function updateDriverWithKeyAndValue(driver, key, value){
  
  const newDriver = Object.assign({}, driver, { [key]: value });
  console.log("newDriver = " + newDriver)
  return newDriver;
}