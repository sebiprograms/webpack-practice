import "./styles.css";
import { contactPage } from "./contact";
import { aboutPage } from "./about";

const div = document.createElement('div')
const menu = document.createElement('div')
const display = document.createElement('div')
const text = document.createElement('p')

div.classList.add("showcase")
menu.classList.add("menu")
display.classList.add("display")

div.appendChild(menu)
div.appendChild(display)
for(let i = 0; i < 3; i++) {
    const names = ["home", "about", "contact"]
    const button = document.createElement('button')
    button.classList.add(`button${i}`)
    button.textContent = names[i]
    if (button.classList.contains("button2")){
        button.addEventListener('click', () => {
            if (document.querySelector('.about') != null){
                div.removeChild(document.querySelector('.about'))
            }
            contactPage()
        })
    }
    if (button.classList.contains("button1")){
        button.addEventListener('click', () => {
            aboutPage()
        })
    }
 
    menu.appendChild(button)
    
}



// the main webpage card
document.body.appendChild(div)



export {div}