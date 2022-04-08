import styles from './Modal.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const ModalLayout = (props: LayoutProps) => {
  return <div className={styles.modal}>{props.children}</div>;
};
export default ModalLayout;
