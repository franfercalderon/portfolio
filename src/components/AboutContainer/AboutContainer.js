
import { emojis } from '../../assets/assets'
import { useEffect, useRef, useState } from 'react'
import EmojiContainer from '../EmojiContainer/EmojiContainer'
import {motion, useScroll, useTransform} from 'framer-motion'

export default function AboutContainer ({isInView}){

    //STATES
    const [emojiIndex, setEmojiIndex] = useState(0)

    //REFS
    const ref = useRef(null)

    //ANIMATIONS
    const emojiContainer = {
        hidden:{
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: [0, 1, 0.6, 1],
            opacity: [0, 1, 1, 1],
            transition:{
                type: 'spring',
                stiffness: 150,
                delay: 1
            }
        }
    }

    const aboutTitle = {
        visible:{
            opacity: [0,1],
            x: ['100%', '0%']
        },
    }

    const aboutText = {
        visible:{
            opacity: [0,1],
            transition:{
                duration: 0.6,
                delay: 0.3
            }
        },
    }

    const aboutFrame = {
        visible: {
            scaleY: [0, 1],
            opacity: [0, 1],
            transition:{
                delay: 0.4,
                duration: 0.5
            }
        }
    }

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const opacity  = useTransform(scrollYProgress, [0.2, 0.4, 0.55, 0.75], [0, 1, 1, 0])
    const frameOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.55, 0.65], [0, 1, 1, 0])
    const y = useTransform(scrollYProgress, [0.55, 1], ['0vh', '-50vh'])

    //EFFECTS
    useEffect(()=>{
        const increaseIndex = () =>{
            //This function increases the index by one to show all emojis in array, every 2 seconds when component is in view. If index reaches array length limit, it starts over again.
            setTimeout(()=>{
                if(emojiIndex === emojis.length -1){
                    setEmojiIndex(0)
                }
                else{
                    setEmojiIndex(emojiIndex + 1)
                }
            },2000)
        }
        if(isInView){
        
            increaseIndex()
        }
    },[isInView, emojiIndex])

    return(
        <div className="about-container" ref={ref}>
            <motion.div className="about-text-container"
            style={{y, opacity}}>
                <motion.div 
                className='about-inner-text'
                variants={aboutText}
                whileInView={'visible'}
                >
                    <p>Hi! My name is <span>Franco</span> and I'm a Front End Developer.<br /><br />
                    I was born and raised in Mendoza, Argentina but I've been based in Buenos Aires since 2012.<br /><br />
                    I love technology and creating exciting things with it. I try to challenge myself and learn new stuff every time I have the chance to do it <span>(doing new things feels good, doesn't it?)</span>.
                    </p>
                </motion.div>
                <motion.div 
                className='emoji-desktop'
                variants={emojiContainer}
                initial={'hidden'}
                whileInView={'visible'}
                >
                    <EmojiContainer index={emojiIndex} mobile={false}/>
                </motion.div>
                <div className="about-title-desktop">
                    <motion.h3
                    variants={aboutTitle}
                    initial={'initial'}
                    whileInView={'visible'}
                    transition={{
                        delay: 0.2
                    }}
                    >WHAT</motion.h3>
                    <motion.h3
                    variants={aboutTitle}
                    initial={'initial'}
                    whileInView={'visible'}
                    transition={{
                        delay: 0.5
                    }}
                    >MAKES</motion.h3>
                    <motion.h3
                    variants={aboutTitle}
                    initial={'initial'}
                    whileInView={'visible'}
                    transition={{
                        delay: 0.8
                    }}
                    >ME SMILE</motion.h3>
                </div>
            </motion.div>
            <motion.div 
            className="about-frame-container"
            variants={aboutFrame}
            whileInView={'visible'}
            style={{y, opacity: frameOpacity}}
            >
                <div className="about-title">
                    <h3>WHO I AM</h3>
                </div>
                <EmojiContainer index={emojiIndex} mobile={true}/>
            </motion.div>
        </div>  
    )
}