import Davatar from '@davatar/react';
import { useWeb3React } from '@web3-react/core';
import styles from './Navigation.module.scss';

type Props = {
  modalVisible: () => void;
};

const ConnectWalletButton = (props: Props) => {
  const { account } = useWeb3React();

  return (
    <>
      <div
        className={styles.wallet_button}
        onClick={() => props.modalVisible()}>
        {account ? (
          <div className={styles.wallet_connect}>
            <Davatar
              size={25}
              address={account}
              generatedAvatarType="jazzicon"
            />
            <div>
              {account?.substring(0, 5)}....
              {account?.substring(account.length - 4, account.length)}
            </div>
          </div>
        ) : (
          'Connect Wallet'
        )}
      </div>
    </>
  );
};

export default ConnectWalletButton;
