// import { useEffect } from "react";
// import {motion, useTransform, useScroll} from 'framer-motion'
import Title from "../components/Title/Title";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useInView } from "framer-motion";


export default function Hero(){

    const { heroRef , setActiveSection} = useContext(AppContext)

    const isInView = useInView(heroRef, {amount: 0.9})

    useEffect(()=>{
        if(isInView){
            //If this section is in view, it will set as active section in context. This will be used to style NavBar
            setActiveSection('hero')
        }
    },[isInView, setActiveSection])

    //

    // const ref = useRef(null)

    // const {scrollYProgress} = useScroll({
    //     target: ref,
    //     offset: ['end end', 'start end']
    //     // container: heroRef,
    // })

    // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return(
        <section className="hero-main-container" ref={heroRef}>
            {/* <motion.div className='dot'ref={ref} style={{opacity}}>

            </motion.div> */}
            <Title/>
        </section>
    )
}