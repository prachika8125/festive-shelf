
export const ui = {
  title: 'The Festive Shelf',
  sub: 'Pick a book from the shelf and turn the pages to learn the stories behind them.',
  next: 'Next', back: 'Back', close: 'Close',
};

export const themeVars = (t) => ({ '--cover': t.cover, '--pat': t.pat, '--page': t.page, '--ink': t.ink, '--acc': t.acc, '--bd': t.bd });

const SEVEN = 'linear-gradient(90deg,#E63946 0 14.28%,#F77F00 0 28.56%,#FCBF49 0 42.84%,#2A9D8F 0 57.12%,#3A86FF 0 71.4%,#5E60CE 0 85.68%,#9D4EDD 0)';
const NONE = 'linear-gradient(transparent,transparent)';

const BG = {
  dawn: 'linear-gradient(#ffd6a5,#ffb3c1 70%,#fff0d9)',
  dusk: 'linear-gradient(#5b4b9a,#f0795a 70%,#ffc971)',
  night: 'linear-gradient(#0b1030,#2b2f77 80%,#4b3b8f)',
  home: 'linear-gradient(#2b1b5a,#6b2d6e 80%,#c2185b)',
  warm: 'linear-gradient(#ffe9b8,#ffc27a)',
  meadow: 'linear-gradient(#cdeeff,#e9f7c8 65%,#b6e08a)',
  sea: 'linear-gradient(#9be7ff,#3a86c8 70%,#1d4e89)',
  mint: 'linear-gradient(#d8f5ec,#aee6d6)',
  rose: 'linear-gradient(#ffe0ec,#ffc2d9)',
  storm: 'linear-gradient(#52607a,#9fb3c8)',
  rainbow: 'linear-gradient(#fff3fb,#e5e0ff 60%,#d2f1ff)',
};
const scene = (bg, items, ground) => ({ bg: BG[bg], items, ground });
const GRASS = ['#8bc34a', 18];
const SAND = ['#e9b872', 16];
const NIGHTGROUND = ['#3b2a63', 16];

