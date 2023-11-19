import logo from './logo.svg';
import './App.css';
import './External.css';
import Test from './Components/Test'
import Home from './Components/Home'
import Variable from './Components/Variable'
import Arrow from './Components/Arrow'
import Arraymethods from './Components/Arraymethods'
import Test1 from './Components/Test1'
import Destruct from './Components/Destruct'
import Spread from './Components/Spread'
import Ternary from './Components/Ternary'
import Props from './Components/Props'
import Events from './Components/Events';
import Conditional from './Components/Conditional'
import Imp from './Components/Imp';
import Router  from './Components/Router';
function App() {
  var a="Ram"
  var ab=["Ganesh","Shiva","Ramu"]
  // const abc=ab.map((list)=><h1>{list}</h1>)
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
      {/* <h1 style={{color:"red",backgroundColor:"green",marginTop:"100px"}}>Hello World</h1>
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
      <Test1/>
      <Destruct/>
      <Spread/>
      <Ternary/>
      <Props value={a} v={ab} name="kiran" age={25}/>
      <Events/>
      <Conditional/>
      <Imp/> */}


      <Router/>
      
    </div>
  );
}

export default App;
