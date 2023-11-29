import Slate, { baseUrl } from 'clients/Slate';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import useReserveData from 'hooks/useReserveData';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as gtag from 'lib/gtag';
import AssetItem from './AssetItem';
import {
  MainPortFolioWrapper,
  RightArrowIcon,
  MainPortfolioItems,
  MainPortfolioLink,
} from './styles';

const PortFolio = () => {
  const { reserveState, getAssetBondsByNetwork } = useReserveData();
  const { t, i18n } = useTranslation();
  const [image, setImage] = useState([]);

  const assetBonds = useMemo(() => {
    return getAssetBondsByNetwork();
  }, [getAssetBondsByNetwork]);

  const fetchImage = useCallback(async () => {
    if (assetBonds.length === 0) return;
    const images: any = [];
    const bonds = assetBonds.filter((v, index) => {
      return v.ipfsHash !== 'empty';
    });
    Promise.all(
      Array(4)
        .fill(0)
        .map(async (_, idx) => {
          try {
            if (bonds[idx].ipfsHash === 'empty') {
              return;
            } else {
              const response = await Slate.fetchABTokenIpfs(
                bonds[idx].ipfsHash || '',
              );
              images.push(`${baseUrl}/${response.data.images[0]?.hash}`);
            }
          } catch (error) {
            images.push(
              'https://elysia-public.s3.ap-northeast-2.amazonaws.com/elyfi/borrow01.png',
            );
            console.error(error);
          }
        }),
    ).then((res) => {
      setImage(images);
    });
  }, [assetBonds]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  return (
    <MainPortFolioWrapper>
      <h2>{t(`main.portfolio.0`)}</h2>
      <h3>{t(`main.portfolio.1`)}</h3>
      <MainPortfolioItems
        style={{
          height: image.length > 0 ? undefined : '410px',
        }}>
        {image.length > 0 &&
          Array(4)
            .fill(0)
            .map((_, idx) => {
              return <AssetItem key={`item_${idx}`} image={image[idx]} />;
            })}
      </MainPortfolioItems>
      <MainPortfolioLink>
        <Link href={`${i18n.language}/Ecosystem`} passHref>
          <span
            onClick={() => {
              gtag.event({
                action: GoogleAnalyticsAction.MainMorePortfolio,
                category: GoogleAnalyticsCategory.Main,
                label: '',
              });
            }}>
            {t(`main.portfolio.3`)}
            <RightArrowIcon />
          </span>
        </Link>
      </MainPortfolioLink>
    </MainPortFolioWrapper>
  );
};

export default PortFolio;
