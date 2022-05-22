import { IAssetBond } from 'core/types/reserveSubgraph';
import { formatUnits } from 'ethers/lib/utils';
import { Dispatch, SetStateAction, useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import reserves from 'utils/reserves';
import AssetItem from './AssetItem';
import { PortFolioWrapper, ViewMoreButton } from './styles';
import ElysiaAsset3 from 'assets/images/ecosystem/elysia-asset-3.webp';
import ElysiaAsset4 from 'assets/images/ecosystem/elysia-asset-4.webp';
import ElysiaAsset5 from 'assets/images/ecosystem/elysia-asset-5.webp';
import ElysiaAsset6 from 'assets/images/ecosystem/elysia-asset-6.webp';
import ElysiaAsset7 from 'assets/images/ecosystem/elysia-asset-7.webp';
import ElysiaAssetRed1 from 'assets/images/ecosystem/elysia-asset-red-1.webp';
import ElysiaAssetBlue1 from 'assets/images/ecosystem/elysia-asset-blue-1.webp';
import { formatCommaSmallZeroDisits } from 'utils/formatters';
import { parseTokenId } from 'utils/parseTokenId';
import LoanProduct from 'enums/LoanProduct';

const PortFolio: React.FC<{
  assetBondTokens: IAssetBond[];
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
}> = ({ assetBondTokens, pageNum, setPageNum }) => {
  const { t } = useTranslation();

  const elysiaArray = [
    {
      project: 'ELYSIA',
      image: ElysiaAssetRed1,
      amount: 181704,
    },
    {
      project: 'ELYSIA',
      image: ElysiaAsset6,
      amount: 1182180,
    },
    {
      project: 'ELYSIA',
      image: ElysiaAsset3,
      amount: 1041150,
    },
    {
      project: 'ELYSIA',
      image: ElysiaAsset5,
      amount: 1040950,
    },
    {
      project: 'ELYSIA',
      image: ElysiaAssetBlue1,
      amount: 426075,
    },
    {
      project: 'ELYSIA',
      image: ElysiaAsset7,
      amount: 823045,
    },
    {
      project: 'ELYSIA',
      image: ElysiaAsset4,
      amount: 814810,
    },
  ];

  const assetList = [
    ...elysiaArray.slice(0, 3),
    ...assetBondTokens,
    ...elysiaArray.slice(2, 6),
  ];

  const totalPrincipal = useMemo(() => {
    let total = 0;
    assetBondTokens.map((abToken) => {
      const tokenInfo = reserves.find(
        (reserve) => reserve.address === abToken?.reserve.id,
      );
      total += parseFloat(formatUnits(abToken.principal, tokenInfo?.decimals));
    }, []);
    elysiaArray.map((elysia) => {
      total += elysia.amount;
    });
    return total;
  }, [assetBondTokens]);

  return (
    <div>
      <PortFolioWrapper>
        <div>
          <div>{t('ecosystem.portfolio.0')}</div>
          <div>
            <Trans>{t('ecosystem.portfolio.1')}</Trans>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>{t('ecosystem.portfolio.2')}</div>
              <div>
                {assetBondTokens.length === 0 ? (
                  <Skeleton width={30} height={20} />
                ) : (
                  assetList.length
                )}
              </div>
            </div>
            <div>
              <div>{t('ecosystem.portfolio.3')}</div>
              <div>
                ${' '}
                {totalPrincipal === 0 ? (
                  <Skeleton width={50} height={20} />
                ) : (
                  formatCommaSmallZeroDisits(totalPrincipal)
                )}
              </div>
            </div>
          </div>
          <div>
            {assetBondTokens &&
              assetList
                .filter((data) => {
                  if ('project' in data) return true;
                  const tokenId = parseTokenId(data.id);
                  return LoanProduct[tokenId.productNumber] !== 'Others';
                })
                .slice(0, 6 * pageNum)
                .map((abToken, index) => {
                  const tokenInfo = reserves.find((reserve) => {
                    if ('project' in abToken) return;
                    return reserve.address === abToken?.reserve.id;
                  });
                  return (
                    <AssetItem
                      key={index}
                      tokenInfo={tokenInfo}
                      abToken={abToken}
                    />
                  );
                })}
          </div>
          {assetList.length / (6 * pageNum) >= 1 && (
            <ViewMoreButton onClick={() => setPageNum((prev) => prev + 1)}>
              {t('ecosystem.portfolio.4')}
            </ViewMoreButton>
          )}
        </div>
      </PortFolioWrapper>
    </div>
  );
};

export default PortFolio;
