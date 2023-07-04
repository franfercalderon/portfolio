import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'
import {skillsArrayLeft, skillsArrayRight} from '../../assets/assets'

export default function SkillsCircle({isInView}) {

    //VARIABLES
    const ref = useRef(null)

    //ANIMATIONS
     //Gets Y axis scroll progress from framer-motion hook and transforms it into opacity, scale and 'y' position values. This will be used to style this element as user scrolls down the page :
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['end', 'end start']
    })

    const containerOpacity = useTransform(scrollYProgress, [0.5, 0.75], [1, 0])
    const containerY = useTransform(scrollYProgress, [0.3, 1], ['0vh', '-50vh'])
    const titleScale = useTransform(scrollYProgress, [0.4, 0.75], [1, 0])
    const skillsOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0])
    const skillsLeftX = useTransform(scrollYProgress, [0.4, 1], ['0vh', '-60vh'])
    const skillsRightX = useTransform(scrollYProgress, [0.4, 1], ['0vh', '60vh'])

    const titleCircle = {
        circle:{
            width: null,
            height: null,
            backgroundColor: '#CB5041',
            transition:{
                duration: 0.3,
                ease: 'easeInOut'
            }
        },
        banner:{
            width: '100vw',
            x: 0,
            borderRadius: 0,
            transition:{
                delay: 0.5,
                duration: 0.3,
                ease: 'easeInOut'
            }
        }

    }

    const logoAnimation = {
        hidden:{
            scale: 0,
            opacity: 0,
        },
        visible:{
            scale: 1,
            opacity: 1
        },
    }

    const techLogoDiv = {
        hidden:{
            opacity: 0
        },
        visible:{
            opacity: 1,
        },
    }


    return(
        <motion.div 
            className='skills-circle '
            ref={ref}
            style={{opacity: containerOpacity, y: containerY}}
            variants={titleCircle}
            initial={'circle'}
            whileInView={'banner'}
        >   
            <motion.div className='skill-logo-container'
            style={{x: skillsLeftX, opacity: skillsOpacity}}>
                {isInView && skillsArrayLeft.map((technology, idx)=>{
                    //Maps array with left side logos, assigning a delay to each of them based on their index, for a scaled appaearance animation
                    // const delay = 0.4 + idx * 0.1
                    const delay = 0.6 + (skillsArrayLeft.length - (idx + 1) ) * 0.1
                    return(
                        <div className='tech-logo-div-wrap' key={idx}>
                            <motion.img src={`/images/${technology.img}.svg`} className='tech-logo' alt={technology.displayName} 
                            variants={logoAnimation}
                            initial='hidden'
                            whileInView={'visible'}
                            transition={{
                                delay,
                                duration: 0.25,
                                ease: 'easeInOut'
                            }}
                            />
                            <motion.div 
                            className='tech-logo-div'
                            variants={techLogoDiv}
                            initial='hidden'
                            whileHover='visible'
                            >
                                <p>{technology.displayName}</p>
                                <div className='skill-progress-bar'>
                                    <span style={{height: '100%', width:`${technology.progress}%`}}></span>
                                </div>
                            </motion.div>
                        </div>
                    )
                })}
            </motion.div>
            <motion.div 
                className='skills-title '
                style={{scale: titleScale, opacity: skillsOpacity}}
            >
                <p>THINGS</p>
                <p>I LOVE</p>
                <p>USING</p>
            </motion.div>
            <motion.div className='skill-logo-container'
            style={{x: skillsRightX, opacity: skillsOpacity}}>
            
                {isInView && skillsArrayRight.map((technology, idx)=>{
                    //Maps array with right side logos, assigning a delay to each of them based on their index, for a scaled appaearance animation
                    // const delay = 0.4 + (logoArrayRight.length - (idx + 1) ) * 0.1
                    const delay = 0.6 + idx * 0.1
                    return(
                        <div className='tech-logo-div-wrap' key={idx}>
                            <motion.img src={`/images/${technology.img}.svg`} className='tech-logo' alt={technology.displayName} 
                            variants={logoAnimation}
                            initial='hidden'
                            whileInView={'visible'}
                            transition={{
                                delay,
                                duration: 0.25,
                                ease: 'easeInOut'
                            }}
                            />
                            <motion.div 
                            className='tech-logo-div'
                            variants={techLogoDiv}
                            initial='hidden'
                            whileHover='visible'
                            >
                                <p>{technology.displayName}</p>
                                <div className='skill-progress-bar'>
                                    <span style={{height: '100%', width:`${technology.progress}%`}}></span>
                                </div>
                            </motion.div>
                        </div>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}