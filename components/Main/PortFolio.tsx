import axios from 'axios';
import Slate, { baseUrl } from 'clients/Slate';
import { IAssetBond } from 'core/types/reserveSubgraph';
import useReserveData from 'hooks/useReserveData';
import Image from 'next/image';
import Link from 'next/link';
import { off } from 'process';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AssetItem from './AssetItem';
import { MainPortFolioWrapper } from './styles';

const PortFolio = () => {
  const { getAssetBondsByNetwork } = useReserveData();
  const { t, i18n } = useTranslation();
  const [image, setImage] = useState([]);

  const assetBonds = useMemo(() => {
    return getAssetBondsByNetwork();
  }, [getAssetBondsByNetwork]);

  // const fetchImage = useCallback(async () => {
  //   const images: any = [];
  //   console.log('assetBonds', assetBonds);
  //   Promise.all(
  //     Array(3)
  //       .fill(0)
  //       .map(async (_, idx) => {
  //         if (
  //           assetBonds[idx].id ===
  //           '115792089237316195422007842550160057480242544124026915590235438085798243682305'
  //         ) {
  //           return images.push(
  //             'https://elysia-public.s3.ap-northeast-2.amazonaws.com/elyfi/borrow01.png',
  //           );
  //         }
  //         try {
  //           const response = await Slate.fetctABTokenIpfs(
  //             assetBonds[idx].ipfsHash || '',
  //           );
  //           images.push(`${baseUrl}/${response.data.images[0]?.hash}`);
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       }),
  //   ).then((res) => {
  //     console.log('res', images);
  //   });
  // }, [assetBonds]);

  // useEffect(() => {
  //   if (assetBonds.length === 0) return;
  //   fetchImage();
  // }, [assetBonds]);

  return (
    <MainPortFolioWrapper>
      <div>
        <div>{t(`main.portfolio.0`)}</div>
        <div>{t(`main.portfolio.1`)}</div>
        {t(`main.portfolio.2`)}
      </div>
      <div>
        {Array(3)
          .fill(0)
          .map((_, idx) => {
            return <AssetItem key={`item_${idx}`} image={'image'} />;
          })}
        {/* <div>
          <div>이미지</div>
          <div>
            <div>부동산</div>
            <div>아이콘</div>
            <div>부동산 value</div>
          </div>
        </div>
        <div>
          <div>이미지</div>
          <div>
            <div>부동산</div>
            <div>아이콘</div>
            <div>부동산 value</div>
          </div>
        </div> */}
      </div>
      <div>
        <Link href={`${i18n.language}/Ecosystem`} passHref>
          <span> &gt;&gt; {t(`main.portfolio.3`)}</span>
        </Link>
      </div>
    </MainPortFolioWrapper>
  );
};

export default PortFolio;
