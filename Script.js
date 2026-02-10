function sayHello() {
  var name = document.getElementById("nameInput").value;
  var result = document.getElementById("result");

  if (name === "") {
    result.innerHTML = "Please enter your name!";
    result.style.color = "red";
  } else {
    result.innerHTML = "Hello " + name + "! 👋";
    result.style.color = "green";
  }
}
