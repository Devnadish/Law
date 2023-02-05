 
import { useState ,useEffect} from "react";


export function useLogin() {
    const [login, setIslogin] = useState("");
    const [userName, setUserName] = useState("");
    const isLogged =JSON.parse(localStorage.getItem("isLogged"))
    if (localStorage.getItem("isLogged") === null) {
      localStorage.setItem("isLogged",JSON.stringify({name:"",phone:""}))
    }



    useEffect(() => {
      
        if (isLogged?.name==="" || isLogged?.phone==="" ){
            setIslogin(false)
          }else{
            setIslogin(true)
            setUserName(isLogged?.name)
          }
    }, [login])
 
return {login,setIslogin,userName}
}

export default useLogin