import Image, { StaticImageData } from 'next/image';
import CloseButton from './CloseButton';
import { Header, HeaderContent } from './style';

const ModalHeader: React.FunctionComponent<{
  image?: StaticImageData;
  subImage?: StaticImageData;
  title?: string;
  onClose?: () => void;
}> = ({ image, subImage, title, onClose }) => {
  return (
    <Header>
      <HeaderContent>
        {!!image && (
          <Image src={image} alt="Token image" width={36} height={36} />
        )}
        {!!subImage && !!image && (
          <Image src={subImage} alt="Sub token image" />
        )}
        {!!title && <b>{title}</b>}
      </HeaderContent>
      {!!onClose && <CloseButton onClose={() => onClose()} />}
    </Header>
  );
};

export default ModalHeader;
