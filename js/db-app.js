// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () { 
    myFunction() 
};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    var taBtnToUp = document.getElementById("ta-btnToUp");
    w3_close();
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
        taBtnToUp.style.display = "block";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
        taBtnToUp.style.display = "none";
    }
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

function ta_map(){
    var contentPopup = '<div><div class="w3-center"><img src="../images/logo.png" alt="Valman Auto Garage"></img></div><div><p><b>Valman Auto Garage</b></p><p>28510, Campo Real</p><p>40.3322489, -3.3682497</p></div></div>'
		
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
    var map = L.map('mapid').setView([40.3322489, -3.3682497], 17).addLayer(osm);
    L.marker([40.3322489, -3.3682497])
        .addTo(map)
        .bindPopup(contentPopup)
        .openPopup();
}

function ta_setHeight(column) {
    var maxHeight = 0;
    //Get all the element with class = pm-cvmaestros
    column = $(column);
    column.css('height', 'auto');
    //Loop all the column
    column.each(function() {       
        //Store the highest value
        if($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    //Set the height
    column.height(maxHeight);
}

function ta_setHeightAuto(column) {
    column = $(column);
    column.css('height', 'auto');
}



$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
});
   
$(window).on('load', function() {
    // executes when complete page is fully loaded, including all frames, objects and images
    this.ta_map();
    if($(window).width() > 580){
        ta_setHeight('.ta-titulo-ventajas');
        ta_setHeight('.ta-ventajas');
    }
    else{
        ta_setHeight('.ta-titulo-ventajas');
        ta_setHeightAuto('.ta-ventajas');
    }

    setTimeout(function () {
        $("#popupCook").fadeIn(200);
     }, 4000);
    $("#closePopupCook, .popupCookOK").click(function() {
        $("#popupCook").fadeOut(200);
    }); 
    
});

$(window).resize(function() {
    // execute when resize window
    if($(window).width() > 580) {
        ta_setHeight('.ta-titulo-ventajas');
        ta_setHeight('.ta-ventajas');
    }
    else{
        ta_setHeight('.ta-titulo-ventajas');
        ta_setHeightAuto('.ta-ventajas');
    }
    
});