#include "Led_Matrice.h"
#include "Layouts.h"

Main_struct_t Matrice;

void setup(void)
{
    Serial.begin(9600);
    Matrice.Text.Align = Center;
    Matrice.Text.Text = "Hello a";
    Matrice.Text.Scroll_Speed = SCROLL_MEDIUM;
    Init_Matrices(1);
    (Matrice.ContentInfo[0]).ContentType = Text;
    (Matrice.ContentInfo[1]).ContentType = Text;
    (Matrice.ContentInfo[2]).ContentType = Text;
    (Matrice.ContentInfo[3]).ContentType = Text;
    Setup_Matrices();
    Detect_Scroll();
    if (!Matrice.Text.Scroll)
        Write_NoScroll_Text(Matrice.Text.Text);
}

void loop(void)
{
    Display();
    Update_Animations();
    Update_Texts();
}

bool Check_Time(unsigned long *Timepoint, int Delay)
{
    if (millis() - *Timepoint >= Delay) {
        *Timepoint = millis();
        return true;
    } else
        return false;
}

void Init_Matrices(short Intensity)
{
    for (short i = 0; i < MATRICE_NBR; i++) {
        lc.shutdown(i, false);
        lc.setIntensity(i, Intensity);
        lc.clearDisplay(i);
    }
}

bool Column_Empty(byte Layout[], short Pos)
{
    Pos = 7 - Pos; // Invert position to read in binary (because in binary pos 0 = most right bit)
    for (short i = 0; i < 8; i++) {
        if (bitRead(Layout[i], Pos) == 1)
            return false;
    }
    return true;
}

void Clear_One_Matrice(short Matrice_Number)
{
    for (short y = 0; y < 8; y++)
        Matrice.Content[Matrice_Number][y] = B0;
}

void Clear_Matrices(void)
{
    for (short i = 0; i < MATRICE_NBR; i++) {
        Clear_One_Matrice(i);
    }
}

void Display(void)
{
    short Current = MATRICE_NBR - 1;

    for (short i = 0; i < MATRICE_NBR; i++, Current--) {
        for (short y = 0; y < 8; y++) {
            lc.setRow(i, y, Matrice.Content[Current][y]);
        }
    }
}

void Copy_Layout_In_Content(short Matrice_Number, byte Layout[8])
{
    for (short i = 0; i < 8; i++) {
        for (short y = 0; y < 8; y++) {
            bitWrite(Matrice.Content[Matrice_Number][i], y, bitRead(Layout[i], y));
        }
    }
}

void Setup_One_Matrice(short Matrice_Number)
{
    switch ((Matrice.ContentInfo[Matrice_Number]).ContentType) {
        case Disable:
            (Matrice.ContentInfo[Matrice_Number]).Animated = false;
            break;
        case Text:
            (Matrice.ContentInfo[Matrice_Number]).Animated = false;
            break;
        case Fixed_Hearth:
            (Matrice.ContentInfo[Matrice_Number]).Animated = false;
            Copy_Layout_In_Content(Matrice_Number, FixedHearth_Layout);
            break;
        case Emoji_t1:
            (Matrice.ContentInfo[Matrice_Number]).Animated = false;
            Copy_Layout_In_Content(Matrice_Number, EmojiT1_Layout);
            break;
        case Emoji_t2:
            (Matrice.ContentInfo[Matrice_Number]).Animated = false;
            Copy_Layout_In_Content(Matrice_Number, EmojiT2_Layout);
            break;
        case Animated_Hearth:
            (Matrice.ContentInfo[Matrice_Number]).Animated = true;
            (Matrice.ContentInfo[Matrice_Number]).Layouts_Number = 2;
            (Matrice.ContentInfo[Matrice_Number]).Current_Layout = 0;
            (Matrice.ContentInfo[Matrice_Number]).Delay = 750;
            (Matrice.ContentInfo[Matrice_Number]).Timepoint = millis();
            Copy_Layout_In_Content(Matrice_Number, AnimatedHearth_Layouts[0]);
            break;
        case Animated_Rain:
            (Matrice.ContentInfo[Matrice_Number]).Animated = true;
            (Matrice.ContentInfo[Matrice_Number]).Layouts_Number = 8;
            (Matrice.ContentInfo[Matrice_Number]).Current_Layout = Matrice_Number * 2;
            (Matrice.ContentInfo[Matrice_Number]).Delay = 50;
            (Matrice.ContentInfo[Matrice_Number]).Timepoint = millis();
            Copy_Layout_In_Content(Matrice_Number, AnimatedRain_Layouts[0]);
            break;
        default:
            (Matrice.ContentInfo[Matrice_Number]).Animated = false;
            break;
    }
}

void Setup_Matrices(void)
{
    Matrice.Text.Usable_Columns = 0;
    for (short i = 0; i < MATRICE_NBR; i++) {
        Setup_One_Matrice(i);
        if ((Matrice.ContentInfo[i]).ContentType == Text)
            Matrice.Text.Usable_Columns += 8;
    }
    Matrice.Text.Current_Column = 0;
    Matrice.Text.Text_Columns_Length = Get_Text_Text_Columns_Length(Matrice.Text.Text);
    Matrice.Text.Timepoint = millis();
}

