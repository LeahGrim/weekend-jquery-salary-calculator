$(document).ready(readyNow);
 //data aka "state" aka "model"
let employeeRegistrar = [];
let monthlySalary= 0;

function readyNow(){
    console.log(`Thanks for working with our Hospital, 
                how about we calculate your salary`);
    //handle new employee on submit
 $('#employeeForm').on('submit', onAddEmployee);
    // handle delete product on delete using the parent selection
$(document).on('click', '.deleteBtn', onDeleteEmployee);
//sumUpSalaries(employeeRegistrar);
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
   
  //update my state with data from user
  //render new employee


    //box up each employee info into an object array
   let employeeObject = {
        firstName: firstName, 
        lastName: lastName,
        idNumber: idNumber,
        title: title, 
        annualSalary: annualSalary,
        monthlyCost: annualSalary / 12
        };
    console.log('New Employee added:', employeeObject);
   
    // clear the inputs once submit is pushed in one simple line
    //made a div class for all my inputs and then called each input
    //and then cleared value
  $('#inputs input').val('');

   //push the new employee info added to the global array
    employeeRegistrar.push(employeeObject);
    //empty tbody for rendering employees to DOM
    $('#tableBody').empty();

// create a monthly salary 
//create new div for monthly salary 
// VIEW LOGIC
//code to update what the user actually sees
// State ---> DOM



// render the employee registrar 
   // loop through the array
   // render each employee to the DOM
   // as a <tr> so each product gets its own row
   for (let employeeObject of employeeRegistrar){
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

//calculate monthly sum
//empty div containing monthly sum everytime a new employee is added 

 let sum = 0
       $('.monthlySalContainer').empty();
     for (let i=0; i<employeeRegistrar.length; i++){
       sum += Number(employeeRegistrar[i].monthlyCost);
      console.log(sum);
      }

     $('.monthlySalContainer').append(`${sum}`)
     .css("color", "white");
  
}// end onAddEmployee


function onDeleteEmployee(event){
    $(this).parents('tr').remove();
    console.log('new firstName after hitting delete button is', employeeRegistrar);


} //end onDeleteEmployee

 
