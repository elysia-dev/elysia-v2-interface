import Slate, { baseUrl } from 'clients/Slate';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';
import useReserveData from 'hooks/useReserveData';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { googleGAEvent } from 'utils/gaEvent';
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
  }, [reserveState]);

  const fetchImage = useCallback(async () => {
    const images: any = [];
    Promise.all(
      Array(4)
        .fill(0)
        .map(async (_, idx) => {
          if (
            assetBonds[idx].id ===
              '115792089237316195422007842550160057480242544124026915590235438085798243682305' ||
            assetBonds[idx].ipfsHash === 'ok'
          ) {
            return images.push(
              'https://elysia-public.s3.ap-northeast-2.amazonaws.com/elyfi/borrow01.png',
            );
          }
          try {
            const response = await Slate.fetchABTokenIpfs(
              assetBonds[idx].ipfsHash || '',
            );
            images.push(`${baseUrl}/${response.data.images[0]?.hash}`);
          } catch (error) {
            console.error(error);
          }
        }),
    ).then((res) => {
      setImage(images);
    });
  }, [assetBonds]);

  useEffect(() => {
    if (assetBonds.length === 0) return;
    fetchImage();
  }, [assetBonds]);

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
              googleGAEvent(
                GoogleGAAction.MainMorePortfolio,
                GoogleGACategory.Main,
              );
            }}>
            {t(`main.portfolio.2`)}
            <RightArrowIcon />
          </span>
        </Link>
      </MainPortfolioLink>
    </MainPortFolioWrapper>
  );
};

export default PortFolio;
