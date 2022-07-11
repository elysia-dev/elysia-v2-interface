import React, { ReactNode } from 'react';
import {
  LeftLineContent,
  LeftLineCounter,
  LeftLineCounterContainer,
} from './style';

const GovernanceLineCounter: React.FC<{
  counter: number;
  children: ReactNode;
}> = ({ counter, children }) => {
  return (
    <LeftLineCounterContainer>
      <LeftLineCounter>
        <p>{counter}</p>
      </LeftLineCounter>
      <LeftLineContent>{children}</LeftLineContent>
    </LeftLineCounterContainer>
  );
};

export default GovernanceLineCounter;
