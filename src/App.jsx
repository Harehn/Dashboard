import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title, newID}) => {
  return (
    <div className="boxes" id={newID}>
      <h2>{title}</h2>
    </div>
  )
}


const App = () => {
  return (
    
    <div className='app'>
      <h2>Hello msg</h2>
      <div className='container'>
        {/* <Card title="Hello Msg" newID='one'/> */}
        <Card title="Tasks" newID='two'/>
        <Card title="Note to self" newID='three'/>
        <Card title="Weather" newID='four' />
        <Card title="News" newID='five'/>
        <Card title="Word of the day" newID='six'/>
        <Card title="Learn a language" newID='seven'/>
        <Card title="Quote of the day" newID='eight'/>
        <Card title="Fun Fact" newID='nine'/>
        <Card title="Calendar" newID='ten'/>
        <Card title="Music" newID='eleven'/>
      </div>
    </div>
  )
}
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
