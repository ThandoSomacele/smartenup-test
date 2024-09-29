/* eslint-disable react/prop-types */

export default function Button({ className, btnStyle = 'fill', btnText = 'This Button' }) {
  // Fill Button
  if (btnStyle === 'fill') {
    return (
      <button className={`btn btn-fill ${className}`}>
        <span className='btn-text'>{btnText}</span>
      </button>
    );
  }

  // Outline Button
  if (btnStyle === 'outline') {
    return (
      <button className='btn btn-outline'>
        <div>
          <span className='btn-text'>{btnText}</span>
        </div>
      </button>
    );
  }
}
