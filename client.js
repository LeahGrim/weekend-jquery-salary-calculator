$(document).ready(readyNow);
 
function readyNow(){
    console.log('Thanks for working with our Hospital, Here is your salary');
   
 $('#employeeForm').on('submit', onAddEmployee);


}


function onAddEmployee(event) {
    // prevent form from page reloading 
  event.preventDefault();
    console.log('employee added 💰');

   //grab data from DOM 
   //from form inputs
let firstName = $('#firstNameInput').val();
let lastName = $('#lastNameInput').val();
let idNumber= Number($('#iDNumberInput').val());
let title = $('#titleInput').val();
let annualSalary = Number($('#AnnualSalaryInput').val());

    let employeeObject = {
        firstName: firstName, 
        lastName: lastName,
        idNumber: idNumber,
        title: title, 
        annualSalary: annualSalary 
    };
    console.log('New Employee Calculation:', employeeObject)

firstName = $('#firstNameInput').val('');
lastName = $('#lastNameInput').val('');
idNumber= $('#iDNumberInput').val('');
title = $('#titleInput').val('');
annualSalary = $('#AnnualSalaryInput').val('');
}
