// const state={
//     count:0
// }

export const counterReducer=(state={count:0},action)=>{
    switch(action.type){
        case "increment":
            return {count:state.count+1}
        case "decrement":
            return {count:state.count-1}
        default:
            console.log(state)
            return state
    }
}


export const useReducer=(state={users:[]})=>{

}