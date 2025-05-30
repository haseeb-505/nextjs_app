// components/SequenceBoard.tsx
import React from 'react';
import Card from './Card';
import { parseCardString } from '@/lib/cardUtils';

const SequenceBoard = () => {
  const boardLayout = [
    ['Corner', '2S', '3S', '4S', '5S', '10D', 'QD', 'KD', 'AD', 'Corner'],
    ['6C', '5C', '4C', '3C', '2C', '4S', '5S', '6S', '7S', 'AC'],
    ['7C', 'AS', '2D', '3D', '4D', 'KC', 'QC', '10C', '8D', 'KC'],
    ['8C', 'KS', '6C', '5C', '4C', '9H', '8H', '9C', '9D', 'QC'],
    ['9C', 'QS', '7C', '6H', '5H', '2H', '7H', '8C', '10S', '10C'],
    ['AS', '7H', '9D', 'AH', '4H', '3H', 'KH', '10D', '6H', '2D'],
    ['KS', '8H', '8D', '2C', '3C', '10H', 'QH', 'QD', '5H', '3D'],
    ['QS', '9H', '7D', '6D', '5D', 'AC', 'AD', 'KD', '4H', '4D'],
    ['10S', '10H', 'QH', 'KH', 'AH', '3S', '2S', '2H', '3H', '5D'],
    ['Corner', '9S', '8S', '7S', '6S', '9D', '8D', '7D', '6D', 'Corner']
  ];

  return (
    <div className="min-h-screen bg-green-800 p-0">
      <div className="max-w-[1800px] mx-auto">
        {/* Game Header */}
        <div className="text-center mb-1">
          <h1 className="text-5xl font-bold text-white pt-4 mb-0.5">SEQUENCE</h1>
          <div className="text-2xl text-yellow-200">
            <span className="mr-48">TWO EYED JACKS ARE WILD</span>
            <span>ONE EYED JACKS REMOVE</span>
          </div>
        </div>

        {/* Game Board */}
        <div className="bg-green-800 rounded-xl shadow-2xl">
          <div className="grid grid-cols-10 gap-2">
            {boardLayout.map((row, rowIndex) => (
              <React.Fragment key={`row-${rowIndex}`}>
                {row.map((card, colIndex) => {
                  const cardData = parseCardString(card);
                  if (rowIndex === 4) {
                    return (
                    <div 
                      key={`cell-${rowIndex}-${colIndex}`}
                      className="aspect-square flex items-center justify-center mb-12"
                    >
                      <Card 
                        value={cardData.value} 
                        suit={'suit' in cardData ? cardData.suit : undefined}
                        size="xl"
                        // className="mb-4"
                      />
                    </div>
                  );
                  }
                  return (
                    <div 
                      key={`cell-${rowIndex}-${colIndex}`}
                      className="aspect-square flex items-center justify-center"
                    >
                      <Card 
                        value={cardData.value} 
                        suit={'suit' in cardData ? cardData.suit : undefined}
                        size="xl"
                        // className="hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  );
                })}
                
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer */}
        
        <div className="text-center mt-2">
          <div className="text-2xl mb-0.5 text-yellow-200 rotate-180">
            <span className="mr-48">TWO EYED JACKS ARE WILD</span>
            <span>ONE EYED JACKS REMOVE</span>
          </div>
          <h1 className="text-5xl pt-4 font-bold text-white rotate-180">SEQUENCE</h1>
        </div>
      </div>
    </div>
  );
};

export default SequenceBoard;