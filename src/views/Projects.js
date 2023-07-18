import {useInView} from 'framer-motion'
import { useRef, useContext, useEffect} from "react";
import ProjectsContainer from '../components/ProjectsContainer/ProjectsContainer';
import { AppContext } from '../context/AppContext';

export default function Projects (){

    //CONTEXT
    const {setShowPortfolioBtn} = useContext(AppContext)
    
    //REF
    const projectsRef = useRef(null)

    //CREATES VARIABLE FOR SECTION ANIMATION PURPOSES
    const isInView = useInView(projectsRef, {margin:'-100px'})

    useEffect(()=>{
        if(isInView){
            //If this section is in view, it will set as active section in context. This will be used to style NavBar
            setShowPortfolioBtn(false)
        }
        else{
            setShowPortfolioBtn(true)
        }
    },[isInView, setShowPortfolioBtn])

    return(
        <section className="projects-main-container"  id="projects" ref={projectsRef}>
            <ProjectsContainer />
        </section>
    )
}
