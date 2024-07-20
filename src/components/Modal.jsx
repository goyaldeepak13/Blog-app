// // src/components/Modal.jsx
// import React from 'react';
// import ReactDOM from 'react-dom';

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full">
//         <button
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//           ✖
//         </button>
//         {children}
//       </div>
//     </div>,
//     document.body
//   );
// };

// export default Modal;






// // src/components/Modal.jsx
// import React from 'react';
// import ReactDOM from 'react-dom';

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
//       <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg relative max-w-lg w-full">
//         <button
//           className="absolute top-2 right-2 text-white hover:text-gray-300"
//           onClick={onClose}
//         >
//           ✖
//         </button>
//         <div className="bg-gray-900 p-4 rounded-lg">
//           {children}
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// };

// export default Modal;











// src/components/Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg relative max-w-lg w-full">
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-300"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="bg-gray-900 p-4 rounded-lg">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

