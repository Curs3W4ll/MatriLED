#ifndef LAYOUTS_H
#define LAYOUTS_H

byte Ascii_Layouts[][8] =
{{
   B0,
   B0,
   B0,
   B0,
   B0,
   B0,
   B0,
   B0
   //  space  //
},
{
   B00,
   B10,
   B10,
   B10,
   B10,
   B00,
   B10,
   B00
   //  !  //
},
{
   B00000,
   B10100,
   B10100,
   B01010,
   B00000,
   B00000,
   B00000,
   B00000
   //  "  //
},
{
   B000000,
   B010100,
   B111110,
   B010100,
   B010100,
   B111110,
   B010100,
   B000000
   //  #  //
},
{
   B001000,
   B011110,
   B101000,
   B011100,
   B001010,
   B111100,
   B001000,
   B000000
   //  $  //
},
{
   B000000,
   B110010,
   B110100,
   B001000,
   B010110,
   B100110,
   B000000,
   B000000
   //  %  //
},
{
   B010000,
   B101000,
   B101000,
   B010000,
   B101010,
   B100100,
   B011010,
   B000000
   //  &  //
},
{
   B000,
   B100,
   B100,
   B010,
   B000,
   B000,
   B000,
   B000
   //  '  //
},
{
   B010,
   B100,
   B100,
   B100,
   B100,
   B100,
   B100,
   B010
   //  (  //
},
{
   B100,
   B010,
   B010,
   B010,
   B010,
   B010,
   B010,
   B100
   //  )  //
},
{
   B0000,
   B0000,
   B1010,
   B0100,
   B1010,
   B0000,
   B0000,
   B0000
   //  *  //
},
{
   B000000,
   B001000,
   B001000,
   B111110,
   B001000,
   B001000,
   B000000,
   B000000
   //  +  //
},
{
   B000,
   B000,
   B000,
   B000,
   B010,
   B010,
   B100,
   B000
   //  ,  //
},
{
   B0000,
   B0000,
   B0000,
   B1110,
   B0000,
   B0000,
   B0000,
   B0000
   //  -  //
},
{
   B000,
   B000,
   B000,
   B000,
   B000,
   B110,
   B110,
   B000
   //  .  //
},
{
   B00000,
   B00010,
   B00100,
   B00100,
   B01000,
   B01000,
   B10000,
   B00000
   //  /  //
},
{
   B00000,
   B11110,
   B10010,
   B10010,
   B10010,
   B10010,
   B11110,
   B00000
   //  0  //
},
{
   B000,
   B010,
   B110,
   B010,
   B010,
   B010,
   B010,
   B000
   //  1  //
},
{
   B00000,
   B11110,
   B00010,
   B11110,
   B10000,
   B10000,
   B11110,
   B00000
   //  2  //
},
{
   B00000,
   B11100,
   B00010,
   B01110,
   B00010,
   B00010,
   B11100,
   B00000
   //  3  //
},
{
   B00000,
   B10010,
   B10010,
   B10010,
   B11110,
   B00010,
   B00010,
   B00000
   //  4  //
},
{
   B00000,
   B11110,
   B10000,
   B11110,
   B00010,
   B00010,
   B11110,
   B00000
   //  5  //
},
{
   B00000,
   B11110,
   B10000,
   B11110,
   B10010,
   B10010,
   B11110,
   B00000
   //  6  //
},
{
   B00000,
   B11110,
   B00010,
   B00100,
   B01000,
   B01000,
   B01000,
   B00000
   //  7  //
},
{
   B00000,
   B11110,
   B10010,
   B11110,
   B10010,
   B10010,
   B11110,
   B00000
   //  8  //
},
{
   B00000,
   B11110,
   B10010,
   B11110,
   B00010,
   B00010,
   B11110,
   B00000
   //  9  //
},
{
   B000,
   B110,
   B110,
   B000,
   B000,
   B110,
   B110,
   B000
   //  :  //
},
{
   B000,
   B000,
   B010,
   B000,
   B010,
   B010,
   B100,
   B000
   //  ;  //
},
{
   B0000,
   B0000,
   B0010,
   B0100,
   B1000,
   B0100,
   B0010,
   B0000
   //  <  //
},
{
   B00000,
   B00000,
   B00000,
   B11110,
   B00000,
   B11110,
   B00000,
   B00000
   //  =  //
},
{
   B0000,
   B0000,
   B1000,
   B0100,
   B0010,
   B0100,
   B1000,
   B0000
   //  >  //
},
{
   B000000,
   B011100,
   B100010,
   B000010,
   B000100,
   B001000,
   B000000,
   B001000
   //  ?  //
},
{
   B000000,
   B011100,
   B100010,
   B101110,
   B101010,
   B101110,
   B100000,
   B011110
   //  @  //
},
{
   B011100,
   B100010,
   B100010,
   B111110,
   B100010,
   B100010,
   B100010,
   B000000
   //  A  //
},
{
   B111100,
   B100010,
   B100010,
   B111100,
   B100010,
   B100010,
   B111100,
   B000000
   //  B  //
},
{
   B011100,
   B100010,
   B100000,
   B100000,
   B100000,
   B100010,
   B011100,
   B000000
   //  C  //
},
{
   B111100,
   B100010,
   B100010,
   B100010,
   B100010,
   B100010,
   B111100,
   B000000
   //  D  //
},
{
   B11110,
   B10000,
   B10000,
   B11100,
   B10000,
   B10000,
   B11110,
   B00000
   //  E  //
},
{
   B1111,
   B1000,
   B1000,
   B1110,
   B1000,
   B1000,
   B1000,
   B0000
   //  F  //
},
{
   B011100,
   B100010,
   B100000,
   B100000,
   B100110,
   B100010,
   B011100,
   B000000
   //  G  //
},
{
   B100010,
   B100010,
   B100010,
   B111110,
   B100010,
   B100010,
   B100010,
   B000000
   //  H  //
},
{
   B1110,
   B0100,
   B0100,
   B0100,
   B0100,
   B0100,
   B1110,
   B0000
   //  I  //
},
{
   B001110,
   B000100,
   B000100,
   B000100,
   B100100,
   B100100,
   B011000,
   B000000
   //  J  //
},
{
   B10010,
   B10010,
   B10100,
   B11000,
   B10100,
   B10010,
   B10010,
   B00000
   //  K  //
},
{
   B10000,
   B10000,
   B10000,
   B10000,
   B10000,
   B10000,
   B11110,
   B00000
   //  L  //
},
{
   B100010,
   B110110,
   B101010,
   B100010,
   B100010,
   B100010,
   B100010,
   B000000
   //  M  //
},
{
   B100010,
   B110010,
   B101010,
   B101010,
   B100110,
   B100010,
   B100010,
   B000000
   //  N  //
},
{
   B011100,
   B100010,
   B100010,
   B100010,
   B100010,
   B100010,
   B011100,
   B000000
   //  O  //
},
{
   B11100,
   B10010,
   B10010,
   B10010,
   B11100,
   B10000,
   B10000,
   B00000
   //  P  //
},
{
   B011100,
   B100010,
   B100010,
   B100010,
   B101010,
   B100110,
   B011110,
   B000000
   //  Q  //
},
{
   B11100,
   B10010,
   B10010,
   B10010,
   B11100,
   B10010,
   B10010,
   B00000
   //  R  //
},
{
   B011100,
   B100010,
   B100000,
   B011100,
   B000010,
   B100010,
   B011100,
   B000000
   //  S  //
},
{
   B111110,
   B001000,
   B001000,
   B001000,
   B001000,
   B001000,
   B001000,
   B000000
   //  T  //
},
{
   B100010,
   B100010,
   B100010,
   B100010,
   B100010,
   B100010,
   B011100,
   B000000
   //  U  //
},
{
   B100010,
   B100010,
   B100010,
   B100010,
   B100010,
   B010100,
   B001000,
   B000000
   //  V  //
},
{
   B100010,
   B100010,
   B100010,
   B100010,
   B101010,
   B110110,
   B100010,
   B000000
   //  W  //
},
{
   B100010,
   B100010,
   B010100,
   B001000,
   B010100,
   B100010,
   B100010,
   B000000
   //  X  //
},
{
   B100010,
   B100010,
   B100010,
   B010100,
   B001000,
   B001000,
   B001000,
   B000000
   //  Y  //
},
{
   B111110,
   B000010,
   B000100,
   B001000,
   B010000,
   B100000,
   B111110,
   B000000
   //  Z  //
},
{
   B110,
   B100,
   B100,
   B100,
   B100,
   B100,
   B100,
   B110
   //  [  //
},
{
   B00000,
   B10000,
   B01000,
   B01000,
   B00100,
   B00100,
   B00010,
   B00000
   //  \  //
},
{
   B110,
   B010,
   B010,
   B010,
   B010,
   B010,
   B010,
   B110
   //  ]  //
},
{
   B001000,
   B010100,
   B100010,
   B000000,
   B000000,
   B000000,
   B000000,
   B000000
   //  ^  //
},
{
   B00000,
   B00000,
   B00000,
   B00000,
   B00000,
   B00000,
   B11110,
   B00000
   //  _  //
},
{
   B000,
   B010,
   B010,
   B100,
   B000,
   B000,
   B000,
   B000
   //  '  //
},
{
   B00000,
   B00000,
   B01100,
   B00010,
   B01110,
   B10010,
   B01110,
   B00000
   //  a  //
},
{
   B000000,
   B010000,
   B010000,
   B011100,
   B010010,
   B010010,
   B011100,
   B000000
   //  b  //
},
{
   B00000,
   B00000,
   B01100,
   B10010,
   B10000,
   B10010,
   B01100,
   B00000
   //  c  //
},
{
   B000000,
   B000010,
   B000010,
   B001110,
   B010010,
   B010010,
   B001110,
   B000000
   //  d  //
},
{
   B000000,
   B000000,
   B001100,
   B010010,
   B011110,
   B010000,
   B001110,
   B000000
   //  e  //
},
{
   B00110,
   B01000,
   B01000,
   B11110,
   B01000,
   B01000,
   B01000,
   B00000
   //  f  //
},
{
   B00000,
   B00000,
   B01110,
   B10010,
   B10010,
   B01110,
   B00010,
   B11100
},
{
   B10000,
   B10000,
   B10000,
   B11100,
   B10010,
   B10010,
   B10010,
   B00000
   //  h  //
},
{
   B00,
   B10,
   B00,
   B10,
   B10,
   B10,
   B10,
   B00
   //  i  //
},
{
   B00000,
   B00010,
   B00000,
   B00010,
   B00010,
   B00010,
   B10010,
   B01100
   //  j  //
},
{
   B00000,
   B10000,
   B10010,
   B10010,
   B11100,
   B10010,
   B10010,
   B00000
   //  k  //
},
{
   B000,
   B100,
   B100,
   B100,
   B100,
   B100,
   B010,
   B000
   //  l  //
},
{
   B000000,
   B000000,
   B000000,
   B111100,
   B101010,
   B101010,
   B101010,
   B000000
   //  m  //
},
{
   B00000,
   B00000,
   B00000,
   B11100,
   B10010,
   B10010,
   B10010,
   B00000
   //  n  //
},
{
   B00000,
   B00000,
   B01100,
   B10010,
   B10010,
   B10010,
   B01100,
   B00000
   //  o  //
},
{
   B00000,
   B00000,
   B00000,
   B11100,
   B10010,
   B10010,
   B11100,
   B10000
   //  p  //
},
{
   B00000,
   B00000,
   B00000,
   B01110,
   B10010,
   B10010,
   B01110,
   B00010
   //  q  //
},
{
   B00000,
   B00000,
   B00000,
   B01100,
   B10010,
   B10000,
   B10000,
   B00000
   //  r  //
},
{
   B00000,
   B00000,
   B01110,
   B10000,
   B01100,
   B00010,
   B11100,
   B00000
   //  s  //
},
{
   B01000,
   B01000,
   B11110,
   B01000,
   B01000,
   B01000,
   B00110,
   B00000
   //  t  //
},
{
   B00000,
   B00000,
   B00000,
   B10010,
   B10010,
   B10010,
   B01110,
   B00000
   //  u  //
},
{
   B00000,
   B00000,
   B00000,
   B10010,
   B10010,
   B10010,
   B01100,
   B00000
   //  v  //
},
{
   B000000,
   B000000,
   B000000,
   B100010,
   B100010,
   B101010,
   B010100,
   B000000
   //  w  //
},
{
   B00000,
   B00000,
   B10010,
   B10010,
   B01100,
   B10010,
   B10010,
   B00000
   //  x  //
},
{
   B00000,
   B00000,
   B00000,
   B10010,
   B10010,
   B01110,
   B00010,
   B01100
   //  y  //
},
{
   B00000,
   B00000,
   B00000,
   B11110,
   B00100,
   B01000,
   B11110,
   B00000
   //  z  //
},
{
   B00110,
   B01000,
   B01000,
   B10000,
   B01000,
   B01000,
   B01000,
   B00110
   //  {  //
},
{
   B10,
   B10,
   B10,
   B10,
   B10,
   B10,
   B10,
   B10
   //  |  //
},
{
   B11000,
   B00100,
   B00100,
   B00010,
   B00100,
   B00100,
   B00100,
   B11000
   //  }  //
},
{
   B0000000,
   B0000000,
   B0000000,
   B0110010,
   B1001100,
   B0000000,
   B0000000,
   B0000000
   //  ~  //
}};

