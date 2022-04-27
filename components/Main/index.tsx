import MainTopImg from 'assets/images/mainTop@2x.png';
import { MainWrapper, TopPortfolioWrapper } from './styles';
import PortFolio from './PortFolio';
import Top from './Top';
import Section from './Section';
import Partners from './Partners';
import Team from './Team';

const Main = () => {
  return (
    <MainWrapper>
      <TopPortfolioWrapper>
        <Top />
        <PortFolio />
      </TopPortfolioWrapper>
      <Section />
      <Partners />
      <Team />
    </MainWrapper>
  );
};

export default Main;
