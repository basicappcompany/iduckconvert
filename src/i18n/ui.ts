import { useEffect, useState } from 'preact/hooks';
import type { UiText } from './types';

/**
 * The words the shared file controls use: the drop zone, the file count, Clear, Cancel, the progress label, the
 * download panel, and the run buttons (Convert, Extract MP3, Make GIF, Compress, Trim). Every converter shows
 * these, so translating them translates the part of every converter a visitor sees first. The options inside a
 * converter are still English in phase 1.
 *
 * This is kept apart from the page dictionaries on purpose: these strings ship to the browser with every
 * converter, so the file stays small and holds nothing else. All nine translations are machine-made.
 */
const en: UiText = {
  dropMany: 'Drop files here',
  dropOne: 'Drop a file here',
  paste: 'or paste from your clipboard',
  chooseMany: 'Choose files',
  chooseOne: 'Choose file',
  takePhoto: 'Take photo',
  skippedOne: 'Skipped unsupported file: {names}',
  skippedMany: 'Skipped unsupported files: {names}',
  selectedOne: '{n} file selected.',
  selectedMany: '{n} files selected.',
  clear: 'Clear',
  working: 'Working...',
  cancel: 'Cancel',
  download: 'Download',
  downloadAll: 'Download all ({n}) as ZIP',
  preparingZip: 'Preparing ZIP...',
  sizes: '{before} to {after}',
  couldNotProcess: 'could not be converted',
  runConvert: 'Convert',
  runExtractMp3: 'Extract MP3',
  runMakeGif: 'Make GIF',
  runCompress: 'Compress',
  runTrim: 'Trim',
};

const hi: UiText = {
  dropMany: 'फ़ाइलें यहाँ छोड़ें',
  dropOne: 'फ़ाइल यहाँ छोड़ें',
  paste: 'या क्लिपबोर्ड से पेस्ट करें',
  chooseMany: 'फ़ाइलें चुनें',
  chooseOne: 'फ़ाइल चुनें',
  takePhoto: 'फ़ोटो लें',
  skippedOne: 'असमर्थित फ़ाइल छोड़ दी गई: {names}',
  skippedMany: 'असमर्थित फ़ाइलें छोड़ दी गईं: {names}',
  selectedOne: '{n} फ़ाइल चुनी गई।',
  selectedMany: '{n} फ़ाइलें चुनी गईं।',
  clear: 'साफ़ करें',
  working: 'काम हो रहा है...',
  cancel: 'रद्द करें',
  download: 'डाउनलोड करें',
  downloadAll: 'सभी ({n}) ZIP के रूप में डाउनलोड करें',
  preparingZip: 'ZIP तैयार हो रही है...',
  sizes: '{before} से {after}',
  couldNotProcess: 'कन्वर्ट नहीं हो सकी',
  runConvert: 'कन्वर्ट करें',
  runExtractMp3: 'MP3 निकालें',
  runMakeGif: 'GIF बनाएँ',
  runCompress: 'कंप्रेस करें',
  runTrim: 'ट्रिम करें',
};

const bn: UiText = {
  dropMany: 'ফাইল এখানে ছাড়ুন',
  dropOne: 'একটি ফাইল এখানে ছাড়ুন',
  paste: 'অথবা ক্লিপবোর্ড থেকে পেস্ট করুন',
  chooseMany: 'ফাইল বাছুন',
  chooseOne: 'ফাইল বাছুন',
  takePhoto: 'ছবি তুলুন',
  skippedOne: 'অসমর্থিত ফাইল বাদ দেওয়া হয়েছে: {names}',
  skippedMany: 'অসমর্থিত ফাইলগুলো বাদ দেওয়া হয়েছে: {names}',
  selectedOne: '{n}টি ফাইল বাছা হয়েছে।',
  selectedMany: '{n}টি ফাইল বাছা হয়েছে।',
  clear: 'মুছুন',
  working: 'কাজ চলছে...',
  cancel: 'বাতিল',
  download: 'ডাউনলোড',
  downloadAll: 'সব ({n}টি) ZIP হিসেবে ডাউনলোড করুন',
  preparingZip: 'ZIP তৈরি হচ্ছে...',
  sizes: '{before} থেকে {after}',
  couldNotProcess: 'রূপান্তর করা যায়নি',
  runConvert: 'রূপান্তর করুন',
  runExtractMp3: 'MP3 বের করুন',
  runMakeGif: 'GIF বানান',
  runCompress: 'ছোট করুন',
  runTrim: 'ছাঁটুন',
};

