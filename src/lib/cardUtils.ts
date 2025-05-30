// utils/cardUtils.ts
type Suit = 'S' | 'H' | 'D' | 'C';
type CardValue = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

export interface CardData {
  value: CardValue;
  suit: Suit;
}

export const parseCardString = (cardStr: string): CardData | { value: 'Corner' } => {
  if (cardStr === 'Corner') return { value: 'Corner' };
  
  const suit = cardStr.slice(-1) as Suit;
  const value = cardStr.slice(0, -1) as CardValue;
  
  if (!['S', 'H', 'D', 'C'].includes(suit)) {
    throw new Error(`Invalid suit: ${suit}`);
  }
  
  if (!['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'].includes(value)) {
    throw new Error(`Invalid card value: ${value}`);
  }
  
  return { value, suit };
};

export const generateDeck = (): CardData[] => {
  const suits: Suit[] = ['S', 'H', 'D', 'C'];
  const values: CardValue[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
  return suits.flatMap(suit => 
    values.map(value => ({ value, suit }))
  );
};