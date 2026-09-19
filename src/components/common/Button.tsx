import React from 'react';
import { Link } from '../../context/RouterContext';

interface ButtonProps {
  variant?: 'green' | 'navy' | 'outline-navy' | 'outline-white' | 'text' | 'hero-primary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'green',
  size = 'md',
  href,
  onClick,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  style,
  type = 'button',
  disabled = false,
}) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClass} style={style} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClass}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