const ptBR: UiText = {
  dropMany: 'Solte os arquivos aqui',
  dropOne: 'Solte um arquivo aqui',
  paste: 'ou cole da área de transferência',
  chooseMany: 'Escolher arquivos',
  chooseOne: 'Escolher arquivo',
  takePhoto: 'Tirar foto',
  skippedOne: 'Arquivo não suportado ignorado: {names}',
  skippedMany: 'Arquivos não suportados ignorados: {names}',
  selectedOne: '{n} arquivo selecionado.',
  selectedMany: '{n} arquivos selecionados.',
  clear: 'Limpar',
  working: 'Processando...',
  cancel: 'Cancelar',
  download: 'Baixar',
  downloadAll: 'Baixar todos ({n}) em ZIP',
  preparingZip: 'Preparando o ZIP...',
  sizes: '{before} para {after}',
  couldNotProcess: 'não pôde ser convertido',
  runConvert: 'Converter',
  runExtractMp3: 'Extrair MP3',
  runMakeGif: 'Criar GIF',
  runCompress: 'Comprimir',
  runTrim: 'Cortar',
};

const id: UiText = {
  dropMany: 'Jatuhkan file di sini',
  dropOne: 'Jatuhkan file di sini',
  paste: 'atau tempel dari papan klip',
  chooseMany: 'Pilih file',
  chooseOne: 'Pilih file',
  takePhoto: 'Ambil foto',
  skippedOne: 'File tidak didukung dilewati: {names}',
  skippedMany: 'File tidak didukung dilewati: {names}',
  selectedOne: '{n} file dipilih.',
  selectedMany: '{n} file dipilih.',
  clear: 'Hapus',
  working: 'Memproses...',
  cancel: 'Batal',
  download: 'Unduh',
  downloadAll: 'Unduh semua ({n}) sebagai ZIP',
  preparingZip: 'Menyiapkan ZIP...',
  sizes: '{before} menjadi {after}',
  couldNotProcess: 'tidak dapat dikonversi',
  runConvert: 'Konversi',
  runExtractMp3: 'Ekstrak MP3',
  runMakeGif: 'Buat GIF',
  runCompress: 'Kompres',
  runTrim: 'Potong',
};

const ru: UiText = {
  dropMany: 'Перетащите файлы сюда',
  dropOne: 'Перетащите файл сюда',
  paste: 'или вставьте из буфера обмена',
  chooseMany: 'Выбрать файлы',
  chooseOne: 'Выбрать файл',
  takePhoto: 'Сделать фото',
  skippedOne: 'Пропущен неподдерживаемый файл: {names}',
  skippedMany: 'Пропущены неподдерживаемые файлы: {names}',
  selectedOne: 'Выбран файл: {n}.',
  selectedMany: 'Выбрано файлов: {n}.',
  clear: 'Очистить',
  working: 'Обработка...',
  cancel: 'Отмена',
  download: 'Скачать',
  downloadAll: 'Скачать все ({n}) в ZIP',
  preparingZip: 'Подготовка ZIP...',
  sizes: '{before} → {after}',
  couldNotProcess: 'не удалось преобразовать',
  runConvert: 'Конвертировать',
  runExtractMp3: 'Извлечь MP3',
  runMakeGif: 'Создать GIF',
  runCompress: 'Сжать',
  runTrim: 'Обрезать',
};

const de: UiText = {
  dropMany: 'Dateien hier ablegen',
  dropOne: 'Datei hier ablegen',
  paste: 'oder aus der Zwischenablage einfügen',
  chooseMany: 'Dateien auswählen',
  chooseOne: 'Datei auswählen',
  takePhoto: 'Foto aufnehmen',
  skippedOne: 'Nicht unterstützte Datei übersprungen: {names}',
  skippedMany: 'Nicht unterstützte Dateien übersprungen: {names}',
  selectedOne: '{n} Datei ausgewählt.',
  selectedMany: '{n} Dateien ausgewählt.',
  clear: 'Leeren',
  working: 'Wird verarbeitet...',
  cancel: 'Abbrechen',
  download: 'Herunterladen',
  downloadAll: 'Alle ({n}) als ZIP herunterladen',
  preparingZip: 'ZIP wird erstellt...',
  sizes: '{before} → {after}',
  couldNotProcess: 'konnte nicht umgewandelt werden',
  runConvert: 'Umwandeln',
  runExtractMp3: 'MP3 extrahieren',
  runMakeGif: 'GIF erstellen',
  runCompress: 'Komprimieren',
  runTrim: 'Kürzen',
};

