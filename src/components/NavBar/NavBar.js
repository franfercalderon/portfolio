import {motion, useAnimation} from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import {Link} from 'react-scroll'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(){

    //CONTEXT
    const {sections} = useContext(AppContext)

    //STATE
    const [isDeployed, setIsDeployed] = useState(false)
    
    //ANIMATIONS
    const navControls = useAnimation()
    const liMobileControls = useAnimation()

    const liItemDesktop = {
        hidden: {
            y: '-20vh',
            opacity: 0
        },
        visible: {
            y: [null,0,0],
            opacity: [0, 0.2, 1],
    
        }
    } 

    const liItemMobile = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: [0, 0.2, 1],
    
        }
    }



    const navBar = {
        initial:{
            opacity: 0,
            y: -400,
            transition:{
                once: true,
                delay: 1
            }
        },
        hidden: {
            y: -360,
            opacity: 1,
            borderRadius: '50%',
            height: 400,
            width: 400,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(46, 127, 119, 0.5)',
            transition:{
                duration: 0.6,
                ease: 'easeInOut'
            }
        },
        visible:{
            y: 0,
            borderRadius: 0,
            height: 'auto',
            width: '100%',
            backgroundColor: 'rgba(46, 127, 119, 0.86)',
            transition:{
                duration: 0.6,
                ease: 'easeInOut'
            }
        },
        press:{
            scale: 1.05
        }
    }

    //EFFECTS
    useEffect(()=>{
        if(isDeployed){
            navControls.start('visible')
            liMobileControls.start('visible')
        }
        else{
            navControls.start('hidden')
        }
    },[isDeployed, navControls, liMobileControls])

    return(
        <>
        <motion.div 
        className="mobile navbar-main-container"
        variants={navBar}
        initial={'initial'}
        animate={navControls}
        >
            <ul>
                {sections && sections.map((section, idx)=>{

                const delay = (sections.length - idx) * 0.1
                //When gets sections from context, maps sections array to Navbar:
                return(
                    <Link to={section}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    ignoreCancelEvents={true}
                    activeClass='active'
                    onClick={()=>setIsDeployed(false)}
                    key={idx}
                    >
                        <motion.li
                            className={`nav-li`}
                            variants={liItemMobile}
                            initial={'hidden'}
                            animate={liMobileControls}
                            transition={{
                                duration: 0.3,
                                delay,
                                ease: 'easeInOut'
                            }}
                        >
                            {section.toUpperCase()}
                        </motion.li>
                    </Link>
                )
                })
                }
            </ul>
            <button className='toggle-mobile-menu-btn' onClick={()=>setIsDeployed(!isDeployed)}>
                <FontAwesomeIcon icon={isDeployed ? faChevronUp : faChevronDown }/>
            </button>
        </motion.div>
        <div className="desktop navbar-main-container">
            <ul>
                {sections && sections.map((section, idx)=>{
                    
                //When gets sections from context, maps sections array to Navbar:
                return(
                    <Link to={section}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    ignoreCancelEvents={true}
                    activeClass='active'
                    key={idx}
                    >
                        <motion.li
                            className={`nav-li`}
                            variants={liItemDesktop}
                            initial={'hidden'}
                            animate={'visible'}
                            transition={{
                                duration: 1,
                                delay: idx * 0.1,
                                times: [0, 0.8, 1],
                                ease: 'easeInOut'
                            }}
                        >
                            {section.toUpperCase()}
                        </motion.li>
                    </Link>
                )
                })
                }
            </ul>
        </div>
        </>
    )
}