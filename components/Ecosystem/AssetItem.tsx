import Slate, { baseUrl } from 'clients/Slate';
import { IAssetBond } from 'core/types/reserveSubgraph';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { toCompactForBignumber } from 'utils/formatters';
import { IReserve } from 'utils/reserves';

type Props = {
  tokenInfo: IReserve | undefined;
  abToken: IAssetBond;
};

const AssetItem = (props: Props) => {
  const { abToken, tokenInfo } = props;
  const [image, setImage] = useState('');

  const fetchImage = useCallback(async () => {
    if (
      abToken.id ===
      '115792089237316195422007842550160057480242544124026915590235438085798243682305'
    ) {
      return setImage(
        'https://elysia-public.s3.ap-northeast-2.amazonaws.com/elyfi/borrow01.png',
      );
    }
    try {
      const response = await Slate.fetctABTokenIpfs(abToken.ipfsHash || '');
      setImage(`${baseUrl}/${response.data.images[0]?.hash}`);
    } catch (error) {
      console.error(error);
    }
  }, [abToken.id, abToken.ipfsHash]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  return (
    <div
      onClick={() => {
        window.open(
          `https://www.elyfi.world/en/portfolio/${abToken.id}`,
          '_blank',
        );
      }}>
      <div
        style={{
          position: 'relative',
        }}>
        {image && <Image src={image} alt={'building'} layout={'fill'} />}
      </div>
      <div>
        <div>{`ELYFI`}</div>
        <div>
          {'$ ' +
            toCompactForBignumber(
              abToken.principal || '0',
              tokenInfo?.decimals,
            )}
        </div>
      </div>
    </div>
  );
};

export default AssetItem;