void Detect_Scroll(void)
{
    if (Matrice.Text.Text_Columns_Length > Matrice.Text.Usable_Columns)
        Matrice.Text.Scroll = true;
    else
        Matrice.Text.Scroll = false;
}

void Update_One_Animation(short Matrice_Number)
{
    if (Matrice.ContentInfo[Matrice_Number].Animated && \
        Check_Time(&(Matrice.ContentInfo[Matrice_Number].Timepoint), Matrice.ContentInfo[Matrice_Number].Delay)) {
        Matrice.ContentInfo[Matrice_Number].Current_Layout++;
        if (Matrice.ContentInfo[Matrice_Number].Current_Layout >= Matrice.ContentInfo[Matrice_Number].Layouts_Number)
            Matrice.ContentInfo[Matrice_Number].Current_Layout = 0;
        switch ((Matrice.ContentInfo[Matrice_Number]).ContentType) {
            case Animated_Hearth:
                Copy_Layout_In_Content(Matrice_Number, AnimatedHearth_Layouts[Matrice.ContentInfo[Matrice_Number].Current_Layout]);
                break;
            case Animated_Rain:
                Copy_Layout_In_Content(Matrice_Number, AnimatedRain_Layouts[Matrice.ContentInfo[Matrice_Number].Current_Layout]);
                break;
            default:
                break;
        }
    }
}

void Update_Animations(void)
{
    for (short i = 0; i < MATRICE_NBR; i++)
        Update_One_Animation(i);
}

short Get_Layout_Colums_Number(byte Layout[8])
{
    short Count = 0;
    short i = 0;

    for (; i < 8 && Column_Empty(Layout, i); i++);
    for (; i < 8 && !Column_Empty(Layout, i); i++, Count++);
    return Count;
}

short Get_Letter_Text_Columns_Length(const char c)
{
    return Get_Layout_Colums_Number(Ascii_Layouts[c - 32]);
}

short Get_Text_Text_Columns_Length(const char *Text)
{
    short Count = -1;

    for (short i = 0; Text[i]; i++) {
        Count += Get_Letter_Text_Columns_Length(Text[i]) + 1;
    }
    return Count;
}

bool Write_Column(short Text_Global_Column, byte Layout[8], short Layout_Column)
{
    short Matrice_Number = -1;
    short Matrice_Column_Position = Text_Global_Column;

    if (Text_Global_Column >= Matrice.Text.Usable_Columns)
        return false;
    else if (Text_Global_Column < 0)
        return true;
    for (short i = 0; i < MATRICE_NBR; i++) {
        if ((Matrice.ContentInfo[i]).ContentType == Text) {
            if (Matrice_Column_Position >= 8)
                Matrice_Column_Position -= 8;
            else {
                Matrice_Number = i;
                break;
            }
        }
    }
    if (Matrice_Number == -1)
        return false;
    Matrice_Column_Position = 7 - Matrice_Column_Position;
    Layout_Column = 7 - Layout_Column;
    for (short Layout_Line = 0; Layout_Line < 8; Layout_Line++)
        bitWrite(Matrice.Content[Matrice_Number][Layout_Line], Matrice_Column_Position, bitRead(Layout[Layout_Line], Layout_Column));
    return true;
}

bool Write_One_Letter(short *Text_Global_Column, byte Letter_Layout[8])
{
    bool State = true;
    short Layout_Column = 0;

    for (; Layout_Column < 8 && Column_Empty(Letter_Layout, Layout_Column); Layout_Column++);
    for (; Layout_Column < 8; Layout_Column++) {
        State = Write_Column(*Text_Global_Column, Letter_Layout, Layout_Column);
        (*Text_Global_Column)++;
    }
    return State;
}

void Write_Text(short Text_Global_Column, const char *Text)
{
    bool State = true;

    for (short i = 0; State && Text[i]; i++) {
        if (i)
            Text_Global_Column++;
        State = Write_One_Letter(&Text_Global_Column, Ascii_Layouts[Text[i] - 32]);
    }
}

void Write_NoScroll_Text(const char *Text)
{
    short Start_Column;

    switch (Matrice.Text.Align) {
        case Left:
            Start_Column = 0;
            break;
        case Right:
            Start_Column = Matrice.Text.Usable_Columns - Matrice.Text.Text_Columns_Length;
            break;
        case Center:
            Start_Column = (Matrice.Text.Usable_Columns - Matrice.Text.Text_Columns_Length) / 2;
            break;
        default:
            Start_Column = 0;
            break;
    }
    Write_Text(Start_Column, Text);
}

void Update_Texts(void)
{
    if (!Matrice.Text.Scroll)
        return;
    if (Check_Time(&Matrice.Text.Timepoint, Matrice.Text.Scroll_Speed)) {
        for (int i = 0; i < MATRICE_NBR; i++) {
            if ((Matrice.ContentInfo[i]).ContentType == Text)
                Clear_One_Matrice(i);
        }
        Write_Text(Matrice.Text.Current_Column, Matrice.Text.Text);
        if (Matrice.Text.Current_Column >= Matrice.Text.Usable_Columns + Matrice.Text.Text_Columns_Length - 1)
            Matrice.Text.Current_Column = 0;
        else
            (Matrice.Text.Current_Column)++;
    }
}
