import {motion} from 'framer-motion'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'


export default function NavBar(){

    //CONTEXT
    const {sections, setActiveSection} = useContext(AppContext)

    const handleScroll = (section) =>{
        //scroll into rceived section ref (target)
        section.ref.current.scrollIntoView({behavior: 'auto'})

        setActiveSection(section.name)
      }
    
    //ANIMATIONS
    const liItem = {
        hidden: {
            y: '-20vh',
            opacity: 0
        },
        visible: {
            y: [null,0,0],
            opacity: [0, 0.2, 1],
    
        }
    } 
    return(
        <div className="navbar-main-container">
            <ul>
                {sections && sections.map((section, idx)=>{
                    //When gets sections from context, maps sections array for nav options:
                    return(
                        <motion.li
                            className={`nav-li ${section.active && 'active'}`}
                            key={section.name}
                            onClick={()=>handleScroll(section)}
                            variants={liItem}
                            initial={'hidden'}
                            animate={'visible'}
                            transition={{
                                duration: 1,
                                delay: idx * 0.1,
                                times: [0, 0.8, 1],
                                ease: 'easeInOut'
                            }}
                        >{section.name.toUpperCase()}</motion.li>
                    )
                    
                })
                }

            </ul>
        </div>
    )
}