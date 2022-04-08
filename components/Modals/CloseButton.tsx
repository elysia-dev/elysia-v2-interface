type Props = {
  onClose: () => void;
};

const CloseButton = (props: Props) => {
  return (
    <div className="close-button" onClick={() => props.onClose()}>
      <div className="close-button--1">
        <div className="close-button--2" />
      </div>
    </div>
  );
};

export default CloseButton;
