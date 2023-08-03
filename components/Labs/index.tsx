import PageHeader from 'components/Common/PageHeader';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Image from 'next/image';
import Elyland from 'assets/images/developers/elylab_elyland.png';

export const Wrapper = styled.div`
  min-height: 1300px;
`;

export const CardWrapper = styled.div`
  color: #fff;
  margin-top: 2rem;
  display: grid;

  grid-template-columns: repeat(3, 1fr);

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
  isOpen: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  background-color: rgba(255, 255, 255, 0.1);
  /* background-color: ${(props) =>
    props.isOpen ? 'rgba(255, 255, 255, 0.1)' : '#343545'}; */
  transition: all 1s ease;
  border-radius: 20px;
  box-shadow: 0px 0px 6px #00000029;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  padding: 28px 20px;
  > div:nth-child(1) {
    overflow: hidden;
    text-align: center;
    img {
      border-radius: 20px;
    }
  }
  > div:nth-child(2) {
    max-width: 400px;
    width: 100%;
    margin-top: 10px;
    > strong {
      font-size: 18px;
      color: #33a5ff;
    }
    > p {
      margin-top: 4px;
      font-size: 14px;
    }
  }
  .coming_soon {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    width: 100%;
    max-width: 400px;
    background-color: #343545;
    border-radius: 20px;
    @media (max-width: 1024px) {
      font-size: 28px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 576px) {
      font-size: 20px;
    }
  }
`;

const TestBadge = styled.span`
  font-family: 'Gilroy-Bold';
  font-weight: 700;

  background-color: #ffa500;
  border-radius: 7px;
  position: absolute;
  top: 12px;
  right: 8px;
  width: 50px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Labs = (props: any) => {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader
        headers={[t('laboratory.0'), t('laboratory.1'), t('laboratory.2')]}
      />

      <Wrapper>
        <CardWrapper>
          <Card isOpen={true}>
            {/* <div>
              <Image src={Elyland} alt="Elyland" />
            </div>
            <div>
              <strong>ELYLAND</strong>
              <p>{t('laboratory.3')}</p>
            </div> */}
            <div className="coming_soon">Coming Soon</div>
          </Card>
          <Card isOpen={false}>
            <div className="coming_soon">Coming Soon</div>
          </Card>
          <Card isOpen={false}>
            <div className="coming_soon">Coming Soon</div>
          </Card>
        </CardWrapper>
      </Wrapper>
    </>
  );
};
export default Labs;
