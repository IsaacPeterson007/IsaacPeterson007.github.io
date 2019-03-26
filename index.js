var btnClicked = false;

function clicked(btn){
    if(!btnClicked){
        //document.getElementById("btn").value = "Map with no icons";
        btn.value = "Map with no icons";
        btnClicked = !btnClicked;
    }
    else{
        //document.getElementById("btn").value = "Map with icons";
        btn.value = "Map with icons";
        btnClicked = !btnClicked;
    }
        
}