export const books = [
  { id: 'kaag', emoji: '🐦', title: 'Kaag Tihar', day: 'Celebrating The Crow', spine: { w: 46, h: 190 },
    theme: { cover: '#1c2b4a', pat: 'radial-gradient(circle at 20% 30%,#fff9 1.5px,transparent 2px) 0 0/28px 28px', page: '#e8ecf5', ink: '#14213d', acc: '#6c8ebf', bd: 'dashed' },
    pages: [
      { h: 'Meet the crow', p: 'Tihar begins by thanking the crow. Crows are clever and visit our homes every day.',
        art: scene('dawn', [['☀️', 80, 16, 18], ['☁️', 22, 20, 20], ['🌳', 28, 58, 52], ['🐦', 68, 62, 28, -6, 'k'], ['🌼', 72, 84, 10]], GRASS) },
      { h: 'The messenger', p: 'In old stories, the crow carries messages for Yama, the god of death. Its caw was said to bring news.',
        art: scene('dusk', [['🌙', 80, 16, 16], ['☁️', 20, 28, 20], ['🐦', 44, 46, 34, 10, 'k'], ['✉️', 68, 58, 16, -12], ['☁️', 80, 74, 16]]) },
      { h: 'Why we feed the crow', p: 'Families put out food for crows. It asks the messenger to bring only good news.',
        art: scene('warm', [['🐦', 50, 40, 32, 0, 'k'], ['🍚', 50, 70, 26], ['🌼', 22, 76, 14], ['🌼', 80, 78, 12], ['✨', 20, 22, 10], ['✨', 78, 26, 12]], SAND) },
      { h: 'Try it', p: 'Feed the crow and see what message it brings.', play: 'kaag',
        art: scene('meadow', [['🌳', 72, 52, 46], ['🐦', 30, 62, 24, 0, 'k'], ['🍚', 30, 82, 14], ['💬', 46, 36, 16]], GRASS) },
    ] },
  { id: 'kukur', emoji: '🐕', title: 'Kukur Tihar', day: 'Worshipping The Dog', spine: { w: 50, h: 160 },
    theme: { cover: '#8a4b1f', pat: 'radial-gradient(circle,#ffffff26 6px,transparent 7px) 0 0/34px 34px', page: '#fff1dc', ink: '#4a2a10', acc: '#e07a1f', bd: 'dotted' },
    pages: [
      { h: 'Meet the dog', p: 'Dogs are loyal friends who guard our homes. Kukur Tihar is a way of saying thank you.',
        art: scene('meadow', [['☀️', 82, 15, 16], ['🌳', 16, 48, 30], ['🏠', 80, 46, 28], ['🐕', 50, 66, 44], ['🦴', 26, 86, 10, 20]], GRASS) },
      { h: 'A faithful companion', p: 'In the Mahabharata, King Yudhishthira would not enter heaven without his loyal dog. The dog was the god of righteousness in disguise.',
        art: scene('dusk', [['🏔️', 60, 40, 46], ['☁️', 22, 22, 20], ['✨', 82, 18, 12], ['🤴', 30, 66, 30], ['🐕', 64, 74, 24]]) },
      { h: 'Why we honour dogs', p: 'Dogs are linked with guarding Yama’s gates. So they get a tika, a garland and good food.',
        art: scene('warm', [['🌼🌼🌼', 50, 36, 14], ['🐕', 50, 64, 38], ['🍖', 22, 82, 14], ['🪔', 80, 82, 12], ['✨', 22, 24, 10], ['✨', 80, 22, 12]], SAND) },
      { h: 'Try it', p: 'Pat the dog. What happens after a few pats?', play: 'kukur',
        art: scene('meadow', [['🌳', 18, 50, 30], ['❤️', 72, 30, 12], ['🐕', 52, 66, 34]], GRASS) },
    ] },
  { id: 'laxmi', emoji: '🪷', title: 'Laxmi Puja', day: 'The Goddess of Light', spine: { w: 54, h: 205 },
    theme: { cover: '#8c1c2b', pat: 'repeating-conic-gradient(#ffd16622 0 15deg,transparent 0 30deg)', page: '#fff6df', ink: '#5a1220', acc: '#d4a017', bd: 'double' },
    pages: [
      { h: 'Morning: the cow', p: 'Day three begins with Gai Tihar. The cow gives us milk, so we honour her as a gentle giver.',
        art: scene('meadow', [['☀️', 80, 16, 18], ['🐄', 48, 66, 44], ['🥛', 82, 78, 16], ['🌼', 20, 86, 12]], GRASS) },
      { h: 'Lakshmi rises', p: 'Gods and demons churned the ocean of milk, and Lakshmi rose on a lotus. She is the goddess of wealth and good fortune.',
        art: scene('sea', [['✨', 22, 30, 12], ['✨', 78, 24, 14], ['👸', 50, 30, 24], ['🪷', 50, 54, 40], ['🌊', 50, 86, 70]]) },
      { h: 'Evening: light the way', p: 'Families clean their homes and light lamps. A bright home welcomes Lakshmi.',
        art: scene('home', [['🌙', 82, 16, 14], ['✨', 20, 22, 10], ['🏠', 50, 56, 48], ['🪔', 24, 84, 14], ['🪔', 50, 86, 14], ['🪔', 76, 84, 14]]) },
      { h: 'Try it', p: 'Light every diya to make a path of light.', play: 'laxmi',
        art: scene('night', [['✨', 20, 24, 12], ['✨', 80, 22, 12], ['🪷', 50, 42, 26], ['🪔🪔🪔', 50, 72, 18]], NIGHTGROUND) },
    ] },
  { id: 'mha', emoji: '🧘', title: 'Mha Puja', day: 'Honouring Yourself', spine: { w: 48, h: 175 },
    theme: { cover: '#0f5c5c', pat: 'repeating-radial-gradient(circle at 50% 40%,#ffffff1c 0 6px,transparent 6px 14px)', page: '#eaf7f2', ink: '#0b3b3b', acc: '#e0a100', bd: 'solid' },
    pages: [
      { h: 'What is Mha Puja?', p: 'Newar families celebrate Mha Puja. “Mha” means self, so we honour our own body and mind.',
        art: scene('mint', [['✨', 24, 24, 12], ['🌸', 78, 26, 14], ['🧘', 50, 56, 44], ['💫', 20, 78, 12]]) },
      { h: 'The mandala', p: 'A mandala is drawn on the floor with coloured powder. A person sits before it to be honoured.',
        art: scene('rose', [['✨', 80, 22, 12], ['🏵️', 50, 50, 50], ['🎨', 22, 82, 16], ['🌸', 80, 82, 14]]) },
      { h: 'A new year begins', p: 'It is also New Year in the Nepal Sambat calendar, said to begin with Shankhadhar Sakhwa, a merchant who paid off the people’s debts.',
        art: scene('warm', [['🎉', 22, 24, 18], ['✨', 80, 26, 14], ['📅', 50, 52, 38], ['🪙', 30, 82, 14], ['🪙', 72, 80, 14]]) },
      { h: 'Also today: Govardhan', p: 'Many Hindu families honour oxen and Govardhan. Krishna lifted the hill to shelter people from a storm.',
        art: scene('storm', [['⛈️', 50, 16, 26], ['⛰️', 50, 52, 50], ['🐄', 24, 84, 16], ['🧒', 50, 82, 18], ['🐂', 76, 84, 16]]) },
      { h: 'Try it', p: 'Tap the petals to colour your own mandala.', play: 'mha',
        art: scene('rose', [['🎨', 50, 40, 34], ['🌸', 22, 76, 16], ['🌸', 78, 76, 16]]) },
    ] },
  { id: 'bhai', emoji: '🌈', title: 'Bhai Tika', day: 'Brothers and Sisters', spine: { w: 52, h: 200 },
    theme: { cover: SEVEN, pat: NONE, page: '#fffdf7', ink: '#2b1b4d', acc: '#9d4edd', bd: 'solid' },
    pages: [
      { h: 'What is Bhai Tika?', p: 'On this day, sisters put a tika on their brothers’ foreheads and pray for long lives. Brothers give gifts in return.',
        art: scene('warm', [['✨', 50, 24, 16], ['👧', 32, 62, 30], ['👦', 68, 62, 30], ['🎁', 50, 84, 14]], SAND) },
      { h: 'A sister’s worry', p: 'Yama came to take a young man away. His sister loved him and thought of a clever plan.',
        art: scene('dusk', [['🌙', 80, 16, 14], ['☁️', 24, 22, 22], ['👧', 30, 62, 28], ['👦', 58, 66, 24], ['🐃', 82, 74, 22]]) },
      { h: 'Three clever conditions', p: 'Yama could take him only when the tika faded, the oil dried up and the garland wilted. Yama agreed.',
        art: scene('warm', [['🔴', 24, 34, 14], ['🪔', 50, 34, 18], ['🌸', 76, 34, 18], ['👧', 50, 74, 24]], SAND) },
      { h: 'A garland that never wilts', p: 'She used makhamali flowers, whose bright blooms stay fresh for a very long time.',
        art: scene('meadow', [['🌸🌸🌸🌸', 50, 24, 14], ['🌸', 50, 54, 38], ['🌸', 24, 74, 22], ['🌸', 78, 76, 24]], GRASS) },
      { h: 'Yama has to wait', p: 'The tika, oil and flowers lasted and lasted. Yama had to wait, and the brother lived a long life.',
        art: scene('dusk', [['🌙', 80, 14, 12], ['✨', 20, 22, 12], ['⏳', 64, 40, 28], ['🐃', 32, 66, 32], ['👦', 70, 80, 18]]) },
      { h: 'Another telling', p: 'In another story, Yamuna welcomed her brother Yama with a tika and a feast. Both are about a sister’s love.',
        art: scene('sea', [['🍛', 50, 30, 18], ['👧', 30, 56, 26], ['👦', 70, 56, 26], ['🌊', 50, 86, 70]]) },
      { h: 'The seven-colour tika', p: 'In Nepal, a tika of seven colours stands for love, protection and a long life.',
        art: scene('rainbow', [['✨', 20, 22, 14], ['✨', 80, 26, 12], ['🌈', 50, 44, 48], ['🔴', 50, 80, 14]]) },
      { h: 'Try it', p: 'Tap each colour to build the tika.', play: 'bhai',
        art: scene('rainbow', [['🌈', 50, 44, 36], ['🎨', 50, 80, 18]]) },
    ] },
  { id: 'chhath', emoji: '☀️', title: 'Chhath', day: 'Worshipping the Sun God', spine: { w: 50, h: 168 },
    theme: { cover: 'linear-gradient(#ffb347,#f4743b 55%,#c2185b)', pat: NONE, page: '#fff3e6', ink: '#5b2a0a', acc: '#f4743b', bd: 'groove' },
    pages: [
      { h: 'A festival for the Sun', p: 'Chhath comes after Tihar, to thank the Sun god.',
        art: scene('dawn', [['☁️', 20, 20, 20], ['☀️', 50, 38, 44], ['🙏', 50, 78, 22]]) },
      { h: 'What people do', p: 'Devotees fast, then stand in a river or pond at sunset and sunrise. They offer fruits and sweet thekua.',
        art: scene('dusk', [['🌅', 50, 28, 34], ['🧺', 50, 64, 28], ['🍌', 24, 72, 14], ['🍊', 76, 72, 14], ['🌊', 50, 88, 70]]) },
      { h: 'Old stories', p: 'Some tell of Draupadi praying to the Sun. Others tell of Karna, son of Surya, who honoured him daily.',
        art: scene('night', [['🌙', 24, 20, 14], ['☀️', 76, 22, 18], ['📖', 50, 58, 34], ['✨', 20, 78, 12]]) },
      { h: 'Why thank the Sun?', p: 'The Sun gives light, warmth and energy to all living things.',
        art: scene('meadow', [['☀️', 72, 22, 28], ['🦋', 28, 36, 14], ['🌻', 50, 62, 36], ['🌱', 24, 82, 14]], GRASS) },
      { h: 'Try it', p: 'Slide through the day, from afternoon to the next morning.', play: 'chhath',
        art: scene('dawn', [['☀️', 50, 34, 34], ['🧺', 50, 70, 22], ['🌊', 50, 88, 70]]) },
    ] },
];
