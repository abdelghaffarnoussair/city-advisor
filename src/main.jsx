import ReactDOM from 'react-dom';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="/" element={<navb />} />
         </ Route>
     
      {/* Add other routes as needed */}
    </Routes>
  </BrowserRouter>
);
