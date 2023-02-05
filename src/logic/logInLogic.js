

export const  setLocalStorage=(useName,userPhone)=>{
     
    localStorage.setItem(
        "lenoUser",
        JSON.stringify({
          name: useName,
          phone: userPhone,
          login: true,
        })
      );


}