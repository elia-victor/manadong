import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import OurMenu from './pages/OurMenu';
import Promotion from './pages/Promotion';
import Review from './pages/Reviews';
import Location from './pages/Location';
import Footer from './components/Footer';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <div className='h-screen'>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Dashboard />
                <OurMenu />
                <Promotion />
                <Review />
                <Location />
              </>
              }>
              <Route path="/order" element={<OrderPage />} />
            </Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
