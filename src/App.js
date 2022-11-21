import DisabilityHelp from './components/DisabilityHelp'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavbarCustom from './components/navbar/NavbarCustom'
import HomeContent from './pages/HomeContent'
import FindService from './pages/findService'
import DisabilityInfo from './pages/disabilityInfo'
import EssentialDoc from './pages/essentialDoc'
import Resources from './pages/resources'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* Disabled Helpline */}
        <DisabilityHelp />

        {/* Navbar Component */}
        <NavbarCustom />
        <Routes>
          <Route exact path="/" element={<HomeContent />} />
          <Route exact path="/findService" element={<FindService />} />
          <Route path='/disabilityInfo' element={<DisabilityInfo />} />
          <Route path='/essentialDoc' element={<EssentialDoc />} />
          <Route path='/resources' element={<Resources />} />
        </Routes>
        {/* Footer Section */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;