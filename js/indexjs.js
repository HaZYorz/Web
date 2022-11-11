window.onload = function () {
    var mywindow = document.getElementById("modal_window");
    var xclose = document.getElementById("xclose");
    xclose.onclick = function () {
        mywindow.style.display = "none";
    }
}