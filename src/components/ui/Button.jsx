/* eslint-disable react/prop-types */
import styles from './Button.module.css';

export default function Button({ btnStyle = 'fill', btnText = 'This Button' }) {
  // Fill Button
  if (btnStyle === 'fill')
    return (
      <button>
        <span>{btnText}</span>
      </button>
    );

  // Outline Button
  if (btnStyle === 'outline')
    return (
      <button className={styles.btn_outline}>
        <div>
          <span>{btnText}</span>
        </div>
      </button>
    );
}
