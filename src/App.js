import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import ContextDataProvider from './components/context/ContextData';
import Navbar from './components/Navbar';

function App() {
  return (
    <ContextDataProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ContextDataProvider>
  );
}

export default App;
