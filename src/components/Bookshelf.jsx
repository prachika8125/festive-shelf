import { themeVars } from '../data/books';

const COLORS = ['#E63946', '#F77F00', '#FCBF49', '#2A9D8F', '#3A86FF', '#9D4EDD'];

function Lights() {
  const n = 15;
  const bulbs = Array.from({ length: n }, (_, i) => {
    const t = i / (n - 1);
    const x = 600 * t;
    const y = (1 - t) * (1 - t) * 6 + 2 * (1 - t) * t * 40 + t * t * 6;
    return <circle key={i} className="bulb" cx={x} cy={y + 5} r="5.5" fill={COLORS[i % COLORS.length]} style={{ animationDelay: `${(i % 5) * -0.5}s` }} />;
  });
  return (
    <svg className="lights" viewBox="0 0 600 40" aria-hidden="true">
      <path d="M0 6 Q300 40 600 6" fill="none" stroke="#0009" strokeWidth="2" />
      {bulbs}
    </svg>
  );
}

const Deco = ({ e, s = 2.2, cls = '' }) => <span className={`deco ${cls}`} style={{ fontSize: `${s}rem` }} aria-hidden="true">{e}</span>;

function Upright({ b, onOpen }) {
  return (
    <button className="spine" style={{ ...themeVars(b.theme), width: b.spine.w, height: b.spine.h }} onClick={() => onOpen(b)} aria-label={`${b.title}: ${b.day}`}>
      <span className="sem">{b.emoji}</span>
      <span className="st">{b.title}</span>
    </button>
  );
}

function Flat({ b, onOpen, cls }) {
  return (
    <button className={`flat ${cls}`} style={themeVars(b.theme)} onClick={() => onOpen(b)} aria-label={`${b.title}: ${b.day}`}>
      <span className="sem">{b.emoji}</span>
      <span className="ft">{b.title}</span>
    </button>
  );
}

export default function Bookshelf({ books, onOpen }) {
  const by = (id) => books.find((b) => b.id === id);
  return (
    <div className="shelf">
      <Lights />
      <div className="case">
        <div className="shelfrow">
          <div className="books">
            <Deco e="🪴" s={2.4} />
            {['kaag', 'kukur', 'laxmi', 'mha'].map((id) => <Upright key={id} b={by(id)} onOpen={onOpen} />)}
            <Deco e="🪔" s={1.7} cls="glow" />
          </div>
          <div className="board" />
        </div>
        <div className="shelfrow">
          <div className="frame" aria-hidden="true"><span>🏔️</span></div>
          <div className="books">
            <div className="stack">
              <Deco e="🕯️" s={1.6} cls="candle" />
              <Flat b={by('bhai')} onOpen={onOpen} cls="top" />
              <Flat b={by('chhath')} onOpen={onOpen} cls="bottom" />
            </div>
            <Deco e="🐘" s={2} />
            <Deco e="🌼" s={1.8} />
          </div>
          <div className="board" />
        </div>
      </div>
    </div>
  );
}
