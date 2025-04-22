import { useState } from 'react';
import styles from './price.module.css';
import { DATATYPE } from '@/App';

const priceText = (price: string, title: string) => {
  return (
    <div className={styles.containerPrice}>
      <div className={styles.onlinePrice}>{price}</div>
      {title}
    </div>
  );
};

const detailsText = (title: string, text: string[], li = false) => {
  const subText = li ? (
    <ul>
      {text.map((t) => (
        <li>{t}</li>
      ))}
    </ul>
  ) : (
    text.map((t) => <div className={styles.textSections}>{t}</div>)
  );
  return (
    <div className={styles.containerDetailsText}>
      <div className={styles.detailsTitle}>{title}</div>
      {subText}
    </div>
  );
};

export const Price = ({ img, data }: { img: string; data: DATATYPE }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div className={styles.price}>
        <div className={styles.containerText}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.priceSection}>
            {data.priceOnline && priceText(data.priceOnline, 'ОНЛАЙН')}
            {data.priceMixed &&
              priceText(
                data.priceMixed,
                data?.mixedTitle ? data?.mixedTitle : 'ЗМІШАНИЙ'
              )}
          </div>
          <div className={styles.detailsButton} onClick={() => setShow(!show)}>
            {show ? 'СХОВАТИ' : 'ДЕТАЛЬНІШЕ'}
          </div>
        </div>
      </div>
      <div
        className={`${styles.detailsText} ${
          show ? styles.detailsTextOpen : styles.detailsTextClose
        }`}
      >
        {data.arr.map((obj) => detailsText(obj.title, obj.text, obj?.li))}
      </div>
      <img src={img} className={styles.img} alt='img' />
    </div>
  );
};
