"use client"
import React from 'react'
import Image from 'next/image'
import { RevealWrapper } from 'next-reveal'
import SadCouple from '../../public/images/sad-couple.png'
import FirstCouplePhoto from '../../public/images/1.png'
import SecondCouplePhoto from '../../public/images/2.png'
import ThirdCouplePhoto from '../../public/images/3.png'
import DepressedPerson from '../../public/images/4_1.png'


const FourthSection = () => {
    return (
        <>
            <section className="section-4 relative py-36">
                <Image src={SadCouple}
                    alt="Sad Couple"
                    quality={100}
                    loading='lazy'
                    width={600}
                    style={{
                        position: 'absolute',
                        left: '-5%',
                        bottom: '0'
                    }} />
                <div className="section">
                    <div className="text-white text-3xl font-bold flex justify-center items-center gap-4">
                        <RevealWrapper load-hidden easing='ease' reset='true' rotate={{y: 90}}>
                        <div className="text-right">
                            <h1 className="font-bold section-4_header">Είστε εξοικειωμένοι με αυτές τις αμήχανες καταστάσεις;</h1>
                            <div className="my-5 flex justify-end items-stretch">
                                <Image src={FirstCouplePhoto}
                                    alt="Depressed Couple"
                                    quality={100}
                                    loading='lazy'
                                    style={{
                                        width: '50%',
                                    }} />
                            </div>
                            <h3 className="text-white text-xl font-medium section-4--shadow">Δυσκολεύεστε να νιώσετε διέγερση ή έλλειψη σεξουαλικής επιθυμίας</h3>
                        </div>
                        </RevealWrapper>
                        <RevealWrapper load-hidden easing='ease' reset='true' origin='bottom'>
                        <div className="text-left">
                            <h3 className="text-white text-xl font-medium section-4--shadow">Αδυναμία διατήρησης της στύσης κατά τη διάρκεια της σεξουαλικής επαφής</h3>
                            <div className="my-5">
                            <Image src={SecondCouplePhoto}
                                    alt="Depressed Couple"
                                    quality={100}
                                    loading='lazy'
                                    style={{
                                        width: '100%',
                                    }} />
                            </div>
                            <div className="my-5">
                            <Image src={ThirdCouplePhoto}
                                    alt="Depressed Couple"
                                    quality={100}
                                    loading='lazy'
                                    style={{
                                        width: '100%',
                                    }} />
                            </div>
                            <h3 className="text-white text-xl font-medium section-4--shadow">Αδύναμη και γρήγορη εκσπερμάτιση</h3>
                        </div>
                        </RevealWrapper>
                        <RevealWrapper load-hidden easing='ease' reset='true' origin='right'>
                        <div className="text-left">
                            <h3 className="text-white text-xl font-medium section-4--shadow">Κούραση, δυσκολία στην αναπνοή</h3>
                            <div className="my-5">
                            <Image src={DepressedPerson}
                                    alt="Depressed Person"
                                    quality={100}
                                    loading='lazy'
                                    style={{
                                        width: '100%',
                                    }} />
                                </div>
                        </div>
                        </RevealWrapper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FourthSection