"use client"
import React, { useState, useEffect } from 'react'
import './banner.css'

const Banner = () => {
  const [productsLeft, setProductsLeft]=useState(15);

  useEffect(() => {
    setTimeout(() => {
      setProductsLeft(productsLeft>5 ? productsLeft-1 : productsLeft)
    }, 30000);
  
  })
  

  return (
    <>
      <header>
        <div className="banner-announcement">
          <div className="container">
            <div className="banner-announcement_text">
              <p className="a-paragraph-small">ΠΡΟΕΙΔΟΠΟΙΗΣΗ: Λόγω της εξαιρετικά υψηλής ζήτησης από τα μέσα ενημέρωσης, η προμήθεια του <strong className='font-semibold'>Thunder of Zeus</strong> είναι περιορισμένη. Μένουν μόνο {productsLeft}!</p>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Banner