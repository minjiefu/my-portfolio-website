import React from 'react';

import {About, Footer, Header, Experiences, Testimonials, Projects} from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Experiences />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
