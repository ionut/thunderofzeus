"use client"
import Image from 'next/image'
import { RevealList } from 'next-reveal'
import SadMan from '../../public/images/sad-man.png'

const ThirdSection = () => {
  return (
    <>
      <section className="section-3">
        <div className="flex flex-col items-start py-36 section">
          <h1 className="text-coralblue text-left text-6xl font-bold leading-tight w-4/5 mb-8">Ως άνδρας, είσαι ενήμερος γι&#x27; αυτό;</h1>
          <p className="text-white text-left text-2xl mb-8">Μετά την ηλικία των 40, το ανδρικό σώμα βιώνει μια μείωση στα επίπεδα ορμονών, οδηγώντας στην ανδροπαθεία. Το σώμα αρχίζει να απορροφά λιγότερες ουσιώδη βιταμίνες και μεταλλικά στοιχεία από την τροφή, προκαλώντας μεταβολικές ανισορροπίες. Αυτό μπορεί να προκαλέσει τη στένωση και εξασθένηση των αιμοφόρων αγγείων στο πέος, μαζί με άλλες αλλαγές.</p>
          <div className="relative flex gap-5">
            <Image src={SadMan}
            alt="Sad Man" 
        quality={100}
        loading='lazy'
        fill
        style={{
          objectFit:'contain',
          backgroundPosition: '49% 100%',
          backgroundRepeat:'no-repeat',
          backgroundSize:'contain',
          marginTop:'50px',
          zIndex:'20'
        }}/>
            <RevealList interval={60} delay={200} load-hidden easing='ease-in' reset='true' rotate={{y: 90}} className="basis-1/3 relative z-30">
              <div className="flex text-right p-4 mb-5 rounded-none border-2 border-none bg-blacktransparent">
                <p className="text-white text-xl font-medium mb-0">Η μειωμένη <strong className="text-coralblue">απόδοση και η χρόνια κόπωση</strong> εμφανίζονται γρήγορα.</p>
                <div className="bg-coralblue ml-4 vertical-line"></div>
              </div>
              <div className="flex text-right p-4 mb-5 rounded-none border-2 border-none bg-blacktransparent">
                <p className="text-white text-xl font-medium mb-0">Μπορεί να προκύψουν ξαφνικές<strong className="text-coralblue"> διακυμάνσεις της διάθεσης, εκρήξεις θυμού και κατάθλιψη.</strong></p>
                <div className="bg-coralblue ml-4 vertical-line"></div>
              </div>
              <div className="flex text-right p-4 mb-5 rounded-none border-2 border-none bg-blacktransparent">
                <p className="text-white text-xl font-medium mb-0">Είναι κοινή <strong className="text-coralblue">η αύξηση του βάρους, η απώλεια μυϊκής</strong> μάζας και η μειωμένη αντοχή.</p>
                <div className="bg-coralblue ml-4 vertical-line"></div>
              </div>
              <div className="flex text-right p-4 mb-5 rounded-none border-2 border-none bg-blacktransparent">
                <p className="text-white text-xl font-medium mb-0">Μπορεί να παρουσιαστούν προβλήματα κατά την <strong className="text-coralblue">ούρηση</strong>.</p>
                <div className="bg-coralblue ml-4 vertical-line"></div>
              </div>
            </RevealList>
            <div className="basis-1/3 relative z-30"></div>
            <RevealList interval={60} delay={200} load-hidden easing='ease-in' reset='true' rotate={{y: 90}} className="basis-1/3 relative z-30">
              <div className="flex text-right p-4 mb-5 rounded-none border-2 border-none bg-blacktransparent">
                <div className="bg-coralblue mr-4 vertical-line"></div>
                <p className="text-white text-xl font-medium mb-0">Μπορεί να προκύψει <strong className="text-coralblue">απώλεια των μαλλιών</strong>.</p>
              </div>
              <div className="flex text-right p-4 mb-5 rounded-none border-2 border-none bg-blacktransparent">
                <div className="bg-coralblue mr-4 vertical-line"></div>
                <p className="text-white text-xl font-medium mb-0">Οι <strong className="text-coralblue">ικανότητες μνήμης, προσοχής, συντονισμού, ομιλίας και σκέψης</strong> μπορεί να εξασθενήσουν.</p>
              </div>
              <div className="flex text-right p-4 mb-5 rounded-none border-2 border-none bg-blacktransparent">
                <div className="bg-coralblue mr-4 vertical-line"></div>
                <p className="text-white text-xl font-medium mb-0"><strong className="text-coralblue">Ο πόνος στις </strong>αρθρώσεις και ο κίνδυνος οστεοπόρωσης αυξάνονται.</p>
              </div>
              <div className="flex text-right p-4 mb-5 rounded-none border-2 border-none bg-blacktransparent">
                <div className="bg-coralblue mr-4 vertical-line"></div>
                <p className="text-white text-xl font-medium mb-0"><strong className="text-coralblue">Η λίμπιντο</strong> μειώνεται, μπορεί να προκύψει <strong className="light">στυτική δυσλειτουργία</strong> και μπορεί να υπάρξει μείωση στον όγκο και την ποιότητα του σπέρματος, καθώς και πρόωρη εκσπερμάτιση κατά την επαφή.</p>
              </div>
            </RevealList>
          </div>
        </div>
      </section>
    </>
  )
}

export default ThirdSection