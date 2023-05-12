import * as React from 'react';

const SvgOriginal = () => (
  <svg width="30" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4.5" cy="4" r="4" fill="#E03" />
    <path fill="#0A0" d="M10.5 0h8v8h-8z" />
    <path fill="#06F" d="M29.5 8 25 0l-4.5 8h9Z" />
  </svg>
);

export default React.memo(SvgOriginal);
