import './App.css'
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Landing } from './Landing/Landing';
import { Tagawika } from './Tagawika/Tagawika';
import { NotaLingua } from './NotaLingua/NotaLingua';
import { Nav } from './Components/Nav';
import { RefsContextProvider } from './Contexts/RefsContexts';

function App() {
  return (
    <RefsContextProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tagawika" element={<Tagawika />} />
          <Route path="/notalingua" element={<NotaLingua />} />
        </Routes>
      </BrowserRouter>
    </RefsContextProvider>
  )
}

export default App
