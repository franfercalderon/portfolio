import { createContext, useState} from "react"

const AppContext = createContext()
const {Provider} = AppContext

const AppProvider = ({children}) =>{

    //STATES
    const [showGoToTop, setShowGoToTop] = useState(false) 
    const [showPortfolioBtn, setShowPortfolioBtn] = useState(true)

    //VARIABLES
    const sections = ['skills', 'projects', 'about', 'contact']

    return(
        <Provider
        value={{
            sections,
            setShowGoToTop,
            showGoToTop,
            showPortfolioBtn, 
            setShowPortfolioBtn

        }}>
            {children}
        </Provider>
    )
}

export {AppContext, AppProvider} 