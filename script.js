// Form Validation
document.getElementById("appForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let course = document.getElementById("course").value;

  if(name === "" || email === "" || course === ""){
    alert("Please fill all required fields!");
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.match(emailPattern)){
    alert("Please enter a valid email!");
    return;
  }

  alert(`Thank you ${name}! Your application for ${course} has been submitted.`);
  this.reset();
});
