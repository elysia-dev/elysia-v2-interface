const ModalButton: React.FunctionComponent<{
  className?: string;
  onClick: () => void;
  content: string;
}> = ({ className, onClick, content }) => {
  return (
    <div className={className || 'modal__button'} onClick={onClick}>
      <p>{content}</p>
    </div>
  );
};

export default ModalButton;
