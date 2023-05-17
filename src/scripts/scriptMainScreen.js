document.addEventListener("keydown", function(event) {
    if (event.key == "Enter" || event.code === "Spacebar" || event.code === "Space") {
        event.preventDefault();
        window.location.href = "src/pages/ques.html";
    } else {
        return
    }
})