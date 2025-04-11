export const increment=(num)=>{
    return {
        type:"increment",
        payload:num
    }
}


export const decrement=(num)=>{
    return {
        type:"decrement",
        payload:num
    }
}


export const add_products=(data)=>{
    return {
        type:"add_products",payload:data
    }
}