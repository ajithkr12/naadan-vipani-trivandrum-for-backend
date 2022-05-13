import React from 'react'
import { useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import MobileNav from '../components/MobileNav'

import Products from '../components/Products'
import { productData } from '../components/Products/ProductsData'
import AddToCartlist from '../components/AddToCartElement'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }; 



    return (
        <div>
            <MobileNav isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Products heading='Vegetables' data={productData} />        
            <Products heading='Groceries' data={productData} />        
            <Footer />
            {/* <AddToCartlist data={productData}/> */}
        </div>
    )
}

export default Home
