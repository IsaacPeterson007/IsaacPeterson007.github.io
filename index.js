var btnClicked = false;

function clicked(){
    if(!btnClicked){
        document.getElementById("btn").text = "Map with no icons";
        btnClicked = !btnClicked;
    }
    else{
        document.getElementById("btn").text = "Map with icons";
        btnClicked = !btnClicked;
    }
        
}
