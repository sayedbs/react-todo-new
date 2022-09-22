import React, { lazy, Suspense, useState } from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Todos } from '../../components/Todos/Todos';

export default function Home(props) {
  

  return (
    <>
        <Header />
        <main>
            <Todos />
            
        </main>

        <Footer />
    </>
  )
}
