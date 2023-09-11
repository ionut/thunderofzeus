"use client"
import Image from 'next/image'
import Pack from '@/components/pack/Pack'
import './PackSection.css'
import TozLogo from '../../public/images/ToZ_Logo_footer3x.png'

const page = () => {
    const products = [
        {
            id: 1,
            name: 'Τζέλ',
            price: '78',
            imageDesc: '/images/boost-33.png',
            image: '/images/cream_01.png',
            quantity: '50 ML',
            slug: 'product-gel'
        },
        {
            id: 2,
            name: 'Δισκία',
            price: '78',
            imageDesc: '/images/boost-66.png',
            image: '/images/Tablet_01.png',
            quantity: '3 Δισκία',
            slug: 'product-tea'
        },
        {
            id: 3,
            name: 'Δυναμικό πακέτο Δισκία + Τζέλ',
            price: '156',
            imageDesc: '/images/boost-100.png',
            image: '/images/pack_1.png',
            quantity: 'Τζέλ 50ml + 3 Δισκία',
            slug: 'combos'
        }
    ]



    return (
        <>
            <section className='pack-section--1'>
            <div className="flex items-center w-full h-24 px-5p pt-5 pb-2.5 mb-12 w-nav section-navigation">
                        <div className="flex justify-between items-center mx-auto container">
                            <a href="#" className="section-navigation_logo">
                                <Image src={TozLogo}
                                    alt="ThunderOfZeus Logo"
                                    style={{ width: '150px' }} />
                            </a>
                            <button className="flex items-center justify-center section-navigation_button">
                                Σπίτι &gt;&gt;
                            </button>
                        </div>
                    </div>
                <div className='section'>
                    <h1 className='text-coralblue text-center text-4xl mb-8 font-bold'>ΕΠΙΛΕΞΤΕ ΤΟ ΠΑΚΕΤΟ ΣΑΣ</h1>
                    <h3 className='text-white text-center text-2xl mb-8'>ΠΑΡΑΔΟΣΗ 48 ΩΡΩΝ ΠΕΡΙΛΑΜΒΑΝΕΤΑΙ ΣΕ ΟΛΕΣ ΤΙΣ ΠΡΟΣΦΟΡΕΣ ΜΑΣ</h3>
                    <div className='flex w-full gap-5'>
                        {products.map((product) =>
                            <Pack key={product.id} name={product.name} price={product.price} slug={product.slug} image={product.image} imageDesc={product.imageDesc} quantity={product.quantity}></Pack>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default page