const menu=document.getElementById("hamburger-btn")
const shygatyn=document.querySelector(".shygatyn")
const itakturgan=document.querySelector(".itakturgan")

menu.addEventListener("click", function(){
    itakturgan.classList.toggle("active");
    shygatyn.classList.toggle("shygatyn");
})

const sozdatBtn=document.querySelector(".sozdat-btn")
const sozdatBox=document.querySelector(".sozdat")
sozdatBtn.addEventListener("click", function(){
    sozdatBox.classList.toggle("active");
})