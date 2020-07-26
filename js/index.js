//add event listeners to html elements
document.querySelector("#register-btn").addEventListener('click',addRows);
document.querySelector('#FirstName').addEventListener('keypress',getData);
document.querySelector('#LastName').addEventListener('keypress',getData);
document.querySelector('#exampleInputEmail1').addEventListener('keypress',getData);
document.querySelector('#exampleInputEmail1').addEventListener('keypress',ValidateEmail);
document.querySelector('#mobileNumber').addEventListener('keypress',getData);

//create array for email and mobile number
let emailArr = [];
let numberArr = [];
let x = 0;  //initialize counter variable for array
let flag = 0; //initialize flag variable
let emailFlag = 1; 
//function to display respecitve pages
function disp(e) {
    var sec1=document.getElementById("home_page");
    var sec2=document.getElementById("registerBlock");
    var sec3=document.getElementById("showListBlock");
    console.log(e);
      if (e=='home') 
      {
        sec1.style.display="block";
        sec2.style.display="none";  
        sec3.style.display="none";
      }
      else if(e == 'register')
      {
          sec2.style.display="block";
          sec1.style.display="none";  
          sec3.style.display="none";
      }
      else
      {
          sec3.style.display="block";
          sec1.style.display="none";  
          sec2.style.display="none";
        
      }
}

function getData(e){
  if (e.keyCode != 13 || fName.length<3 && number.length!=10 && email.length<13 )
        return;
}

//function to add rows in the table
function addRows(){
     //initialize email flag variable

    //get user entered data
    var fName = document.getElementById('FirstName').value;
    var lName = document.getElementById('LastName').value;
    var email = document.getElementById('exampleInputEmail1').value;
    var number = document.getElementById('mobileNumber').value;

    var table = document.getElementById("registrantList");  //access the table
    
    if(fName.length<3)  //condition to check whether first name is greater than 3 characters.
      alert("Enter Valid First Name...!!!");
    else if (lName.length<3) //condition to check whether last name is greater than 3 characters.
    {
      alert("Enter Valid Last Name...!!!");
    }
    else if (number.length!=10)   //condition to check mobile number is of 10 digits only
    {
      alert("Enter Valid  number..!!!");
    }
    else if (email.length<13) //condition to check email.(considered abc@gmail.com for 13 digits)
    {
      alert("Enter Valid Email...!!!");
    }
    else if(emailArr.length>0)    
      {
        for(var i=0; i<emailArr.length; i++)  //condition to check whether email is registered or not.
        {
          if(emailArr[i] == email)
          {
            alert('User Already Registered...!!!');
            document.getElementById('FirstName').value = '';
            document.getElementById('LastName').value = '';
            document.getElementById('exampleInputEmail1').value = '';
            document.getElementById('mobileNumber').value = '';
            emailFlag = 0;
          }
          if (numberArr[i] == number) //condition to check whether mobile number is registered or not.
          {
            alert('User Already Registered...!!!');
            document.getElementById('FirstName').value = '';
            document.getElementById('LastName').value = '';
            document.getElementById('exampleInputEmail1').value = '';
            document.getElementById('mobileNumber').value = '';
            emailFlag = 0;
          }
        }
      }
    else //if each condition is satisfied then insert row to table
      insertRow();
}


function insertRow()
{
    //get user entered data
    var fName = document.getElementById('FirstName').value;
    var lName = document.getElementById('LastName').value;
    var email = document.getElementById('exampleInputEmail1').value;
    var number = document.getElementById('mobileNumber').value;

    var table = document.getElementById("registrantList");  //access the table

    document.getElementById('noData').style.display = 'none';  //hide no data lable
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = fName;
    cell2.innerHTML = lName;
    cell3.innerHTML = email;
    emailArr[x] = email;  //add entered email to array.
    cell4.innerHTML = number;
    numberArr[x] = number;  //add entered mobile number to array.
    
    x++;    //increment the counter

    table.appendChild(row);
    alert("Registered Successfully!!!");
    flag = 1;   //set flag variable
    
//if data added to table then reset the form
    if(flag == 1){
      document.getElementById('FirstName').value = '';
      document.getElementById('LastName').value = '';
      document.getElementById('exampleInputEmail1').value = '';
      document.getElementById('mobileNumber').value = '';
}
}


function ValidateEmail() {
      var email = document.getElementById("exampleInputEmail1").value;
      var lblError = document.getElementById("lblError");
      lblError.innerHTML = "";
      var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (!expr.test(email)) {
        lblError.innerHTML = "Invalid email address.";
  }
}

function validate(evt) {
  var key = evt.keyCode;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    evt.returnValue = false;
  }
}


