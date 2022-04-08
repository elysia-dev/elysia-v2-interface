import Image from 'next/image';
import CloseButton from './CloseButton';

const ModalHeader: React.FunctionComponent<{
  image?: string;
  subImage?: string;
  title: string;
  onClose?: () => void;
}> = ({ image, subImage, title, onClose }) => {
  return (
    <div className="modal__header">
      <div className="modal__header__content">
        {!!image && (
          <Image
            className="modal__header__image"
            src={image}
            alt="Token image"
          />
        )}
        {!!subImage && !!image && (
          <Image
            className="modal__header__image--sub-token"
            src={subImage}
            alt="Token image"
          />
        )}
        <h2 className="modal__header__name">{title}</h2>
      </div>
      {!!onClose && <CloseButton onClose={() => onClose()} />}
    </div>
  );
};

export default ModalHeader;
