'use client'
import React, { useState } from 'react';
import Image from 'next/image';

type Suit = 'S' | 'H' | 'D' | 'C';
type CardValue = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'Corner';

interface CardProps {
  value: CardValue;
  suit?: Suit;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Card: React.FC<CardProps> = ({ value, suit, className = '', size = 'lg' }) => {
  const isFaceCard = ['J', 'Q', 'K'].includes(value);
  const isCorner = value === 'Corner';
  const [imgSrc, setImgSrc] = useState(
    isCorner ? '/cards/joker.png' : `/cards/${value}${suit}.png`
  );

  // Render Corner or Face Card with Image
  if (isCorner || isFaceCard) {
    return (
      <div className={`relative bg-white rounded-xl shadow-2xl flex items-center justify-center ${getSizeClasses(size)} ${className}`}>
        <Image
          src={imgSrc}
          alt={`${value}${suit || ''}`}
          fill
          className="object-contain p-0 rounded-xl"
          quality={100}
          priority={size === 'xl'}
          onError={() => {
            const fallback = isCorner ? '/cards/joker.jpg' : `/cards/${value}${suit}.jpg`;
            if (imgSrc !== fallback) setImgSrc(fallback);
          }}
        />
      </div>
    );
  }

  if (!suit) return null;

  const isRed = suit === 'H' || suit === 'D';
  const colorClass = isRed ? 'text-red-600' : 'text-black';
  const symbol = getSuitSymbol(suit);
  const displayValue = getDisplayValue(value);

  return (
    <div className={`relative bg-white rounded-xl ${getSizeClasses(size)} ${colorClass} ${className}`}>
      {/* Top-left value and suit */}
      <div className="absolute top-0.5 left-1.5 flex flex-col items-center leading-none">
        <span className="font-bold">{displayValue}</span>
        <span className="text-xl">{symbol}</span>
      </div>

      {/* Bottom-right value and suit (rotated) */}
      <div className="absolute bottom-1 right-1 flex flex-col items-center rotate-180 leading-none">
        <span className="font-bold">{displayValue}</span>
        <span className="text-xl">{symbol}</span>
      </div>

      {/* Center symbols */}
      <div className="absolute inset-0 flex items-center justify-center">
        {renderCenterSymbols(value, symbol, size)}
      </div>
    </div>
  );
};

// === Helper Functions ===

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'sm': return 'w-20 h-24 text-xs';
    case 'md': return 'w-28 h-36 text-sm';
    case 'lg': return 'w-40 h-40 text-base';
    case 'xl': return 'w-60 h-50 text-lg';
    default: return 'w-40 h-40';
  }
};

const getSuitSymbol = (suit: Suit) => {
  const symbols = { S: '♠', H: '♥', D: '♦', C: '♣' };
  return symbols[suit];
};

const getDisplayValue = (value: CardValue) => {
  return value === '10' ? <span className="text-[0.85em]">10</span> : value;
};

const renderCenterSymbols = (value: CardValue, symbol: string, size: string) => {
  const symbolSize = size === 'xl' ? 'text-4xl' : size === 'lg' ? 'text-3xl' : 'text-2xl';

  const span = (key: number, extraClasses = '') => (
    <span key={key} className={`${symbolSize} ${extraClasses}`}>{symbol}</span>
  );

  switch (value) {
    case 'A':
      return span(1);
    case '2':
      return (
        <div className="flex flex-col justify-between h-3/4">
          {span(1)}
          {span(2)}
        </div>
      );
    case '3':
      return (
        <div className="flex flex-col justify-between h-3/4">
          {span(1)}
          {span(2)}
          {span(3)}
        </div>
      );
    case '4':
      return (
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map(i => span(i))}
        </div>
      );
    case '5':
      return (
        <div className="grid grid-cols-2 gap-4 relative">
          {[1, 2, 3, 4].map(i => span(i))}
          {span(5, 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2')}
        </div>
      );
    case '6':
      return (
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => span(i))}
        </div>
      );
    case '7':
      return (
        <div className="grid grid-cols-2 gap-4 relative">
          {[1, 2, 3, 4, 5, 6].map(i => span(i))}
          {span(7, 'absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2')}
        </div>
      );
    case '8':
      return (
        <div className="grid grid-cols-2 gap-4 relative">
          {[1, 2, 3, 4, 5, 6].map(i => span(i))}
          {span(7, 'absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2')}
          {span(8, 'absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2')}
        </div>
      );
    case '9':
      return (
        <div className="grid grid-cols-2 gap-7 relative">
          {[1, 2, 3, 4, 5, 6].map(i => span(i))}
          {span(7, 'absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2')}
          {span(8, 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2')}
          {span(9, 'absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2')}
        </div>
      );
    case '10':
      return (
        <div className="flex flex-col justify-between h-[80%] w-full relative">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-around">
              {span(i * 2)}
              {span(i * 2 + 1)}
            </div>
          ))}
        </div>
      );
    case 'J':
    case 'Q':
    case 'K':
      return <span className="text-5xl">{symbol}</span>;
    default:
      return span(0);
  }
};

export default Card;
