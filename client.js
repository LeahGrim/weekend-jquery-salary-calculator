$(document).ready(readyNow);
 //global list of employee & info
let employeeRegistrar = [];

function readyNow(){
    console.log('Thanks for working with our Hospital, Here is your salary');
    //handle new employee on submit
 $('#employeeForm').on('submit', onAddEmployee);
    // handle delete product on delete using the parent selection
$(document).on('click', '.deleteBtn', onDeleteEmployee);

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
    //empty tbody for rendering employees to DOM
    $('#tableBody').empty();
   
    // render the employee registrar 
   // loop through the array
   // render each employee to the DOM
   // as a <tr> so each product gets its own row

    for (let employeeObject of employeeRegistrar){
        console.log('employee in loop is', employeeObject);
        $('#tableBody').append(`
        <tr>
        <td> ${employeeObject.firstName} </td>
        <td> ${employeeObject.lastName}  </td>
        <td> ${employeeObject.idNumber}  </td>
        <td> ${employeeObject.title}  </td>
        <td> $${employeeObject.annualSalary}  </td>
        <td>
          <button class = "deleteBtn">
            DELETE FOREVER
          </button>    
        </td>
      </tr>
        
        `);
    }
}// end onAddEmployee

function onDeleteEmployee(){
    $(this).parents('tr').remove();

} //end onDeleteEmployee

