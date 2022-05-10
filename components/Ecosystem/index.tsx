import PortFolio from './PortFolio';
import Project from './Project';
import { EcosystemWrapper } from './styles';
import Top from './Top';

const Ecosystem = () => {
  return (
    <EcosystemWrapper>
      <Top />
      <PortFolio />
    </EcosystemWrapper>
  );
};

export default Ecosystem;
