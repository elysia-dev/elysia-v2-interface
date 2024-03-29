import styled from 'styled-components';
import { RoadmapKey } from './data/types';

const typedKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

const TabWrapper = styled.div`
  padding: 1rem 1rem;
  margin-bottom: 1rem;

  color: #cbcbcb;
  border-bottom: 1px solid #33a5ff;
  @media (max-width: 920px) {
    font-size: 1.2rem;
  }
  @media (max-width: 640px) {
    font-size: 1.2rem;
    line-height: 30px;
  }
  @media (max-width: 460px) {
    font-size: 1rem;
    line-height: 20px;
  }
`;

const TabButton = styled.button<{ isSelected: boolean }>`
  letter-spacing: 1px;
  color: ${(props) => (props.isSelected ? '#fff' : '')};} 
  font-weight: ${(props) => (props.isSelected ? 'bold' : '')};}
  width: 20%;
  padding: 10px;

  @media (max-width: 460px) {
    font-size: 1rem;
    line-height: 20px;
    width: inherit;
  }
  

  font-size: 1.2rem;
    transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
  }

`;

type Props = {
  currentTab: typeof RoadmapKey[keyof typeof RoadmapKey];
  setCurrentTab: React.Dispatch<
    React.SetStateAction<typeof RoadmapKey[keyof typeof RoadmapKey]>
  >;
};

const Tabs = ({ currentTab, setCurrentTab }: Props) => {
  return (
    <TabWrapper>
      {typedKeys(RoadmapKey).map((key: keyof typeof RoadmapKey) => {
        const roadmapKey = RoadmapKey[key];
        const isCurrentTab = currentTab === roadmapKey;
        return (
          <TabButton
            isSelected={isCurrentTab}
            key={key}
            onClick={() => setCurrentTab(roadmapKey)}>
            {roadmapKey}
          </TabButton>
        );
      })}
    </TabWrapper>
  );
};
export default Tabs;
