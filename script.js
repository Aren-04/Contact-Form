document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent actual form submission

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Validate Name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Validate Message
  if (message === "") {
    document.getElementById("messageError").textContent = "Message cannot be empty.";
    isValid = false;
  }

  // If all valid
  if (isValid) {
    document.getElementById("successMessage").textContent = "Message submitted successfully!";
    document.getElementById("contactForm").reset(); // Clear the form
  }
});
