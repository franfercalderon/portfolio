import {motion} from 'framer-motion'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import {Link} from 'react-scroll'

export default function NavBar(){

    //CONTEXT
    const {sections} = useContext(AppContext)
    
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
                       
                //When gets sections from context, maps sections array to Navbar:
                return(
                    <Link to={section}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    ignoreCancelEvents={true}

                    // isDynamic={true}
                    activeClass='active'
                    key={idx}
                    >
                        <motion.li
                            className={`nav-li`}
                            variants={liItem}
                            initial={'hidden'}
                            animate={'visible'}
                            transition={{
                                duration: 1,
                                delay: idx * 0.1,
                                times: [0, 0.8, 1],
                                ease: 'easeInOut'
                            }}
                        >
                            {section.toUpperCase()}
                        </motion.li>
                    </Link>
                )
                })
                }
            </ul>
        </div>
    )
}