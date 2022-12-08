export const CloseCardIcon = ({ space, onClose, children }) => {
  return (
    <div className={`${space} self-end cursor-pointer`} onClick={onClose}>
      {children}
    </div>
  );
};
