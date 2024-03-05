import { CountButton } from "~features/count-button"
import Modal from "~features/Modal"

import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40">
      {/* <CountButton /> */}
      <Modal />
    </div>
  )
}

export default IndexPopup
