import { useEffect, useState } from 'react';
import Section from './Section';
import axios from 'axios';

const ELBridge = () => {
  const [totalCreatedNFT, setTotalCreatedNFT] = useState(0);
  useEffect(() => {
    // countapi.visits().then((result) => {
    //   console.log(result.value);
    // });
    axios
      .get(
        'https://api.countapi.xyz/get/test/b9424cfb-a2ff-48de-997b-05af2686290b',
      )
      .then((res) => {
        console.log(res);
        setTotalCreatedNFT(res.data.value);
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Section totalCreatedNFT={totalCreatedNFT} />
    </div>
  );
};

export default ELBridge;
