export const ProductReducer = (initialState = {products:[{title:"this is the static title"}]}, action) => {

    switch(action.type){
        case "add_products":
            console.log(action.payload)
            return {
                products:[...initialState.products,...action.payload]
            }
        case "remove_products":
            return {
                products:[]
            }
        default:
            return initialState
    }


}

export const Cartreducer = (init = [], action) => {
    return init
}


export const CounterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "increment":
            console.log(action.payload)
            return {
                count: state.count + action.payload
            }
            case "decrement":
                console.log(action.payload)
                return {
                count:state.count-action.payload
            }
        default:
            return state
    }
}