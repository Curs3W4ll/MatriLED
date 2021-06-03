#ifndef LED_MATRICE_H
#define LED_MATRICE_H

#include <LedControl.h>

#define MATRICE_NBR 4

// Align values
#define CENTER 0
#define LEFT 1
#define RIGHT 2

// Content values
#define DISABLE 0
#define TEXT 1
#define FIXED_HEARTH 2
#define EMOJI_T1 3
#define EMOJI_T2 4
#define ANIMATED_HEARTH 5
#define ANIMATED_RAIN 6

// Led matrice initialization
LedControl lc=LedControl(2,4,3,4);

// Animation linked list
typedef struct Content_s {
    byte Step;
    struct Content_s *Next;
} Content_t;

// Main used structure
typedef struct Main_struct {
    int CurrentTime;
    int PreviousTime;
    short Align;
    short Content_type[MATRICE_NBR];
    Content_t (*Content)[MATRICE_NBR];
    char *Text;
} Main_struct_t;

#endif
