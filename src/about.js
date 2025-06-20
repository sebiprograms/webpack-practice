import { div } from "./index.js"

const about = document.createElement('div')
const text = document.createElement('h2')
text.textContent = "About: "
about.classList.add('about')
about.appendChild(text)

export function aboutPage() {

  div.appendChild(about)
}