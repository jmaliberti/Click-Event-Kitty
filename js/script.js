var button = document.querySelector(".show-cat");
console.log(button);

var cat = document.querySelector(".cat");

button.addEventListener("click", function () {
    button.InnerText = "It's working."
})