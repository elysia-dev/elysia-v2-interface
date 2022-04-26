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
          //   src={image}
          alt={'assetBonds'}
          width={400}
          height={400}
          unoptimized={true}
        />
      </div>
      <div>
        <div>부동산</div>
        <div>아이콘</div>
        <div>부동산 value</div>
      </div>
    </div>
  );
};

export default AssetItem;
