import styles from './middleImg.module.css';

export const MiddleImg = ({ img }: { img: string }) => {
  return (
    <div className={styles.container}>
      <img src={img} className={styles.img} alt='img' />
      <div className={styles.containerText}>
        <div className={styles.title}>КРІСТІНА ДУТЧАК</div>
        <div className={styles.subtitle}>ПРАКТИКУЮЧА ПЕРСОНАЛЬНА</div>
        <div className={styles.subtitle}>СТИЛІСТКА</div>
      </div>
      <div className={styles.containerSubText}>
        <ul>
          <li>Створюю образи, що підкреслюють вашу індивідуальність</li>
          <li>Допомагаю знайти баланс між стилем і комфортом</li>
          <li>Підбираю одяг, що відображає ваш спосіб життя</li>
        </ul>
      </div>
    </div>
  );
};
