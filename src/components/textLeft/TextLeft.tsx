import styles from './textLeft.module.css';

export const TextLeft = ({ img }: { img: string }) => {
  return (
    <div className={styles.container}>
      <img src={img} className={styles.img} alt='img' />
      <div className={styles.containerText}>
        <div className={styles.title}>ЗАПИС НА КОНСУЛЬТАЦІЮ</div>
        <div className={styles.subtitle}>
          Якщо ви вагаєтеся, з чого почати, пропоную
          <span className={styles.strong}> безкоштовну 30-хвилинну </span>
          консультацію. Ми розглянемо ваші стильові запити, обговоримо
          гардеробні питання та підберемо оптимальний формат співпраці.
        </div>
        <div className={styles.info}>ТЕЛЕФОН: + 380 68 07 11 707</div>
      </div>
    </div>
  );
};