const es: UiText = {
  dropMany: 'Suelta los archivos aquí',
  dropOne: 'Suelta un archivo aquí',
  paste: 'o pega desde el portapapeles',
  chooseMany: 'Elegir archivos',
  chooseOne: 'Elegir archivo',
  takePhoto: 'Hacer foto',
  skippedOne: 'Archivo no compatible omitido: {names}',
  skippedMany: 'Archivos no compatibles omitidos: {names}',
  selectedOne: '{n} archivo seleccionado.',
  selectedMany: '{n} archivos seleccionados.',
  clear: 'Borrar',
  working: 'Procesando...',
  cancel: 'Cancelar',
  download: 'Descargar',
  downloadAll: 'Descargar todos ({n}) en ZIP',
  preparingZip: 'Preparando el ZIP...',
  sizes: '{before} a {after}',
  couldNotProcess: 'no se pudo convertir',
  runConvert: 'Convertir',
  runExtractMp3: 'Extraer MP3',
  runMakeGif: 'Crear GIF',
  runCompress: 'Comprimir',
  runTrim: 'Recortar',
};

const fr: UiText = {
  dropMany: 'Déposez les fichiers ici',
  dropOne: 'Déposez un fichier ici',
  paste: 'ou collez depuis le presse-papiers',
  chooseMany: 'Choisir des fichiers',
  chooseOne: 'Choisir un fichier',
  takePhoto: 'Prendre une photo',
  skippedOne: 'Fichier non pris en charge ignoré : {names}',
  skippedMany: 'Fichiers non pris en charge ignorés : {names}',
  selectedOne: '{n} fichier sélectionné.',
  selectedMany: '{n} fichiers sélectionnés.',
  clear: 'Effacer',
  working: 'Traitement...',
  cancel: 'Annuler',
  download: 'Télécharger',
  downloadAll: 'Tout télécharger ({n}) en ZIP',
  preparingZip: 'Préparation du ZIP...',
  sizes: '{before} → {after}',
  couldNotProcess: 'n’a pas pu être converti',
  runConvert: 'Convertir',
  runExtractMp3: 'Extraire le MP3',
  runMakeGif: 'Créer le GIF',
  runCompress: 'Compresser',
  runTrim: 'Couper',
};

const tr: UiText = {
  dropMany: 'Dosyaları buraya bırakın',
  dropOne: 'Dosyayı buraya bırakın',
  paste: 'veya panodan yapıştırın',
  chooseMany: 'Dosya seç',
  chooseOne: 'Dosya seç',
  takePhoto: 'Fotoğraf çek',
  skippedOne: 'Desteklenmeyen dosya atlandı: {names}',
  skippedMany: 'Desteklenmeyen dosyalar atlandı: {names}',
  selectedOne: '{n} dosya seçildi.',
  selectedMany: '{n} dosya seçildi.',
  clear: 'Temizle',
  working: 'Çalışıyor...',
  cancel: 'İptal',
  download: 'İndir',
  downloadAll: 'Hepsini ({n}) ZIP olarak indir',
  preparingZip: 'ZIP hazırlanıyor...',
  sizes: '{before} → {after}',
  couldNotProcess: 'dönüştürülemedi',
  runConvert: 'Dönüştür',
  runExtractMp3: 'MP3 çıkar',
  runMakeGif: 'GIF oluştur',
  runCompress: 'Sıkıştır',
  runTrim: 'Kırp',
};

export const UI_TEXT: Readonly<Record<string, UiText>> = { en, hi, bn, 'pt-BR': ptBR, id, ru, de, es, fr, tr };

/** Fill {placeholders}. Kept here so the small client bundle does not pull in the page dictionaries. */
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (whole, key: string) => (key in values ? String(values[key]) : whole));
}

/** The shared control text for a language code (English for any language without its own, such as English UK). */
export function uiFor(code: string): UiText {
  return UI_TEXT[code] ?? en;
}

/** The language named on <html lang>, once mounted. The server and the first render are English so hydration matches. */
export function useLang(): string {
  const [code, setCode] = useState('en');
  useEffect(() => {
    const lang = document.documentElement.lang;
    if (lang && UI_TEXT[lang]) setCode(lang);
  }, []);
  return code;
}

/** The shared control text for the page's language. */
export function useUi(): UiText {
  return uiFor(useLang());
}
