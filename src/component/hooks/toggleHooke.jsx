import {useState} from 'react'

function useToggle(defaultValue) {
    const [currentValue,setCurrentValue]=useState(defaultValue);

    const toggleValue = newValue=>{
        setCurrentValue(value=>(typeof newValue === 'boolean') ? newValue : !value);
         
    }
   
    return [ currentValue,toggleValue]
    
  
}

export default useToggle
