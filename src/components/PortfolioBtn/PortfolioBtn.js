import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBriefcase } from '@fortawesome/free-solid-svg-icons'
import {motion, useAnimation} from 'framer-motion'
import { useEffect , useContext} from 'react'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-scroll'
export default function PortflioBtn (){

    //CONTEXT
    const {showPortfolioBtn, setShowPortfolioBtn} = useContext(AppContext)


    //ANIMATIONS
    const portfolioBtnControls = useAnimation()

    const porfolioBtn = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition:{
                delay: 0.5,
                duration: 0.3
            }
        },
        tap:{
            scale: 0.9
        }
    }

    //EFFECTS
    useEffect(()=>{
        if(showPortfolioBtn){
            portfolioBtnControls.start('visible')
        }
        else{
            portfolioBtnControls.start('hidden')
        }
    },[showPortfolioBtn, portfolioBtnControls])

    return(
        <Link
        to={'projects'}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={()=>setShowPortfolioBtn(false)}
        >
            <motion.button 
            className='portfolio-btn'
            variants={porfolioBtn}
            initial={'hidden'}
            whileTap={'tap'}
            animate={portfolioBtnControls}
            
            >
                <FontAwesomeIcon icon={faBriefcase}/>
                <p>Portfolio</p>
            </motion.button>
        </Link>
    )
}