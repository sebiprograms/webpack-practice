import "./styles.css";

const div = document.createElement('div')
const menu = document.createElement('div')
const display = document.createElement('div')
const text = document.createElement('p')
text.textContent = "Example Webpage Using Webpack"
div.classList.add("showcase")
menu.classList.add("menu")
display.classList.add("display")


div.appendChild(menu)
menu.appendChild(text)
div.appendChild(display)
document.body.appendChild(div)


