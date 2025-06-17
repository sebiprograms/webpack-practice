import { div } from "./index.js"


export function contactpage() {
  const contacts = document.createElement('div')
  const text = document.createElement('h2')
  text.textContent = "Contacts: "
  contacts.classList.add('contact')

  contacts.appendChild(text)
  div.appendChild(contacts)
}
