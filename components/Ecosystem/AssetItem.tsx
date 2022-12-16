import Slate, { baseUrl } from 'clients/Slate';
import { IAssetBond } from 'core/types/reserveSubgraph';
import { parseEther } from 'ethers/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { toUsd } from 'utils/formatters';
import { IReserve } from 'utils/reserves';

type Props = {
  tokenInfo: IReserve | undefined;
  abToken:
    | IAssetBond
    | {
        project: string;
        image: StaticImageData;
        amount: number;
        id?: number;
      };
};

const AssetItem = (props: Props) => {
  const { abToken, tokenInfo } = props;
  const [image, setImage] = useState('');

  const fetchImage = useCallback(async () => {
    if ('project' in abToken) return;
    if (
      abToken.id ===
      '115792089237316195422007842550160057480242544124026915590235438085798243682305'
    ) {
      return setImage(
        'https://elysia-public.s3.ap-northeast-2.amazonaws.com/elyfi/borrow01.png',
      );
    }
    try {
      const response = await Slate.fetchABTokenIpfs(abToken.ipfsHash || '');
      // setImage(`${baseUrl}/${response.data.images[0]?.hash}`);
      setImage(
        `${process.env.NEXT_PUBLIC_ASSET_IMAGE_URL}/${response.data.images[0]?.hash}`,
      );
    } catch (error) {
      console.error(error);
    }
  }, [abToken]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  return (
    <section
      onClick={() => {
        if ('project' in abToken) {
          abToken.project === 'ELYFI' &&
            window.open(
              `https://www.elyfi.world/en/market/bondnft/${abToken.id}`,
              '_blank',
            );
          return;
        }
        window.open(
          `https://www.elyfi.world/en/portfolio/${abToken.id}`,
          '_blank',
        );
      }}>
      <figure>
        {'project' in abToken ? (
          <Image src={abToken.image} alt={'building'} layout={'fill'} />
        ) : (
          image && <Image src={image} alt={'building'} layout={'fill'} />
        )}
      </figure>
      <section>
        <p>
          {'project' in abToken
            ? abToken.project === 'ELYSIA'
              ? 'ELYSIA'
              : 'ELYFI'
            : `ELYFI`}
        </p>
        <span>
          {'project' in abToken
            ? toUsd(parseEther(abToken.amount.toString()))
            : toUsd(abToken.principal || '0', tokenInfo?.decimals)}
        </span>
      </section>
    </section>
  );
};

export default AssetItem;
