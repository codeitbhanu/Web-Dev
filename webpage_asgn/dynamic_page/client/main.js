var currFocusedCat = null;
var currFocusedSubCat = null;
var currFocusedSubSubCat = null;

var dataCat0 = ["Washing Machines", "Televisions", "Refrigerators", "Air conditioners", "Small home appliances", "Health care appliances"];

(function() {
    document.onmouseover = function(e) {
        console.log("onmouseover" + e.target.id);
        if (e.target.id.startsWith("cat")) {
            currFocusedCat = e.target.id[3];
        }
        if (e.target.id.startsWith("subCat")) {
            currFocusedSubCat = e.target.id[-1];
        }
        if (e.target.id.startsWith("subSubCat")) {
            currFocusedSubSubCat = e.target.id[-1];
        }
        console.log(currFocusedCat + " " + currFocusedSubCat + " " + currFocusedSubSubCat);
        showSubCat(e.target, dataCat0);
    }
})();

var showSubCat = function(parent, data) {
    // var selected = document.getElementById("cat:hover").innerHTML;
    // console.log("Selcted: " + e.id);
    var _ul = document.createElement("ul"); // Create a <button> element
    _ul.setAttribute("id", "subCat");
    _ul.setAttribute("class", "subCat ul");
    for (var i = 0; i < data.length; i++) {
        var _li = document.createElement("li");
        _li.setAttribute("id", "subCat" + i);
        _li.setAttribute("class", "subCat li");
        _li.innerHTML = data[i];
        _ul.appendChild(_li);
    }

    // var t = document.createTextNode("CLICK ME"); // Create a text node
    // _ul.appendChild(t); // Append the text to <button>
    parent.appendChild(_ul); // Append <button> to <body>
}