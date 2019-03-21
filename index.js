AFRAME.registerComponent('map', {

    init: function() {
        const animatedMarker = document.getElementById("marker");
        const aEntity = document.getElementById("model");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                aEntity.setAttribute('visible', false);
                console.log("map was pressed");
            }
        });
}});

document.querySelector("button").addEventListener("click", (e)=>{
	console.log("HIDE OBJECTS")
});

function btnClicked(){
    console.log("btn pressed");
}
