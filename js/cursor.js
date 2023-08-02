let markerValues = [

]
AFRAME.registerComponent("cursor-event", {
    init: function(){
        window.addEventListener("mouseenter", (e) =>{

            if(e.target.getAttribute("class") != null && e.target.getAttribute("class") === "marker"){
                console.log(e.target)
                var id= e.target.getAttribute("id");
                
                var displayName = document.querySelector("#display-name");
                displayName.setAttribute("text", {value: id})

                document.querySelector(".visit-button").setAttribute("visible", true);

            }else{
                console.log("not marker")
            }
        })
        window.addEventListener("click", (e)=>{
            if(e.detail.intersectedEl != undefined){
                var elClass = e.detail.intersectedEl.getAttribute("class");
                if(elClass === "visit-button"){
                    var id = document.querySelector("#display-name").getAttribute("text").value;
                    document.querySelector(".visit-button").setAttribute("id", id);
                    
                    document.querySelector("#cursor").setAttribute("visible", false)
                    document.querySelector("#map").setAttribute("visible", false)
                    document.querySelector("#markers").setAttribute("visible", false)
                    document.querySelector("#info-board").setAttribute("visible", false);
                    document.querySelector("#border").setAttribute("visible", false);
                    document.querySelector(".visit-button").setAttribute("visible", false);

                    console.log("Setting a-sky")
                }
            }

        })
    }
})