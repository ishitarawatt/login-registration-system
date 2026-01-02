let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;

  document.getElementById("formTitle").innerText = isLogin ? "Login" : "Sign Up";
  document.getElementById("name").classList.toggle("hidden");
  document.getElementById("switchText").innerText =
    isLogin ? "Don't have an account?" : "Already have an account?";
  document.querySelector(".switch a").innerText = isLogin ? "Sign up" : "Login";

  document.getElementById("error").innerText = "";
}

function togglePassword() {
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}

function handleAuth() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (!email || !password || (!isLogin && !name)) {
    error.innerText = "All fields are required!";
    return;
  }

  if (!isLogin) {
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    alert("Signup successful! Please login.");
    toggleForm();
  } else {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      window.location.href = "pages/dashboard.html";
    } else {
      error.innerText = "Invalid email or password!";
    }
  }
}
