import { StaticImageData } from 'next/image';
import ModalHeader from './ModalHeader';
import { Background, Layout } from './style';

interface LayoutProps {
  children: React.ReactNode;
  image?: StaticImageData;
  subImage?: StaticImageData;
  title?: string;
  onClose?: () => void;
}

const ModalLayout = (props: LayoutProps) => {
  return (
    <Background>
      <Layout>
        <ModalHeader
          image={props.image || undefined}
          subImage={props.subImage || undefined}
          title={props.title || undefined}
          onClose={props.onClose || undefined}
        />
        {props.children}
      </Layout>
    </Background>
  );
};
export default ModalLayout;
