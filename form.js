// JavaScript code to handle form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var companyName = document.getElementById('companyName').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var likeTo = document.getElementById('likeTo').value;
    var howDidYouHear = document.getElementById('howDidYouHear').value;
    var additionalInfo = document.getElementById('additionalInfo').value;
  
    // Do something with the form data (e.g., send it to a server)
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Company Name:', companyName);
    console.log('Job Title:', jobTitle);
    console.log('I\'d like to:', likeTo);
    console.log('How did you hear about us?:', howDidYouHear);
    console.log('Additional Info:', additionalInfo);
  
    // Reset the form
    document.getElementById('myForm').reset();
  
    // Show alert message
    alert('Form submitted successfully!');
  });
  