byte FixedHearth_Layout[] =
{
   B01100110,
   B11111111,
   B11111111,
   B11111111,
   B01111110,
   B00111100,
   B00011000,
   B00000000,
   B00000000
};

byte EmojiT1_Layout[] =
{
   B00111100,
   B01000010,
   B10100101,
   B10000001,
   B10100101,
   B10011001,
   B01000010,
   B00111100,
};

byte EmojiT2_Layout[] =
{
   B00000000,
   B01100110,
   B01100110,
   B00000000,
   B00000000,
   B10000001,
   B01000010,
   B00111100,
};

byte AnimatedHearth_Layouts[][8] =
{{
   B00000000,
   B01100110,
   B11111111,
   B11111111,
   B01111110,
   B00111100,
   B00011000,
   B00000000,
},
{
   B01100110,
   B11111111,
   B11111111,
   B11111111,
   B11111111,
   B01111110,
   B00111100,
   B00011000,
}};

byte AnimatedRain_Layouts[][8] =
{{
   B01010001,
   B01000000,
   B00100000,
   B00100100,
   B00100100,
   B00000100,
   B00010001,
   B01010001,
},
{
   B01010001,
   B01010001,
   B01000000,
   B00100000,
   B00100100,
   B00100100,
   B00000100,
   B00010001,
},
{
   B00010001,
   B01010001,
   B01010001,
   B01000000,
   B00100000,
   B00100100,
   B00100100,
   B00000100,
},
{
   B00000100,
   B00010001,
   B01010001,
   B01010001,
   B01000000,
   B00100000,
   B00100100,
   B00100100,
},
{
   B00100100,
   B00000100,
   B00010001,
   B01010001,
   B01010001,
   B01000000,
   B00100000,
   B00100100,
},
{
   B00100100,
   B00100100,
   B00000100,
   B00010001,
   B01010001,
   B01010001,
   B01000000,
   B00100000,
},
{
   B00100000,
   B00100100,
   B00100100,
   B00000100,
   B00010001,
   B01010001,
   B01010001,
   B01000000,
},
{
   B01000000,
   B00100000,
   B00100100,
   B00100100,
   B00000100,
   B00010001,
   B01010001,
   B01010001,
}};

#endif
