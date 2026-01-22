
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hexagonal Shield Shape */}
      <path d="M50 5 L90 25 V75 L50 95 L10 75 V25 L50 5Z" fill="#1B3A33" />
      <path d="M50 8 L87 27 V73 L50 92 L13 27 V27 L50 8Z" stroke="#D4AF37" strokeWidth="2" fill="white" />
      
      {/* Checkmark - Dual Toned */}
      <path d="M40 55 L48 63 L65 40" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 55 L48 63 L75 30" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Lower Shield Accents */}
      <path d="M15 65 Q50 75 85 65 V75 L50 90 L15 75 Z" fill="#1B3A33" />
      <circle cx="50" cy="35" r="20" stroke="#1B3A33" strokeWidth="0.5" fill="transparent" />
    </svg>
  </div>
);

export default Logo;
