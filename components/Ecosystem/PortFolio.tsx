import { IAssetBond } from 'core/types/reserveSubgraph';
import LoanProduct from 'enums/LoanProduct';
import { formatUnits } from 'ethers/lib/utils';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import { toCompact } from 'utils/formatters';
import { parseTokenId } from 'utils/parseTokenId';
import reserves from 'utils/reserves';
import AssetItem from './AssetItem';
import { PortFolioWrapper } from './styles';

const PortFolio: React.FC<{
  assetBondTokens: IAssetBond[];
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
}> = ({ assetBondTokens, pageNum, setPageNum }) => {
  const { t } = useTranslation();

  const totalPrincipal = useMemo(() => {
    let total = 0;
    assetBondTokens.map((abToken) => {
      const tokenInfo = reserves.find(
        (reserve) => reserve.address === abToken?.reserve.id,
      );
      total += parseFloat(formatUnits(abToken.principal, tokenInfo?.decimals));
    }, []);
    return toCompact(total);
  }, [assetBondTokens]);

  return (
    <div>
      <PortFolioWrapper>
        <div>
          <div>{t('ecosystem.portfolio.0')}</div>
          <div>{t('ecosystem.portfolio.1')}</div>
        </div>
        <div>
          <div>
            <div>
              <div>{t('ecosystem.portfolio.2')}</div>
              <div>
                {assetBondTokens.length === 0 ? (
                  <Skeleton width={30} height={20} />
                ) : (
                  assetBondTokens.length
                )}
              </div>
            </div>
            <div>
              <div>{t('ecosystem.portfolio.3')}</div>
              <div>
                {totalPrincipal === '0' ? (
                  <Skeleton width={50} height={20} />
                ) : (
                  totalPrincipal
                )}
              </div>
            </div>
          </div>
          <div>
            {assetBondTokens &&
              assetBondTokens
                .filter((data) => {
                  const tokenId = parseTokenId(data.id);
                  return LoanProduct[tokenId.productNumber] !== 'Others';
                })
                .slice(0, 6 * pageNum)
                .map((abToken, index) => {
                  const tokenInfo = reserves.find(
                    (reserve) => reserve.address === abToken?.reserve.id,
                  );
                  return (
                    <AssetItem
                      key={index}
                      tokenInfo={tokenInfo}
                      abToken={abToken}
                    />
                  );
                })}
          </div>
          <div onClick={() => setPageNum((prev) => prev + 1)}>
            {t('ecosystem.portfolio.4')}
          </div>
        </div>
      </PortFolioWrapper>
    </div>
  );
};

export default PortFolio;
