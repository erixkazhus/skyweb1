const accords = document.querySelectorAll(".accord");
accords.forEach(accord=> {
    accord.addEventListener("click", ()=>{
        accord.classList.toggle("active");
    });
});

