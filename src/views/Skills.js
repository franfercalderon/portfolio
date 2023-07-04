import SkillsCircle from "../components/SkillsCircle/SkillsCircle";
import { useInView } from "framer-motion";
import { useRef} from "react";

export default function Skills(){

    //REF
    const skillsRef = useRef(null)

    //VARIABLES
    const isInView = useInView(skillsRef, {margin:'-100px'})
    
    return(
        <section className="skills-main-container" ref={skillsRef} id="skills">
            <SkillsCircle isInView={isInView}/>
        </section>
    )
}