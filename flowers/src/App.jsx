import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";
import Salary from "./pages/Salary";
import Supplies from "./pages/Supplies";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/supplies" element={<Supplies />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
