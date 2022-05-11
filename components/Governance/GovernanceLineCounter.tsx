import React, { ReactNode } from 'react';
import styles from './Governance.module.scss';

const GovernanceLineCounter: React.FC<{
  counter: number;
  children: ReactNode;
}> = ({ counter, children }) => {
  return (
    <section className={styles.governance_left_line_counter_container}>
      <div className={styles.governance_left_line_counter_wrapper}>
        <div className={styles.governance_left_line_counter}>{counter}</div>
      </div>
      <div className={styles.governance_left_line_content}>{children}</div>
    </section>
  );
};

export default GovernanceLineCounter;
