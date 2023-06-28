import {motion, useAnimation} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function SkillsCircle({isInView}) {

    //STATES
    const [landscape, setLandscape] = useState(true)

    //VARIABLES
    const ref = useRef(null)
    const controls = useAnimation()
    const textControls = useAnimation()
    const logoControls = useAnimation()
    const logoArrayLeft = [
        {
            img: 'html',
            displayName: 'HTML5',
            progress: 95
        },
        {
            img: 'css',
            displayName: 'CSS3',
            progress: 80
        },
        {
            img: 'js',
            displayName: 'JavaScript',
            progress: 90
        },
        {
            img: 'sass',
            displayName: 'SASS',
            progress: 75
        }
    ]
    const logoArrayRight = [
        {
            img: 'vsc',
            displayName: 'Visual Studio Code',
            progress: 90
        },
        {
            img: 'git',
            displayName: 'Git',
            progress: 60
        },
        {
            img: 'react',
            displayName: 'React JS',
            progress: 75
        },
        {
            img: 'bootstrap',
            displayName: 'Bootstrap',
            progress: 85
        }
    ]

    //ANIMATIONS
    const titleCircle = {
        start:{
            width: landscape?'90vh': '100vw',
            height: landscape?'90vh': '100vw',
            y: 0,
            x:0,
            opacity: 0,
            borderRadius:'50%',
            transition: {
                duration: 0.4
            }
        },
        visible:{
            width: landscape? ['100vh','100vh','200vh'] : ['100vw','100vw','100vw'],
            height: landscape? ['100vh','100vh','100vh']: ['100vw','100vw','100vw'],
            y: landscape? ['-10vh','-20vh','-10vh']:['-30vh','-35vh','-30vh'] ,
            opacity: [0,0.2,1],
            borderRadius:'50%',
            x:0,
            backgroundColor: '#2E7F77',
            transition:{
                duration: 0.8,
                ease: 'easeInOut'
            }
        },
        title:{
            width: null,
            height: null,
            scale: 1,
            y: 0,
            x:0,
            borderRadius:'50%',
            backgroundColor: '#CB5041',
            transition:{
                duration: 0.6,
                ease: 'easeInOut'
            }
        },
        square:{
            width: '100vw',
            height: null,
            x: 0,
            borderRadius: 0,
            transition:{
                duration: 0.4,
                ease: 'easeInOut'
            }
        }

    }
    const titleText = {
        hidden:{
            opacity: 0,
            scale: 0
        },
        visible:{
            opacity: 1,
            scale: 1,
            transition:{
                delay: 0.2,
                duration: 0.4
            }
        },
    }

    const logoAnimation = {
        hidden:{
            scale: 0,
            opacity: 0,
        },
        show:{
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

    useEffect(()=>{
        if(isInView){
            controls.start('title')
            textControls.start('visible')
            setTimeout(()=>{
                controls.start('square')
                logoControls.start('show')
            },500)
        }
        else{
            controls.start('visible')
            textControls.start('hidden')
            logoControls.start('hidden')
        }
    },[isInView, controls, textControls, logoControls])

    useEffect(()=>{
        //When mounting, gets viewport size to fit animationstyles to viewport
        const viewport = {
            height: window.innerHeight,
            width: window.innerWidth
        }

        if(viewport.height > viewport.width){
            setLandscape(false)
        }
    },[])

    return(
        <motion.div 
            className='skills-circle ' ref={ref}
            variants={titleCircle}
            initial={'hidden'}
            animate={controls}
        >   
            <div className='skill-logo-container'>
                {isInView && logoArrayLeft.map((technology, idx)=>{
                    //Maps array with left side logos, assigning a delay to each of them based on their index, for a scaled appaearance animation
                    // const delay = 0.4 + idx * 0.1
                    const delay = 0.4 + (logoArrayLeft.length - (idx + 1) ) * 0.1
                    return(
                        <div className='tech-logo-div-wrap' key={idx}>
                            <motion.img src={`/images/${technology.img}.svg`} className='tech-logo' alt={technology.displayName} 
                            variants={logoAnimation}
                            initial='hidden'
                            animate={logoControls}
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
            </div>
            <motion.div 
                className='skills-title '
                variants={titleText}
                animate={textControls}
            >
                <p>THINGS</p>
                <p>I LOVE</p>
                <p>USING</p>
            </motion.div>
            <div className='skill-logo-container'>
                {isInView && logoArrayRight.map((technology, idx)=>{
                    //Maps array with right side logos, assigning a delay to each of them based on their index, for a scaled appaearance animation
                    // const delay = 0.4 + (logoArrayRight.length - (idx + 1) ) * 0.1
                    const delay = 0.4 + idx * 0.1
                    return(
                        <div className='tech-logo-div-wrap' key={idx}>
                            <motion.img src={`/images/${technology.img}.svg`} className='tech-logo' alt={technology.displayName} 
                            variants={logoAnimation}
                            initial='hidden'
                            animate={logoControls}
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
            </div>
        </motion.div>
    )
}