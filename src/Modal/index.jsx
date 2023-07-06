import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="flex justify-center items-center text-black fixed top-0 left-0 right-0 bottom-0 z-10 bg-[#a0988a]/50">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };