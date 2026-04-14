// import { renderHome } from "./home.js";
// import { renderMenu } from "./menu.js";
// import { renderContact } from "./contact.js";
const buttons=document.querySelectorAll("button")
buttons.forEach(button=>{
    button.addEventListener("click" , (event)=>{
        const buttonText=(event.target.innerText).toLowerCase()
        if(buttonText.includes("home")) {
            console.log("home")
        }else if(buttonText.includes("contact")){
            console.log("contact")
        }else if(buttonText.includes("menu")){
            console.log("menu")
        }
    })
})