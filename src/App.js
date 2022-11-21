import DisabilityHelp from './components/TopNavbar/DisabilityHelp'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavbarCustom from './components/Navbar/NavbarCustom'
import HomeContent from './pages/HomeContent'
import FindService from './pages/FindService'
import DisabilityInfo from './pages/DisabilityNest/DisabilityInfo'
import PhysicalDis from './pages/DisabilityNest/PhysicalDis';
import EssentialDoc from './pages/EssentialDoc'
import Resources from './pages/Resources'
import Footer from './components/Footer/Footer'
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
          <Route path='/disabilityInfo' element={<DisabilityInfo />} >
            <Route path='/disabilityInfo/physicalDis' element={<PhysicalDis />} />
          </Route>
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