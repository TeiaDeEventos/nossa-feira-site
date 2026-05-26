import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Programacao from './pages/Programacao'
import NossaHistoria from './pages/NossaHistoria'
import Expositores from './pages/Expositores'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/programacao" element={<Programacao />} />
          <Route path="/nossa-historia" element={<NossaHistoria />} />
          <Route path="/expositores" element={<Expositores />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
