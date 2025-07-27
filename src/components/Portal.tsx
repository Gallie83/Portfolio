import { createPortal } from "react-dom";
import { ReactNode } from "react";

interface PortalProps {
    children: ReactNode;
}

function Portal({children }: PortalProps) {

  const modalRoot = document.getElementById('modal-root')

  if(!modalRoot) { return null }
    
  return (
    createPortal(children, modalRoot)
  )
}

export default Portal