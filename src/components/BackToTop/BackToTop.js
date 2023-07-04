import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import {motion, useAnimation} from 'framer-motion'
import {Link} from 'react-scroll'

export default function BackToTop(){

    //CONTEXT
    const {showGoToTop } = useContext(AppContext)

    //ANIMATIONS
    const buttonControls = useAnimation()

    const backToTopBtn = {
        hidden: {
            opacity: 0,
            y: 0
        },
        visible: {
            opacity: 0.6,
            y: -60
        },
        hover:{
            opacity: 1
        },
        click:{
            scale: 0.9
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
        >
            <motion.div 
                className="back-to-top-container" 
                variants={backToTopBtn}
                initial={showGoToTop ? 'visible' : 'hidden'}
                animate={buttonControls}
                whileHover={'hover'}
                whileTap={'click'}
                >
                <FontAwesomeIcon icon={faChevronUp}/>
            </motion.div>
        </Link>
    )
}