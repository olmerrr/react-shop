import React from 'react';
import { Header } from './layout/Header/Header';
import { Shop } from './layout/Shop/Shop';
import { Footer } from './layout/Footer/Footer';

import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Shop />
      <Footer />
    </>
  );
}
