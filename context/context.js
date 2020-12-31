import React,{useState} from 'react';

export const context = React.createContext();

export default function ContextProvider({children}){

    const [count,setCount] = useState(0);

    return(
        <context.Provider value={[count,setCount]}>
            {children}
        </context.Provider>
    )
}