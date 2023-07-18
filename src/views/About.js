import AboutContainer from "../components/AboutContainer/AboutContainer";
import { useInView } from "framer-motion";
import { useRef} from "react";

export default function About(){

    //REF
    const aboutRef = useRef(null)

    //VARIABLES
    const isInView = useInView(aboutRef, {margin:'-100px'})
    
    return(
        <section className="about-main-container" id="about" ref={aboutRef}>
            <AboutContainer isInView={isInView}/>
        </section>
    )
}