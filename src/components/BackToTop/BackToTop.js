import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import {motion, useAnimation} from 'framer-motion'
import {Link} from 'react-scroll'

export default function BackToTop(){

    //CONTEXT
    const {showGoToTop } = useContext(AppContext)

    //FUNCTIONS
    // const goToTop = ()=>{
    //     //Whenever is called, scrolls to hero section (main one)
    //     // heroRef.current.scrollIntoView()
    //     // setActiveSection('hero')

    // }

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
        //showGoToTop comes from context, is updated by the hero component, showing the button if the section is not in view.
        if(showGoToTop){
            buttonControls.start('visible')
        }
        else{
            buttonControls.start('hidden')
        }
    },[showGoToTop, buttonControls])


    return(
        <Link
        to={'hero'}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        activeClass='active'
        ignoreCancelEvents={true}

        >
            <motion.div 
                className="back-to-top-container" 
                // onClick={goToTop}
                variants={backToTopBtn}
                initial='hidden'
                animate={buttonControls}
                whileHover='hover'
                >
                <FontAwesomeIcon icon={faChevronUp}/>
            </motion.div>
        </Link>
    )
}