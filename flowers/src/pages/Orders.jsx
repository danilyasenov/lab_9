import { useState } from 'react';

function Orders() {
  const [a, b] = useState('');
  const [c, d] = useState('');
  const [e, f] = useState('A');
  const [g, h] = useState({});
  const [k, l] = useState('');

  const m = ['Монитор', 'Ноутбук', 'Клавиатура', 'Мышь', 'Принтер'];
  const n = 100;

  const o = (q) => {
    h((z) => ({
      ...z,
      [q]: (z[q] || 0) + 1,
    }));
  };

  const p = (q) => {
    h((z) => {
      const r = z[q] || 0;
      if (r <= 1) {
        const { [q]: _, ...rest } = z;
        return rest;
      }
      return {
        ...z,
        [q]: r - 1,
      };
    });
  };

  const s = () => {
    l('⏳ Подтверждение...');
    setTimeout(() => {
      b('');
      d('');
      h({});
      f('A');
      l('✅ Заказ подтверждён!');
    }, 1500);
  };

  const total = Object.values(g).reduce((acc, v) => acc + v, 0) * n;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow space-y-8">
      <h2 className="text-2xl font-bold text-center">📋 Заявка на поставку</h2>

      <div className="space-y-4">
        <div>
          <input
            value={a}
            onChange={(e) => b(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="ФИО"
          />
        </div>

        <div>
          <input
            type="date"
            value={c}
            onChange={(e) => d(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <select
            value={e}
            onChange={(e) => f(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="A">Обычный</option>
            <option value="B">Оптовый</option>
          </select>
        </div>

        <div>
          <div className="space-y-2">
            {m.map((q) => (
              <div key={q} className="flex justify-between items-center border p-2 rounded">
                <span>{q}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => p(q)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    −
                  </button>
                  <span>{g[q] || 0}</span>
                  <button
                    onClick={() => o(q)}
                    className="px-2 py-1 bg-blue-500 text-white rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold">
            💰 Сумма: <span className="text-green-600">{total} сом</span>
          </p>
        </div>

        <button
          type="button"
          onClick={s}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          Оплатить
        </button>

        {k && <p className="mt-4 text-blue-600">{k}</p>}
      </div>
    </div>
  );
}

export default Orders;
