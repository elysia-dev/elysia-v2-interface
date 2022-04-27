import Image from 'next/image';

type Props = {
  image: string;
};

const AssetItem: React.FC<Props> = ({ image }) => {
  return (
    <div>
      <div>
        <Image
          src={image}
          alt={'assetBonds'}
          width={410}
          height={410}
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default AssetItem;
