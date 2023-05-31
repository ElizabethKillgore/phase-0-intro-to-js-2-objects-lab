// Write your solution in this file!

const employee = {
   "name": "Liz Scott", 
   "streetAddress": {
      street: "315 Emerald Rd",
      city: "New York",
      state: "NY",
      zip: "10021" 
   },
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
   
   const newObj = { ...obj};

   newObj[key] = value;

   return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {



   obj[key] = value;

   return obj;
}

function deleteFromEmployeeByKey(employee, key) {

   const newEmployee = {...employee};
   
   delete  newEmployee[key]

   return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

delete employee[key] 

return employee
}
