// Write your solution in this file!
const driver = {name: "Sam"};

function updateDriverWithKeyAndValue(driver, key, value){
  
  const newDriver = Object.assign({}, driver, { [key]: value });
  return newDriver;
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key){
  const newDriver = Object.assign({}, driver, { [key]: value });
  delete newDriver[key];
}