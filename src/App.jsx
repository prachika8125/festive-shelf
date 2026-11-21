import { useState } from 'react';
import { books, ui } from './data/books';
import Bookshelf from './components/Bookshelf';
import Book from './components/Book';

export default function App() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <header className="home">
        <h1>{ui.title}</h1>
        <p>{ui.sub}</p>
      </header>
      <Bookshelf books={books} onOpen={setOpen} />
      {open && <Book key={open.id} book={open} ui={ui} onClose={() => setOpen(null)} />}
    </>
  );
}
