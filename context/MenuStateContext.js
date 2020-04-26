import React, {useState, createContext} from 'react';

const MenuStateContext  = createContext();
export const MenuStateProvider = ({children}) => {
const [menuGroup, setMenuGroup] = useState('general');
const [menuGroupTab, setMenuGroupTab] = useState('registration');


const selectMenuTab = () => {
    setMenuVisible(!menuVisible);
  }

return <MenuStateContext.Provider value={{data:menuGroupTab, setMenuGroupTab}}>
    {children}
  </MenuStateContext.Provider>
}


export default MenuStateContext;