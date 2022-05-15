import './App.css';
import image01 from './pictures/image01.jfif';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer'


function App() {
  return (
    <>

      <Navbar />
      <Cart />

      <div>
        <h1 className='title' style={{ color: 'green' }}> Hi World</h1>
        <p>j’ai vu beaucoup de célèbres tableaux, comme La Joconde de Leonard De Vinci.</p>
        <img src={image01} alt='' />
        <br />
        <button className='btn btn-primary'> click me! </button>
      </div>
      <Footer />


    </>
  );
}

export default App;
