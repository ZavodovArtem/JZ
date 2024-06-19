import React, {useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import BodySewing from './components/bodySewing';
import BodyPhilosophy from './components/bodyPhilosophy';
import BodyStep from './components/bodyStep';
import BodyMoney from './components/bodyMoney';
import BodyForm from './components/bodyForm';

import logoLoad from '../src/components/img/header/logo.svg'
import Footer from './components/footer';



const LoadingAnimation: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Используйте переменную для определения класса контейнера
  const containerClass = loading ? 'Appp' : 'App';

  return (
    <div className={containerClass}>
      {loading ? (
        // <div className="loader"></div>
        <>
        <p className='loa loaOne fontRegular'>Индивидуальный</p>
        <p className='loa loaThree fontRegular'>пошив</p>
        <img className='loadere' src={logoLoad} alt="" />
        <p className='loa loaTwo fontRegular'>Юлия</p>
        <p className='loa loaFour fontRegular'>Заводова</p>
        </>
      ) : (
        <>
          <Header />
          <BodySewing />
          <BodyPhilosophy />
          <BodyStep />
          <BodyMoney />
          <BodyForm />
          <Footer />
        </>
      )}
    </div>
  );
}

function App() {
  return <LoadingAnimation />;
}

export default App;

