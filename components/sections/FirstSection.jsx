"use client"
import React,{useCallback} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams,usePathname } from 'next/navigation'

import './firstSection.css'
import TozLogo from '../../public/images/ToZ_Logo_footer3x.png'
import Stars from '../../public/images/stars.png'
import Calendar from '../../public/images/30-day_130-day.png'
import Discount from '../../public/images/discounted-price_1discounted-price.png'
import Delivery from '../../public/images/delivery_1delivery.png'
import Lock from '../../public/images/lock.png'

const FirstSection = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  const search = searchParams.get('transaction_id')
  
  return (
    <>
      <section className="section">
        <div className="flex items-center w-full h-24 px-5p pt-5 pb-2.5 mb-12 w-nav section-navigation">
          <div className="flex justify-between items-center mx-auto container">
            <a href="#" className="section-navigation_logo">
              <Image src={TozLogo}
                alt="ThunderOfZeus Logo"
                style={{ width: '150px' }} />
            </a>
            <a href="#GO-HERE" className="flex items-center justify-center section-navigation_button">
              ΠΑΡΑΓΓΕΛΙΑ &gt;&gt;
            </a>
          </div>
        </div>
        <div className="pt-12 pb-20 mx-auto container section-content">
          <div className="flex justify-end mt-20">
            <div className="div-block">
              <div className="text-white text-right text-3xl mb-8 line-through">78 €</div>
              <div className="text-coralblue text-right font-bold text-7xl mb-8 ">39 €</div>
            </div>
          </div>
          <div className="flex justify-start mt-5">
            <div className="section-content_block">
              <div className="flex justify-start items-center mb-2 text-left">
                <Image src={Stars}
                  alt="Stars"
                  style={{ maxWidth: '150px' }} className="mr-2" />
                <p className="text-white text-sm mb-0">Βαθμολογήθηκε 4.9/5 από 1500+ Πελάτες!</p>
              </div>
              <h2 className="text-coralblue text-left font-bold text-6xl mb-8 ">Αντιμετωπίζετε προβλήματα στο κρεβάτι;</h2>
              <div className="text-white text-left text-3xl mb-4 ">Κατακτήστε την κρεβατοκάμαρα με τον Κεραυνό του Δία!</div>

              <div className="flex flex-row">
                <div className="flex flex-col basis-1/3">
                  <Image src={Calendar}
                    alt="Calendar image"
                    style={{ maxWidth: '100%' }} className="self-center pb-2" />
                  <p className="text-white text-center text-sm">Εγγύηση Επιστροφής Χρημάτων 30 Ημερών!</p>
                </div>
                <div className="flex flex-col basis-1/3">
                  <Image src={Discount}
                    alt="Discount image"
                    style={{ maxWidth: '100%' }} className="self-center pb-2" />
                  <p className="text-white text-center text-sm">50% Έκπτωση! Περιορισμένα Αποθέματα!</p>
                </div>
                <div className="flex flex-col basis-1/3">
                  <Image src={Delivery}
                    alt="Delivery image"
                    style={{ maxWidth: '100%' }} className="self-center pb-2" />
                  <p className="text-white text-center text-sm">Γρήγορη αποστολή σε διακριτική συσκευασία</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-auto pt-20 pb-6 text-center section-content_button">
            <Link href={pathname+'packs-page?transaction_id='+search} className="packs-page-btn button">ΠΑΡΑΓΓΕΛΙΑ &gt;&gt;</Link>
            <div className="section-content_block">
              <div className="pb-2 mb-2 mx-auto text-center w-full">
              <Image src={Lock}
                  alt="Lock"
                  style={{ width: '20px' }} className="inline-block mr-1" />
                <span className="text-white text-xs">
                  <strong>100% Ασφαλείς Συναλλαγές SSL<br />
                  </strong>
                </span>
                <Image src="https://uploads-ssl.webflow.com/644aa1d7e1cf402db3aaaead/644aa1d7e1cf407708aaaef5_badges.png" loading="lazy" alt="Badge" className="inline-block" width={200} height={25}/>
              </div>
              <p className="text-white text-sm mb-0">* Παρακαλείστε να σημειώσετε ότι ο τοπικός ΦΠΑ μπορεί να διαφέρει ανάλογα με τους κανονισμούς της χώρας από την οποία παραγγέλνετε τα προϊόντα μας.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FirstSection