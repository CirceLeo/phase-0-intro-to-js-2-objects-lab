const employee = {
    name: "Margot",
    streetAddress: "123 Lane",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
const updated = {...employee}
updated[key] = value
return updated
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const updated = {...employee}
    delete updated[key];
    return updated
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}