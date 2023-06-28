import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'



export default function Title(){

    //VARIABLES
    const titleRef = useRef(null)
    const containerRef  = useRef(null)

    //DEFINE STYLES FOR ANIMATION
    const redDot = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: [0, 1, 1, 1],
            scale: [0, 2, 0.8, 1],
            transition: {
                delay: 1,
            }
        },
        hover:{
            scale: 2
        }
    }

    const title = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.7,
                ease: 'easeInOut'
            }
        },
        vanish: {
            opacity: 0,
            scale: 0.2,
            y: '-50%'
        }
    }

    //Gets Y axis scroll progress from framer-motion hook and transforms it into opacity, scale and y values to style element:
    const {scrollYProgress} = useScroll({
        target: titleRef,
        offset: ['end', 'end start']
    })
    const opacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0])
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0])
    const y = useTransform(scrollYProgress, [0.6, 1], ['0vh', '-40vh'])
    
    return(
        <div style={{position: 'fixed'}} ref={containerRef}>

        <motion.div 
            className='hero-title-container' 
            ref={titleRef}
            style={{opacity, scale, y }}
        >
            <motion.div 
                
                className='title-column left'
                variants={title}
                initial='hidden'
                animate='visible'
            >
                <div className='title-line-small' >
                    <p>My name is</p>
                </div>
                <div className='title-line' >
                    <p>FRAN</p>
                </div>
                <div className='title-line' >
                    <p>CO</p>
                </div>
            </motion.div>
            <motion.div 
                className='title-column right'
                variants={title}
                initial='hidden'
                animate='visible'
            >   
                <div className='title-line-small' >
                    <p>I'm a</p>
                </div>
                <div className='title-line' >
                    <p>FRONT</p>
                </div>
                <div className='title-line' >
                    <p>END</p>
                </div>
                <div className='title-line'>
                    <p>DEV</p>
                    <motion.span
                        variants={redDot}
                        initial='hidden'
                        animate='visible'
                        drag
                        dragConstraints={{
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                        dragElastic={1}
                    ></motion.span>
                </div>
            </motion.div>
        </motion.div>
        </div>
    )

}