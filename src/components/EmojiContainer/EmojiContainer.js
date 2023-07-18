import {motion, AnimatePresence} from 'framer-motion'
import { emojis } from '../../assets/assets'

export default function EmojiContainer ({index, mobile}) {

    return(
        <div className="about-emoji-container">
            <AnimatePresence>
                <motion.p
                    key={index}
                    className="about-emoji"
                    initial={{ 
                        x: mobile ? '-250%' : '-200%',
                        opacity: 0,
                        scale: 0.4,
                        y: mobile ? 0 : '30%'
                    }}
                    animate={{ 
                        x: '0%',
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }}
                    exit={{
                        x: mobile ? '250%' : '200%',
                        opacity: 0,
                        scale: 0.4,
                        y: mobile ? 0 : '30%'
                    }}
                >
                    {emojis[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    )
}