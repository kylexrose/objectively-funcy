// Your code here.
var getFirstName = (obj) => obj.firstName;

var getLastName = (obj) => obj.lastName;

var getFullName = (obj) => `${obj.firstName}  ${obj.lastName}`;

var setFirstName = (obj, str) => obj.firstName = str;

var setAge = (obj, num) => obj.age = num;

var giveBirthday = (obj) => {
  if(obj.age){
    obj.age++;
  }else{
    obj.age = 1;
  }
}

var marry = (obj1, obj2) => {
  obj1.married = true;
  obj1.spouseName = getFullName(obj2);
  obj2.married = true;
  obj2.spouseName = getFullName(obj1);
}

var divorce = (obj1, obj2) => {
  obj1.married = false;
  obj2.married = false;
  delete obj1.spouseName;
  delete obj2.spouseName;
}
// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
