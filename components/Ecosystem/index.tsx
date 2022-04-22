import PortFolio from './PortFolio';
import Project from './Project';
import { EcosystemWrapper } from './styles';
import Top from './Top';

const Ecosystem = () => {
  return (
    <EcosystemWrapper>
      <Top />
      <Project />
      <PortFolio />
    </EcosystemWrapper>
  );
};

export default Ecosystem;
