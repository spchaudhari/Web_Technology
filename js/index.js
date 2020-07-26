document.querySelector("#register-btn").addEventListener('click',addRows);
document.querySelector('#FirstName').addEventListener('keypress',getData);
document.querySelector('#LastName').addEventListener('keypress',getData);
document.querySelector('#exampleInputEmail1').addEventListener('keypress',getData);
document.querySelector('#exampleInputEmail1').addEventListener('keypress',ValidateEmail);
document.querySelector('#mobileNumber').addEventListener('keypress',getData);

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

function addRows(){
    var flag = 0;
    var fName = document.getElementById('FirstName').value;
    var lName = document.getElementById('LastName').value;
    var email = document.getElementById('exampleInputEmail1').value;
    var number = document.getElementById('mobileNumber').value;

    var table = document.getElementById("registrantList");
    
    if(fName.length<3)
      alert("Enter Valid First Name...!!!");
    else if (fName.length<3) {
      alert("Enter Valid First Name...!!!");
    }
    else if (number.length!=10) {
      alert("Enter Valid First Name...!!!");
    }
    else if (email.length<13) {
      alert("Enter Valid First Name...!!!");
    }
    else
    {  
    document.getElementById('noData').style.display = 'none';
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = fName;
    cell2.innerHTML = lName;
    cell3.innerHTML = email;
    cell4.innerHTML = number;
    
    table.appendChild(row);
    alert("Registered Successfully!!!");
    flag = 1;
    }
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


