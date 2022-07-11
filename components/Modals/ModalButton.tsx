import { CSSProperties } from 'styled-components';
import { Button } from './style';

const ModalButton: React.FunctionComponent<{
  onClick: () => void;
  title: string;
  buttonStyle?: CSSProperties;
  textStyle?: CSSProperties;
}> = ({ onClick, title, buttonStyle, textStyle }) => {
  return (
    <Button onClick={onClick} style={buttonStyle}>
      <p style={textStyle}>{title}</p>
    </Button>
  );
};

export default ModalButton;
