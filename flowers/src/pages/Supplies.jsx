import { useState } from 'react';

function Supplies() {
  const [a, b] = useState('');
  const [c, d] = useState('');
  const [e, f] = useState('');
  const [g, h] = useState('');
  const [i, j] = useState('');

  const m = ['Монитор', 'Ноутбук', 'Клавиатура', 'Мышь', 'Принтер'];

  const n = (x) => {
    return x.replace(/^0+/, '').replace(/\D/g, '');
  };

  const o = () => {
    j('⏳ Сохранение...');
    setTimeout(() => {
      b('');
      d('');
      f('');
      h('');
      j('✅ Поставка сохранена!');
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow space-y-8">
      <h2 className="text-2xl font-bold text-center">📦 Новая партия</h2>

      <div className="space-y-4">
        <div>
          <input
            value={a}
            onChange={(e) => b(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Производитель"
          />
        </div>

        <div>
          <select
            value={c}
            onChange={(e) => d(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Выбери устройство --</option>
            {m.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              inputMode="numeric"
              value={e}
              onChange={(e) => f(n(e.target.value))}
              className="w-full border p-2 rounded"
              placeholder="Шт."
            />
          </div>

          <div>
            <input
              type="text"
              inputMode="numeric"
              value={g}
              onChange={(e) => h(n(e.target.value))}
              className="w-full border p-2 rounded"
              placeholder="Цена"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={o}
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        >
          Сохранить
        </button>

        {i && <p className="text-green-600 font-medium mt-4">{i}</p>}
      </div>
    </div>
  );
}

export default Supplies;
