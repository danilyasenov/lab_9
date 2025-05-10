import { useEffect, useState } from 'react';
import { delay } from '../data/Api';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [orderCount, setOrderCount] = useState(0);
  const [supplyCount, setSupplyCount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    async function loadFakeData() {
      // типо загружаем с “сервака”
      await delay(1000);

      // хардкодим нужные тебе числа
      setOrderCount(5);
      setSupplyCount(1);
      setTotalIncome(1200); // доход = прибыль + расход
      setTotalExpenses(40000);
      setLoading(false);
    }

    loadFakeData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-gray-600 text-xl">
        ⏳ Загрузка панели управления…
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">👋 Добро пожаловать в CRM цветочного магазина</h1>

      {/* Статистика */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white shadow-md rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">Всего заказов</p>
          <p className="text-2xl font-bold">{orderCount}</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">Поставки</p>
          <p className="text-2xl font-bold">{supplyCount}</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">Доход</p>
          <p className="text-2xl font-bold text-green-600">{totalIncome} сом</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">Расход</p>
          <p className="text-2xl font-bold text-red-500">{totalExpenses} сом</p>
        </div>
      </div>

      {/* Быстрые действия */}
      <h2 className="text-xl font-semibold mb-4">🚀 Быстрые действия</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/orders"
          className="bg-blue-500 text-white px-6 py-4 rounded-xl shadow hover:bg-blue-600 text-center font-medium"
        >
          ➕ Создать заказ
        </Link>
        <Link
          to="/supplies"
          className="bg-green-500 text-white px-6 py-4 rounded-xl shadow hover:bg-green-600 text-center font-medium"
        >
          📦 Добавить поставку
        </Link>
        <Link
          to="/salary"
          className="bg-yellow-400 text-white px-6 py-4 rounded-xl shadow hover:bg-yellow-500 text-center font-medium"
        >
          💸 Выдать зарплату
        </Link>
        <Link
          to="/reports"
          className="bg-gray-700 text-white px-6 py-4 rounded-xl shadow hover:bg-gray-800 text-center font-medium"
        >
          📊 Перейти в отчёты
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
