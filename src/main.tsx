import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import './assets/fonts/Zen_Old_Mincho/ZenOldMincho-Black.ttf'
import './assets/fonts/Zen_Old_Mincho/ZenOldMincho-Bold.ttf'
import './assets/fonts/Zen_Old_Mincho/ZenOldMincho-Medium.ttf'
import './assets/fonts/Zen_Old_Mincho/ZenOldMincho-Regular.ttf'
import './assets/fonts/Zen_Old_Mincho/ZenOldMincho-SemiBold.ttf'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
