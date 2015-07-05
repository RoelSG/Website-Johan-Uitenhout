     $(document).ready(function(){
$('ul.dropdown-menu.mega-dropdown-menu').on('click', function(event){
    //The event won't be propagated to the document NODE and 
    // therefore events delegated to document won't be fired
    event.stopPropagation();
});

$(document).ready(function () {
$(".navbar-nav li a").click(function(event) {
$(".navbar-collapse").collapse('hide');
});
});



    });
var activeZoom;

images = document.getElementsByTagName("img");

for (i = 0; i < images.length; i += 1) {
    image = images[i];
    image.setAttribute("onclick", "Interaction.zoom(this);");
}

var Interaction = {
/**
 * [zoom creates a window that lays over the document, it fills this window with a picture and its data. It also gives this picture an onlick event]
 * @param  {[type]} image [The image that has been clicked will be given to this function]
 * @return {[type]}       [-]
 */
    zoom: function (image) {
        "use strict";
        var previousZoom = document.getElementById("selected"), newImage, zoomedWindow = document.createElement("div"), dataDate = document.createElement("p"), dataName = document.createElement("p");
        if (previousZoom) {
            previousZoom.removeAttribute("id");
        }
        image.setAttribute("id", "selected");
        console.log(image);
        activeZoom = true;
        zoomedWindow.setAttribute("id", "zoomWindow");
        newImage = new Image();
        newImage.src = image.src;
        newImage.alt = null;
        newImage.setAttribute("onclick", "Interaction.zoomOut(this);");
        newImage.setAttribute("id", "zoomedImage");
        dataDate.innerHTML = image.getAttribute("data-date");
        dataName.innerHTML = image.getAttribute("data-name");
        zoomedWindow.appendChild(newImage);
        zoomedWindow.appendChild(dataDate);
        zoomedWindow.appendChild(dataName);
        document.body.appendChild(zoomedWindow);
    },
/**
 * [zoomOut is activated by clicking on a zoomed-in picture. zoomOut removes the window]
 * @return {[type]} [-]
 */
    zoomOut: function () {
        "use strict";
        var element = document.getElementById("zoomWindow");
        element.parentNode.removeChild(element);
        activeZoom = false;
    }
    
};

