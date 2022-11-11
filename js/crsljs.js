window.onload = function () {
    var img = document.getElementById("IMGS");
    var imgstyle = window.getComputedStyle(img, null);
    var TL = document.getElementById("L");
    var TR = document.getElementById("R");
    var D1 = document.getElementById("dot1");
    var D2 = document.getElementById("dot2");
    var D3 = document.getElementById("dot3");

    function ONimg1() {
        D1.style.backgroundColor = "#369";
        D2.style.backgroundColor = "#ccc";
        D3.style.backgroundColor = "#ccc";
    }
    function ONimg2() {
        D1.style.backgroundColor = "#ccc";
        D2.style.backgroundColor = "#369";
        D3.style.backgroundColor = "#ccc";
    }
    function ONimg3() {
        D1.style.backgroundColor = "#ccc";
        D2.style.backgroundColor = "#ccc";
        D3.style.backgroundColor = "#369";
    }

    D1.onclick = function () {
        img.style.marginLeft = "0";
        ONimg1();
    }

    D2.onclick = function () {
        img.style.marginLeft = "-500px";
        ONimg2();
    }

    D3.onclick = function () {
        img.style.marginLeft = "-1000px";
        ONimg3();
    }

    TR.onclick = function () {
        if (imgstyle.marginLeft == "0px") {
            img.style.marginLeft = "-500px";
            ONimg2();
        }
        else if (imgstyle.marginLeft == "-500px") {
            img.style.marginLeft = "-1000px";
            ONimg3();
        }
        else if (imgstyle.marginLeft == "-1000px") {
            img.style.marginLeft = "0px";
            ONimg1();
        }

    }

    TL.onclick = function () {
        if (imgstyle.marginLeft == "0px") {
            img.style.marginLeft = "-1000px";
            ONimg3();
        }
        else if (imgstyle.marginLeft == "-500px") {
            img.style.marginLeft = "0px";
            ONimg1();
        }
        else if (imgstyle.marginLeft == "-1000px") {
            img.style.marginLeft = "-500px";
            ONimg2();
        }

    }
}


