import styles from './singleTextContainer.module.css';

export const SingleTextContainer = ({
  img,
  title,
  subtitle,
  imgLeft,
}: {
  img: string;
  title: string;
  subtitle?: string;
  imgLeft?: boolean;
}) => {
  return (
    <div className={styles.container}>
      <img
        src={img}
        className={`${styles.img} ${imgLeft ? styles.imgLeft : ''}`}
        alt='img'
      />
      <div className={styles.containerText}>
        <div className={styles.title}>{title}</div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
    </div>
  );
};
