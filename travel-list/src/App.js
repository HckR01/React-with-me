import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(description, quantity) {
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    setItems((items) => [...items, newItem]);
  }

  function handleTogglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleReset() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onTogglePacked={handleTogglePacked} />
      <Stats items={items} onReset={handleReset} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 FAR AWAY 🥥</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    onAddItem(description, quantity);
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>❤️ What do you need for your trip? 🤔</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onTogglePacked }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onTogglePacked={onTogglePacked} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onTogglePacked }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onTogglePacked(item.id)}
      />
      <span
        style={
          item.packed ? { textDecoration: 'line-through', color: 'gray' } : {}
        }
      >
        {item.quantity} {item.description}
      </span>
    </li>
  );
}

function Stats({ items, onReset }) {
  const total = items.length;
  const packed = items.filter((item) => item.packed).length;

  return (
    <footer className="stats">
      <em>
        💼 You have {total} item{total !== 1 ? 's' : ''} on your list, and you
        already packed {packed} ✅
      </em>
      <br />
      <button onClick={onReset}>Reset List</button>
    </footer>
  );
}
