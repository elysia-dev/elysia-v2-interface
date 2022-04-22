import { MainWrapper } from './styles';
import PortFolio from './PortFolio';
import Top from './Top';
import Section from './Section';
import Partners from './Partners';
import Team from './Team';

const Main = () => {
  return (
    <MainWrapper>
      <Top />
      <PortFolio />
      <Section />
      <Partners />
      <Team />
    </MainWrapper>
  );
};

export default Main;
