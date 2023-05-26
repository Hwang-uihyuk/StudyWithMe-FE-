import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import ContextDataProvider from './components/context/ContextData';

function App() {
  return (
    <ContextDataProvider>
      <Outlet />
      <Footer />
    </ContextDataProvider>
  );
}

export default App;
