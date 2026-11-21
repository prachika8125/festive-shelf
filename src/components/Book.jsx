import { useEffect, useRef, useState } from 'react';
import Play from './Play';
import { themeVars } from '../data/books';

const FLIP_MS = 1150;

function Art({ art, on }) {
  if (art.img) return <img className="artimg" src={art.img} alt="" />;
  const [gc, gh] = art.ground || [];
  return (
    <div className={on ? 'art on' : 'art'} style={{ background: art.bg }} aria-hidden="true">
      {gc && <div className="ground" style={{ background: gc, height: `${gh}%` }} />}
      {art.items.map(([e, x, y, s, r = 0, k], i) => (
        <span key={i} className="it" style={{ left: `${x}%`, top: `${y}%`, fontSize: `${s}cqw`, transform: `translate(-50%,-50%) rotate(${r}deg)` }}>
          <span className="pop" style={{ animationDelay: `${0.35 + i * 0.09}s` }}>
            <span className={k === 'k' ? 'bob dark' : 'bob'} style={{ animationDelay: `${i * -0.7}s` }}>{e}</span>
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Book({ book, ui, onClose }) {
  const N = book.pages.length;
  const [p, setP] = useState(0);        // number of leaves turned (0 = closed)
  const [flip, setFlip] = useState(null); // { i, dir } while a leaf is moving
  const timer = useRef();
  const touch = useRef(null);

  const pRef = useRef(0);
  const go = (d) => {
    const x = pRef.current;
    const n = Math.min(N, Math.max(0, x + d));
    if (n === x) return;
    pRef.current = n;
    setP(n);
    setFlip({ i: d > 0 ? x : n, dir: d });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setFlip(null), FLIP_MS);
  };

  useEffect(() => {
    const k = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', k);
    return () => { window.removeEventListener('keydown', k); clearTimeout(timer.current); };
  }, []);

  const onTouchStart = (e) => { touch.current = e.target.closest('input,button') ? null : e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    touch.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  const leaves = [];
  for (let i = 0; i <= N; i++) {
    const turned = p > i;
    const moving = flip && flip.i === i;
    const z = moving ? 200 : turned ? i + 1 : N + 1 - i;
    const cls = ['leaf', turned && 'turned', moving && 'moving', moving && (flip.dir > 0 ? 'fwd' : 'back'), i === 0 && 'isCover'].filter(Boolean).join(' ');
    const seen = i === p; // only the visible right-hand leaf is interactive
    leaves.push(
      <div key={i} className={cls} style={{ zIndex: z }}>
        <div className="bend">
          <div className="face front" inert={seen ? undefined : ''}>
            {i === 0 ? (
              <div className="cover" onClick={() => go(1)}>
                <div className="em">{book.emoji}</div>
                <h2>{book.title}</h2>
                <small>{book.day}</small>
              </div>
            ) : (
              <div className="page text">
                <div className="inner">
                  <h3>{book.pages[i - 1].h}</h3>
                  <p>{book.pages[i - 1].p}</p>
                  {book.pages[i - 1].play && <Play kind={book.pages[i - 1].play} />}
                </div>
                <span className="pg">{i}</span>
                <div className="shade" />
              </div>
            )}
          </div>
          {i < N && (
            <div className="face back">
              <div className="page art-page">
                <Art art={book.pages[i].art} on={p === i + 1} />
                <span className="pg">{i + 1}</span>
                <div className="shade" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="stage" role="dialog" aria-modal="true" aria-label={book.title} style={themeVars(book.theme)} onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={onClose} aria-label={ui.close}>✕</button>
        <div className={p > 0 ? 'book open' : 'book'} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="under left" />
          <div className="under right" />
          {leaves}
        </div>
        <div className="ctrl">
          <button className="btn ghost" disabled={p === 0} onClick={() => go(-1)}>{ui.back}</button>
          <span className="count">{p} / {N}</span>
          <button className="btn" disabled={p === N} onClick={() => go(1)}>{ui.next}</button>
        </div>
      </div>
    </div>
  );
}
