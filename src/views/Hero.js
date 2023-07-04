// import { useEffect } from "react";
// import {motion, useTransform, useScroll} from 'framer-motion'
import Title from "../components/Title/Title";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { useInView } from "framer-motion";


export default function Hero(){

    //REF
    const heroRef = useRef(null) 
    //CREATES VARIABLE FOR SECTION ANIMATION PURPOSES
    const isInView = useInView(heroRef, {amount: 0.9})

    //FUNCTION TO UPDATE IF HERO IS IN VIEW
    const {setShowGoToTop} = useContext(AppContext)

    useEffect(()=>{
        if(isInView){
            //If this section is in view, it will set as active section in context. This will be used to style NavBar
            setShowGoToTop(false)
        }
        else{
            setShowGoToTop(true)
        }
    },[isInView, setShowGoToTop])


    return(
        <section className="hero-main-container" ref={heroRef} id='hero'>
            <Title/>
        </section>
    )
}