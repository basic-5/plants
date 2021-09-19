window.onload = function () {
    "use strict";

    function personnelDescriptionEvent() {
        let personnelDescription = ["Ivy loves all things about all plants. Years at Good Gums - 11", "Jarred has a vast knowledge of how to get the best out of flowering plants . Years at Good Gums - 8", "Ren has expertise with native plants that do well in tough conditions. Years at Good Gums - 5", "Daisy has particular interest in larger trees. Years at Good Gums - 3"];

        let personnel = document.getElementsByClassName("personnel");

        for (let i = 0; i < personnel.length; i++) {
            console.log(i);
            personnel[i].addEventListener("click", function () {
                let descriptionPosition = document.getElementById("descriptionPosition");
                descriptionPosition.textContent = personnelDescription[i];
                descriptionPosition.style.backgroundColor = "#32373B";
                descriptionPosition.style.color = "#EEE5E9";
                descriptionPosition.style.padding = "2rem";
                descriptionPosition.style.width = "50%";
                descriptionPosition.style.margin = "0 auto";
               
            });
        }

    }

    personnelDescriptionEvent();
   
};

