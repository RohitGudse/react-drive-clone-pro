import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Shared from './pages/Shared'
import Trash from './pages/Trash'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/shared' element={<Shared />} />
        <Route path='/trash' element={<Trash />} />
        <Route path='/login' element={<Login />} />
        <Route path='/flight-search' element={<FlightSearch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App