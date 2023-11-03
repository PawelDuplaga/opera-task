import styles from './styles.module.scss';
import Image from 'next/image';

type SlideImageProps = {
  imageUrl : string;
  album : string;
}

const SlideImage = ({ imageUrl, album } : SlideImageProps) => {
  return (
		<div className={styles.slideContainer}>
      <Image 
        src={imageUrl}
        alt={`${album} cover image`}
        width={500}
        height={500}
        loading='eager'
        quality={85}
        style={{ width: "100%", height: "100%", objectFit: "cover"}}
      />
		</div>
  );
};

export default SlideImage;