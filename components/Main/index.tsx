import { MainWrapper } from './styles';
import PortFolio from './PortFolio';
import Top from './Top';
import Section from './Section';
import Partners from './Partners';
import Team from './Team';
import useResizeBrowser from 'hooks/useResizeBrowser';

const Main = () => {
  const { browserHeight } = useResizeBrowser();

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
