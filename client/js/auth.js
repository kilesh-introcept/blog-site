const users = [
  {
    email: "kilesh@gmail.com",
    name: "Kilesh",
    password: "123",
  },
  {
    email: "johne@gmail.com",
    name: "Johne",
    password: "123",
  },
];

const handleLogin = (user) => {
  window.location.href = "http://127.0.0.1:5500/client/view/";
  localStorage.setItem("user", JSON.stringify(user));
};

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = users.find((user) => user.email === email);
  user
    ? user.password === password
      ? handleLogin(user)
      : alert("Wrong Password")
    : alert("User not found");
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "http://127.0.0.1:5500/client/view/";
}
