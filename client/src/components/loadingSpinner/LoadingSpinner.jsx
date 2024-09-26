import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
   return (
      <div className={styles.loading_shade}>
         <div className={styles.spinner}></div>
      </div>
   );
}