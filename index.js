AFRAME.registerComponent('map', {

    init: function() {
        const animatedMarker = document.querySelector("#marker");
        const aEntity = document.querySelector("#model");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                aEntity.setAttribute('visible', false);
                console.log("map was pressed");
            }
        });
}});

document.querySelector("button").addEventListener("click", (e)=> {
    document.getElementById("button").style.backgroundColor = "#2980B9";
    console.log("button was pressed");
  })
