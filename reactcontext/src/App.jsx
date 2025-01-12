import { createContext } from 'react'
import './App.css'
import Component3 from './components/Component3';


export const data = createContext();

function App() {

  const array = ["ayesha" , "imran", "react"]

  return (
    <>
    <data.Provider value={array}>
      <Component3/>
    </data.Provider>
    </>
  )
}

export default App
