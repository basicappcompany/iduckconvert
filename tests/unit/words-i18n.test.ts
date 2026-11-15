import { describe, expect, it } from 'vitest';
import { hasWords, numberToWordsIn } from '../../src/convert/words-i18n';

const w = (code: string, n: string, style: 'indian' | 'international' = 'international', money: 'none' | 'inr' | 'usd' = 'none') => numberToWordsIn(code, n, style, money).words;

describe('number to words in other languages', () => {
  it('covers the nine languages', () => {
    for (const c of ['es', 'fr', 'de', 'pt-BR', 'ru', 'tr', 'id', 'hi', 'bn']) expect(hasWords(c), c).toBe(true);
    expect(hasWords('en')).toBe(false);
  });
  it('falls back to English for English', () => {
    expect(w('en', '1234567')).toBe('one million two hundred and thirty-four thousand five hundred and sixty-seven');
    expect(numberToWordsIn('en', 'abc', 'indian').errorKey).toBe('bad');
  });
  it('Spanish', () => {
    expect(w('es', '1234567')).toBe('un millón doscientos treinta y cuatro mil quinientos sesenta y siete');
    expect(w('es', '21000')).toBe('veintiún mil');
    expect(w('es', '100')).toBe('cien');
    expect(w('es', '101')).toBe('ciento uno');
    expect(w('es', '2000000')).toBe('dos millones');
    expect(w('es', '-5')).toBe('menos cinco');
  });
  it('French', () => {
    expect(w('fr', '1234567')).toBe('un million deux cent trente-quatre mille cinq cent soixante-sept');
    expect(w('fr', '80')).toBe('quatre-vingts');
    expect(w('fr', '71')).toBe('soixante et onze');
    expect(w('fr', '99')).toBe('quatre-vingt-dix-neuf');
    expect(w('fr', '200')).toBe('deux cents');
    expect(w('fr', '200000')).toBe('deux cent mille');
    expect(w('fr', '2000000')).toBe('deux millions');
  });
  it('German', () => {
    expect(w('de', '1234567')).toBe('eine Million zweihundertvierunddreißigtausendfünfhundertsiebenundsechzig');
    expect(w('de', '1')).toBe('eins');
    expect(w('de', '1000')).toBe('eintausend');
    expect(w('de', '2000005')).toBe('zwei Millionen fünf');
    expect(w('de', '3000000000')).toBe('drei Milliarden');
  });
  it('Portuguese (Brazil)', () => {
    expect(w('pt-BR', '1234567')).toBe('um milhão duzentos e trinta e quatro mil quinhentos e sessenta e sete');
    expect(w('pt-BR', '1001')).toBe('mil e um');
    expect(w('pt-BR', '100')).toBe('cem');
    expect(w('pt-BR', '101')).toBe('cento e um');
  });
  it('Russian', () => {
    expect(w('ru', '1234567')).toBe('один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь');
    expect(w('ru', '2000')).toBe('две тысячи');
    expect(w('ru', '11000')).toBe('одиннадцать тысяч');
    expect(w('ru', '21000')).toBe('двадцать одна тысяча');
  });
  it('Turkish', () => {
    expect(w('tr', '1234567')).toBe('bir milyon iki yüz otuz dört bin beş yüz altmış yedi');
    expect(w('tr', '1000')).toBe('bin');
  });
  it('Indonesian', () => {
    expect(w('id', '1234567')).toBe('satu juta dua ratus tiga puluh empat ribu lima ratus enam puluh tujuh');
    expect(w('id', '11')).toBe('sebelas');
    expect(w('id', '1000')).toBe('seribu');
  });
  it('Hindi and Bengali', () => {
    expect(w('hi', '1234567', 'indian')).toBe('बारह लाख चौंतीस हज़ार पाँच सौ सड़सठ');
    expect(w('hi', '250000000', 'indian')).toBe('पच्चीस करोड़');
    expect(w('bn', '1234567', 'indian')).toBe('বারো লাখ চৌত্রিশ হাজার পাঁচ শো সাতষট্টি');
    expect(w('hi', '1234567', 'international')).toBe('एक मिलियन दो सौ चौंतीस हज़ार पाँच सौ सड़सठ'.replace('एक मिलियन दो सौ', 'एक मिलियन दो सौ'));
  });
  it('Indian style in the other languages uses lakh and crore', () => {
    expect(w('es', '250000000', 'indian')).toBe('veinticinco crore');
    expect(w('de', '100000', 'indian')).toBe('ein Lakh');
    expect(w('fr', '1234567', 'indian')).toBe('douze lakh trente-quatre mille cinq cent soixante-sept');
  });
  it('decimals, money and errors', () => {
    expect(w('es', '12.05')).toBe('doce coma cero cinco');
    expect(w('de', '1250.5', 'international', 'usd')).toBe('eintausendzweihundertfünfzig Dollar und fünfzig Cent');
    expect(w('ru', '2.21', 'international', 'inr')).toBe('две рупии и двадцать одна пайса');
    expect(numberToWordsIn('fr', 'abc', 'indian').errorKey).toBe('bad');
    expect(numberToWordsIn('fr', '1' + '0'.repeat(60), 'international').errorKey).toBe('big');
  });
});
