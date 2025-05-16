document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
   
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
  
    
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const reason = document.getElementById("reason").value.trim();
    const sex = document.querySelector('input[name="sex"]:checked');
  
    let isValid = true;
  
    if (!firstName) {
      document.getElementById("errFirstName").textContent = "required";
      isValid = false;
    }
    if (!lastName) {
      document.getElementById("errLastName").textContent = "required";
      isValid = false;
    }
    if (!sex) {
      document.getElementById("errSex").textContent = "required";
      isValid = false;
    }
    if (!email) {
      document.getElementById("errEmail").textContent = "required";
      isValid = false;
    }
    if (!password) {
      document.getElementById("errPassword").textContent = "required";
      isValid = false;
    }
    if (!reason) {
      document.getElementById("errReason").textContent = "required";
      isValid = false;
    }
  
    if (isValid) {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("sex", sex.value);
      localStorage.setItem("reason", reason);
      window.location.href = "proj_profile_lastname.html";
    }
  });