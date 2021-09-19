window.onload = function () {

    let acc = document.getElementsByClassName("accordian");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var more = this.nextElementSibling;
            if (more.style.display === "block") {
                more.style.display = "none";
            }
            else {
                more.style.display = "block";
            }
            });
    }

}