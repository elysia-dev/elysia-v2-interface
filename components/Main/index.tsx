import MainTopImg from 'assets/images/mainTop@2x.png';
import { MainWrapper } from './styles';
import PortFolio from './PortFolio';
import Top from './Top';
import Section from './Section';
import Partners from './Partners';
import Team from './Team';
import { useEffect, useState } from 'react';

const Main = () => {
  const [browserHeight, setBrowserHeight] = useState(0);

  useEffect(() => {
    if (typeof document === undefined || typeof window === undefined) return;
    if (window.innerHeight > document.body.clientHeight) {
      const sub = window.innerHeight - document.body.clientHeight;
      setBrowserHeight(document.body.clientHeight + sub);
      return;
    }
    setBrowserHeight(document.body.clientHeight);
  }, []);
  return (
    <MainWrapper theme={browserHeight}>
      <Top />
      <PortFolio />
      <Section />
      <Partners />
      <Team />
    </MainWrapper>
  );
};

export default Main;
