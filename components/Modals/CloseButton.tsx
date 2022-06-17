import styled from 'styled-components';

type Props = {
  onClose: () => void;
};

const CloseButton = (props: Props) => {
  return (
    <CloseButtonSection onClick={() => props.onClose()}>
      <div>
        <div />
      </div>
    </CloseButtonSection>
  );
};

const CloseButtonSection = styled.section`
  width: 25px;
  height: 25px;
  display: inline-block;
  cursor: pointer;
  > div {
    height: 25px;
    width: 1px;
    margin-left: 12.5px;
    background-color: #b7b7b7;
    transform: rotate(45deg);
    z-index: 1;
    > div {
      height: 25px;
      width: 1px;
      background-color: #b7b7b7;
      transform: rotate(90deg);
      z-index: 2;
    }
  }
`;

export default CloseButton;
