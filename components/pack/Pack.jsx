import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import FavouriteImg from '../../public/images/favorite.png'

const Pack = ({ name, price, image, imageDesc, slug, quantity }) => {
    const [fullPrice, setFullPrice] = useState(price / 2)

    const blackBorder = { borderColor: '#000000', borderWidth: '5px' }
    const redBorder = { borderColor: '#ff1d21', borderWidth: '5px', boxShadow: "0 3px 18px 6px rgba(0, 191, 255, .62)" }
    const favouriteImg = {
        maxWidth: '30%',
        position: 'absolute',
        top: '-1.1%',
        bottom: 'auto',
        left: 'auto',
        right: '-3.2%'
    }

    const searchParams = useSearchParams()
    const search = searchParams.get('transaction_id')


    return (
        <>
            <div className="flex flex-col justify-center items-center basis-1/3 bg-white pt-2.5 px-5 pb-10 relative" style={fullPrice >= 78 ? redBorder : blackBorder}>
                <Image src={fullPrice >= 78 ? FavouriteImg : false} quality={100} loading='lazy' style={favouriteImg} />
                <div className="pack-height">
                    <h3 className="text-blue mt-5 mb-2 text-xl font-bold text-center">{name}</h3>
                    <Image src={imageDesc} alt='Boost' quality={100} loading='lazy' width={250} height={33} />
                    <h3 className=" text-blue mt-2 mb-2 text-xl font-bold text-center">{fullPrice >= 78 ? 'Για Μέγιστη Απόδοση!' : ''}</h3>
                    <Image src={image} alt={name} loading='lazy' width={250} height={250} />
                </div>
                <div>
                    <h4 className="text-blue mt-5 text-lg font-bold">
                        {quantity} 
                        </h4>
                    <div className="list-wrapper">
                        <img src="images/check.png" loading="lazy" width="20" sizes="(max-width: 1439px) 20px, 1vw" srcset="images/check-p-500.png 500w, images/check.png 512w" alt="" className="image-10" />
                        <div className="text-block-15"><strong className="bold-text-10">Έτοιμο για ΑΠΟΣΤΟΛΗ</strong></div>
                    </div>
                    <div className="list-wrapper"><img src="images/check.png" loading="lazy" width="20" sizes="(max-width: 1439px) 20px, 1vw" srcset="images/check-p-500.png 500w, images/check.png 512w" alt="" className="image-10" />
                        <div className="text-block-15"><strong className="bold-text-10">Διακριτικό πακέτο</strong></div>
                    </div>
                    <div className="list-wrapper"><img src="images/check.png" loading="lazy" width="20" sizes="(max-width: 1439px) 20px, 1vw" srcset="images/check-p-500.png 500w, images/check.png 512w" alt="" className="image-10" />
                        <div className="text-block-15"><strong className="bold-text-10">Διακριτική δειγματοληψία</strong></div>
                    </div>
                    <div className="list-wrapper"><img src="images/check.png" loading="lazy" width="20" sizes="(max-width: 1439px) 20px, 1vw" srcset="images/check-p-500.png 500w, images/check.png 512w" alt="" className="image-10" />
                        <div className="text-block-15"><strong className="bold-text-10">Εργαστηριακά ελεγμένο τζέλ</strong></div>
                    </div>
                    <div className="list-wrapper"><img src="images/check.png" loading="lazy" width="20" sizes="(max-width: 1439px) 20px, 1vw" srcset="images/check-p-500.png 500w, images/check.png 512w" alt="" className="image-10" />
                        <div className="text-block-15"><strong className="bold-text-10">Κατασκευάζεταιστην Κύπρο</strong></div>
                    </div>
                    <div className="list-wrapper"><img src="images/check.png" loading="lazy" width="20" sizes="(max-width: 1439px) 20px, 1vw" srcset="images/check-p-500.png 500w, images/check.png 512w" alt="" className="image-10" />
                        <div className="text-block-15"><strong className="bold-text-10">Ικανοποιηθείτε ή πάρτε τα χρήματα σας πίσω<br /></strong></div>
                    </div>
                </div>
                <div className="list-wrapper-copy">
                    <div className="price-wrapper">
                        <div className="text-block-16-copy">ΤΙΜΗ ΚΑΤΑΛΟΓΟΥ: <span className="text-span-8">{price} €</span> </div>
                        <div className="text-block-16"><span className="text-span-4"><strong className="bold-text-11-copy">ΑΓΟΡΑΣΕ ΤΟ ΓΙΑ:</strong></span><strong> </strong><span className="text-span-5"><strong className="bold-text-18">{fullPrice} €</strong></span><strong> <br /></strong></div>
                    </div>
                </div>
                <Link href={`packs/${slug}${search ? "?transaction_id=" + search : ""}`} className="packs-page-btn button-copy w-button">ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ</Link>
                <div className="price-wrapper">
                    <div className="text-block-16"><strong>ΕΞΟΙΚΟΝΟΜΗΣΗ 6 € / ΜΗΝΑ σε ετήσια ανανέωση<br /></strong></div>
                </div>
            </div>

        </>
    )

}

export default Pack