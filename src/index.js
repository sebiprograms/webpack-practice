import "./styles.css";
import { contactpage } from "./contact";

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
    menu.appendChild(button)
}
// the main webpage card
document.body.appendChild(div)
contactpage()

export {div}