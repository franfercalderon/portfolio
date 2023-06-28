import {motion } from 'framer-motion'

//Array with styles to be mapped into color bars
const colorBarsArray = ['corn', 'beige', 'brick', 'lightgreen']

const colorBars = {
    hidden: {
        y: '20vh',
        opacity: 0,
        // borderRadius: '50%'
    },
    visible: {
        y: 0,
        opacity: [0, 0.3, 0.8],
        borderTopRightRadius: ['30%', '20%', 0]
    }
} 

export default function ColorBars() {

    return(
        <motion.div className='color-bars-container'>
            {colorBarsArray.map((color, idx)=>{
                //Maps bars colors to create motion div with selected colors.
                return(
                    <motion.div
                        className={`color-bar ${color}-bar`}
                        key={idx}
                        variants={colorBars}
                        initial={'hidden'}
                        animate={'visible'}
                        transition={{
                            duration: 0.7,
                            delay: idx * 0.1,
                            times: [0, 0.8, 1],
                            ease: 'easeInOut'
                        }}
                    ></motion.div>
                )
            })
            }
        </motion.div>
    )
        
}