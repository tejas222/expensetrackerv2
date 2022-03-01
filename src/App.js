import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";
import UpdateExpense from "./components/UpdateExpense";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expense/:id" element={<UpdateExpense />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
