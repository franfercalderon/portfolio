import SkillsCircle from "../components/SkillsCircle/SkillsCircle";
import { useInView } from "framer-motion";
import { useContext, useEffect} from "react";
import { AppContext } from "../context/AppContext";

export default function Skills(){

    //CONTEXT
    const {skillsRef, setActiveSection} = useContext(AppContext)

    //VARIABLES
    const isInView = useInView(skillsRef, {margin:'-100px'})

    useEffect(()=>{
        if(isInView){
            //If this section is in view, it will set as active section in context. This will be used to style NavBar
            setActiveSection('skills')
        }
    },[isInView, setActiveSection])
    
    return(
        <section className="skills-main-container" ref={skillsRef}>
            <SkillsCircle isInView={isInView}/>
        </section>
    )
}