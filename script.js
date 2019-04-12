function compile() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var output = document.getElementById("output").contentWindow.document;

    document.body.onkeyup = function () {
        output.open();
        output.writeln("<html>" + html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>" + "</html>");
        output.close();
    };
}

function openHTML() {
    document.getElementById("shtml").style.width = "100%";
}

function closeHTML() {
    document.getElementById("shtml").style.width = "0";
}

function openCSS() {
    document.getElementById("scss").style.width = "100%";
}

function closeCSS() {
    document.getElementById("scss").style.width = "0";
}

function openJS() {
    document.getElementById("sjs").style.width = "100%";
}

function closeJS() {
    document.getElementById("sjs").style.width = "0";
}

compile();