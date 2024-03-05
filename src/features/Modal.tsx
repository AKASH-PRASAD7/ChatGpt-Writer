import React, { useEffect, useState } from "react"

const Modal = () => {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleFocus = () => setVisible(true)
    const handleBlur = () => setVisible(false)

    document.addEventListener("focusin", handleFocus)
    document.addEventListener("focusout", handleBlur)

    return () => {
      document.removeEventListener("focusin", handleFocus)
      document.removeEventListener("focusout", handleBlur)
    }
  }, [])

  return (
    visible && (
      <div className="ai-icon">
        {/* Add your AI icon here, like an SVG or image */}
        {/* <i className="fas fa-robot"></i> */}
        asfdsfsga
      </div>
    )
  )
}

export default Modal
