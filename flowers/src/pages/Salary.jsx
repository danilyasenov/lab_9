import { useState } from 'react';
import { fetchFromStorage, saveToStorage } from '../data/Api';

const employees = [
  { id: 1, name: 'Айнура' },
  { id: 2, name: 'Максат' },
  { id: 3, name: 'Каныкей' },
];

function Salary() {
  const [selected, setSelected] = useState(employees[0].id);
  const [days, setDays] = useState(0.5);
  const [message, setMessage] = useState('');

  const handlePay = async () => {
    const salary = await fetchFromStorage('salary');
    const employee = employees.find(e => e.id === selected);
    const amount = days * 1000;
    const newPay = {
      id: Date.now(),
      employee: employee.name,
      days,
      amount,
    };
    await saveToStorage('salary', [...salary, newPay]);
    setMessage(`Зарплата выдана: ${employee.name} получил(а) ${amount} сом за ${days} дней`);
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">💸 Выдача зарплаты</h2>

      <label className="block mb-2 font-semibold">Сотрудник</label>
      <select
        value={selected}
        onChange={(e) => setSelected(Number(e.target.value))}
        className="w-full border px-3 py-2 rounded mb-4"
      >
        {employees.map((e) => (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        ))}
      </select>

      <label className="block mb-2 font-semibold">Количество дней</label>
      <input
        type="number"
        step="0.1"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
        className="w-full border px-3 py-2 rounded mb-4"
      />

      <p className="mb-4">💰 <strong>{days * 1000}</strong> сом к выплате</p>

      <button
        onClick={handlePay}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow-md"
      >
        Выдать зарплату
      </button>

      {message && <p className="mt-4 text-green-600 font-medium">{message}</p>}
    </div>
  );
}

export default Salary;
