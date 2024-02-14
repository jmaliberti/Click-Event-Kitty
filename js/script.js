var button = document.querySelector(".show-cat");
console.log("It's working.");

var cat = document.querySelector(".cat");

button.addEventListener("click", function () {
    cat.classList.add("show")
})