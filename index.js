var btnClicked = false;

function clicked(btn){
    if(!btnClicked){
        var map = document.getElementById("model");
        map.src = "Images/Map_NoIcons.png";
        btn.textContext = "Map with no icons";
        btnClicked = !btnClicked;
    }
    else{
        var map = document.getElementById("model");
        map.src = "Images/Map_Complete.png";
        btn.textContext = "Map with icons";
        btnClicked = !btnClicked;
    }
}
