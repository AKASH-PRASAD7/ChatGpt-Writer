// import AiIcon from "data-base64:~assets/Ai-icon.jpg"
import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import { CountButton } from "~features/count-button"
import Modal from "~features/Modal"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

const inputField = document.querySelector(
  '.msg-form__contenteditable[contenteditable="false"]'
)
// Assuming LinkedIn's input field selector

console.log(inputField)
// Create and inject the AI icon
const aiIcon = document.createElement("img")
aiIcon.src =
  "https://www.google.com/images/branding/googlelogo/2x/googlelogo_dark_color_272x92dp.png" // Replace with your AI icon image
aiIcon.style.display = "none" // Initially hidden

inputField.addEventListener("focus", () => {
  aiIcon.style.display = "block" // Show the AI icon when input field is focused
})

inputField.addEventListener("blur", () => {
  aiIcon.style.display = "none" // Hide the AI icon when input field loses focus
})

// Handle AI icon click
aiIcon.addEventListener("click", () => {
  // Show your modal here (center-aligned)
  // Add input field for user commands
  // Handle clicks outside the modal to close it
  console.log("icon clicked")
})

// Append the AI icon to the input field
inputField.parentNode.appendChild(aiIcon)

// const PlasmoOverlay = () => {
//   return (
//     <div className="z-50 flex fixed top-32 right-8">
//       {/* <CountButton /> */}
//       <Modal />
//     </div>
//   )
// }

// export default PlasmoOverlay
