import PageHeader from 'components/Common/PageHeader';
import map from 'lodash.map';
import { useRouter } from 'next/router';
import React, { useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { totalRoadmapKR, totalRoadmapEN, RoadmapKey, Roadmap } from './data';
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
`;

const colors = {
  DEV: '#33A5FF', // 개발: 파랑
  PLANNING: '#FEFCC6', // 기획: 노랑
  MARKETING: '#F3B5B3', // 마케팅: 분홍
  NEVER: '#AAE3B7', // 초록
};

export const Card = styled.section<{
  kind: 'DEV' | 'PLANNING' | 'MARKETING';
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
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

  @media (max-width: 768px) {
    min-height: auto;
  }
  strong {
    margin: 0;
    font-size: 1.3rem;
    line-height: 30px;
    color: ${({ kind }) => colors[kind]};
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
      font-size: 1.2rem;
    }
  }
  div.due-date {
    text-align: right;
  }
`;

const RoadmapComponent = (props: any) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { lng } = router.query;
  const totalRoadmap = lng === 'en' ? totalRoadmapEN : totalRoadmapKR;
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
            const { title, contents, kind, dueDate } = roadmap;
            return (
              <Card kind={kind} key={title}>
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
