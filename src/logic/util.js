

export const FORMATDATE=(Xdate)=>{
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    return  new Date(Xdate).toLocaleDateString('ar-EG', options)
}


export const    getItemName=(prductId)=>{
    const itemname=data.find((el)=>{return el.productId===prductId})
    return itemname.title
}

