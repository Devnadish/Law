import { createContext, useContext, useEffect, useState } from "react";
import Login from "../login/Login";
import InfoBar from "../login/InfoBar"
import supabase from "../../logic/database/supabase";




const UserContext = createContext({});


const initialUser =JSON.parse(localStorage.getItem("lenoUser"))
if (localStorage.getItem("lenoUser") === null || localStorage.getItem("lenoUser") === undefined) {
  localStorage.setItem("lenoUser",JSON.stringify({name:"",phone:"",login:false}))
}



const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const [login, setIslogin] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);


  const getCommentData =async ()=>{
  
    const { count:commentCountRows } = await supabase
    .from("comment")
    .select('*',{count:'exact'})
    setCommentsCount(commentCountRows)
   
  }
  

  useEffect(() => {
    
    user?.name === '' && setIslogin(false)
    user?.name === null && setIslogin(false)
    user?.name === undefined && setIslogin(false)
    setIslogin(user?.login)
    getCommentData()
      
  }, [user,commentsCount]);

  /* ------------------------------------------------------------------ */
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        setIslogin,
        commentsCount,
        setCommentsCount,getCommentData
      }}
    >
      {children}
      {login ? <InfoBar userName={user?.name} userPhone={user?.phone} setIslogin={setIslogin} setUser={setUser}/>: <Login />}
    {/* <Comments/> */}

    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
  return useContext(UserContext);
};
