import { div } from "./index.js"

const contacts = document.createElement('div')
const text = document.createElement('h2')
text.textContent = "Contacts: "
contacts.classList.add('contact')
contacts.appendChild(text)

export function contactpage() {

  div.appendChild(contacts)
}
