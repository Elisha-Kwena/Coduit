import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-12 w-12" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-12 w-12 animate-spin" alt="React logo" />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-center text-red-800 mb-6">Vite + React + Tailwind</h1>
        <div className="text-center border-2 border-red-500">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transition-colors"
          >
            count is {count}
          </button>
          <p className="text-gray-600">
            Edit <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-center text-gray-500 mt-6">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
