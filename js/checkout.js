
function validateEmail(email) {
	return String(email)
	  .toLowerCase()
	  .match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	  );
  };
  
  function addInvalidClass(element, error) {
	if (error) {
	  element.classList.add("is-invalid");
	} else {
	  element.classList.remove("is-invalid");
	  element.classList.add("is-valid");
	}
  };
// Exercise 7
function validate() {
	let error = 0;
	let checkOutForm = document.getElementById("checkOutForm")
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
    let fLastN = document.getElementById("fLastN");
    let fPassword = document.getElementById("fPassword");
    let fPhone = document.getElementById("fPhone");


	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress")
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");   
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value === "" || !fName.value.match(/^[A-Za-z\s]*$/) || fName.value.length < 3){

	addInvalidClass(fName,true)
		error++;
	} else {
		addInvalidClass(fName, false)
	}

	if(fEmail.value === "" || !validateEmail || fEmail.value.length <3){
		addInvalidClass(fEmail,true)
		error++;
	} else{
		addInvalidClass(fEmail,false)
	}

	if(fAddress.value === "" || fAddress.value.length <3){
		addInvalidClass(fAddress,true)
		error++;
	} else{
		addInvalidClass(fAddress, false)
	}
	if(fLastN.value === "" || !fLastN.value.match(/^[A-Za-z\s]*$/) || fLastN.value.length < 3){
		addInvalidClass(fLastN, true)
		error++
	}else{
		addInvalidClass(fLastN,false)
	}
	if(fPhone.value === "" || isNaN(fPhone.value) || fPhone.value.length !== 9){
		addInvalidClass(fPhone, true)
		error++
	}else{
		addInvalidClass(fPhone,false)
	}
	if(fPassword.value === "" || !fPassword.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{3,8}$/) ||
    fPassword.value.length < 3){
		addInvalidClass(fPassword, true)
		error++
	}else{
		addInvalidClass(fPassword, false)
	}
	 
	if (error > 0) {
		checkOutForm.addEventListener(
		  "submit",
		  (e) => {
			e.preventDefault(); // To continue filling the wrongs fiels only
		  },
		);
	  } else{
		alert("OK");
	}

}
