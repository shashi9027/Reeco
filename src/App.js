import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import OrderDetail from './components/Order-Detail';


function App() {
  return (
    <div >
      <Navbar/>
      <Main/>
      <OrderDetail/>
    </div>
  );
}

export default App;
