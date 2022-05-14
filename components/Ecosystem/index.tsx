import CollateralCategory from 'enums/CollateralCategory';
import useReserveData from 'hooks/useReserveData';
import { useMemo, useState } from 'react';
import { parseTokenId } from 'utils/parseTokenId';
import PortFolio from './PortFolio';
import Top from './Top';
import { EcosystemImage } from './styles';

const Ecosystem = () => {
  const { reserveState, getAssetBondsByNetwork } = useReserveData();
  const [pageNum, setPageNum] = useState(1);

  const assetBonds = useMemo(() => {
    return getAssetBondsByNetwork();
  }, [reserveState]);

  const assetBondTokensBackedByEstate = useMemo(() => {
    return assetBonds
      .filter((product) => {
        const parsedId = parseTokenId(product.id);
        return CollateralCategory.Others !== parsedId.collateralCategory;
      })
      .sort((a, b) => {
        return b.loanStartTimestamp! - a.loanStartTimestamp! >= 0 ? 1 : -1;
      });
  }, [assetBonds]);

  return (
    <>
      <EcosystemImage />
      <Top />
      <PortFolio
        assetBondTokens={assetBondTokensBackedByEstate}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </>
  );
};

export default Ecosystem;
