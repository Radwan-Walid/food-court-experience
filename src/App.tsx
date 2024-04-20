import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import Home from './pages/Home'

function App() {

  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  )
}

export default App
