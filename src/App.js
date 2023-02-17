import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     <header>
      <Header />
     </header>
     <main>
      <Outlet />
     </main>
     <footer>
      <Footer />
     </footer>
    </div>
  );
}

export default App;
