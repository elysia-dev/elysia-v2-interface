import PageHeader from 'components/Common/PageHeader';
import map from 'lodash.map';
import React, { useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { totalRoadmap, RoadmapKey, Roadmap } from './data';
import Tabs from './Tabs';

export const Wrapper = styled.div`
  min-height: 1300px;
`;

export const CardWrapper = styled.div`
  color: #fff;
  margin-top: 2rem;
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  row-gap: 1rem;
  column-gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }

  > section {
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 1s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    border-radius: 20px;
    box-shadow: 0px 0px 6px #00000029;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    padding: 30px;
    strong {
      margin: 0;
      font-size: 1.3rem;
      line-height: 30px;
    }
    p {
      margin: 20px 0 0;
      font-size: 1.375rem;
      line-height: 30px;
    }
  }
`;

const colors = {
  PAST: '#F3B5B3', // 분홍
  NOW: '#FEFCC6', // 노랑
  FUTURE: '#AAE3B7', // 초록
  TEST: '#33A5FF', // 파랑
};

export const Card = styled.section<{
  currentTab: typeof RoadmapKey[keyof typeof RoadmapKey];
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;

  @media (max-width: 920px) {
    > h2 {
      margin-bottom: 20px !important;
    }
  }
  @media (max-width: 460px) {
    flex-direction: column;
    > h2 {
      margin-bottom: 15px !important;
    }
  }
  strong {
    color: ${({ currentTab }) => colors[currentTab]};
  }
  div {
    @media (max-width: 640px) {
      margin-left: 0;
      padding-left: 0;
      border: 0;
    }
    > p {
      margin: 0;
      margin-top: 0.5rem;
      font-size: 1.2rem;
      line-height: 30px;
      letter-spacing: -0.3px;

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
    }
  }
  div.due-date {
    text-align: right;
  }
`;

const RoadmapComponent = (props: any) => {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState<
    typeof RoadmapKey[keyof typeof RoadmapKey]
  >(RoadmapKey.PAST);
  const roadmaps = totalRoadmap[currentTab];

  return (
    <>
      <PageHeader
        headers={[t('roadmap.top.0'), t('roadmap.top.1'), t('roadmap.top.2')]}
      />

      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Wrapper>
        <CardWrapper>
          {map(roadmaps, (roadmap: Roadmap) => {
            const { title, contents, dueDate } = roadmap;
            return (
              <Card currentTab={currentTab} key={title}>
                <div>
                  <strong>{title}</strong>
                  <p>{contents}</p>
                </div>
                {dueDate && (
                  <div className="due-date">
                    <p>{dueDate}</p>
                  </div>
                )}
              </Card>
            );
          })}
        </CardWrapper>
      </Wrapper>
    </>
  );
};
export default RoadmapComponent;
