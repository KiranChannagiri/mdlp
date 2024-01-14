let modall=document.querySelector(".modal");
let overlaay=document.querySelector(".overlay");
//modal fucntion 
function openmodal()
{
    console.log("modal is opne");
    modall.classList.add("active");
    overlaay.classList.add("overlayactive");
};
//close modal
function closemodal()
{   
    console.log("modal is opne");
    modall.classList.remove("active");
    overlaay.classList.remove("overlayactive");
};