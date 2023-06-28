import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import {motion, useAnimation} from 'framer-motion'

export default function BackToTop(){

    //CONTEXT
    const {heroRef, activeSection, setActiveSection} = useContext(AppContext)

    //FUNCTIONS
    const goToTop = ()=>{
        //Whenever is called, scrolls to hero section (main one)
        heroRef.current.scrollIntoView()
        setActiveSection('hero')

    }

    //ANIMATIONS
    const buttonControls = useAnimation()

    const backToTopBtn = {
        hidden: {
            // opacity: 0,
            y: 60
        },
        visible: {
            opacity: 0.6,
            y: 5
        },
        hover:{
            opacity: 1
        }
    }

    //EFFECTS
    useEffect(()=>{
        console.log(activeSection)
        if(activeSection !== 'hero'){
            console.log('debe mostrar')
            buttonControls.start('visible')
        }
        else{
            console.log('debe ocultar')
            buttonControls.start('hidden')
        }
    },[activeSection, buttonControls])


    return(
        <motion.div 
            className="back-to-top-container" 
            onClick={goToTop}
            variants={backToTopBtn}
            initial='hidden'
            animate={buttonControls}
            whileHover='hover'
            >
                <FontAwesomeIcon icon={faChevronUp}/>
            </motion.div>
        // <>
        // {activeSection !== 'hero' &&
        //     <motion.div 
        //     className="back-to-top-container" 
        //     onClick={goToTop}
        //     variants={backToTopBtn}
        //     initial='hidden'
        //     visible={buttonControls}
        //     >
        //         <FontAwesomeIcon icon={faChevronUp}/>
        //     </motion.div>
        // }
        // </>
    )
}