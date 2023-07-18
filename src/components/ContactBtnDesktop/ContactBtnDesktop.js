import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy , faLink} from '@fortawesome/free-solid-svg-icons'
import {motion, useAnimation} from 'framer-motion'
import { useEffect, useState } from "react";


export default function ContactBtnDesktop({icon, href}){

    //STATE
    const [showButtons, setShowButtons ] = useState(false)

    //ANIMATIONS
    const messageControl = useAnimation()
    const optionsControl = useAnimation()

    const copiedMessage = {
        hidden: {
            scale: 0,
            opacity: 0,
            y: '100px'
        },
        visible: {
            scale: [0,1,1,0],
            opacity: [0,1,1,0],
            y: ['100%','0%','0%','100%'],
            transition: {
                duration: 1,
            }
        }
    }

    const contactOptions = {
        hidden: {
            opacity: 0,
            height: 0
        },
        visible: {
            opacity: 1,
            height: null,
            transition: {
                duration: 0.2
            }
        }
    }

    //FUNCTIONS
    const copyToClipboard = () =>{
        //Copies content to clipboard
        navigator.clipboard.writeText(href)

        //Turns state to true for 0.7 seconds so the message is displayed
        messageControl.start('visible')
    }

    useEffect(()=>{

        //Shows options buttons when item is hovered
        if(showButtons){
            optionsControl.start('visible')
        }
        else{
            optionsControl.start('hidden')
        }
    },[showButtons, optionsControl])


    return(
        <div className="contact-btn-container" 
        onMouseEnter={()=>setShowButtons(true)}
        onMouseLeave={()=>setShowButtons(false)}
        >
            <motion.div 
            className="copied-message"
            initial={'hidden'}
            variants={copiedMessage}
            animate={messageControl}
            >
                <p>Copied!</p>
            </motion.div>
            <FontAwesomeIcon icon={icon}/>
            <motion.div 
            className="contact-options-container"
            initial={'hidden'}
            variants={contactOptions}
            animate={optionsControl}
            >
                <FontAwesomeIcon 
                icon={faCopy} 
                onClick={copyToClipboard}
                style={{cursor: 'pointer'}}/>
                <a 
                className='contact-btn-desktop'
                target='_blank'
                rel='noopener noreferrer' 
                href={href}
                >
                    <FontAwesomeIcon icon={faLink}/>
                </a>
            </motion.div>
        </div>
    )
}