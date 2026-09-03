import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import Home from '@/pages/Home'
import GalleryPage from '@/pages/Gallery'

function App() {
  return (
    <BrowserRouter basename="/birthday-site/">
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<GalleryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
