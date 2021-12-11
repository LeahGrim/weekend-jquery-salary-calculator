$(document).ready(readyNow);
 //global list of employee & info
let employeeRegistrar = [];

function readyNow(){
    console.log('Thanks for working with our Hospital, Here is your salary');
   
 $('#employeeForm').on('submit', onAddEmployee);


}


function onAddEmployee(event) {
    // prevent form from page reloading 
  event.preventDefault();
    
  console.log('employee added 💰');

   //grab data from DOM in form inputs to be used as objects of employee attributes
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let idNumber= Number($('#iDNumberInput').val());
    let title = $('#titleInput').val();
    let annualSalary = Number($('#AnnualSalaryInput').val());
   //box up each employee info into an object array
    let employeeObject = {
        firstName: firstName, 
        lastName: lastName,
        idNumber: idNumber,
        title: title, 
        annualSalary: annualSalary 
    };
    console.log('New Employee Calculation:', employeeObject)
   // clear the inputs once submit is pushed
    firstName = $('#firstNameInput').val('');
    lastName = $('#lastNameInput').val('');
    idNumber= $('#iDNumberInput').val('');
    title = $('#titleInput').val('');
    annualSalary = $('#AnnualSalaryInput').val('');

  //push the new employee info added to the global array
    employeeRegistrar.push(employeeObject);
}

