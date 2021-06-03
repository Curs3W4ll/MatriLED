# 1 "/home/loon/Documents/Projects/Arduino/MatriLED/MatriLED.ino"
# 2 "/home/loon/Documents/Projects/Arduino/MatriLED/MatriLED.ino" 2
# 3 "/home/loon/Documents/Projects/Arduino/MatriLED/MatriLED.ino" 2

Main_struct_t Matrice;

void setup()
{
    Matrice.CurrentTime = 0;
    Matrice.PreviousTime = 0;
    Matrice.Align = 0;
    for (int i = 0; i < 4; i++)
        Matrice.Content_type[i] = 0;
    Matrice.Content = 
# 13 "/home/loon/Documents/Projects/Arduino/MatriLED/MatriLED.ino" 3 4
                     __null
# 13 "/home/loon/Documents/Projects/Arduino/MatriLED/MatriLED.ino"
                         ;
    Matrice.Text = 
# 14 "/home/loon/Documents/Projects/Arduino/MatriLED/MatriLED.ino" 3 4
                  __null
# 14 "/home/loon/Documents/Projects/Arduino/MatriLED/MatriLED.ino"
                      ;
}

void loop()
{
    int pos = 92;

    Init_affichages(4, 1);
    for (int y = 0; y < 4 && pos + y < 95; y++) {
        for (int i = 0; i < 8; i++) {
            lc.setRow(y, i, Ascii_Layouts[pos + y][i]);
        }
    }
    delay(1000);
}
/*  if (animate[0]==1) {

    affiche_animation();

  }

  if (scrolling[0]==1) {

    affiche_scrolling();

  }

}

*/
# 37 "/home/loon/Documents/Projects/Arduino/MatriLED/MatriLED.ino"
void Init_affichages(int affichages_number, int intesity) {
  for (int i = 0; i < affichages_number; i++) {
    lc.shutdown(i,false); // Wake up displays
    lc.setIntensity(i,intesity); // Set intensity levels
    lc.clearDisplay(i); // Clear Displays
  }
}/*



void affiche() {

  int aff = 3;

  for (int i=0;i<4;i++) {

    for (int y=0;y<8;y++) {

      lc.setRow(i,y,affichage[aff][y]);

    }

    aff--;

  }

}



void affiche_scrolling() {

  currentTime = millis();

  if (currentTime-previousScroll > scrolling[3]) {

    clear_affichage(scrolling[4]);

    int free_led = scrolling[4] * 8;

    int writen_col = scrolling[2];

    writen_col -= scrolling[1];

    int free_affichage = scrolling[4]-1;

    while (writen_col>7) {

      writen_col -= 8;

      free_affichage -= 1;

    }

    Serial.println(writen_col);

    int cara_number = strlen(scrolling_mot);

    for (int cara=cara_number-1;cara>=0;cara--) {

      int ascii_code = ((int)scrolling_mot[cara])-32;

      if (cara!=cara_number-1) {

        for (int ligne=0;ligne<8;ligne++) {

          if (writen_col > 0) {

            Serial.println(writen_col);

            bitWrite(affichage[free_affichage][ligne],writen_col,0);

          }

        }

        writen_col += 1;

        if (writen_col==8) {

          writen_col = 0;

          if (free_affichage==0) {

            cara = -1;

          } else {

            free_affichage -= 1;

          }

        }

      }

      if (cara>=0) {

        if (ascii_code == 0) {

          for (int ligne=0;ligne<8;ligne++) {

            if (writen_col >= 0) {

              bitWrite(affichage[free_affichage][ligne],writen_col,0);

            }

          }

          writen_col += 1;

          if (writen_col==8) {

            writen_col = 0;

            if (free_affichage==0) {

              cara = -1;

            } else {

              free_affichage -= 1;

            }

          }

        }

        for (int col=0;col<8;col++) {

          byte tempbyte = B00000000;

          for (int ligne=0;ligne<8;ligne++) {

            if (writen_col >= 0) {

              bitWrite(tempbyte,ligne,bitRead(ascii[ascii_code][ligne],col));

            }

          }

          if (tempbyte!=0) {

            for (int ligne=0;ligne<8;ligne++) {

              if (writen_col >= 0) {

                bitWrite(affichage[free_affichage][ligne],writen_col,bitRead(tempbyte,ligne));

              }

            }

            writen_col += 1;

            if (writen_col==8) {

              writen_col = 0;

              if (free_affichage==0) {

                col = 8;

                cara = -1;

              } else {

                free_affichage -= 1;

              }

            }

          }

        }

      }

    }

    affiche();

    if (scrolling[2]==scrolling[1]+free_led) {

      scrolling[2] = 0;

    } else {

      scrolling[2]+=1;

    }

    previousScroll = currentTime;

  }

}



void affiche_animation() {

  currentTime = millis();

  if (currentTime-previousTime > animate[4]*10) {

    clear_one_affichage(3);

    for (int ligne=0;ligne<8;ligne++) {

      affichage[3][ligne] = animations[animate[2]][ligne];

    }

    if (animate[2]==animate[1]-1) {

      animate[2] = 0;

    } else {

      animate[2]+=1;

    }

    previousTime = currentTime;

    affiche();

  }

}



void clear_affichage(int affichage_number) {

  //affichage_number : number of affichage to clear (most left starting)

  for (int aff=0;aff<affichage_number;aff++) {

    for (int ligne=0;ligne<8;ligne++) {

      for (int biti=0;biti<8;biti++) {

        bitWrite(affichage[aff][ligne],biti,0);

      }

    }

  }

}



void clear_one_affichage(int aff_number) {

  //aff_number : zone d'affichage à clear (0 à 3), 0 -> plus à gauche

  for (int ligne=0;ligne<8;ligne++) {

    for (int biti=0;biti<8;biti++) {

      bitWrite(affichage[aff_number][ligne],biti,0);

    }

  }

}



int get_led_number(char mot[], int cara_number, int free_affichage) {

  int led_number = 0;

  for (int cara=cara_number-1;cara>=0;cara--) {

    int ascii_code = ((int)mot[cara])-32;

    if (cara!=cara_number-1) {

      led_number+=1;

    }

    if (ascii_code==0) {

      led_number+=1;

    }

    for (int col=0;col<8;col++) {

      byte tempbyte = B00000000;

      for (int ligne=0;ligne<8;ligne++) {

        bitWrite(tempbyte,ligne,bitRead(ascii[ascii_code][ligne],col));

      }

      if (tempbyte!=0) {

        led_number+=1;

      }

    }

  }

  return(led_number);

}



void charge_affichage(int free_affichage, char mot[], int align) {

  //free_affichage : Nombre de zone d'affichage à utiliser pour le texte (0 à 4);

  //mot[] : mot à afficher

  //align[] : alignement, trois valeurs possibles : 'DROITE','GAUCHE' et 'CENTRE'

  if (free_affichage==4) {

    animate[0] = 0;

  }

  clear_affichage(4);

  int writen_col = 0;

  int free_led = free_affichage * 8;

  int cara_number = strlen(mot);

  int used_led = get_led_number(mot,cara_number,free_affichage);

  if (used_led > free_led) {

    scrolling[0] = 1;

    scrolling[1] = used_led;

    scrolling[2] = 0;

    scrolling[3] = 200;

    scrolling[4] = free_affichage;

    strncpy(scrolling_mot,mot,cara_number);

    affiche_scrolling();

  } else {

    free_affichage -= 1;

    int unused_led = free_led - used_led;

    if (free_led-used_led > 0) {

      switch(align) {

        case DROITE:

          writen_col = 0;

          break;

        case GAUCHE:

          writen_col = unused_led;

          break;

        case CENTRE:

          writen_col = unused_led/2;

          break;

        default:

          writen_col = 0;

          break;

      }

    }

    for (int cara=cara_number-1;cara>=0;cara--) {

      int ascii_code = ((int)mot[cara])-32;

      if (cara!=cara_number-1) {

        for (int ligne=0;ligne<8;ligne++) {

            bitWrite(affichage[free_affichage][ligne],writen_col,0);

        }

        writen_col += 1;

        if (writen_col==8) {

          writen_col = 0;

          if (free_affichage==0) {

            cara = -1;

          } else {

            free_affichage -= 1;

          }

        }

      }

      if (cara>=0) {

        if (ascii_code == 0) {

          for (int ligne=0;ligne<8;ligne++) {

              bitWrite(affichage[free_affichage][ligne],writen_col,0);

          }

          writen_col += 1;

          if (writen_col==8) {

            writen_col = 0;

            if (free_affichage==0) {

              cara = -1;

            } else {

              free_affichage -= 1;

            }

          }

        }

        for (int col=0;col<8;col++) {

          byte tempbyte = B00000000;

          for (int ligne=0;ligne<8;ligne++) {

            bitWrite(tempbyte,ligne,bitRead(ascii[ascii_code][ligne],col));

          }

          if (tempbyte!=0) {

            for (int ligne=0;ligne<8;ligne++) {

              bitWrite(affichage[free_affichage][ligne],writen_col,bitRead(tempbyte,ligne));

            }

            writen_col += 1;

            if (writen_col==8) {

              writen_col = 0;

              if (free_affichage==0) {

                col = 8;

                cara = -1;

              } else {

                free_affichage -= 1;

              }

            }

          }

        }

      }

    }

  }

}



void charge_affichage_special(int spe_aff_number, int pos_affichage) {

  //spe_aff_number : Affichage spécial à afficher (COEUR,SMILEY1,SMILEY2,COEUR_ANIMATE,DAMIER,PLUIE)

  //pos_affichage : zone d'éclairage à utilisé (0 à 3) 0-> plus à gauche

  clear_one_affichage(3);

  if (spe_aff_number<3) {

    animate[0] = 0;

    for (int ligne=0;ligne<8;ligne++) {

      affichage[3][ligne] = spe_affichage_layout[spe_aff_number][ligne];

    }

  } else {

    int frames_number = spe_affichage_layout[spe_aff_number][8];

    animate[4] = spe_affichage_layout[spe_aff_number+1][8];

    for (int i=0;i<frames_number;i++) {

      for (int ligne=0;ligne<8;ligne++) {

        animations[i][ligne] = spe_affichage_layout[spe_aff_number][ligne];

      }

      spe_aff_number+=1;

    }

    animate[0] = 1;

    animate[1] = frames_number;

    animate[2] = 0;

    animate[3] = pos_affichage;

  }

}*/
