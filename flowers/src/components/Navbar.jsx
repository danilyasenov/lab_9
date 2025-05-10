import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link to="/">Главная</Link>
      <Link to="/orders">Заказы</Link>
      <Link to="/reports">Отчёты</Link>
      <Link to="/salary">Зарплаты</Link>
      <Link to="/supplies">Поставки</Link>
    </nav>
  );
};

export default Navbar;
