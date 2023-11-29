import Image from 'next/image';

type Props = {
  image: string;
};

const AssetItem: React.FC<Props> = ({ image }) => {
  if (!image) return <></>;
  return (
    <figure>
      <Image
        src={image}
        alt={'assetBonds'}
        width={410}
        height={410}
        unoptimized={true}
      />
    </figure>
  );
};

export default AssetItem;
