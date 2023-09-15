import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Layout from './components/ui/Layout';
import Register from './pages/Register';
import AdminDashboard from './pages/admin/AdminDashboard';
import EndUserDashboard from './pages/enduser/EndUserDashboard';
import AccountManagerDashboard from './pages/account_manager/AccountManagerDashboard';
import ResellerDashboard from './pages/reseller/ResellerDashboard';

function App() {
  let token = window.localStorage.getItem('token');
  if(!token){
    return <Login/>
  }
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route path="enduserdashboard" element={<EndUserDashboard />} />
          <Route path="accountmanagerdashboard" element={<AccountManagerDashboard />} />
          <Route path="resellerdashboard" element={<ResellerDashboard />} />
          <Route path="*" element={<NoPage />} />
        </Route>        
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
