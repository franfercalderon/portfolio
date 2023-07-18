import { projects } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {motion, useAnimation} from 'framer-motion'
import { useState } from 'react'

export default function Carousel (){

    //STATES
    const [sliderIndex, setSliderIndex] = useState(0)

    //ANIMATIONS
    const sliderImg = {
        slideLeft:{
            x: ['-110%', '0%'],
            opacity: [0, 1],
            transition:{
                type: 'spring',
                mass: 0.6
            }
        },
        slideRight:{
            x: ['110%', '0%'],
            opacity: [0, 1],
            transition:{
                type: 'spring',
                mass: 0.6
            }
        }
    }

    const sliderText = {
        visible:{
            opacity: [0, 1],
            transition:{
                duration: 0.6
            }
        }
    }
    
    const sliderControls = useAnimation()
    const sliderTextControls = useAnimation()
    
    //FUNCTIONS
    const nextSlide = () => {
        //If index reaches array length, starts over again (sets index to 0). Otherwise, just increases index by 1.
        if(sliderIndex === projects.length - 1){
            setSliderIndex(0)
        }
        else{
            setSliderIndex(sliderIndex + 1)
        }
        //Starts animation
        sliderControls.start('slideLeft')
        sliderTextControls.start('visible')
    }
    
    const previousSlide = () => {
        //If index reaches 0, sets index to last slider. Otherwise, just decreases index by 1.
        if(sliderIndex === 0){
            setSliderIndex(projects.length - 1)
        }
        else{
            setSliderIndex(sliderIndex - 1)
        }
        //Starts animation
        sliderControls.start('slideRight')
        sliderTextControls.start('visible')
    }
    
    return(
        <div className='carousel-main-container'>
            <motion.div 
            className='description-container desktop'
            variants={sliderText}
            animate={sliderTextControls}
            >
                <div className='description-inner'>
                    <h3>{projects[sliderIndex].title}</h3>
                    <p>{projects[sliderIndex].fullDescription}</p>
                    <p>{projects[sliderIndex].built}</p>
                </div>
                <a 
                className='get-the-code'
                target='_blank'
                rel='noopener noreferrer' 
                href={projects[sliderIndex].repo}
                >{`< View code />`}</a>
            </motion.div>
            <div className='carousel-inner'>
                <button className='carousel-btn left'onClick={previousSlide}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <div className='carousel-img-container'>
                    <motion.img 
                    src={projects[sliderIndex].img} 
                    alt={projects[sliderIndex].title}
                    variants={sliderImg}
                    animate={sliderControls}
                    />
                </div>
                <button className='carousel-btn right' onClick={nextSlide}>
                    <FontAwesomeIcon icon={faChevronRight}/>   
                </button>
            </div>
            <motion.div 
            className='description-container mobile'
            variants={sliderText}
            animate={sliderTextControls}>
                <h3>{projects[sliderIndex].title}</h3>
                <p>{projects[sliderIndex].shortDescription}</p>
            </motion.div>
            
        </div>
    )
}