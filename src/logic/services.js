import supabase from "./database/supabase";
import data from "../data/all.json"


export const  orderAddCounter=async()=>{
    let counter=0;
    const myType="voucher"
    const { data, error } = await supabase
      .from("counter")
      .select()
      .eq("type", myType)
    if(error){ console.log(error)}
    if (data){ 
          counter=data[0]?.voucer +1
           const { error:updateError } = await supabase.from('counter')
           .update({ voucer: counter })
           .eq("type", myType)/* .then(()=>{return  counter}) */
           return  counter
    }
}

export const  addOrder=async(orederNo,cartItems,user)=>{
    
  //  console.log({cartItems},{orederNo}, )
   let ItemToSave=[]
   
   cartItems.map((item)=>{
           const checkItem = data.find((i) => (i.productId === item.productId))
           const newItem={
            "userid":user,
            "productid":item.productId,
            "qty":item.quantity,
            "price":checkItem.price,
            "orederno":orederNo


        }
           ItemToSave.push(newItem)
   })

    ItemToSave.map(async (el)=>{
        const { data, error } = await supabase
          .from("orders")
          .insert([
            {
              userid: el.userid,
              productid: el.productid,
              qty: el.qty,
              price: el.price,
              orderno: el.orederno,
              stuts: "open",
            },
          ]);
        if(error){
          console.log(error)
        }
    })
  }
 


  
export const  addSummuryOrder=async(orederNo,sum,userid)=>{
        const { data, error } = await supabase
          .from("order_summury")
          .insert([
            {
              userid: userid,
              orderno: orederNo,
              total:  sum,
              sts: "open",
            },
          ]);
        if(error){
          console.log(error)
        }
    
  }
 







   
   
   
    // let counter=0;
    // const myType="voucher"
    // const { data, error } = await supabase
    //   .from("counter")
    //   .select()
    //   .eq("type", myType)
    // if(error){ console.log(error)}
    // if (data){ 
    //       counter=data[0]?.voucer +1
    //        const { error:updateError } = await supabase.from('counter')
    //        .update({ voucer: counter })
    //        .eq("type", myType)/* .then(()=>{return  counter}) */
    //        return  counter
    // }




export function whatsapp(name="test",email="test",phone="test",date="test",message="test"){
   
     
    var url = "https://wa.me/966502699023?text="
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    +"*Phone :* "+phone+"%0a"
    +"*Date :* "+date+"%0a"
    +"*Message :* "+message;
     
    window.open(url,'_blank').focus();
    }