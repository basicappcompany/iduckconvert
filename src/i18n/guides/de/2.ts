import type { GuideSet } from '../types';

/** German guides, batch 2. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-compress-a-video-to-send-it': {
    title: 'So komprimieren Sie ein Video zum Versenden',
    description: 'Verkleinern Sie ein großes Video für E-Mail oder Chat-Apps, indem Sie Qualität und Breite senken, ohne etwas zu installieren.',
    intro: 'Um ein Video zu komprimieren, öffnen Sie das Werkzeug Video komprimieren, legen es ab, wählen die Qualität "Small" und eine Breite von 720 Pixeln und klicken auf "Komprimieren". Die Breite zu verringern spart am meisten Platz, und eine Verkleinerung um 50 bis 90 Prozent ist üblich.',
    steps: [
      'Prüfen Sie, welche Größe Sie erreichen müssen. Viele E-Mail-Dienste hören bei 20 bis 25 MB auf.',
      'Öffnen Sie Video komprimieren und legen Sie Ihre Datei ab. Lange Handyvideos sind die üblichen Übeltäter.',
      'Wählen Sie eine Breite. 720 Pixel sehen auf einem Handydisplay gut aus; 480 ist noch kleiner.',
      'Wählen Sie eine Qualität. "Medium" passt für die meisten Clips. Nehmen Sie "Small" nur, wenn die Größenbegrenzung wichtiger ist als die Optik.',
      'Klicken Sie auf "Komprimieren" und vergleichen Sie die Größen vorher und nachher, die bei Ihrem Download angezeigt werden.',
    ],
    sections: [
      {
        heading: 'Was ein Video wirklich groß macht',
        paragraphs: [
          'Die Größe hängt von Länge, Bildmaßen und der Stärke der Kompression ab. Eine Handyaufnahme in 1080p oder 4K speichert weit mehr Details, als ein kleines Display zeigen kann. Auf 720 Pixel Breite zu gehen verwirft Details, die niemand sieht, und verkleinert die Datei drastisch.',
          'Ist es immer noch zu groß, kürzen Sie das Video zuerst mit Video kürzen. Die Minute, die Sie nicht brauchen, wegzulassen, bringt mehr, als das ganze Video stärker zu quetschen.',
        ],
      },
      {
        heading: 'Grenzen, die Sie kennen sollten',
        paragraphs: [
          'Alles läuft auf Ihrem eigenen Gerät, daher kann eine sehr große Datei langsam sein oder der Speicher ausgehen, besonders auf einem Handy. Wir empfehlen Dateien unter 500 MB am Computer und 100 MB am Handy. Für größere Dateien nutzen Sie einen Computer.',
        ],
      },
    ],
    faqs: [
      { q: 'Verringert Komprimieren die Qualität?', a: 'Ja, immer ein wenig. Komprimieren tauscht Detail gegen Größe. Behalten Sie Ihr Original, falls Sie später eine bessere Version möchten.' },
      { q: 'Welches Format bekomme ich?', a: 'Ein MP4, das fast überall abgespielt wird.' },
      { q: 'Kann ich mehrere Videos auf einmal komprimieren?', a: 'Ja. Sie laufen nacheinander, und Sie können sie gemeinsam als ZIP herunterladen.' },
    ],
  },
  'how-to-trim-a-video-without-software': {
    title: 'So kürzen Sie ein Video ohne Software',
    description: 'Schneiden Sie Anfang und Ende eines Videos in Ihrem Browser ab, indem Sie zwei Zeiten eintippen. Kein Editor zu installieren, nichts wird hochgeladen.',
    intro: 'Um ein Video zu kürzen, öffnen Sie das Werkzeug Video kürzen, legen die Datei ab, tippen Start- und Endzeit ein und klicken auf "Kürzen". Der geschnittene Clip wird als MP4 gespeichert. Nutzen Sie Sekunden (90) oder Minuten und Sekunden (1:30).',
    steps: [
      'Spielen Sie Ihr Video in einem beliebigen Player ab und notieren Sie die Zeit, bei der es beginnen und enden soll.',
      'Öffnen Sie Video kürzen und legen Sie die Datei ab.',
      'Tippen Sie die Startzeit ein. Lassen Sie 0 stehen, um den Anfang zu behalten.',
      'Tippen Sie die Endzeit ein. Lassen Sie das Feld leer, um alles nach dem Start zu behalten.',
      'Klicken Sie auf "Kürzen" und laden Sie das MP4 herunter.',
    ],
    sections: [
      {
        heading: 'Wie der Schnitt gemacht wird',
        paragraphs: [
          'Der Clip wird nach dem Schneiden neu kodiert, sodass der Start bildgenau ist. Ein reiner Kopierschnitt ist schneller, kann aber nur an bestimmten Stellen des Videos beginnen, was oft einen eingefrorenen oder schwarzen Anfang hinterlässt. Neu zu kodieren dauert länger, vermeidet das aber.',
          'Weil neu kodiert wird, sinkt die Qualität ganz leicht. Es wird eine hohe Qualitätseinstellung genutzt, und die meisten Menschen bemerken den Unterschied nicht.',
        ],
      },
      {
        heading: 'Zeiten eintippen',
        paragraphs: [
          'Eine einfache Zahl sind Sekunden, 90 bedeutet also eine Minute dreißig. Zwei Teile sind Minuten und Sekunden (1:30), drei Teile schließen Stunden ein (1:02:30). Dezimalzahlen funktionieren ebenfalls, zum Beispiel 12,5.',
        ],
      },
      {
        heading: 'Die Zeiten richtig treffen',
        paragraphs: [
          'Öffnen Sie das Video in einem Player, der die Zeit anzeigt, pausieren Sie am gewünschten Startpunkt und notieren Sie die Zeit, dann machen Sie dasselbe für das Ende. Lassen Sie an beiden Enden ein bis zwei Sekunden Spielraum, denn erneut zu kürzen ist leicht, weggeschnittenes Material aber nicht zurückzuholen. Ist der Clip für ein GIF gedacht, reichen wenige Sekunden, und Video in GIF hat eigene Felder für Start und Länge, Sie müssen also nicht vorher kürzen.',
        ],
      },
    ],
    faqs: [
      { q: 'Kann ich die Mitte herausschneiden?', a: 'Nicht in einem Schritt. Kürzen Sie den Teil davor und den Teil danach getrennt, oder nutzen Sie einen vollwertigen Videoeditor, um Clips zusammenzufügen.' },
      { q: 'Verkleinert Kürzen auch die Datei?', a: 'Meist ja, weil weniger Video da ist. Für mehr Ersparnis nutzen Sie zusätzlich Video komprimieren.' },
      { q: 'Wird mein Video hochgeladen?', a: 'Nein. Alles passiert im Tab Ihres Browsers.' },
    ],
  },
  'how-to-convert-mov-to-mp4': {
    title: 'So wandeln Sie MOV in MP4 um (iPhone-Videos)',
    description: 'Machen Sie iPhone- und Mac-MOV-Videos auf Android, Windows und in allen Apps abspielbar, indem Sie sie in Ihrem Browser in MP4 umwandeln.',
    intro: 'Um MOV in MP4 umzuwandeln, öffnen Sie den Konverter MOV in MP4, legen Ihr Video ab und klicken auf "Umwandeln". MP4 läuft auf Android, Windows, Smart-TVs und in jeder Social-Media-App und ist damit das sichere Format zum Teilen eines iPhone-Videos.',
    steps: [
      'Bringen Sie die .mov-Datei auf Ihren Computer oder Ihr Handy (AirDrop, Kabel oder iCloud).',
      'Öffnen Sie MOV in MP4 und legen Sie die Datei im Feld ab.',
      'Klicken Sie auf "Umwandeln". Beim ersten Mal lädt Ihr Browser die Konverter-Engine herunter (etwa 30 MB), die danach zwischengespeichert wird.',
      'Laden Sie das MP4 herunter, wenn der Fortschrittsbalken fertig ist.',
    ],
    sections: [
      {
        heading: 'Warum iPhone-Videos MOV sind',
        paragraphs: [
          'iPhones nehmen im QuickTime-Container von Apple auf, MOV. Je nach Kameraeinstellung ist das Video darin H.264 oder das neuere HEVC. Apple-Geräte kommen mit beidem zurecht, aber viele Windows-PCs, Android-Handys, Editoren und Websites öffnen HEVC-Video nicht ohne Zusatzsoftware.',
          'Der Konverter schreibt Standard-H.264-Video in einen MP4-Container, der fast überall akzeptiert wird.',
        ],
      },
      {
        heading: 'Gleich an der Quelle verhindern',
        paragraphs: [
          'Auf dem iPhone können Sie in einem kompatibleren Format aufnehmen: Einstellungen, Kamera, Formate, "Maximale Kompatibilität". Die Dateien werden größer, öffnen sich aber überall ohne Umwandlung.',
        ],
      },
      {
        heading: 'Wenn die umgewandelte Datei nicht abspielt',
        paragraphs: [
          'Stellen Sie zuerst sicher, dass der Download abgeschlossen ist, und probieren Sie einen anderen Player wie VLC. Verweigert ein sehr altes Handy oder ein TV das MP4 weiterhin, ist das Video vielleicht einfach zu groß oder zu scharf dafür: Schicken Sie es durch Video komprimieren mit 720 Pixeln Breite. Behalten Sie das MOV-Original, denn es enthält die Aufnahme in voller Qualität, und Sie können jederzeit später ein weiteres MP4 daraus machen.',
        ],
      },
    ],
    faqs: [
      { q: 'Sinkt die Qualität?', a: 'Leicht, weil das Video neu kodiert wird. Es wird eine hohe Qualitätseinstellung genutzt, die meisten Menschen merken es nicht.' },
      { q: 'Bleibt der Ton erhalten?', a: 'Ja, der Ton wird in AAC umgewandelt, das übliche MP4-Audioformat.' },
      { q: 'Ist es für lange Videos kostenlos?', a: 'Es ist kostenlos und hat kein eigenes Limit, aber lange Videos sind auf einem Handy langsam. Wir empfehlen Dateien unter 500 MB am Computer und 100 MB am Handy.' },
    ],
  },
  'how-to-convert-mkv-to-mp4': {
    title: 'So wandeln Sie MKV in MP4 um',
    description: 'Machen Sie MKV-Videos auf Handys, TVs und in Editoren abspielbar, indem Sie sie direkt in Ihrem Browser in MP4 umwandeln.',
    intro: 'Um MKV in MP4 umzuwandeln, öffnen Sie den Konverter MKV in MP4, legen das Video ab und klicken auf "Umwandeln". MKV ist ein flexibler Container, den viele Handys und TVs nicht abspielen, während MP4 fast überall funktioniert.',
    steps: [
      'Öffnen Sie MKV in MP4 und legen Sie Ihre .mkv-Datei im Feld ab.',
      'Klicken Sie auf "Umwandeln" und warten Sie auf den Fortschrittsbalken.',
      'Laden Sie das MP4 herunter und probieren Sie es auf dem Gerät, das das MKV nicht abspielte.',
    ],
    sections: [
      {
        heading: 'Was MKV ist',
        paragraphs: [
          'MKV (Matroska) ist ein Container, eine Box, die Video, mehrere Tonspuren, Untertitel und Kapitel enthalten kann. Er ist bei Downloads und Blu-ray-Sicherungen beliebt, weil er so flexibel ist, aber Handy-Galerien, viele TVs und Editoren unterstützen ihn nicht.',
        ],
      },
      {
        heading: 'Was Sie erwarten können',
        paragraphs: [
          'Das Hauptvideo und der Hauptton werden in den MP4-Standard umgewandelt. Rechnen Sie nicht damit, dass zusätzliche Tonspuren, Untertitel oder Kapitel übernommen werden. Hängt eine Datei von einer bestimmten Untertitelspur ab, prüfen Sie das MP4, bevor Sie das MKV löschen.',
          'Große MKV-Dateien, etwa ganze Filme, sind in einem Browser aufwendig umzuwandeln. Wir empfehlen Dateien unter 500 MB am Computer. Für Filme ist ein Desktop-Konverter schneller.',
        ],
      },
      {
        heading: 'MKV ohne Umwandeln abspielen',
        paragraphs: [
          'Manche Player öffnen MKV direkt, darunter VLC am Computer und viele Medien-Apps auf Handys und Smart-TVs. Umwandeln ist also nur nötig, wenn ein bestimmtes Gerät die Datei ablehnt. Möchten Sie jede Untertitel- und Tonspur genau so behalten, wie sie ist, ist ein Player mit MKV-Unterstützung die bessere Antwort als das Umwandeln.',
        ],
      },
    ],
    faqs: [
      { q: 'Warum nicht einfach .mkv in .mp4 umbenennen?', a: 'Umbenennen ändert nur das Etikett. Der Inhalt bleibt MKV, Player, die MKV nicht lesen können, scheitern also weiterhin. Die Datei muss umgewandelt werden.' },
      { q: 'Ist die Qualität dieselbe?', a: 'Fast. Das Video wird mit einer hohen Qualitätseinstellung neu kodiert, es gibt also einen kleinen Verlust.' },
      { q: 'Wird die Datei hochgeladen?', a: 'Nein. Sie wird im Tab Ihres Browsers umgewandelt.' },
    ],
  },
  'how-to-convert-webm-to-mp4': {
    title: 'So wandeln Sie WEBM in MP4 um',
    description: 'Verwandeln Sie WEBM-Videos und Bildschirmaufnahmen in MP4, damit sie sich in Editoren, TVs und Handy-Galerien öffnen lassen.',
    intro: 'Um WEBM in MP4 umzuwandeln, legen Sie die Datei im Konverter WEBM in MP4 ab und klicken auf "Umwandeln". Browser spielen WEBM problemlos ab, aber viele Editoren, TVs und Handy-Galerien akzeptieren nur MP4.',
    steps: [
      'Öffnen Sie WEBM in MP4 und legen Sie Ihre Datei im Feld ab.',
      'Klicken Sie auf "Umwandeln" und warten Sie, bis der Fortschrittsbalken fertig ist.',
      'Laden Sie das MP4 herunter und nutzen Sie es überall dort, wo das WEBM abgelehnt wurde.',
    ],
    sections: [
      {
        heading: 'Woher WEBM-Dateien kommen',
        paragraphs: [
          'Bildschirmrekorder im Browser, manche Online-Downloader und viele Website-Videos nutzen WEBM, ein offenes, fürs Web gemachtes Format. Es ist klein und läuft in jedem Browser, aber Desktop-Editoren, TVs, Spielekonsolen und Foto-Apps auf Handys erkennen es oft nicht.',
        ],
      },
      {
        heading: 'In die andere Richtung',
        paragraphs: [
          'Wenn Sie ein kleines Video für Ihre eigene Website möchten, ist WEBM eine gute Wahl, und MP4 in WEBM macht die umgekehrte Umwandlung. Zum Teilen mit anderen ist MP4 das sicherere Format.',
        ],
      },
      {
        heading: 'Wo WEBM funktioniert und wo nicht',
        paragraphs: [
          'Chrome, Firefox und Edge spielen WEBM direkt ab, und neuere Apple-Software kommt vielerorts damit zurecht, aber die Unterstützung ist uneinheitlich. Desktop-Videoeditoren, TVs, Spielekonsolen und Handy-Galerien akzeptieren meist MP4 und womöglich gar kein WEBM. Wenn Sie nicht wissen, was die Datei öffnen wird, ist MP4 das Format, das funktioniert. Wollen Sie es nur in einem Browser ansehen, ist das WEBM so in Ordnung, und Umwandeln ändert nichts Nützliches.',
        ],
      },
    ],
    faqs: [
      { q: 'Bleibt der Ton erhalten?', a: 'Ja. WEBM-Audio wird im MP4 in AAC umgewandelt.' },
      { q: 'Warum ist das MP4 größer?', a: 'WEBM komprimiert sehr gut, daher ist das MP4 bei ähnlicher Qualität oft etwas größer. Nutzen Sie Video komprimieren, wenn Sie es kleiner brauchen.' },
      { q: 'Funktioniert es bei Bildschirmaufnahmen?', a: 'Ja. Aufnahmen von Browser-Werkzeugen werden wie jede andere WEBM-Datei umgewandelt.' },
    ],
  },
};

export default guides;
