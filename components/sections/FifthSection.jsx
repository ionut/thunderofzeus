'use client'
import React from 'react'
import Image from 'next/image'
import { RevealWrapper } from 'next-reveal'
import { motion } from "framer-motion"
import FifthSectionBackground from '../../public/images/TOZBG.jpg'
import MagazineOne from '../../public/images/mag-1.png'
import MagazineTwo from '../../public/images/mag-2.png'
import MagazineThree from '../../public/images/mag-3.png'

const FifthSection = () => {
    return (
        <>
            <section className="section-5 relative z-0">
                <div className='radial-gradient'></div>
                <Image src={FifthSectionBackground}
                    alt="Couple Background"
                    quality={100}
                    loading='lazy'
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover'
                    }} />
                <div className="section flex flex-col justify-center items-center text-center pt-36 pb-24 relative z-10">
                    <h1 className="text-blue text-6xl font-bold mb-7">Αναζωπυρώστε ξανά το πάθος σας με το Thunder of Zeus</h1>
                    <h4 className="text-black text-2xl mb-7">Αυτό το gel θα σας βοηθήσει να επιλύσετε τα ανδρικά σας προβλήματα και να βελτιώσετε τη συνολική σας ευεξία.</h4>
                    <h6 className="text-blue pt-5 text-2xl font-bold">Όπως μπορείτε να δείτε</h6>
                    <RevealWrapper load-hidden easing='ease' reset='true' origin='bottom' className="mt-5 mb-11 flex gap-5 w-2/4">
                        <div className="basis-1/3">
                            <Image src={MagazineOne}
                                alt="Men'sHealth"
                                quality={100}
                                loading='lazy'
                                style={{
                                    width: '100%',
                                }} />
                        </div>
                        <div className="basis-1/3">
                            <Image src={MagazineTwo}
                                alt="GQ"
                                quality={100}
                                loading='lazy'
                                style={{
                                    width: '100%',
                                }} />
                        </div>
                        <div className="basis-1/3">
                            <Image src={MagazineThree}
                                alt="Men'sJournal"
                                quality={100}
                                loading='lazy'
                                style={{
                                    width: '100%',
                                }} />
                        </div>
                    </RevealWrapper>
                    <motion.div whileHover={{
                            position: 'relative',
                            zIndex: 1,
                            background: 'transparent',
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0],
                            transition: {
                                duration: .5
                            }
                        }}>
                    <img src="images/img_bundle_Cream-Tablets_1img_bundle_Cream-Tablets.png" loading="lazy" data-w-id="07ec56dc-f982-89b1-8db4-e5dc83380f9e" alt="" className="image-43" />
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default FifthSection