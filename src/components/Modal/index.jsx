const Modal = ({ closeModal, children }) => {
  return (
    <article className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-40">
      {children}
    </article>
  );
};

export default Modal;
