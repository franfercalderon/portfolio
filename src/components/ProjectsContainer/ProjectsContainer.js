import {useScroll, motion, useTransform} from 'framer-motion'
import { useRef } from 'react'

export default function ProjectsContainer({isInView}){

    //REF
    const ref = useRef()

    //ANIMATIONS
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })
    const titleX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ['-100vw','0vw','0vw','100vw'])
    const sliderX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ['100vw','0vw','0vw','-100vw'])

    return(
        <div className="projects-main-div" ref={ref} >
            <motion.div 
            className="projects-title"
            style={{x: titleX}}
            >
                <p>THINGS</p>
                <p>I HAVE</p>
                <p>DONE</p>

            </motion.div>
            <motion.div 
            className="projects-inner-div"
            style={{x: sliderX}}
            >
            
            </motion.div>
        </div>
    )
}