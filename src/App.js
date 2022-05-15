import './App.css';
import image01 from './pictures/image01.jfif';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer'


function App() {
  return (
    <>

      <Navbar />
      <Cart title='tissu_visline'/>
      <Cart title='tissu_twill'/>
      <Footer />
    </>
  );
}

export default App;
