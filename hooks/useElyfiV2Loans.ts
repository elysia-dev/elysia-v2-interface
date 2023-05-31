import { constants, ethers } from 'ethers';
import fixedInterest from 'abis/fixedInterestBulletLoans.json';
import { formatEther, formatUnits } from 'ethers/lib/utils';
import { useEffect, useState } from 'react';

const ELYFI_V2_FIXED_INTEREST_CONTRACT_ADDRESS =
  '0x30ce372a51058ac08c57574ee8e7fcc940823bb5';

const provider = new ethers.providers.JsonRpcProvider(
  'https://bsc-dataseed.binance.org/',
);

const fixedInterestContract = new ethers.Contract(
  ELYFI_V2_FIXED_INTEREST_CONTRACT_ADDRESS,
  fixedInterest,
  provider,
);

const useElyfiV2Loans = () => {
  const [loans, setLoans] = useState({
    totalLoans: 0,
    totalPrincipal: 0,
  });
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(true);
    fixedInterestContract.functions
      .getLoansLength()
      .then((res) => {
        const loanLength = parseFloat(formatUnits(res[0], 0));
        if (loanLength === 0) {
          setisLoading(false);
          setLoans({
            totalLoans: 0,
            totalPrincipal: 0,
          });
          return;
        }
        const data = Array(loanLength)
          .fill(0)
          .map((_, index) => {
            return fixedInterestContract.functions.loanData(index);
          });
        Promise.all(data)
          .then((res) => {
            const totalPrincipal = res.reduce((prev, next) => {
              return prev.add(next[0].usdPrincipal);
            }, constants.Zero);
            setisLoading(false);
            setLoans({
              totalLoans: loanLength,
              totalPrincipal: parseFloat(formatEther(totalPrincipal)),
            });
          })
          .catch(() => {
            throw Error;
          });
      })
      .catch(() => {
        setisLoading(false);
      });
  }, []);

  return { loans, isLoading };
};

export default useElyfiV2Loans;
