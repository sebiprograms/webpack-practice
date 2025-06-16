import "./styles.css";

const div = document.createElement('div')
const text = document.createElement('p')
text.textContent = "testing webpack"
div.classList.add("showcase")
div.appendChild(text)
document.body.appendChild(div)

