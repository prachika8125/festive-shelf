import { useState } from 'react';

function Kaag() {
  const [n, setN] = useState(0);
  const m = ['Caw! Good news is on the way!', 'Caw caw! A happy message for the family!', 'Thank you for the snack!'];
  return (
    <div className="play">
      <div key={n} className="big bounce">🐦</div>
      <p className="msg">{n ? m[(n - 1) % 3] : 'Tap the button to offer food'}</p>
      <button className="btn sm" onClick={() => setN(n + 1)}>Offer food 🍚</button>
    </div>
  );
}

function Kukur() {
  const [n, setN] = useState(0);
  return (
    <div className="play">
      {n >= 3 && <div className="garland">🌼🌼🌼</div>}
      <button className="plain" onClick={() => setN(n + 1)} aria-label="Pat the dog"><span key={n} className="wag">🐕</span></button>
      <p className="msg">{n === 0 ? 'Tap the dog to say hello' : n < 3 ? 'Good dog! ❤️' : 'A flower garland and a tika for a loyal friend!'}</p>
    </div>
  );
}

function Laxmi() {
  const [l, setL] = useState([0, 0, 0, 0, 0]);
  return (
    <div className="play">
      <div className="row5">
        {l.map((v, i) => <button key={i} className={v ? 'lamp lit' : 'lamp'} aria-label={`Light diya ${i + 1}`} onClick={() => setL(l.map((x, k) => (k === i ? 1 : x)))}>🪔</button>)}
      </div>
      <p className="msg">{l.every(Boolean) ? '🪷 The path is bright. Lakshmi is welcome!' : 'Light every diya to guide the way'}</p>
    </div>
  );
}

const MC = ['#e63946', '#f4a261', '#ffd166', '#2a9d8f', '#3a86ff', '#9d4edd'];
function Mha() {
  const [c, setC] = useState(Array(8).fill(-1));
  return (
    <div className="play">
      <div className="mandala">
        {c.map((v, i) => (
          <button key={i} aria-label={`Petal ${i + 1}`} className="petal" style={{ transform: `rotate(${i * 45}deg)`, background: v < 0 ? '#0001' : MC[v] }} onClick={() => setC(c.map((x, k) => (k === i ? (x + 1) % MC.length : x)))} />
        ))}
        <span className="core" />
      </div>
      <p className="msg">{c.every((x) => x >= 0) ? 'Beautiful! Mha Puja is about caring for yourself.' : 'Tap petals to colour them in'}</p>
    </div>
  );
}

const SEVEN = ['#E63946', '#F77F00', '#FCBF49', '#2A9D8F', '#3A86FF', '#5E60CE', '#9D4EDD'];
function Bhai() {
  const [s, setS] = useState([]);
  return (
    <div className="play">
      <div className="tikabar">{SEVEN.map((c, i) => <span key={c} style={{ background: s.includes(i) ? c : '#0002' }} />)}</div>
      <div className="swatches">
        {SEVEN.map((c, i) => <button key={c} aria-label={`Colour ${i + 1}`} style={{ background: c }} onClick={() => !s.includes(i) && setS([...s, i])} />)}
      </div>
      <p className="msg">{s.length === 7 ? 'A full seven-colour tika! Sisters wish their brothers a long, happy life.' : 'Tap the colours'}</p>
    </div>
  );
}

const SKY = ['#f6b26b', '#d1495b', '#0b1030', '#7b2d5b', '#8ecae6'];
const CAP = ['Afternoon: devotees gather near the water', 'Sunset: the offering to the setting Sun', 'Night: many devotees continue their fast', 'Dawn: waiting in the water for sunrise', 'Sunrise: the offering to the rising Sun'];
function Chhath() {
  const [v, setV] = useState(0);
  const b = v < 20 ? 0 : v < 40 ? 1 : v < 60 ? 2 : v < 80 ? 3 : 4;
  const h = v <= 25 ? (25 - v) / 25 : v >= 75 ? (v - 75) / 25 : -1;
  return (
    <div className="play">
      <div className="sky" style={{ background: SKY[b] }}>
        <span className="sun" style={{ bottom: `${32 + Math.max(h, 0) * 45}%`, opacity: h >= 0 ? 1 : 0 }}>☀️</span>
        <div className="river">🧺</div>
      </div>
      <input type="range" min="0" max="100" value={v} onChange={(e) => setV(+e.target.value)} aria-label="Time of day" />
      <p className="msg">{CAP[b]}</p>
    </div>
  );
}

const GAMES = { kaag: Kaag, kukur: Kukur, laxmi: Laxmi, mha: Mha, bhai: Bhai, chhath: Chhath };
export default function Play({ kind }) {
  const G = GAMES[kind];
  return G ? <G /> : null;
}
