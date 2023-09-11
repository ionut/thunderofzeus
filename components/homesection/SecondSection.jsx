'use client'
import Image from 'next/image'
import { RevealWrapper } from 'next-reveal'
import { motion } from "framer-motion"
import './style.css'
import Cactus from '../../public/images/b2_img_web.png'

const SecondSection = () => {
    return (
        <>
            <section className="section-2">
                <div className="flex justify-center items-center gap-20 py-36 section">
                    <div className="flex flex-col justify-center items-center basis-3/5">
                        <h2 className="text-6xl text-left text-blue font-bold leading-tight mb-7">Γιατί συμβαίνουν προβλήματα στο κρεβάτι;</h2>
                        <motion.div whileHover={{
                            position: 'relative',
                            zIndex: 1,
                            background: 'transparent',
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0],
                            transition: {
                                duration: .5
                            }
                        }}>
                            <Image src={Cactus}
                                alt="Cactus"
                                loading='lazy'
                                className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' />
                        </motion.div>

                    </div>
                    <RevealWrapper load-hidden origin='right' easing='ease-in' reset='true'>
                        <div className="section-2_wrapper">
                            <div className="p-12 border-2 border-solid border-blue bg-whitetransparent">
                                <div className="flex items-center gap-4 mb-5 pb-0">
                                    <h5 className="text-blue font-extrabold text-2xl">01</h5>
                                    <div className="text-xl font-medium">Η μη άσκηση <strong className="text-blue">φυσικής δραστηριότητας</strong></div>
                                </div>
                                <div className="flex gap-4 mb-5 pb-0">
                                    <h5 className="text-blue font-extrabold text-2xl">02</h5>
                                    <div className="text-xl font-medium"><strong className="text-blue">Ασθένειες που μεταδίδονται μέσω του σεξ </strong>και άλλες μολύνσεις στα γεννητικά όργανα</div>
                                </div>
                                <div className="flex gap-4 mb-5 pb-0">
                                    <h5 className="text-blue font-extrabold text-2xl">03</h5>
                                    <div className="text-xl font-medium"><strong className="text-blue">Η ανεπαρκής πρόσληψη</strong> απαραίτητων βιταμινών και μεταλλικών στοιχείων</div>
                                </div>
                                <div className="flex gap-4 mb-5 pb-0">
                                    <h5 className="text-blue font-extrabold text-2xl">04</h5>
                                    <div className="text-xl font-medium">Η συχνή εμπειρία του <strong className="text-blue">στρές</strong></div>
                                </div>
                                <div className="flex gap-4 mb-5 pb-0">
                                    <h5 className="text-blue font-extrabold text-2xl">05</h5>
                                    <div className="text-xl font-medium">Οι φυσικές αλλαγές που συνοδεύουν τη <strong className="text-blue">γήρανση</strong></div>
                                </div>
                                <div className="flex gap-4 mb-5 pb-0">
                                    <h5 className="text-blue font-extrabold text-2xl">06</h5>
                                    <div className="text-xl font-medium"><strong className="text-blue">Μη υγιεινές </strong>συμπεριφορές</div>
                                </div>
                            </div>
                        </div>
                    </RevealWrapper>
                </div>
            </section>


        </>
    )
}

export default SecondSection