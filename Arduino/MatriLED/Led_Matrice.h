#ifndef LED_MATRICE_H
#define LED_MATRICE_H

#include <LedControl.h>

#define MATRICE_NBR 4

#define SCROLL_SLOW 300
#define SCROLL_MEDIUM 200
#define SCROLL_FAST 100

// Align values
typedef enum {
    Center,
    Left,
    Right
} Align_t;

// Content values
typedef enum {
    Disable,
    Text,
    Fixed_Hearth,
    Emoji_t1,
    Emoji_t2,
    Animated_Hearth,
    Animated_Rain
} ContentType_t;

// Led matrice initialization
LedControl lc=LedControl(2,4,3,MATRICE_NBR); //DATA-CLK-LOAD

// Text structure
typedef struct {
    Align_t Align;
    short Usable_Columns;
    int Current_Column;
    int Text_Columns_Length;
    char *Text;
    unsigned long Timepoint;
    bool Scroll;
    int Scroll_Speed;
} Text_t;

// Animation structures
typedef struct {
    ContentType_t ContentType;
    bool Animated;
    int Layouts_Number;
    int Current_Layout;
    int Delay;
    unsigned long Timepoint;
} Content_Infos;

// Main used structure
typedef struct Main_struct {
    Text_t Text;
    Content_Infos ContentInfo[MATRICE_NBR];
    byte Content[MATRICE_NBR][8];
} Main_struct_t;

#endif
