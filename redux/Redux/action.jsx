export const increment=()=>{
    console.log("increment action")
    return {
        type:"increment"
    }
}
export const decrement=()=>{
    console.log("decrement action")
    return {
        type:"decrement"
    }
}