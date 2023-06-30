import * as React from 'react';

function SvgUpLeft() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.35352 0.853516C1.07737 0.853516 0.853516 1.07737 0.853516 1.35352L0.853516 5.85352C0.853516 6.12966 1.07737 6.35352 1.35352 6.35352C1.62966 6.35352 1.85352 6.12966 1.85352 5.85352L1.85352 1.85352L5.85352 1.85352C6.12966 1.85352 6.35352 1.62966 6.35352 1.35352C6.35352 1.07737 6.12966 0.853516 5.85352 0.853516L1.35352 0.853516ZM28.2929 29C28.4881 29.1952 28.8047 29.1952 29 29C29.1952 28.8047 29.1952 28.4881 29 28.2929L28.2929 29ZM0.999962 1.70707L28.2929 29L29 28.2929L1.70707 0.999962L0.999962 1.70707Z"
        fill="#2E2E2E"
      />
    </svg>
  );
}

export default React.memo(SvgUpLeft);
