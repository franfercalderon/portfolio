import {useScroll, motion, useTransform} from 'framer-motion'
import { useRef } from 'react'
import Carousel from '../Carousel/Carousel'

export default function ProjectsContainer(){

    //REF
    const ref = useRef()

    //ANIMATIONS
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })
    const titleX = useTransform(scrollYProgress, [0, 0.4, 0.55, 1], ['-100vw','0vw','0vw','-100vw'])
    const sliderX = useTransform(scrollYProgress, [0, 0.4, 0.55, 1], ['100vw','0vw','0vw','100vw'])
    const opacity  = useTransform(scrollYProgress, [0.55, 0.9], [1, 0])
    const y = useTransform(scrollYProgress, [0.55, 1], ['0vh', '-50vh'])

    const projectsTitle = {
        hidden:{
            opacity: 0
        },
        visible: {
            opacity: 1,
        }
    }

    return(
        <div className="projects-main-div" ref={ref} >
            <motion.div 
            className="projects-title"
            style={{y, x: titleX, opacity}}
            >
                <motion.p
                variants={projectsTitle}
                initial={'hidden'}
                whileInView={'visible'}
                transition={{
                    duration: 0.1,
                    delay: 0.3
                }}
                >THINGS</motion.p>
                <motion.p
                variants={projectsTitle}
                initial={'hidden'}
                whileInView={'visible'}
                transition={{
                    duration: 0.1,
                    delay: 0.5
                }}
                >I HAVE</motion.p>
                <motion.p
                variants={projectsTitle}
                initial={'hidden'}
                whileInView={'visible'}
                transition={{
                    duration: 0.1,
                    delay: 0.7
                }}
                >DONE</motion.p>
            </motion.div>
            <motion.div 
            className="projects-inner-div"
            style={{y, x: sliderX, opacity}}
            >
                <Carousel/>
            </motion.div>
        </div>
    )
}