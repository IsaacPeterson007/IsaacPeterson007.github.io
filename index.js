var btnClicked = false;

function clicked(){
    if(!btnClicked){
        document.getElementById("btn").value = "Map with no icons";
        btnClicked = !btnClicked;
    }
    else{
        document.getElementById("btn").value = "Map with icons";
        btnClicked = !btnClicked;
    }
        
}
