import { createContext, useState} from "react"

const AppContext = createContext()
const {Provider} = AppContext

const AppProvider = ({children}) =>{

    //REFS
    // const heroRef = useRef(null)
    // const skillsRef = useRef(null)
    // const projectsRef = useRef(null)
    // const aboutRef = useRef(null)
    // const contactRef = useRef(null)

    const [showGoToTop, setShowGoToTop] = useState(false) 

    //STATES
    // const [activeSection, setActiveSection] = useState('hero')

    //ARRAY FOR NAVBAR TO BE MAPPED
    // const sections = [
    //     // {
    //     //     name: 'hero',
    //     //     ref: heroRef,
    //     //     inNavbar: false
    //     //     // active: activeSection === 'contact' ? true : false
    //     // },
    //     {
    //         name: 'skills',
    //         ref: skillsRef,
    //         inNavbar: true
    //         // active: activeSection === 'skills' ? true : false
    //     },
    //     {
    //         name: 'projects',
    //         ref: projectsRef,
    //         inNavbar: true
    //         // active: activeSection === 'projects' ? true : false
    //     },
    //     {
    //         name: 'about',
    //         ref: aboutRef,
    //         inNavbar: true
    //         // active: activeSection === 'about' ? true : false
    //     },
    //     {
    //         name: 'contact',
    //         ref: contactRef,
    //         inNavbar: true
    //         // active: activeSection === 'contact' ? true : false
    //     },
        
    // ]



    const sections = ['skills', 'projects', 'about', 'contact']

    return(
        <Provider
        value={{
            sections,
            setShowGoToTop,
            showGoToTop
            // heroRef,
            // skillsRef,
            // projectsRef,
            // aboutRef,
            // contactRef,
            // activeSection, 
            // setActiveSection

        }}>
            {children}
        </Provider>
    )
}

export {AppContext, AppProvider} 