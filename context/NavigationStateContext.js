import React, {useState, createContext} from 'react';

const NavigationStateContext  = createContext();
export const NavigationStateProvider = ({children}) => {
const [menuVisible, setMenuVisible] = useState(false);

const toggleMainMenu = () => {
  setMenuVisible(!menuVisible);
}

return <NavigationStateContext.Provider value={{data:menuVisible, toggleMainMenu}}>
    {children}
  </NavigationStateContext.Provider>
}


export default NavigationStateContext;