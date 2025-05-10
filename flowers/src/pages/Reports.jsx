import { useState } from 'react';

function Reports() {
  const [a, b] = useState('');
  const [c, d] = useState('');
  const [e, f] = useState('');

  const x = ['Монитор', 'Ноутбук', 'Клавиатура', 'Мышь', 'Принтер'];

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-10">
      <h2 className="text-3xl font-bold text-center">📊 Сводка</h2>

      {/* БУ */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Точка БУ</h3>

        <select
          className="mb-2 border p-2 rounded"
          onChange={(e) => b(e.target.value)}
        >
          <option value="">Выбери устройство</option>
          {x.map((z) => (
            <option key={z} value={z}>
              {z}
            </option>
          ))}
        </select>

        {a === 'Монитор' ? (
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2">#</th>
                <th className="border px-2">Товар</th>
                <th className="border px-2">Себестоимость</th>
                <th className="border px-2">Цена</th>
                <th className="border px-2">Маржа</th>
                <th className="border px-2">Фикс. расходы</th>
                <th className="border px-2">БУ (шт.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2">1</td>
                <td className="border px-2">Монитор</td>
                <td className="border px-2">300</td>
                <td className="border px-2">500</td>
                <td className="border px-2">200</td>
                <td className="border px-2">600</td>
                <td className="border px-2">3</td>
              </tr>
            </tbody>
          </table>
        ) : (
          a && <p className="text-gray-500">Заказов на это устройство ещё не было</p>
        )}
      </section>

      {/* Финансы */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Финансы</h3>

        <select
          className="mb-2 border p-2 rounded"
          onChange={(e) => d(e.target.value)}
        >
          <option value="">Выбери устройство</option>
          {x.map((z) => (
            <option key={z} value={z}>
              {z}
            </option>
          ))}
        </select>

        {c === 'Монитор' ? (
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2">#</th>
                <th className="border px-2">Расход</th>
                <th className="border px-2">Налоги</th>
                <th className="border px-2">Всего</th>
                <th className="border px-2">Доход</th>
                <th className="border px-2">Итог</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2">1</td>
                <td className="border px-2">700</td>
                <td className="border px-2">200</td>
                <td className="border px-2">900</td>
                <td className="border px-2">1400</td>
                <td className="border px-2">500</td>
              </tr>
            </tbody>
          </table>
        ) : (
          c && <p className="text-gray-500">Заказов на это устройство ещё не было</p>
        )}
      </section>

      {/* Товарооборот */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Оборот</h3>

        <select
          className="mb-2 border p-2 rounded"
          onChange={(e) => f(e.target.value)}
        >
          <option value="">Выбери устройство</option>
          {x.map((z) => (
            <option key={z} value={z}>
              {z}
            </option>
          ))}
        </select>

        {e === 'Монитор' ? (
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2">#</th>
                <th className="border px-2">Товар</th>
                <th className="border px-2">Продано</th>
                <th className="border px-2">Сумма</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2">1</td>
                <td className="border px-2">Монитор</td>
                <td className="border px-2">18</td>
                <td className="border px-2">9000</td>
              </tr>
            </tbody>
          </table>
        ) : (
          e && <p className="text-gray-500">Заказов на это устройство ещё не было</p>
        )}
      </section>
    </div>
  );
}

export default Reports;
