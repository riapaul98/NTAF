// alert button script

function myFunc() {
  var x = document.getElementById("text");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function loginEnter() {
  var input = document.getElementById("inputPassword");
  input.addEventListener("keypress", function (event) {
    if (KeyboardEvent.code === 13) {
        // console.log(KeyboardEvent.code);
        event.preventDefault();
        document.getElementById("enterLogin").click();
    }
  });
}
