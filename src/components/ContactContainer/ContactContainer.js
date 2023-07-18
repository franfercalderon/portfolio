import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import ContactBtnMobile from "../ContactBtnMobile/ContactBtnMobile";
import ContactBtnDesktop from '../ContactBtnDesktop/ContactBtnDesktop';
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react';

export default function ContactContainer(){

    const ref = useRef(null)
    
    //ANIMATIONS
    const titleMobile = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible:{
            opacity: 1,
            scale: 1,
            transform: 'translateY(-50%)',
            transition: {
                type: 'spring',
                stiffness: '90'
            }
        }
    }
    const titleDesktop = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible:{
            opacity: 1,
            scale: 1,
            transform: 'translateX(-50%)',
            transition: {
                type: 'spring',
                stiffness: '90'
            }
        }
    }

    const buttonsMobile = {
        visible:{
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const mobileBtn = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible:{
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: '100',
            }
        }
    }

    const desktopContactBar = {
        visible:{
            transition: {

                staggerChildren: 0.2
            }
        }
    }

    const desktopBtn = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible:{
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: '100',
            }
        }
    }

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const opacity  = useTransform(scrollYProgress, [0, 0.25], [0, 1])

    return(
        <motion.div className="contact-inner-container" ref={ref}
        style={{opacity}}>
            <motion.div 
            className="contact-title-container mobile"
            variants={titleMobile}
            initial={'hidden'}
            whileInView={'visible'}
            >
                <h3>WHERE</h3>
                <h3>TO FIND</h3>
                <h3>ME</h3>
            </motion.div>
            <motion.div 
            className="contact-title-container desktop"
            variants={titleDesktop}
            initial={'hidden'}
            whileInView={'visible'}
            >
                <h3>WHERE</h3>
                <h3>TO FIND</h3>
                <h3>ME</h3>
            </motion.div>
            <motion.div 
            className="contact-link-container mobile"
            variants={buttonsMobile}
            initial={'hidden'}
            whileInView={'visible'}
            >
                <motion.div
                variants={mobileBtn}
                >
                    <ContactBtnMobile href='https://www.linkedin.com/in/franfercalderon/' icon={faLinkedin}/>
                </motion.div>
                <motion.div
                variants={mobileBtn}>
                    <ContactBtnMobile href='https://github.com/franfercalderon/' icon={faGithub}/>
                </motion.div>
                <motion.div
                variants={mobileBtn}>
                    <ContactBtnMobile href='mailto:fran.fercalderon@gmail.com' icon={faEnvelope}/>
                </motion.div>
            </motion.div>
            <motion.div 
            className="contact-link-container desktop"
            variants={desktopContactBar}
            initial='hidden'
            whileInView={'visible'}
            >
                <motion.div
                variants={desktopBtn}
                style={{height: '100%'}}>
                    <ContactBtnDesktop href='https://www.linkedin.com/in/franfercalderon/' icon={faLinkedin}/>
                </motion.div>
                <motion.div
                variants={desktopBtn}
                style={{height: '100%'}}>
                    <ContactBtnDesktop href='https://github.com/franfercalderon/' icon={faGithub}/> 
                </motion.div>
                <motion.div
                variants={desktopBtn}
                style={{height: '100%'}}>
                    <ContactBtnDesktop href='mailto:fran.fercalderon@gmail.com' icon={faEnvelope}/>            
                </motion.div>
            </motion.div>
        </motion.div>
            
    )
}