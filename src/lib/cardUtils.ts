// lib/cardUtils.ts
export type Suit = 'S' | 'H' | 'D' | 'C' | 'J1' | 'J2' | 'J3' | 'J4';
export type CardValue =
  | 'A'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K'
  | 'CornerJ1'
  | 'CornerJ2'
  | 'CornerJ3'
  | 'CornerJ4';

export const parseCardString = (card: string): { value: CardValue; suit?: Suit } => {
  // Handle corner cards
  const cornerValues: CardValue[] = ['CornerJ1', 'CornerJ2', 'CornerJ3', 'CornerJ4'];
  if (cornerValues.includes(card as CardValue)) {
    return { value: card as CardValue, suit: undefined };
  }

  // Handle regular cards
  const validSuits: Suit[] = ['S', 'H', 'D', 'C', 'J1', 'J2', 'J3', 'J4'];
  const validValues: CardValue[] = [
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
  ];

  let value: CardValue;
  let suit: Suit | undefined;

  // Check for '10' first (two-character value)
  if (card.startsWith('10')) {
    value = '10';
    suit = card.slice(2) as Suit;
  } else {
    value = card.slice(0, 1) as CardValue;
    suit = card.slice(1) as Suit;
  }

  // Validate value
  if (!validValues.includes(value)) {
    throw new Error(`Invalid value: ${value} in card ${card}`);
  }

  // Validate suit
  if (!validSuits.includes(suit as Suit)) {
    throw new Error(`Invalid suit: ${suit} in card ${card}`);
  }

  // For Jacks, only allow J1, J2, J3, J4 suits
  if (value === 'J' && !['J1', 'J2', 'J3', 'J4'].includes(suit)) {
    console.warn(`Invalid suit ${suit} for Jack in card ${card}, setting suit to undefined`);
    return { value, suit: undefined };
  }

  // For Queens and Kings, allow standard suits (S, H, D, C)
  if (['Q', 'K'].includes(value) && !['S', 'H', 'D', 'C'].includes(suit)) {
    console.warn(`Invalid suit ${suit} for ${value} in card ${card}, setting suit to undefined`);
    return { value, suit: undefined };
  }

  return { value, suit };
};