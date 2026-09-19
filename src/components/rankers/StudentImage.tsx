import React, { useState } from 'react';
import { User } from 'lucide-react';

interface StudentImageProps {
  src?: string | null;
  alt: string;
  aspectRatio?: string;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  objectPosition?: string;
}

export const StudentImage: React.FC<StudentImageProps> = ({
  src,
  alt,
  aspectRatio = '4 / 5',
  className = '',
  style = {},
  label = 'STUDENT PHOTO',
  objectPosition = 'center 20%',
}) => {
  const [hasError, setHasError] = useState(false);

  // If valid image provided and no error occurred, render image
  if (src && !hasError) {
    return (
      <div
        className={`student-image-wrapper ${className}`}
        style={{
          width: '100%',
          height: '100%',
          aspectRatio,
          overflow: 'hidden',
          backgroundColor: '#EBE6DC',
          position: 'relative',
          ...style,
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition,
            display: 'block',
            transition: 'transform 400ms ease',
          }}
        />
      </div>
    );
  }

  // Elegant, dignified academic placeholder (no fake AI personas)
  return (
    <div
      className={`student-image-placeholder ${className}`}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '220px',
        aspectRatio,
        backgroundColor: '#EFECE6',
        border: '1px solid #DFD9CE',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        userSelect: 'none',
        padding: '1.5rem',
        boxSizing: 'border-box',
        ...style,
      }}
      aria-label={`${alt} - ${label}`}
    >
      {/* Subtle architectural corner accents */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          width: '12px',
          height: '12px',
          borderTop: '1.5px solid #C4BDB0',
          borderLeft: '1.5px solid #C4BDB0',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '12px',
          height: '12px',
          borderTop: '1.5px solid #C4BDB0',
          borderRight: '1.5px solid #C4BDB0',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          width: '12px',
          height: '12px',
          borderBottom: '1.5px solid #C4BDB0',
          borderLeft: '1.5px solid #C4BDB0',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          width: '12px',
          height: '12px',
          borderBottom: '1.5px solid #C4BDB0',
          borderRight: '1.5px solid #C4BDB0',
        }}
      />

      {/* Subtle Avatar Silhouette */}
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#E2DCD2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0.85rem',
          color: '#8A8274',
        }}
      >
        <User size={28} strokeWidth={1.8} />
      </div>

      {/* Structured Placeholder Typography */}
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.74rem',
          fontWeight: 800,
          letterSpacing: '0.18em',
          color: '#655F55',
          textTransform: 'uppercase',
          textAlign: 'center',
          lineHeight: 1.35,
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: '0.66rem',
          color: '#9C9588',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginTop: '4px',
          fontWeight: 600,
        }}
      >
        TO BE ADDED
      </div>
    </div>
  );
};
