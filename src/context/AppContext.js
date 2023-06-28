import { createContext, useRef, useState} from "react"

const AppContext = createContext()
const {Provider} = AppContext

const AppProvider = ({children}) =>{

    //REFS
    const heroRef = useRef(null)
    const skillsRef = useRef(null)
    const projectsRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)

    //STATES
    const [activeSection, setActiveSection] = useState('hero')

    //ARRAY FOR NAVBAR TO BE MAPPED
    const sections = [
        {
            name: 'skills',
            ref: skillsRef,
            active: activeSection === 'skills' ? true : false
        },
        {
            name: 'projects',
            ref: projectsRef,
            active: activeSection === 'projects' ? true : false
        },
        {
            name: 'about',
            ref: aboutRef,
            active: activeSection === 'about' ? true : false
        },
        {
            name: 'contact',
            ref: contactRef,
            active: activeSection === 'contact' ? true : false
        }
    ]

    return(
        <Provider
        value={{
            sections,
            heroRef,
            skillsRef,
            projectsRef,
            aboutRef,
            contactRef,
            activeSection, 
            setActiveSection

        }}>
            {children}
        </Provider>
    )
}

export {AppContext, AppProvider} 