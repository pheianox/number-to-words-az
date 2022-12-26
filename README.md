# number-to-words-az

Convert numbers to human readable format

### Installation

```bash
npm i number-to-words-az
```

### Basic usage
```ts
import numberToWordsAz from 'number-to-words-az'

numberToWordsAz.readNumber('6') // altı
numberToWordsAz.readNumber('55') // əlli beş
numberToWordsAz.readNumber('123') // yüz iyirmi üç
numberToWordsAz.readNumber('4 934') // dörd min doqquz yüz otuz dörd
numberToWordsAz.readNumber('1 030 485') // bir milyon otuz min dörd yüz səksən beş

// get the max digit count it can process
numberToWordsAz.MAX_NUMBER_LENGTH // -> 66 (vigintilyon)
```

### Big numbers

- 493 882 371 553 121 860 890 561 055 192 142 938 414 552 660 618 128 252 927 700 430 053
- dörd yüz doxsan üç vigintilyon səkkiz yüz səksən iki novemdesilyon üç yüz yetmiş bir oktodesilyon beş yüz əlli üç septendesilyon yüz iyirmi bir seksdesilyon səkkiz yüz altmış kendesilyon səkkiz yüz doxsan katordesilyon beş yüz altmış bir tredesilyon əlli beş dodesilyon yüz doxsan iki undesilyon yüz qırx iki desilyon doqquz yüz otuz səkkiz nonilyon dörd yüz on dörd oktilyon beş yüz əlli iki septilyon altı yüz altmış sekstilyon altı yüz on səkkiz kentilyon yüz iyirmi səkkiz katrilyon iki yüz əlli iki trilyon doqquz yüz iyirmi yeddi milyard yeddi yüz milyon dörd yüz otuz min əlli üç