var istatus = document.querySelector("h5");
var btn = document.querySelector("#Add");
var check = 0;
btn.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    check = 1;
    btn.innerHTML = "Remove Friend";
  } else {
    istatus.innerHTML = "Stanger";
    istatus.style.color = "red";
    check = 0;
    btn.innerHTML = "Add Friend";
  }
});
