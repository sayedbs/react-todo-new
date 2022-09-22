import React, { lazy, Suspense, useState } from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Todos } from '../../components/Todos/Todo';

export default function Home(props) {
  

  return (
    <>
        <Header />
        <main>
            <h2>
                main content
            </h2>
            <Todos />
            
        </main>

        <Footer />
    </>
  )
}
