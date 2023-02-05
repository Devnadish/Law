import data from "../data/all.json"



export const getItem = (productId) => {
    return data.find((item) => item.productId === productId) ;
  };




  export const getItem1 = (productId) =>{
    console.log(typeof productId)
     const Item = data.filter((item) => { return item.productId === productId})
    //  console.log({Item})
     return Item   

};


export const getType = (typeId) =>{
  console.log(typeof productId)
   const Item = data.filter((item) => { return item.typeId === typeId})
  //  console.log({Item})
   return Item   

};




