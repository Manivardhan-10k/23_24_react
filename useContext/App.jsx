
import './App.css'

// import { createContext } from 'react'
// import Child from './components/Child'
// import Child2 from './components/Child2'
// export const PropContext=createContext()
// // console.log(PropContext)

// function App() {
// let  details={
//   name:"mani",
//   age:20
//  }

//   return (
//     <>

//     <PropContext.Provider  value={details}>
//       <Child />
//       <Child2 />
//     </PropContext.Provider>

//     </>
//   )
// }

// export default App 


import React from 'react'
import { createContext } from 'react'
import Home from './context_comp/Home'

export const NameContext=createContext()
const App = () => {
    let color="blue"
  return (
    <div>
       <NameContext.Provider value={color}>
           <Home />
       </NameContext.Provider>

    </div>
  )
}

export default App