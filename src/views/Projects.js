import {useInView} from 'framer-motion'
import { useRef} from "react";
import ProjectsContainer from '../components/ProjectsContainer/ProjectsContainer';

export default function Projects (){

    //REF
    const projectsRef = useRef(null)

    //CREATES VARIABLE FOR SECTION ANIMATION PURPOSES
    const isInView = useInView(projectsRef, {margin:'-100px'})

    return(
        <section className="projects-main-container"  id="projects">
            <ProjectsContainer isInView={isInView}/>
        </section>
    )
}
