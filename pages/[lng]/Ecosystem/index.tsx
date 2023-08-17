import dynamic from 'next/dynamic';
import { t } from 'i18next';
import { NextSeo } from 'next-seo';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

const Ecosystem = dynamic(() => import('components/Ecosystem'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const EcosystemPage: React.FC<{
  rwaTokenIssued: {
    data: {
      investment_amount: number;
    }[];
  };
  usdData: number;
}> = ({ rwaTokenIssued, usdData }) => {
  const [totalLoanLength, setTotalLoanLength] = useState(0);
  const [totalLoan, setTotalLoan] = useState(0);
  useEffect(() => {
    if (rwaTokenIssued.data.length === 0) return;
    const result = rwaTokenIssued.data.reduce((prev, cur, index) => {
      return prev + cur.investment_amount;
    }, 0);
    setTotalLoanLength(rwaTokenIssued.data.length);
    setTotalLoan(result / usdData);
  }, [rwaTokenIssued.data, usdData]);
  return (
    <>
      <NextSeo title={t('meta.ecosystem')} />
      <Ecosystem totalLoan={totalLoan} totalLoanLength={totalLoanLength} />
    </>
  );
};

export default EcosystemPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const result = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=dai&vs_currencies=krw',
      {
        cache: 'force-cache',
      },
    );
    const res = await fetch('https://rwa-admin.elysia.land/items/RWA', {
      cache: 'force-cache',
    });
    const rwaData = await res.json();
    const usdData = await result.json();

    return {
      props: {
        rwaTokenIssued: rwaData,
        usdData: usdData.dai.krw,
      },
    };
  } catch (error) {
    return {
      props: {
        rwaTokenIssued: {
          data: [],
        },
        usd: 0,
      },
    };
  }
};
