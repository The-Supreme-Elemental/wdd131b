function myFunction() {
    var element = document.body;

    if (element.classList.toggle("dark")) {
        document.getElementById("logo").src = "byui-logo_white.png";
    } else {
        document.getElementById("logo").src = "byui-logo_blue.webp";

    }
}



