import logo from './logo.svg';
import './App.css';
import './External.css';
import Test from './Components/Test'
import Home from './Components/Home'
import Variable from './Components/Variable'
import Arrow from './Components/Arrow'
import Arraymethods from './Components/Arraymethods'
function App() {
  const mystyle={
    color:"blue",
    backgroundColor:"black",
    

    heading:{
      color:"yellow",
      backgroundColor:"red",
    }
   
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Name is Shivaganesh
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 style={{color:"red",backgroundColor:"green",marginTop:"100px"}}>Hello World</h1>
      <h2 style={mystyle}>Hello World</h2>
      <h3 style={mystyle.heading}>Hello World</h3>
      <h4>Hello World</h4>
      <h5>Hello World</h5>
      <h6>Hello World</h6>
      <Test/>
      <Home/>
      <Variable/>
      <Arrow/>
      <Arraymethods/>
    </div>
  );
}

export default App;
