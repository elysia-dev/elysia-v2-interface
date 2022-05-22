import Slate, { baseUrl } from 'clients/Slate';
import { IAssetBond } from 'core/types/reserveSubgraph';
import Image, { StaticImageData } from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { toCompactForBignumber, toCompact } from 'utils/formatters';
import { IReserve } from 'utils/reserves';

type Props = {
  tokenInfo: IReserve | undefined;
  abToken:
    | IAssetBond
    | {
        project: string;
        image: StaticImageData;
        amount: number;
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
      const response = await Slate.fetctABTokenIpfs(abToken.ipfsHash || '');
      setImage(`${baseUrl}/${response.data.images[0]?.hash}`);
    } catch (error) {
      console.error(error);
    }
  }, [abToken]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  return (
    <div
      onClick={() => {
        if ('project' in abToken) return;
        window.open(
          `https://www.elyfi.world/en/portfolio/${abToken.id}`,
          '_blank',
        );
      }}>
      <div
        style={{
          position: 'relative',
        }}>
        {'project' in abToken ? (
          <Image src={abToken.image} alt={'building'} layout={'fill'} />
        ) : (
          image && <Image src={image} alt={'building'} layout={'fill'} />
        )}
      </div>
      <div>
        <div>{'project' in abToken ? 'ELYSIA' : `ELYFI`}</div>
        <div>
          {'$ ' +
            ('project' in abToken
              ? toCompact(abToken.amount)
              : toCompactForBignumber(
                  abToken.principal || '0',
                  tokenInfo?.decimals,
                ))}
        </div>
      </div>
    </div>
  );
};

export default AssetItem;
