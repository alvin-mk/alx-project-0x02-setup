import React from 'react';
import Button from ...@/components/common/Button
@/components/common/Button
interface ButtonProps {
  label: string;
  onClick: () => void;
  styleClass?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, styleClass = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition-all ${styleClass}`}
    >
      {label}
    </button>
  );
};

export default Button;
