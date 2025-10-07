import './index.css'
import './assets/fonts/Zen_Old_Mincho/ZenOldMincho-Regular.ttf'
import { Route, Routes } from 'react-router'
import Home from './routes/Home/Home'
import KeyboardSmashDetector from './routes/KeyboardSmashDetector.tsx/KeyboardSmashDetector'
import Portfolio from './routes/Portfolio/Portfolio'
import FAQ from './routes/FAQ/FAQ'
import Contact from './routes/Contact/Contact'
import Layout from './routes/Layout/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="keyboard-smash-detector"
          element={<KeyboardSmashDetector />}
        />
      </Route>
    </Routes>
  )
}

export default App
