import './App.css';
import image01 from './pictures/image01.jfif';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';


function App() {
  return (
    <>
    <Navbar/>
    <Cart/>
    <div>
    <h1 className='title' style={{color:'green'}}> Hi World</h1>
      <p>j’ai vu beaucoup de célèbres tableaux, comme La Joconde de Leonard De Vinci.</p>
      <img src={image01} alt='my image'/>
      <br/>
      <p>test pull request</p>
      <button className='btn btn-primary'> click me! </button>
    </div>
    
    </>
  );
}

export default App;
