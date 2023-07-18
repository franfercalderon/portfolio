import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactBtnMobile({icon, href}){
    return(
        <a 
        className='contact-btn-mobile'
        target='_blank'
        rel='noopener noreferrer' 
        href={href}
        >
            <FontAwesomeIcon icon={icon}/>
        </a>
    )
}