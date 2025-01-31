document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("startButton").style.display = "block";
    }, 3000);
});

document.getElementById("startButton").addEventListener("click", function() {
    this.style.display = "none";
    document.getElementById("message").style.display = "block";
});
