import React from 'react';
import Header from './components/Header';
import ContactForm from './components/Form'; // Импортируем форму
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* Форма для обратного звонка */}
      <ContactForm />
    </div>
  );
}

export default App;