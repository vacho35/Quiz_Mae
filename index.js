const aide = document.querySelector(".secrete-sentence");
const btnAide1 = document.getElementById("btn1");
const btnAide2 = document.getElementById("btn2");


    btnAide1.addEventListener('click', () => {
        aide.classList.toggle("visible")
        btnAide1.classList.toggle("clicked")
    });

    btnAide2.addEventListener('click', () => {
        aide.classList.toggle("visible")
        btnAide2.classList.toggle("clicked")
    });


