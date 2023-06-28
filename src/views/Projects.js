import {useInView} from 'framer-motion'
import { useContext, useEffect} from "react";
import { AppContext } from "../context/AppContext";


export default function Projects (){

    //CONTEXT
    const {projectsRef, setActiveSection} = useContext(AppContext)

    const isInView = useInView(projectsRef, {margin:'-100px'})

    useEffect(()=>{
        if(isInView){
            setActiveSection('projects')
        }
    }, [isInView, setActiveSection])

    return(
        <section className="skills-main-container" ref={projectsRef}>

        </section>
    )
}
