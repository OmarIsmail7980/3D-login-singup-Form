const signup= document.querySelector(".signup-btn")
const signin= document.querySelector(".signin-btn")
const formWrapper = document.querySelector(".forms-wrapper");

signup.addEventListener("click",(event)=>{
    event.preventDefault();
    formWrapper.classList.add("change")
});
signin.addEventListener("click",(event)=>{
    event.preventDefault();
    formWrapper.classList.remove("change")
})