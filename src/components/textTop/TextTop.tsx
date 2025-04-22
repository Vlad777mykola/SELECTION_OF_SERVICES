import styles from './textTop.module.css';

export const TextTop = ({ img }: { img: string }) => {
  return (
    <div className={styles.container}>
      <img src={img} className={styles.img} alt='img' />
      <div className={styles.containerText}>
        <div className={styles.text}>
          Робота над власним стилем зі мною – це вибір професіоналізму та
          експертного підходу. Я дипломована випускниця школи стилю
          <strong> MODETON</strong>, і для мене найважливіше – це високий рівень
          кваліфікації та увага до деталей
        </div>
        <div className={styles.text}>
          Моє головне завдання — допомогти вам знайти ідеальний баланс між
          комфортом, модою та вашою індивідуальністю. Кожен клієнт для мене — це
          унікальний проєкт, де я застосовую експертний підхід, орієнтуючись на
          ваші потреби та стиль життя
        </div>
      </div>
    </div>
  );
};
