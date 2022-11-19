import NavbarCustom from './components/NavbarCustom'
import HomeContent from './components/HomeContent'
import Footer from './components/Footer'
import DisabilityHelp from './components/DisabilityHelp'
const App = () => {
  return (
    <>
      {/* Disabled Helpline */}
      <DisabilityHelp />

      {/* Navbar Component */}
      <NavbarCustom />

      {/* Content Page */}
      <HomeContent />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;